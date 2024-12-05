/**
 * Wrap over axios to provide bare-minimum functionality
 * Allows us to add/manage interceptors and handlers on a global level if needed
 */
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

// Globals
import * as globals from "./globals";

export type CustomAxiosConfig<T> = Omit<
  AxiosRequestConfig<T>,
  "url" | "method"
> & {
  url: string;
  payload?: T;
};

export type AxiosObject = {
  get<REQ, RES>(
    config: CustomAxiosConfig<REQ>
  ): Promise<AxiosResponse<RES, REQ>>;
  post<REQ, RES>(
    config: CustomAxiosConfig<REQ>
  ): Promise<AxiosResponse<RES, REQ>>;
  put<REQ, RES>(
    config: CustomAxiosConfig<REQ>
  ): Promise<AxiosResponse<RES, REQ>>;
  delete<REQ, RES>(
    config: CustomAxiosConfig<REQ>
  ): Promise<AxiosResponse<RES, REQ>>;
};

/**
 * Update error state of store to true, so as to show error toast
 * Now, no need to add try catch in every api call
 */
// TO DO (will be used, once backend error code gets decided)

// const catchAndUpdateStoreErrorState = (err: AxiosError) => {
//   const errorCode = err.response ? err.response.status : 400;
//   if (errorCode < 500) return;

//   // show only handled and system thrown error only
//   store.dispatch(errorActions.showError("Something went wrong"));
// };

export const getClient = (
  baseURL: string,
  timeout: number = 180000
): AxiosObject => {
  const client: AxiosInstance = axios.create({
    baseURL,
    timeout,
    headers: {
      wm_platform: "dashboard",
      wm_lang: "en",
    },
  });

  const axiosClient: AxiosObject = {
    get: (config) => {
      const { url, payload, ...rest } = config;
      const wmViewAsId = globals.get(globals.keys.loggedInSellerId);
      if (wmViewAsId) {
        client.defaults.headers.wm_viewas = wmViewAsId;
      } else {
        delete client.defaults.headers["wm_viewas"];
      }

      return client.request({
        url: url,
        method: "GET",
        params: payload,
        responseType: "json",
        ...rest,
      });
    },
    post: (config) => {
      const { url, payload, ...rest } = config;
      const wmViewAsId = globals.get(globals.keys.loggedInSellerId);
      if (wmViewAsId) {
        client.defaults.headers.wm_viewas = wmViewAsId;
      } else {
        delete client.defaults.headers["wm_viewas"];
      }
      return client.request({
        url: url,
        method: "POST",
        data: payload,
        responseType: "json",
        ...rest,
      });
    },
    put: (config) => {
      const { url, payload, ...rest } = config;
      const wmViewAsId = globals.get(globals.keys.loggedInSellerId);
      if (wmViewAsId) {
        client.defaults.headers.wm_viewas = wmViewAsId;
      } else {
        delete client.defaults.headers["wm_viewas"];
      }
      return client.request({
        url: url,
        method: "PUT",
        data: payload,
        responseType: "json",
        ...rest,
      });
    },
    delete: (config) => {
      const { url, payload, ...rest } = config;
      const wmViewAsId = globals.get(globals.keys.loggedInSellerId);
      if (wmViewAsId) {
        client.defaults.headers.wm_viewas = wmViewAsId;
      } else {
        delete client.defaults.headers["wm_viewas"];
      }
      return client.request({
        url: url,
        method: "DELETE",
        data: payload,
        responseType: "json",
        ...rest,
      });
    },
  };
  return axiosClient;
};

export const client = getClient(process.env.API_BASE_PATH + "");

/** axios client with increased timeout to allow sending large request body
 * used at-
 * seller dispute ticket creation...attachments might be large
 * seller dispute ticket updation...attachments might be large
 */
export const clientUploadingLarge = getClient(
  process.env.API_BASE_PATH + "",
  180000
);
