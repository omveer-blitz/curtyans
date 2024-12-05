import React, { PropsWithChildren } from "react";
import { css as emotionCSS } from "@emotion/react";
import { ResponsiveDivProps } from "./types";

export default React.forwardRef((props: PropsWithChildren<ResponsiveDivProps>, ref): JSX.Element => {
	const { as: As = 'div', xs, xl, mt, mr, ml, mb, css, children, ...rest } = props;

	return (
		<As
			css={emotionCSS`
				${css && css};
				${xs && xs};
				${mt && `margin-top: var(--spacing-${mt});`}
				${mr && `margin-right: var(--spacing-${mr});`}
				${ml && `margin-left: var(--spacing-${ml});`}
				${mb && `margin-bottom: var(--spacing-${mb});`}

				@media(min-width: 1200px) {
					${xl && xl};
				}
			`}
			ref={ref}
			{...rest}
		>
			{children}
		</As>
	)
})
