import React from "react";
import { css } from "@emotion/react";

import Text from "atoms/Text";
import WidgetContainer from "atoms/WidgetContainer";
import Image from "atoms/Image";
import Link from "atoms/Link";
import ResponsiveDiv from "atoms/ResponsiveDiv";


import { ProductItemProps, ShopOurBestsellersProps } from "./types";
import Flexbox from "atoms/Flexbox";
import { FlexboxItem } from "atoms/Flexbox/Flexbox";
import Button from "atoms/Button";

const styles = {
	productItemCardWrapper: css`
		display: block;
		padding: var(--spacing-lg);
		height: 100%;
	`,
	productItemCard: css`
		background-color: var(--color-white);
		border-radius: var(--spacing-sm);
		transition: all .3s linear;
		cursor: pointer;
		height: 100%;
		transform: translate3d(0, 0, 0);
		box-shadow: 0px 2px 16px rgba(41,41,41,0.2);
		overflow: hidden;

		&:hover {
			transform: translate3d(0, -12px, 0);
		}
	`,
	imageWrapper: css`
		max-height: 190px;
		overflow: hidden;
		img {
			width: 100%;
			height: auto;
			object-fit: cover;
			aspect-ratio: 1.5;
			background-color: white;
		}
	`,
	contentWrapper: css`
		padding: var(--spacing-md);
		background-color: var(--color-white);
	`
}

const productList = [
	{
		sku_id: "101",
		media: [{
			type: 'image',
			url: "https://kurtains.ae/wp-content/uploads/2024/07/Mask-group-1-300x225.png",
		}],
		product_name: "Sheer only",
		selling_price: 299,
	},
	{
		sku_id: "101",
		media: [{
			type: 'image',
			url: "https://kurtains.ae/wp-content/uploads/2024/07/Rectangle-1064-1-300x225.png",
		}],
		product_name: "Blackout only",
		selling_price: 450,
	},
	{ sku_id: "101",
		media: [{
			type: "image",
			url: "https://kurtains.ae/wp-content/uploads/2024/07/Rectangle-1067-1-300x225.png",
		}],
		product_name: "Sheer + Blackout",
		selling_price: 1200,
	},
	{
		sku_id: "101",
		media: [{
			type: "image",
			url: "https://kurtains.ae/wp-content/uploads/2024/07/Rectangle-1070-1-300x225.png",
		}],
		product_name: "Roller",
		selling_price: 393,
	}
]

const ProductItem = (props: ProductItemProps) => {
	return (
		<Link to={`/product/${props.sku_id}`} css={styles.productItemCardWrapper}>
			<ResponsiveDiv css={styles.productItemCard}>
				<ResponsiveDiv css={styles.imageWrapper}>
					<Image width="300" height="225" loading="lazy" aspect-ratio="1.5" src={props.media[0].url} />
				</ResponsiveDiv>
				<ResponsiveDiv css={styles.contentWrapper}>
					<Flexbox direction="column" justify="space-between" align="flex-start">
						<FlexboxItem colspan={24} colspanXL={24} mb="xs">
							<Text fontStyleGuide="heading7" color="mine-shaft" textWrap="pretty">{props.product_name}</Text>
						</FlexboxItem>
						<FlexboxItem colspan={24} colspanXL={24}>
							<Flexbox direction="row" justify="start" align="flex-end">
								<Text as="span" fontStyleGuide="heading7" color="flamingo" align="center" textWrap="pretty">{`AED ${props.selling_price}`}</Text>
								<Text as="p" fontStyleGuide="body5" color="mine-shaft" align="center" textWrap="pretty" ml="xs">{"onwards"}</Text>
							</Flexbox>
						</FlexboxItem>
					</Flexbox>
				</ResponsiveDiv>
			</ResponsiveDiv>

		</Link>
	)
}

export default (props: ShopOurBestsellersProps) => {
	return (
		<WidgetContainer enableBackground>
			<Text align="center" color="mine-shaft" fontStyleGuide="heading3" mb="xxl">{props.title}</Text>
			<Text align="center" color="mine-shaft" fontStyleGuide="body4" mb="xxl">{props.sub_title}</Text>
			<Flexbox direction="row" justify="space-between" align="stretch">
				{(props.entities || []).map((product, index) => (
					<FlexboxItem key={`our-bestsellers-${index}-${product.product_name}`} colspan={12} colspanXL={6}>
						<ProductItem {...product} />
					</FlexboxItem>
				))}
			</Flexbox>
			<Flexbox direction="row" justify="center" align="center" mt="xxl">
				<Button type="primary" to="/book-visit-form">Book a Free Consultation</Button>
			</Flexbox>
		</WidgetContainer>
	)
}
