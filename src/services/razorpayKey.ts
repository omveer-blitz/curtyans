import { client } from "./fetch";
import { RazorPayKeyResponse } from "./types";

export const fetchRazorpayId = async (): Promise<RazorPayKeyResponse> => {

  const response = await client.get<null, RazorPayKeyResponse>(
    {
      url: `/config`,
    }
  );
  return response.data;
}