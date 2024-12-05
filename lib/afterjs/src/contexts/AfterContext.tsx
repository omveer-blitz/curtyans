import React from "react";
import { AfterContext } from "../types";

export const __AfterContext = React.createContext({} as AfterContext);

export const useAfterContext = () => {
  return React.useContext(__AfterContext);
};