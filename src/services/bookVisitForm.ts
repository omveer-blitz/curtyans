import { client } from "./fetch";
import { BookVisitFormRequest, BookVisitFormResponse } from "./types";

export const createBookVisitForm = async (
	data: BookVisitFormRequest
): Promise<BookVisitFormResponse | void> => {


	const response = await client.post<BookVisitFormRequest, BookVisitFormResponse>(
		{
			url: process.env.API_BOOK_VISIT_FORM_PATH || "",
			payload: data,
		}
	);
	return response.data;
};
