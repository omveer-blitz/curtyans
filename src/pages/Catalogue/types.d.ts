import { Media, Product } from "typings/product.type";

export type CataloguePageProps = {
	data: {
		data_type: 'product',
		code: number;
		data: Product;
	};
	isLoading: boolean;
}

export type FullScreenImageProps = {
	media: Media | null;
	closeModal: () => void;
}
