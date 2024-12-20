import { AsyncRouteableComponent, AsyncRouteComponentType, AsyncRouteProps, TransitionBehavior } from './types';
/** @private is the given object a Function? */
export declare const isFunction: (obj: any) => boolean;
/** @private is the given object an Object? */
export declare const isObject: (obj: any) => boolean;
/** @private is the given object/value a promise? */
export declare const isPromise: (value: any) => boolean;
/** @private we render on client? */
export declare const isDOM: () => boolean;
/** @private we render on server? */
export declare const isServer: () => boolean;
/** @private Guard cluase to narrow the AsyncRouteableComponent union type on getInitialProps */
export declare function isAsyncComponent(Component: AsyncRouteableComponent): Component is AsyncRouteComponentType<any>;
/** @private Guard cluase to narrow the AsyncRouteableComponent union type on load */
export declare function isLoadableComponent(Component: AsyncRouteableComponent): Component is AsyncRouteComponentType<any>;
/** @private is given routes array have a 404 page?  */
export declare function is404ComponentAvailable(routes: AsyncRouteProps<any>[]): AsyncRouteProps<any> | false;
/** @private Returns 404Component from given routes if component was not avaliable returns default 404component */
export declare function get404Component(routes: AsyncRouteProps<any>[]): AsyncRouteableComponent<any>;
/** @private Checks if 404Component is in routes, if it's not available add default 404 component */
export declare function getAllRoutes(routes: AsyncRouteProps<any>[]): AsyncRouteProps<any>[];
/** @private Checks if given string ends with ".js" */
export declare function isJS(str: string): boolean;
/** @private Checks if given transition type is instant */
export declare function isInstantTransition(transition: TransitionBehavior): boolean;
