import { client } from "./fetch";
import {
	ContactUsFormRequest,
	ContactUsFormResponse
} from "./types";

export const createContactUsForm = async (
	data: ContactUsFormRequest
): Promise<ContactUsFormResponse | void> => {

	if (['DEVELOPMENT'].includes(process.env.ENVIRONMENT || "")) {
		return console.log(data);
	}

	const response = await client.post<ContactUsFormRequest, ContactUsFormResponse>(
		{
			url: process.env.API_CONTACT_US_URL || "",
			payload: data,
		}
	);
	return response.data;
};
