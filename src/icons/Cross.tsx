import { IconProps } from "./types";

export default (props: IconProps): JSX.Element => {
	const { width = 16, height = 16, fill = 'var(--color-flamingo)' } = props;
	return (
		<svg xmlns="http://www.w3.org/2000/svg" height={height} width={width} viewBox="0 0 490 490">
			<polygon fill={fill} points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490   489.292,457.678 277.331,245.004 489.292,32.337 "/>
		</svg>

	)
}
