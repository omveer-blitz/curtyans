import { matchPath, RouteProps } from 'react-router-dom';
import { AsyncRouteProps, InitialProps, CtxBase } from './types';
import { isAsyncComponent } from './utils';

export async function loadInitialProps(
  pathname: string,
  routes: AsyncRouteProps[],
  ctx: CtxBase
): Promise<InitialProps> {
  const promises: Promise<any>[] = [];

  const matchedComponent = routes.find((route: RouteProps) => {
    
    // Step 1: Find the matched component using matchPath and pathname
    //const match = matchPath(pathname, { ...route, path: route.path || '*' });
    const match = matchPath({
      path: route.path || "*",
      caseSensitive: route.caseSensitive,
      end: true
    }, pathname)

    // Step 2: Check if match is found: if match is not found, then 'match' is null
    // If match is found and route has asyncComponent
    // then load the component and call its getInitialProps
    if (match && route.Component && isAsyncComponent(route.Component)) {
      const component = route.Component;

      promises.push(
        component.load
          ? component
              .load()
              .then(() => component.getInitialProps({ match, ...ctx }))
          : component.getInitialProps({ match, ...ctx })
      );
    }

    return !!match;
  });

  return {
    match: matchedComponent,
    data: (await Promise.all(promises))[0],
  };
}
