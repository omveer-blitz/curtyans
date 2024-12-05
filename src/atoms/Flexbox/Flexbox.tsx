import React, { PropsWithChildren } from "react";
import { css } from "@emotion/react";
import { FlexboxItemProps, FlexboxProps } from "./types";

const Flexbox = (props: PropsWithChildren<FlexboxProps>): JSX.Element => {
	const { as: As = 'div', direction, justify, align, children, mt, mr, mb, ml, wrap = "wrap", gap, ...rest } = props;
	return (
		<As
			css={css`
				display: flex;
				flex-direction: ${direction};
				align-items: ${align};
				justify-content: ${justify};
				flex-wrap: ${wrap};
				${mt && `margin-top: var(--spacing-${mt});`}
				${mr && `margin-right: var(--spacing-${mr});`}
				${ml && `margin-left: var(--spacing-${ml});`}
				${mb && `margin-bottom: var(--spacing-${mb});`}
				${gap && `gap: ${gap}px;`}
			`}
			{...rest}
		>
			{children}
		</As>
	)
}

export const FlexboxItem = (props: PropsWithChildren<FlexboxItemProps>): JSX.Element => {
	const { colspan, colspanXL = colspan, as: As = 'div', children, mt, mr, ml, mb, ...rest } = props;
	return (
		<As
			css={css`
				${colspan !== "auto" && `
					width: ${(colspan / 24) * 100}%;
					flex: 0 0 ${(colspan / 24) * 100}%;
				`};
				${mt && `margin-top: var(--spacing-${mt});`}
				${mr && `margin-right: var(--spacing-${mr});`}
				${ml && `margin-left: var(--spacing-${ml});`}
				${mb && `margin-bottom: var(--spacing-${mb});`}
				@media(min-width: 1200px) {
					${colspanXL !== "auto" && `
						width: ${(colspanXL / 24) * 100}%;
						flex: 0 0 ${(colspanXL / 24) * 100}%;
					`};
				}
			`}
			{...rest}
		>
			{children}
		</As>
	)
}

export default Flexbox;
