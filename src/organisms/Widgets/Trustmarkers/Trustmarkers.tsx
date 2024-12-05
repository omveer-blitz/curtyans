import React from "react";
import { css } from "@emotion/react";

import ResponsiveDiv from "atoms/ResponsiveDiv";
import Flexbox from "atoms/Flexbox";
import Text from "atoms/Text";
import WidgetContainer from "atoms/WidgetContainer";
import Guarrantee from "icons/Guarrantee";
import Construction from "icons/Construction";
import Truck from "icons/Truck";
import { TrustmarkerItemProps } from "./types";
import { FlexboxItem } from "atoms/Flexbox/Flexbox";
import trustmarkerItems from "json/trustmarker";


const styles = {
	trustmarkerItemWrapper: css`
		height: 100%;
	`,
	trustmarkerItemWrapperXL: css`
		padding: var(--spacing-lg);
		height: 100%;
	`,
	trustmarkerItem: css`
		border-radius: var(--spacing-sm);
		background-color: var(--color-flamingo0500);
		padding: var(--spacing-xxl);
		height: 100%;
	`,
	iconHolder: css`
		width: 64px;
		height: 64px;
		svg {
			scale: 2.5;
		}
		border-radius: 50%;
		padding: var(--spacing-xxl);
		background-color: var(--color-white);
		box-shadow: 0px 2px 16px rgba(41,41,41,0.2);
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	`
}

const TrustmarkerItem = (props: TrustmarkerItemProps) => {
	return (
		<ResponsiveDiv css={styles.trustmarkerItemWrapper} xl={styles.trustmarkerItemWrapperXL}>
			<Flexbox direction="column" justify="flex-start" align="center" css={styles.trustmarkerItem}>
				<ResponsiveDiv css={styles.iconHolder}>
					<props.Icon />
				</ResponsiveDiv>
				<Text align="center" fontStyleGuide="heading7" color="mine-shaft" mt="lg" mb="sm">{props.heading}</Text>
				<Text textWrap="balance" align="center" fontStyleGuide="body4" color="mine-shaft">{props.content}</Text>
			</Flexbox>
		</ResponsiveDiv>
	)
}

export default () => {
	return (
		<WidgetContainer>
			<Flexbox direction="row" justify="space-between" align="stretch">
				{trustmarkerItems.map((trustmarker, index) => (
					<FlexboxItem mb="xxl" key={`trustmarker-item-${trustmarker.type}`} colspan={24} colspanXL={8}>
						<TrustmarkerItem
							{...trustmarker}
							Icon={trustmarker.type === 'delivery' ? Truck : trustmarker.type === 'free-visit' ? Construction : Guarrantee}
						/>
				</FlexboxItem>
				))}
			</Flexbox>
		</WidgetContainer>
	)
}
