import React from "react";
import { css } from "@emotion/react";

import WidgetContainer from "atoms/WidgetContainer";
import Flexbox from "atoms/Flexbox";
import { FeatureItemProps, FeaturesProps } from "./types";
import { FlexboxItem } from "atoms/Flexbox/Flexbox";
import ResponsiveDiv from "atoms/ResponsiveDiv";
import Text from "atoms/Text";
import Button from "atoms/Button";
import Image from "atoms/Image";

const styles = {
	imageStyle: css`
		border-radius: var(--spacing-sm);
		width: 100%;
		height: auto;
		max-height: 420px;
		object-fit: cover;
	`
}
const featureItems = [
	{
		imageUrl: "http://d3m6ysvindj7rm.cloudfront.net/made-to-measure.jpg",
		title: "Made-to-Measure Solutions",
		description: "Perfect fit every time with our precise customization. Made just for you!"
	},
	{
		imageUrl: "http://d3m6ysvindj7rm.cloudfront.net/premium-quality.jpg",
		title: "Premium Materials",
		description: "A curated collection of fabrics and finishes to suit any aesthetic."
	},
	{
		imageUrl: "http://d3m6ysvindj7rm.cloudfront.net/end-to-end-service.jpg",
		title: "End-to-End Service",
		description: "From consultation to professional installation, we’ve got you covered."
	}
]

const FeatureItem = (props: FeatureItemProps) => {
	return (
		<Flexbox
			direction={props.direction === 'left' ? 'row' : 'row-reverse'}
			justify="space-between"
			align="center"
			gap={24}
			mb={props.index === featureItems.length - 1 ? 'xs' : '2xl'}
			as={"article"}
		>
			<FlexboxItem colspan={24} colspanXL={11}>
				<Image css={styles.imageStyle} aspect-ratio={1} src={props.imageUrl} />
			</FlexboxItem>
			<FlexboxItem colspan={24} colspanXL={11}>
					<Text fontStyleGuide="heading6" color="mine-shaft" mb="xs">{props.title}</Text>
					<Text fontStyleGuide="body4" color="mine-shaft" mb="xxl">{props.description}</Text>
					<Button type="secondary" to="/book-visit-form">Book a Free Visit</Button>
			</FlexboxItem>
		</Flexbox>
	)
}

export default (props: FeaturesProps) => {
	return (
		<WidgetContainer>
			<Text align="center" color="mine-shaft" fontStyleGuide="heading3" mb="2xl">{props.title || 'Key Features'}</Text>
			{(props.entities || []).map((featureItem, index) => (
				<FeatureItem
					index={index}
					direction={index % 2 === 0 ? 'left' : 'right'}
					key={`feature-item-${index}`}
					imageUrl={featureItem.image_url}
					title={featureItem.title}
					description={featureItem.description}
				/>
			))}
		</WidgetContainer>
	)

}
