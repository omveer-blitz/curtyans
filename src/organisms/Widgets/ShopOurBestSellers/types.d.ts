import { Media } from "typings/product.type";

export type ProductItemProps = {
	media: Media[];
	sku_id: string;
	product_name: string;
	selling_price: number;
}

export type ShopOurBestsellersProps = {
	title: string;
	sub_title: string;
	entities: ProductItemProps[]
}
