import { IconProps } from "./types";
import { css } from "@emotion/react";

type ArrowProps = IconProps & {
	direction: 'up' | 'down' | 'left' | 'right';
}

const stylesByDirection = {
	up: css`
		transform: rotateZ(180deg);
		transition: all .5s linear;
	`,
	down: css`
		transform: rotateZ(0deg);
		transition: all .5s linear;
	`,
	left: css`
		transform: rotateZ(90deg);
		transition: all .5s linear;
	`,
	right: css`
		transform: rotateZ(-90deg);
		transition: all .5s linear;
	`
}

export default (props: ArrowProps): JSX.Element => {
	const { width = 20, height = 20, direction = 'down' } = props;
	return (
		<svg css={stylesByDirection[direction]} width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
			<path fillRule="evenodd" clipRule="evenodd" d="M2.66544 5.82459C2.89938 5.57078 3.29478 5.55467 3.54859 5.78861L9.95976 11.6979L16.4543 5.78599C16.7095 5.55363 17.1048 5.57219 17.3372 5.82745C17.5696 6.08271 17.551 6.478 17.2957 6.71036L10.459 12.9338L10.0382 12.4716L9.9914 12.4201M10.0382 12.4716L10.459 12.9338C10.1748 13.1924 9.73588 13.1915 9.45293 12.9307L2.70142 6.70774C2.44761 6.4738 2.4315 6.0784 2.66544 5.82459" fill="#4764CD" />
		</svg>
	)
}
