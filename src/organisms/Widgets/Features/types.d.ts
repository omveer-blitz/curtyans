export type FeatureItemProps = {
	imageUrl?: string;
	title?: string;
	description?: string;
	direction: 'left' | 'right';
	index: number;
}

export type FeaturesProps = {
	title: string;
	entities: {
		image_url: string;
		title: string;
		description: string;
	}[]
}
