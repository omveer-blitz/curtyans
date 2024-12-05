export type Media = {
	type: 'image' | 'video' | string;
	url: string;
}

export type Category = 'curtain' | 'blinds' | 'wallpaper' | 'carpets_and_rugs';

export type Product = {
	product_name: string;
	sku_id: string;
	description: string;
	mrp: number;
	selling_price: number;
	emi_option: {
		emi_price: number;
		emi_duration_in_months: number;
	}
	category: Category[];
	media: Media[];
	attributes: {
		dimension: {
			length: string;
			breadth: string;
		}
	}
}
