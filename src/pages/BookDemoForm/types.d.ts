import { SchemaCheckResult } from "schema-typed/es/types";
import { Category } from "typings/product.type";

export type FormValidationError = SchemaCheckResult<
	{
		firstName: string;
		lastName: string;
		email: string;
		phone: string;
		address: string;
		flatNo?: string;
		city: string;
		visitDate: string;
		categoryType: Category | '';
		comment?: string;
	},
	string
>;

export type CreateFormType = {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	address: string;
	flatNo?: string;
	city: string;
	visitDate: string;
	categoryType: Category | '';
	comment?: string;
}

export type handleInputChangeProps =
	| "firstName"
	| "lastName"
	| "email"
	| "phone"
	| "address"
	| "flatNo"
	| "city"
	| "visitDate"
	| "categoryType"
	| "comment"
