import * as React from 'react';
import { DocumentProps, DocumentgetInitialProps } from './types';
export declare class Document extends React.Component<DocumentProps> {
    static getInitialProps: ({ renderPage }: DocumentgetInitialProps) => Promise<{
        html: string;
        helmet: import("react-helmet").HelmetData;
    }>;
    render(): React.JSX.Element;
}
export declare const AfterRoot: React.FC;
export declare const AfterData: React.FC<{
    data?: object;
}>;
export declare const AfterStyles: React.FC;
export declare const AfterScripts: React.FC;
