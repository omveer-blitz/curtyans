import { AfterRenderAppOptions, RenderResult } from './types';
/**
 * The customRenderer parameter is a (potentially async) function that can be set to return
 * more than just a rendered string.
 * If present, it will be used instead of the default ReactDOMServer renderToString function.
 * It has to return an object of shape { html, ... }, in which html will be used as the rendered string
 * Other props will be also pass to the Document component
 */
export declare function renderApp<T>(options: AfterRenderAppOptions<T>): Promise<RenderResult>;
