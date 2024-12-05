import React from "react";
import { css } from "@emotion/react";

import { TextareaProps } from "./types";
import Text from "atoms/Text";
import ResponsiveDiv from "atoms/ResponsiveDiv";
import Alert from "icons/Alert";
import Flexbox from "atoms/Flexbox";

const styles = {
	baseStyle: css`
		background-color: var(--color-white);
		border-radius: var(--spacing-sm);
		border: 1px solid var(--color-flamingo);
		padding: var(--spacing-md);
		color: var(--color-mine-shaft);

		// fonts
		font-family: var(--font-family-body4);
		font-size: var(--font-size-body4);
		font-weight: var(--font-weight-body4);
		line-height: var(--font-lineheight-body4);

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
}

export default (props: TextareaProps): JSX.Element => {
	const { validationType, validationMessage, title, required, mt, mb, ml, mr, fullWidth, ...rest } = props;

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
			<label htmlFor={props.id}>
				<textarea
					css={css`
					${styles.baseStyle};
					${validationType === 'error' && styles.erroredStyle};
					${fullWidth && styles.fullWidthStyle};
				`}
					{...rest}
				/>
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
							fontStyleGuide="body4"
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
