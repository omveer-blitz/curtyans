import { client } from "./fetch";
import {
	BookDemoFormRequest,
	BookDemoFormResponse
} from "./types";

export const createBookDemoForm = async (
	data: BookDemoFormRequest
): Promise<BookDemoFormResponse | void> => {

	if (['DEVELOPMENT'].includes(process.env.ENVIRONMENT || "")) {
		return console.log(data);
	}

	const response = await client.post<BookDemoFormRequest, BookDemoFormResponse>(
		{
			url: process.env.API_BOOK_DEMO_FORM_URL || "",
			payload: data,
		}
	);
	return response.data;
};
