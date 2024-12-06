import React from "react";
import { css } from "@emotion/react";

import { InputProps } from "./types";
import Text from "atoms/Text";
import ResponsiveDiv from "atoms/ResponsiveDiv";
import Alert from "icons/Alert";
import Flexbox from "atoms/Flexbox";

const styles = {
	baseStyle: css`
		background-color: var(--color-flamingo0500);
		border-radius: var(--spacing-sm);
		border: 1px solid var(--color-flamingo0500);
		padding: var(--spacing-md);
		color: var(--color-mine-shaft);
		flex-grow: 4;

		// fonts
		font-family: var(--font-family-heading7);
		font-size: var(--font-size-heading7);
		font-weight: var(--font-weight-heading7);
		line-height: var(--font-lineheight-heading7);

		&::placeholder {
			color: var(--color-dusty-gray);
			// fonts
			font-family: var(--font-family-body4);
			font-size: var(--font-size-body4);
			font-weight: var(--font-weight-body4);
			line-height: var(--font-lineheight-body4);
		}

		&:focus-visible {
			outline: none;
		}
	`,
	erroredStyle: css`
		border: 1px solid var(--color-red500);
	`,
	fullWidthStyle: css`
		width: 100%;
	`,
	validationMessageWrapper: css`
		transition: all .2s linear;
		transform: translateY(-100%);
		opacity: 0;
	`,
	validationMessageWrapperOpen: css`
		transform: translateY(0);
		opacity: 1;
	`,
	leftAddonStyle: css`
		padding: var(--spacing-md);
		background-color: var(--color-flamingo);
		color: var(--color-white);
		border-top-left-radius: var(--spacing-sm);
		border-bottom-left-radius: var(--spacing-sm);
		flex-grow: 1;
		max-width: 64px;
	`
}

export default (props: InputProps): JSX.Element => {
	const { validationType, validationMessage, title, required, mt, mb, ml, mr, fullWidth, leftAddon, ...rest } = props;

	return (
		<ResponsiveDiv
			mt={mt}
			mb={mb}
			ml={ml}
			mr={mr}
		>
			<Text
				as="div"
				fontStyleGuide="body4"
				color="mine-shaft"
				mb="xs"
			>
				{title}
				{required && <sup>&nbsp;*</sup>}
			</Text>
			<label
				htmlFor={props.id}
				css={css`
					display: block;
					${fullWidth && styles.fullWidthStyle};
				`}
			>
				<Flexbox direction="row" justify="start" align="stretch">
					{leftAddon && (
						<ResponsiveDiv css={styles.leftAddonStyle}>
							{leftAddon}
						</ResponsiveDiv>
					)}
					<input
						css={css`
						${styles.baseStyle};
						${validationType === 'error' && styles.erroredStyle};
						${leftAddon && `
							border-top-left-radius: 0;
							border-bottom-left-radius: 0;
						`}
					`}
						{...rest}
					/>
				</Flexbox>
			</label>
			<ResponsiveDiv
				mt="xs"
				css={css`
					${styles.validationMessageWrapper};
					${(validationType !== 'none' && validationType) ? styles.validationMessageWrapperOpen : ''};
				`}
			>
				{(validationType === 'none' || !validationType) && <Text fontStyleGuide="body5" color="black">&nbsp;</Text>}
				{validationType === 'error' && (
					<Flexbox direction="row" justify="flex-start" align="center" wrap="nowrap">
						<Alert />&nbsp;
						<Text
							wordWrap="normal"
							textWrap="nowrap"
							fontStyleGuide="body5"
							color="red500"
						>
							{validationMessage}
						</Text>
					</Flexbox>
				)}
			</ResponsiveDiv>
		</ResponsiveDiv>
	)
}
