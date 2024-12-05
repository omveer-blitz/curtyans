/**
 * globals is used to keep track of variables (data structures and methods) that might be needed across the application but cannot be fulfilled using react store
 * variables stored on react store cause re-render of components they are used in and cannot be used outside react environment
 * variables stored on globals will NOT cause re-render of components/methods/functions they are used in
 */

import { DeviceType, UTMParamsType } from "../typings/generics.type";

type GlobalKeysTypes =
  | "refreshWebsite"
  | "loggedInSellerId"
  | "parentAdminId"
  | "loggedInSellerName"
  | "utmParams"
  | "visitorId"
  | "sessionId"
  | "device"

type GlobalStateType = {
  refreshWebsite?: () => void;
  loggedInSellerId?: string;
  parentAdminId?: string;
  loggedInSellerName?: string;
  visitorId?: string;
  sessionId?: string;
  utmParams?: UTMParamsType;
  device?: DeviceType
};

type SetFunction = {
  <K extends GlobalKeysTypes>(key: K, value: GlobalStateType[K]): void;
};

type GetFunction = {
  <K extends GlobalKeysTypes>(key: K): GlobalStateType[K];
};

type GlobalKeysObjType = {
  refreshWebsite: "refreshWebsite";
  loggedInSellerId: "loggedInSellerId";
  parentAdminId: "parentAdminId";
  loggedInSellerName: "loggedInSellerName";
  utmParams: "utmParams";
  visitorId: "visitorId";
  sessionId: "sessionId";
  device: "device";
};

const state: GlobalStateType = {};

export const keys: GlobalKeysObjType = {
  refreshWebsite: "refreshWebsite",
  loggedInSellerId: "loggedInSellerId",
  parentAdminId: "parentAdminId", // admin id who have logged in as seller
  loggedInSellerName: "loggedInSellerName",
  utmParams: "utmParams",
  visitorId: "visitorId",
  sessionId: "sessionId",
  device: "device",
};

export const set: SetFunction = (key, value) => (state[key] = value);
export const get: GetFunction = (key) => state[key];
