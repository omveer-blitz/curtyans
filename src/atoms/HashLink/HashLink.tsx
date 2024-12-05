import React, { PropsWithChildren } from "react";
import { css } from "@emotion/react";
import { Link, LinkProps } from "react-router-dom";
import { HashLinkProps } from "./types";

const linkStyle = css`
	color: var(--color-mine-shaft);
	font-size: var(--font-size-body4);
	font-weight: var(--font-weight-body4);
	line-height: var(--font-lineheight-body4);
	transition: color .35s;

	&:hover {
		color: var(--color-flamingo);
	}
`;

const secondaryLinkStyle = css`
color: var(--color-white);
font-size: var(--font-size-body4);
font-weight: var(--font-weight-body4);
line-height: var(--font-lineheight-body4);
transition: color .35s;

&:hover {
	color: var(--color-flamingo);
}
`;

export default (props: PropsWithChildren<HashLinkProps>): JSX.Element => {
	const { to, type = 'primary', ...rest} = props;
	return (
		<a
			css={type === 'primary' ? linkStyle : secondaryLinkStyle}
			href={to}
			{...rest}
		>
			{props.children}
		</a>
	)
}
