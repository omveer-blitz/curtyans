import React from "react";
import { css } from "@emotion/react";
import WidgetContainer from "atoms/WidgetContainer";
import ResponsiveDiv from "atoms/ResponsiveDiv";
import Text from "atoms/Text";
import Button from "atoms/Button";
import Flexbox from "atoms/Flexbox";
import { FlexboxItem } from "atoms/Flexbox/Flexbox";
import Image from "atoms/Image";

const styles = {
	wrapper: css`
		background-color: var(--color-flamingo100);
		border-radius: var(--spacing-xxl);
		padding: var(--spacing-2xl);
		position: relative;
	`,
	imageContainer: css`
		display: flex;
		justify-content: center;
		img {
			max-width: 320px;
			width: 100%;
			height: auto;
			max-height: 320px;
		}
	`,
	imageContainerXL: css`
		position: absolute;
		top: -24px;
		right: 0;
	`
}

export default () => {
	return (
		<WidgetContainer>
			<ResponsiveDiv css={styles.wrapper}>
				<Flexbox direction="row" justify="space-between" align="center">
					<FlexboxItem colspan={24} colspanXL={16} mb="sm">
						<Text fontStyleGuide="heading3" color="mine-shaft" mb="sm">Need Help?</Text>
						<Text fontStyleGuide="body1" color="mine-shaft" mb="2xl" textWrap="balance">
							Our team is always a message away.
						</Text>
						<Text fontStyleGuide="body4" color="mine-shaft" mb="md" textWrap="balance">
							We’re available on WhatsApp for quick and easy support! Feel free to reach out anytime, and we’ll be happy to assist you.
						</Text>
						<Button type="secondary">WhatsApp Us</Button>
					</FlexboxItem>
				</Flexbox>
				<ResponsiveDiv css={styles.imageContainer} xl={styles.imageContainerXL}>
					<Image aspect-ratio="1" src="https://kurtains.ae/wp-content/uploads/2024/11/Holding-Hand-Smart-Phone-Mockup1.png" />
				</ResponsiveDiv>
			</ResponsiveDiv>
		</WidgetContainer>
	)
}
