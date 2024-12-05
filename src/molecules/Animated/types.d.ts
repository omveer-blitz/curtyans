import { SerializedStyles } from "@emotion/react";

export type AnimatedProps = {
	as?: React.ElementType;
	duration?: number;
	delay?: number;
	iteration?: number | 'infinite';
	timingFunction?: 'ease' | 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out';
	trigger: 'auto' | 'inview';
	animation: 'fadeIn' | 'fadeInUp' | 'slideOutLeft' | 'slideOutRight' | 'zoomIn' | 'fadeOut';
	stop?: boolean;
	passedCSS?: SerializedStyles;
	someKey?: string;
	animationOnHover?: 'stop' | 'pause' | 'none';
}
