import React, { PropsWithChildren } from "react";
import { css } from "@emotion/react";
import { WidgetContainerType } from "./types";

const style = css`
	padding: 40px var(--spacing-md);
	content-visibility: auto;
	contain-intrinsic-size: auto 300px;

	@media(min-width: 1200px) {
		padding: 40px var(--spacing-lg);
		max-width: var(--max-desktop-width);
		margin-left: auto;
		margin-right: auto;
	}
`;


export default React.forwardRef((props: PropsWithChildren<WidgetContainerType>, ref): JSX.Element => {
	const { children, enableBackground, ...rest } = props;
	const As = 'section';
	return (
		<As
			css={css`
				${enableBackground && css`
					background-color: var(--color-flamingo100);
				`}
			`}
			ref={ref as any}
			{...rest}
		>
			<div css={style}>
			{children}
			</div>
		</As>
	)
})
