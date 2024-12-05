import React from "react";
import { css } from "@emotion/react";

import { DividerProps } from "./types";


export default (props: DividerProps): JSX.Element => {
	const { color = 'flamingo', spacing = 'lg' } = props;
	return (
		<div
			css={css`
				width: 100%;
				height: 1px;
				background-color: var(--color-${color});
				margin: var(--spacing-${spacing}) 0;
			`}
		>
		</div>
	)
}
