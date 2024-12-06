import { FeaturesProps } from "organisms/Widgets/Features/types";
import { HeroBannerProps } from "organisms/Widgets/HeroBanner/types";
import { HowDoesItWorkProps } from "organisms/Widgets/HowDoesItWork/types";
import { ShopOurBestsellersProps } from "organisms/Widgets/ShopOurBestSellers/types";
import { TestimonialsProps } from "organisms/Widgets/Testimonials/types";
import { Product } from "typings/product.type";

export type HomePageDataResponse = {
	code: number;
	data: {
		hero_banner: HeroBannerProps;
		subline: string;
		best_sellers: ShopOurBestsellersProps;
		features: FeaturesProps;
		testimonials: TestimonialsProps;
		how_does_it_work: HowDoesItWorkProps;
	};
}

export type CollectionPageDataResponse = {
	code: number;
	data: {
		entities: Product[];
	}
}

export type ProductPageDataResponse = {
	code: number;
	data: Product;
}

export type BookVisitFormRequest = {
	first_name: string;
	last_name: string;
	email: string;
	phone: string;
	address: string;
	flat_no?: string;
	city: string;
	visit_date: string;
	category_type: string;
	comment?: string;
}

export type BookVisitFormResponse = {
	code: number;
}
