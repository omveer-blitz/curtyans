import { Product } from "typings/product.type";

export type HomePageProps = {
	data: {
		data_type: 'home',
		code: number;
		data: any;
	};
	isLoading: boolean;
}
