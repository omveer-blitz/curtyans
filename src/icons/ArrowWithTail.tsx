import { IconProps } from "./types";
import { css } from "@emotion/react";

type ArrowProps = IconProps & {
	direction: 'up' | 'down' | 'left' | 'right';
}

const stylesByDirection = {
	up: css`
		transform: rotateZ(90deg);
		transition: all .5s linear;
	`,
	down: css`
		transform: rotateZ(-90deg);
		transition: all .5s linear;
	`,
	left: css`
		transform: rotateZ(0);
		transition: all .5s linear;
	`,
	right: css`
		transform: rotateZ(180deg);
		transition: all .5s linear;
	`
}

export default (props: ArrowProps): JSX.Element => {
	const { width = 20, height = 20, direction = 'left', ...rest } = props;
	return (
		<svg css={stylesByDirection[direction]} width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
			<path fillRule="evenodd" clipRule="evenodd" d="M2.48828 8.0044C2.48828 7.72826 2.71214 7.5044 2.98828 7.5044L13.9883 7.5044C14.2644 7.5044 14.4883 7.72826 14.4883 8.0044C14.4883 8.28054 14.2644 8.5044 13.9883 8.5044L2.98828 8.5044C2.71214 8.5044 2.48828 8.28054 2.48828 8.0044Z" fill="#1D2025"/>
			<path fillRule="evenodd" clipRule="evenodd" d="M8.36412 3.17236C8.54751 3.37882 8.5288 3.69485 8.32234 3.87823L3.70591 7.97866L8.32465 12.1326C8.52997 12.3173 8.54672 12.6334 8.36206 12.8388C8.1774 13.0441 7.86126 13.0608 7.65594 12.8762L2.68028 8.40118L3.01464 8.02942L3.04472 7.99597M3.01464 8.02942L2.68028 8.40118C2.42561 8.17214 2.42744 7.77671 2.68296 7.54975L7.65825 3.13057C7.86471 2.94719 8.18074 2.9659 8.36412 3.17236" fill="#1D2025"/>
		</svg>
	)
}
