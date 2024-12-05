import { AfterRenderStaticOptions } from './types';
export declare const renderStatic: <T extends unknown>(params: Pick<import("./types").AfterRenderAppOptions<T>, "req" | "res" | "assets" | "routes" | "document" | "chunks" | "scrollToTop" | "customRenderer" | "customParams">) => Promise<{
    html: string;
    data: import("./types").InitialData;
}>;
