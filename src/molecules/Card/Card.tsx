import React from "react";
import { CardProps } from "./types";
import { css } from "@emotion/react";

const styles = css`
	border-radius: var(--spacing-sm);
	background-color: var(--color-white);
	box-shadow: 0px 2px 16px rgba(41,41,41,0.2);
`

export default (props: React.PropsWithChildren<CardProps>) => {
const { as: As = 'section', size = 'xxl', children, css: passedCSS,  mt, mr, ml, mb, ...rest } = props;
	return (
		<As
			css={css`
				${styles};
				${size !== 'collapsed' && `padding: var(--spacing-${size})`};
				${mt && `margin-top: var(--spacing-${mt});`}
				${mr && `margin-right: var(--spacing-${mr});`}
				${ml && `margin-left: var(--spacing-${ml});`}
				${mb && `margin-bottom: var(--spacing-${mb});`}
				${passedCSS};
			`}
			{...rest}
		>
			{children}
		</As>
	)
}
