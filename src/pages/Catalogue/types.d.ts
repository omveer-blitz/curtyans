import { ProductPageDataResponse } from "services/types";
import { Media, Product } from "typings/product.type";

export type CataloguePageProps = {
	pagedata: {
		data_type: 'product',
	} & ProductPageDataResponse;
	isLoading: boolean;
}

export type FullScreenImageProps = {
	media: Media | null;
	closeModal: () => void;
}
