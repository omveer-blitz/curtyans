import { Product } from "typings/product.type";

export type CollectionPageProps = {
	data: {
		data_type: 'collection',
		code: number;
		data: {
			entities: Product[];
		}
	}
	isLoading: boolean;
}
