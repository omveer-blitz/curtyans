import React, { PropsWithChildren } from "react";
import { css } from "@emotion/react";
import { TextProps } from "./types";
import { FontStyleGuide } from "../types";

const fontStyleGuideMap: {[key in FontStyleGuide]: string} = {
	'heading1': `
		font-family: var(--font-family-heading1);
		font-size: var(--font-size-heading1);
		font-weight: var(--font-weight-heading1);
		line-height: var(--font-lineheight-heading1);
	`,
	'heading2': `
		font-family: var(--font-family-heading2);
		font-size: var(--font-size-heading2);
		font-weight: var(--font-weight-heading2);
		line-height: var(--font-lineheight-heading2);
	`,
	'heading3': `
		font-family: var(--font-family-heading3);
		font-size: var(--font-size-heading3);
		font-weight: var(--font-weight-heading3);
		line-height: var(--font-lineheight-heading3);
	`,
	'heading4': `
		font-family: var(--font-family-heading4);
		font-size: var(--font-size-heading4);
		font-weight: var(--font-weight-heading4);
		line-height: var(--font-lineheight-heading4);
	`,
	'heading5': `
		font-family: var(--font-family-heading5);
		font-size: var(--font-size-heading5);
		font-weight: var(--font-weight-heading5);
		line-height: var(--font-lineheight-heading5);
	`,
	'heading6': `
		font-family: var(--font-family-heading6);
		font-size: var(--font-size-heading6);
		font-weight: var(--font-weight-heading6);
		line-height: var(--font-lineheight-heading6);
	`,
	'heading7': `
		font-family: var(--font-family-heading7);
		font-size: var(--font-size-heading7);
		font-weight: var(--font-weight-heading7);
		line-height: var(--font-lineheight-heading7);
	`,
	'body1': `
		font-family: var(--font-family-body1);
		font-size: var(--font-size-body1);
		font-weight: var(--font-weight-body1);
		line-height: var(--font-lineheight-body1);
	`,
	'body2': `
		font-family: var(--font-family-body2);
		font-size: var(--font-size-body2);
		font-weight: var(--font-weight-body2);
		line-height: var(--font-lineheight-body2);
	`,
	'body3': `
		font-family: var(--font-family-body3);
		font-size: var(--font-size-body3);
		font-weight: var(--font-weight-body3);
		line-height: var(--font-lineheight-body3);
	`,
	'body4': `
		font-family: var(--font-family-body4);
		font-size: var(--font-size-body4);
		font-weight: var(--font-weight-body4);
		line-height: var(--font-lineheight-body4);
	`,
	'body5': `
		font-family: var(--font-family-body5);
		font-size: var(--font-size-body5);
		font-weight: var(--font-weight-body5);
		line-height: var(--font-lineheight-body5);
	`,
}

const overflowEllipsis = (maxWidth) => css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: ${maxWidth === 'auto' ? 'initial' : maxWidth + 'px'};
`;

const Text = (props: PropsWithChildren<TextProps>): JSX.Element => {
	const {
		as: As = 'p',
		fontStyleGuide,
		fontStyleGuideXL = props.fontStyleGuide,
		align = 'left',
		alignXL = props.align,
		color = 'white',
		underline = false,
		strikeThrough = false,
		textTransform,
		textWrap = 'wrap',
		wordWrap = 'normal',
		primaryGradient = false,
		mt,
		mr,
		mb,
		ml,
		children,
		ellipsis,
	} = props;
	return (
		<As
			css={css`
				${fontStyleGuide && fontStyleGuideMap[fontStyleGuide]};
				${align && `text-align: ${align};`}
				${color && `color: var(--color-${color});`}
				${underline && `text-decoration: underline;`}
				${strikeThrough && `text-decoration: line-through;`}
				${textTransform && `text-transform: ${textTransform};`}
				${textWrap && `text-wrap: ${textWrap};`}
				${wordWrap && `word-wrap: ${wordWrap};`}
				${mt && `margin-top: var(--spacing-${mt});`}
				${mr && `margin-right: var(--spacing-${mr});`}
				${ml && `margin-left: var(--spacing-${ml});`}
				${mb && `margin-bottom: var(--spacing-${mb});`}
				${primaryGradient && `
					background-image: var(--color-primary-gradient);
					-webkit-text-fill-color: transparent;
					-webkit-background-clip: text;
					background-clip: text;
				`}
				${ellipsis && overflowEllipsis(ellipsis)};

				@media(min-width: 1200px) {
					${alignXL && `text-align: ${alignXL};` }
					${fontStyleGuideXL && fontStyleGuideMap[fontStyleGuideXL]};
				}
			`}
		>
			{children}
		</As>
	)
}

export default Text;
