import { IconProps } from "./types";
import { css } from "@emotion/react";

const hoveredStyle = css`
	&:hover {
		cursor: pointer;
	}
`

export default (props: IconProps): JSX.Element => {
	const { width = 48, height = 48 } = props;
	return (
		<svg css={hoveredStyle} width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect width={width} height={height} fill="white" />
			<path d="M7.5 24H40.5" stroke="var(--color-flamingo)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
			<path d="M7.5 12H40.5" stroke="var(--color-flamingo)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
			<path d="M7.5 36H40.5" stroke="var(--color-flamingo)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	)


}
