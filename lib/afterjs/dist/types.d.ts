/// <reference types="react" />
import { RouteProps } from 'react-router-dom';
import { HelmetData } from 'react-helmet';
import { Request, Response } from 'express';
import { Location } from 'history';
import { Document as DefaultDoc } from './Document';
import { PathMatch } from 'react-router';
export declare type CtxBase = {
    req?: Request;
    res?: Response;
    location?: Location;
    scrollToTop?: ScrollToTop;
    customParams?: {
        [key: string]: any;
    };
};
export declare type Ctx<P extends string> = CtxBase & {
    match: PathMatch<P>;
};
export declare type AsyncComponent = {
    getInitialProps: (props: Ctx<any>) => any;
    load?: () => Promise<React.ReactNode>;
    getChunkName: () => string | undefined;
};
export declare type AsyncRouteComponentType<Props> = React.ComponentType<Props> & AsyncComponent;
/**
 * this type handles the component type in the route config object
 * {
 *   path: "/",
 *   exact: true,
 *   component: ReactComponent <- AsyncRouteableComponent
 * }
 */
export declare type AsyncRouteableComponent<Props = any> = React.ComponentType<Props> | AsyncRouteComponentType<Props>;
export declare type AsyncRouteComponentState = {
    Component: AsyncRouteableComponent | null;
};
export declare type AsyncRouteProps<Props = any> = RouteProps & {
    exact?: true;
    strict?: true;
    path?: string;
    Placeholder?: React.ComponentType<any>;
    Component: AsyncRouteableComponent<Props>;
    redirectTo?: string;
};
export declare type ScrollToTop = React.RefObject<boolean>;
export declare type InitialData = Promise<unknown>[];
export declare type ServerAppState = {
    afterData: AfterClientData;
    initialData: InitialData;
};
export declare type InitialProps = {
    match?: AsyncRouteProps;
    data: InitialData;
};
export declare type AfterClientData = {
    scrollToTop: ScrollToTop;
    ssg?: boolean;
};
export declare type RenderResult = {
    html: string;
    redirect: string;
    statusCode: number;
    data: InitialData;
};
export declare type RedirectWithStatuCode = {
    statusCode?: number;
    redirectTo?: string;
};
export declare type AfterRenderAppOptions<T> = {
    req: Request;
    res: Response;
    assets: Assets;
    routes: AsyncRouteProps[];
    document?: typeof DefaultDoc;
    chunks: Chunks;
    scrollToTop?: boolean;
    ssg?: boolean;
    customRenderer?: (element: React.ReactElement<T>) => {
        html: string;
    } | Promise<{
        html: string;
    }>;
    customParams: {
        [key: string]: any;
    };
};
export declare type AfterRenderOptions<T> = Omit<AfterRenderAppOptions<T>, 'ssg'>;
export declare type AfterRenderStaticOptions<T> = Omit<AfterRenderAppOptions<T>, 'ssg'>;
export declare type RenderPageResult = {
    html: string;
    helmet: HelmetData;
};
export declare type TransitionBehavior = 'blocking' | 'instant';
export declare type DocumentgetInitialProps<T = RenderPageResult> = {
    req: Request;
    res: Response;
    helmet: HelmetData;
    assets: Assets;
    data: ServerAppState;
    renderPage: () => Promise<T>;
    match: PathMatch | null;
    scripts: string[];
    styles: string[];
    scrollToTop: ScrollToTop;
    customParams: {
        [key: string]: any;
    };
};
export declare type DocumentProps<T = RenderPageResult> = Omit<DocumentgetInitialProps<T>, 'req' | 'res' | 'renderPage' | 'scrollToTop'> & T;
export declare type AfterContext = DocumentProps;
export declare type AfterRouterContext = {
    url?: string;
    statusCode?: number;
    location?: Location;
};
export declare type GetAssetsParams = {
    chunks: Chunks;
    route?: AsyncRouteProps<any>;
};
export declare type Module<P> = {
    default?: P;
    [x: string]: any;
} | {
    exports?: P;
    [x: string]: any;
};
export declare type Assets = {
    [name: string]: {
        [ext: string]: string;
    };
};
export declare type Chunks = {
    [key: string]: {
        css: string[];
        js: string[];
    };
};
