import React from "react";
import { AfterRouterContext } from "../types";

export const __AfterRouterContext = React.createContext({} as AfterRouterContext);

export const useAfterRouterContext = () => {
  return React.useContext(__AfterRouterContext);
}