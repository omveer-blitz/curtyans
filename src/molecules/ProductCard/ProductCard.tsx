import React from "react";
import { css } from "@emotion/react";

import Text from "atoms/Text";
import Button from "atoms/Button";
import ResponsiveDiv from "atoms/ResponsiveDiv";
import Image from "atoms/Image";
import Card from "molecules/Card";
import { ProductCardProps } from "./types";
import Link from "atoms/Link";

const styles = {
	cardWrapper: css`
		transform: translate3d(0, 0, 0);
		transition: all .3s linear;
		height: 100%;
		cursor: pointer;
		overflow: hidden;

		&:hover {
			transform: translate3d(0, -12px, 0);
		}
	`,
	contentWrapper: css`
		background-color: var(--color-white);
		padding: var(--spacing-lg);
	`,
	imageStyle: css`
		width: 100%;
		height: auto;
		aspect-ratio: 1.6;
		border-radius: var(--spacing-sm);
	`,
	descriptionWrapper: css`
		overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
	`
}

export default (props: ProductCardProps) => {
	return (
		<Link to={`/product/${props.sku_id}`}>
		<Card size="collapsed" css={styles.cardWrapper}>
			<Image css={styles.imageStyle} src={props.media[0].url} />
			<ResponsiveDiv css={styles.contentWrapper}>
				<Text fontStyleGuide="heading6" color="mine-shaft" mb="xxl" textTransform="capitalize" textWrap="nowrap" ellipsis="auto">{props.product_name}</Text>
				<ResponsiveDiv css={styles.descriptionWrapper}>
					<Text fontStyleGuide="body4" color="mine-shaft" mb="sm">{props.description}</Text>
				</ResponsiveDiv>
				<Text fontStyleGuide="heading6" color="flamingo" mb="sm">{`AED ${props.mrp}`}</Text>
				<Text as="div" fontStyleGuide="body5" color="mine-shaft" mb="xxl">
					EMI Option:&nbsp;
					<Text as="span" fontStyleGuide="heading7" color="mine-shaft">{`AED ${props.emi_option.emi_price}/mo`}</Text>
					&nbsp;for {props.emi_option.emi_duration_in_months} months
				</Text>
				<Button type="secondary" full to={`/product/${props.sku_id}`}>KNOW MORE</Button>
			</ResponsiveDiv>
		</Card>
		</Link>
	)
}
