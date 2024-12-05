import React, { PropsWithChildren } from "react";
import { useInView } from "react-intersection-observer";
import { AnimatedProps } from "./types";
import { keyframes, css as emotionCSS } from "@emotion/react";
import ResponsiveDiv from "atoms/ResponsiveDiv";

const animations = {
	fadeIn: {
		keyframeStyle: keyframes`
			0% {
				opacity: 0.01;
			}

			to {
				opacity: 1;
			}
		`,
		baseStyle: emotionCSS`
			opacity: 0.01;
			will-change: opacity;
			perspective: 1000;
		`
	},
	fadeOut: {
		keyframeStyle: keyframes`
			0% {
				opacity: 1;
			}

			to {
				opacity: 0;
			}
		`,
		baseStyle: emotionCSS`
			opacity: 1;
			will-change: opacity;
			perspective: 1000;
		`
	},
	fadeInUp: {
		keyframeStyle: keyframes`
			from {
				opacity: 0.01;
				-webkit-transform: translate3d(0, 12px, 0);
				transform: translate3d(0, 12px, 0);
			}

			to {
				opacity: 1;
				-webkit-transform: translate3d(0, 0, 0);
				transform: translate3d(0, 0, 0);
			}
		`,
		baseStyle: emotionCSS`
			opacity: 0.01;
			will-change: opacity, transform;
			perspective: 1000;
		`
	},
	slideOutLeft: {
		keyframeStyle: keyframes`
			from {
				transform: translate3d(0,0,0);
			}

			to {
				transform: translate3d(-100%,0,0);
			}
		`,
		baseStyle: emotionCSS`
			will-change: transform;
			perspective: 1000;
		`
	},
	slideOutRight: {
		keyframeStyle: keyframes`
			from {
				transform: translate3d(0,0,0);
			}

			to {
				transform: translate3d(100%,0,0);
			}
		`,
		baseStyle: emotionCSS`
			will-change: transform;
			perspective: 1000;
		`
	},
	zoomIn: {
		keyframeStyle: keyframes`
			from {
				opacity: 0.01;
				transform: scale3d(0.7,0.7,1);
			}

			to {
				opacity: 1;
				transform: scale3d(1,1,1);
			}
		`,
		baseStyle: emotionCSS`
			opacity: 0.01;
			will-change: opacity, transform;
			perspective: 1000;
		`
	},
}

export default (props: PropsWithChildren<AnimatedProps>): JSX.Element => {
	const {
		as: As = 'div',
		animation = 'fadeIn',
		duration = '1',
		timingFunction = 'linear',
		delay = 0,
		iteration = 1,
		trigger = 'auto',
		stop = false,
		animationOnHover = 'none',
		children
	} = props;

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0
	});

	const [animationEnded, setAnimationEnded] = React.useState(false);

	const shouldAnimationStartOnEntry = trigger === 'inview' && !stop;
	const shouldAnimationStartAutomatically = trigger === 'auto' && !stop;

	const onAnimationEndHandler = React.useCallback((event) => {
		setAnimationEnded(true);
		event.stopPropagation();
	}, []);

	const animationPlayStateStyle = React.useMemo(() => {
		if(animationOnHover === 'none') return '';
		if(animationOnHover === 'pause') return `
			&:hover {
				animation-play-state: paused;
			}
		`;
		if(animationOnHover === 'stop') return `
			animation: unset;
		`;
		return '';

	}, [animationOnHover])

	if (shouldAnimationStartAutomatically) {
		return (
			<As
				data-animation={true}
				ref={ref}
				css={emotionCSS`
					${!animationEnded && animations[animation].baseStyle};
					${props.passedCSS};
					${!animationEnded && emotionCSS`
						animation-name: ${animations[animation].keyframeStyle};
						animation-duration: ${duration}s;
						animation-timing-function: ${timingFunction};
						animation-delay: ${delay}s;
						animation-iteration-count: ${iteration};
						animation-fill-mode: forwards;
						${animationPlayStateStyle};
					`}
				`}
				onAnimationEnd={onAnimationEndHandler}
			>
				{children}
			</As>
		)
	}

	if (shouldAnimationStartOnEntry) {
		return (
			<As
				data-animation={true}
				ref={ref}
				css={emotionCSS`
					${props.passedCSS};
					${!animationEnded && animations[animation].baseStyle};
					${inView && !animationEnded && emotionCSS`
							animation-name: ${animations[animation].keyframeStyle};
							animation-duration: ${duration}s;
							animation-timing-function: ${timingFunction};
							animation-delay: ${delay}s;
							animation-iteration-count: ${iteration};
							animation-fill-mode: forwards;
					`}
				`}
				onAnimationEnd={onAnimationEndHandler}
			>
				{children}
			</As>
		)
	}

	return <ResponsiveDiv css={props.passedCSS}>{children}</ResponsiveDiv>;
}
