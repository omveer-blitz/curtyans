import React, { PropsWithChildren } from "react";
import { css } from "@emotion/react";
import { PageContainerType } from "./types";

const style = css`
	padding: 40px var(--spacing-md);

	@media(min-width: 1200px) {
		padding: 40px var(--spacing-lg);
		max-width: var(--max-desktop-width);
		margin-left: auto;
		margin-right: auto;
	}
`

export default React.forwardRef((props: PropsWithChildren<PageContainerType>, ref): JSX.Element => {
	const { children, ...rest } = props;
	const As = 'section';
	return (
		<As
			css={style}
			ref={ref as any}
			{...rest}
		>
			{children}
		</As>
	)
})
