import { Location } from 'history';
import { AsyncRouteProps, InitialData, ServerAppState, TransitionBehavior } from "./types";
import React from "react";
export declare type AfterpartyProps = {
    data: ServerAppState;
    routes: AsyncRouteProps[];
    transitionBehavior: TransitionBehavior;
    customParams?: {
        [key: string]: any;
    };
};
export declare type AfterpartyState = {
    data?: InitialData;
    previousLocation: Location | null;
    currentLocation: Location;
    isLoading: boolean;
};
export declare const After: (props: AfterpartyProps) => React.JSX.Element;
export default After;
