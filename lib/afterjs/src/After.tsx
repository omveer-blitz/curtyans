import { Navigate, Route, Routes, useLocation, useNavigationType, useParams } from "react-router-dom";
import { Location } from 'history';
import { AsyncRouteProps, CtxBase, InitialData, ServerAppState, TransitionBehavior } from "./types";
import React from "react";
import { get404Component, getAllRoutes, isInstantTransition } from "./utils";
import { loadStaticProps } from "./loadStaticProps";
import { loadInitialProps } from "./loadInitialProps";

const isClient = typeof window !== "undefined";

export type AfterpartyProps = {
  data: ServerAppState;
  routes: AsyncRouteProps[];
  transitionBehavior: TransitionBehavior;
  customParams?: { [key: string]: any };
}

export type AfterpartyState = {
  data?: InitialData;
  previousLocation: Location | null;
  currentLocation: Location;
  isLoading: boolean;
}

// HACK: Since there will always be a single instance of After, this shouldn't cause problems
const store = (() => {
  let s: { [key: string]: object } = {};
  return {
    set: (key: string, value: object) => {
      if (!isClient) {
        console.log("ALERT: TRIED TO SET STORE ON SERVER");
        return;
      }
      s[key] = value;
    },
    get: (key: string) => {
      if (!isClient) {
        console.log("ALERT: TRIED TO GET STORE ON SERVER");
        return null;
      }
      return s[key];
    }
  }
})();

const getCachedData = (navigationAction: string, location: Location) => {
  if (navigationAction !== 'POP') return null;
  const cache = store.get(location.pathname) as any;
  // TODO: TTL on cache
  return cache && cache.key === location.key ? cache.data : null;
}

const defaultNavigatigationDetector = (currentLoc: Location, nextLoc: Location) => {
  return nextLoc.pathname !== currentLoc.pathname || currentLoc.search !== nextLoc.search
}

export const After = (props: AfterpartyProps) => {
  const navigationType = useNavigationType();
  const currentLocation = useLocation();
  const params = useParams();

  const { data, routes, transitionBehavior = 'blocking', customParams } = props;
  const [state, setState] = React.useState<AfterpartyState>({
    data: data.initialData,
    previousLocation: null,
    currentLocation,
    isLoading: false
  });

  const hasNavigated = defaultNavigatigationDetector(currentLocation, state.currentLocation);

  const initialData = state.data as any;
  const isInstantMode = isInstantTransition(transitionBehavior);
  const match = { params, pathname: currentLocation.pathname };
  const NotfoundComponent: React.ComponentType<any> = get404Component(routes);

  // when hasNavigated changes, then update the state and cached data accordingly
  React.useEffect(() => {
    const previousLocation = state.currentLocation;

    if (hasNavigated) {
      const cachedData = getCachedData(navigationType, currentLocation);
      const hasCachedData = !!cachedData;
      // update the current state
      setState({
        ...state,
        previousLocation: hasCachedData ? null : previousLocation,
        currentLocation,
        data: cachedData,
        isLoading: hasCachedData ? false : true
      });
    }
  }, [hasNavigated]);

  // this useEffect is similar to componentDidUpdate and must be fired only after
  // update to state has happened
  // in above useEffect
  React.useEffect(() => {
    const hasNavigated = state.previousLocation !== null && defaultNavigatigationDetector(state.previousLocation, state.currentLocation);
    if (hasNavigated) {
      const isBlockedMode = !isInstantMode;
      const { scrollToTop, ssg } = data.afterData;

      const ctx: CtxBase = {
        location: currentLocation,
        scrollToTop: scrollToTop,
        customParams,
      }

      // Only for page changes, prevent scroll up for anchor links
      const isPageChanged: boolean =
        !!state.previousLocation &&
        (state.previousLocation.pathname !== currentLocation.pathname);
      const isAllowedToScroll: boolean =
        isPageChanged && scrollToTop.current === true;

      // in instant mode, first we scroll to top then we fetch the data
      if (isInstantMode && isAllowedToScroll) {
        window.scrollTo(0, 0);
      }

      if (state.data === null) {
        // in ssg mode we don't call component.getInitialProps
        // instead we fetch the page-data.json file
        const loadData = ssg ? loadStaticProps : loadInitialProps;

        loadData(currentLocation.pathname, routes, ctx)
          .then(res => res.data)
          .then((data: InitialData) => {
            // if user moved to a new page at the time we were fetching data
            // for the previous page, we ignore data of the previous page
            if (state.currentLocation !== currentLocation) return;

            // in blocked mode, first we fetch the data and then we scroll to top
            if (isBlockedMode && isAllowedToScroll) {
              window.scrollTo(0, 0);
            }

            if (!!data) {
              store.set(correctLocation.pathname, { key: currentLocation.key, data })
            }
            setState({ previousLocation: null, data, isLoading: false, currentLocation });
          })
          .catch((e: Error) => {
            // @todo we should more cleverly handle errors???
            console.log(e);
            setState({ previousLocation: null, data: undefined, isLoading: false, currentLocation });
          });
      }
    }
  }, [state]);

  const updateState = React.useCallback((data: any) => {
    if (!!data) {
      store.set(currentLocation.pathname, { key: currentLocation.key, data });
    }
    setState({ ...state, previousLocation: null, data, isLoading: false, currentLocation })
  }, [state, currentLocation]);

  // used to refetch data for current route -> basically call loadData once again
  const refetch = React.useCallback(() => {
    const { scrollToTop, ssg } = data.afterData;

    const ctx: CtxBase = {
      location: currentLocation,
      scrollToTop: scrollToTop,
      customParams,
    }
    setState({ ...state, isLoading: true });

    // in ssg mode we don't call component.getInitialProps
    // instead we fetch the page-data.json file
    const loadData = ssg ? loadStaticProps : loadInitialProps;

    loadData(currentLocation.pathname, routes, ctx)
      .then(res => res.data)
      .then((data: InitialData) => {
        // if user moved to a new page at the time we were fetching data
        // for the previous page, we ignore data of the previous page
        if (state.currentLocation !== currentLocation) return;

        if (!!data) {
          store.set(correctLocation.pathname, { key: currentLocation.key, data })
        }
        setState({ previousLocation: null, data, isLoading: false, currentLocation });
      })
      .catch((e: Error) => {
        // @todo we should more cleverly handle errors???
        console.log(e);
        setState({ ...state, previousLocation: null, isLoading: false, currentLocation });
      });
  }, [state, currentLocation, data]);

  // when we are in the instant mode we want to pass the right location prop
  // to the <Route /> otherwise it will render previous matched component
  const correctLocation = isInstantMode
    ? currentLocation
    : (state.previousLocation ? state.previousLocation : currentLocation);

  return (
    <Routes location={correctLocation}>
      {initialData?.statusCode === 404 && (
        <Route Component={NotfoundComponent} path={currentLocation.pathname} />
      )}
      {initialData?.redirectTo && (
        <Navigate to={initialData.redirectTo} />
      )}
      {getAllRoutes(routes).map((route, index) => {
        const Component = route.Component;
        return (
          <Route
            path={route.path}
            key={`route--${index}`}
						element={
							<Component
								{...initialData}
								match={match}
								location={currentLocation}
								isLoading={state.isLoading}
								// custom props
								updateState={updateState}
								refetch={refetch}
							/>
						}
            // Component={() => {
            //   return (
            //     <Component
            //       {...initialData}
            //       match={match}
            //       location={currentLocation}
            //       isLoading={state.isLoading}
            //       // custom props
            //       updateState={updateState}
            //       refetch={refetch}
            //     />
            //   )
            // }}
          />
        )
      })}
    </Routes>
  )

}

export default After;
