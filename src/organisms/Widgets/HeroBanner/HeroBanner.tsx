import React from "react";
import { css } from "@emotion/react";

import Image from "atoms/Image";
import Text from "atoms/Text";
import Flexbox from "atoms/Flexbox";
import ResponsiveDiv from "atoms/ResponsiveDiv";
import { FlexboxItem } from "atoms/Flexbox/Flexbox";
import Button from "atoms/Button";
import { HeroBannerProps } from "./types";


const bannerUrl = 'http://d3m6ysvindj7rm.cloudfront.net/hero-banner.jpg';

const styles = {
	heroBannerWrapper: css`
		background-color: var(--color-flamingo100);
		position: relative;

	`,
	heroBanner: css`
		width: 100%;
		height: auto;
		max-height: 440px;
		object-fit: cover;
		aspect-ratio: 1.5;
		margin-bottom: -5px;
		border-radius: var(--spacing-sm);
	`,
	contentWrapper: css`
		padding: var(--spacing-lg);
	`,
	semicircle: css`
		position: absolute;
		top: 20%;
		left: 50%;
		transform: translate(-50%, -50%);
		height: 100px;
		width: 200px;
		border-radius: 150px 150px 0 0;
		background-color: green;
	`,
	buttonWrapper: css`
		display: flex;
		flex-direction: row;
		justify-content: center;
	`,
	buttonWrapperXL: css`
		justify-content: start;
	`
}

export default (props: HeroBannerProps) => {
	return (
		<ResponsiveDiv css={styles.heroBannerWrapper}>
			<Flexbox direction="row" justify="space-between" align="center">
				<FlexboxItem colspan={24} colspanXL={10}>
					<ResponsiveDiv css={styles.contentWrapper}>
						<Text fontStyleGuide="heading3" color="flamingo" textWrap="balance" mb="xs" align="center" alignXL="left">
							{props.title}
						</Text>
						<Text fontStyleGuide="heading7" color="mine-shaft" textWrap="balance" align="center" alignXL="left">
							{props.sub_title}
						</Text>
						<ResponsiveDiv css={styles.buttonWrapper} xl={styles.buttonWrapperXL} mt="lg">
							<Button type="secondary" to="/collection">Explore Our Collection</Button>
						</ResponsiveDiv>
					</ResponsiveDiv>
				</FlexboxItem>
				<FlexboxItem colspan={24} colspanXL={14}>
					<Image fetchPriority="high" loading="eager" src={props.image_url} css={styles.heroBanner} />
				</FlexboxItem>
			</Flexbox>
		</ResponsiveDiv>
	)
}
