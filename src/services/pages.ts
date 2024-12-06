import { client } from "services/fetch";
import { CollectionPageDataResponse, HomePageDataResponse, ProductPageDataResponse } from "./types";

export const getHomePageData = async (): Promise<HomePageDataResponse> => {
  const response = await client.get<"", HomePageDataResponse>({
    url: process.env.API_HOME_PATH || '',
  });
  return response.data;
};

export const getCollectionPageData = async (): Promise<CollectionPageDataResponse> => {
  const response = await client.get<"", CollectionPageDataResponse>({
    url: process.env.API_COLLECTION_PATH || '',
  });
  return response.data;
};

export const getProductPageData = async (productId: string): Promise<ProductPageDataResponse> => {
  const response = await client.get<"", ProductPageDataResponse>({
    url: `${process.env.API_PRODUCT_PATH || ''}/${productId}`,
  });
  return response.data;
};
