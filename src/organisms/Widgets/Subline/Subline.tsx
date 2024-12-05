import React from "react";
import Text from "atoms/Text";
import WidgetContainer from "atoms/WidgetContainer";
import Flexbox from "atoms/Flexbox";
import { FlexboxItem } from "atoms/Flexbox/Flexbox";
import { css } from "@emotion/react";
import { SublineProps } from "./types";


export default (props: SublineProps) => {
	return (
		<WidgetContainer>
			<Flexbox direction="row" justify="center" align="center">
				<FlexboxItem colspan={20} colspanXL={16}>
					<Text as="div" fontStyleGuide="body2" align="center" textWrap="balance" color="flamingo">
						<Text as="p" fontStyleGuide="heading1" align="left" textWrap="balance" color="flamingo">&ldquo;</Text>
						<Text as="p" fontStyleGuide="body2" align="center" textWrap="balance" color="flamingo" mb="lg">{props.text}</Text>
						<Text as="p" fontStyleGuide="heading1" align="right" textWrap="balance" color="flamingo">&rdquo;</Text>
					</Text>
				</FlexboxItem>
			</Flexbox>

		</WidgetContainer>
	)
}
