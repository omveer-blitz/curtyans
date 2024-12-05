import { SpinnerProps } from "./types"
import { css } from "@emotion/react";

const styles = {
	loaderWrapper: css`
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		z-index: 1;
		width: 100vw;
		height: 100vh;
		background-color: var(--color-flamingo0500);
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	`
}


const Spinner = (props: SpinnerProps) => {
	const { width = 120, height = 120 } = props;
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 120 120`} preserveAspectRatio="xMidYMid" width={width} height={height} css={css`shape-rendering: auto; display: block; background: transparent;`}>
			<g><circle strokeLinecap="round" fill="none" strokeDasharray="50.26548245743669 50.26548245743669" stroke="#9d0a02" strokeWidth="8" r="32" cy="50" cx="50">
				<animateTransform values="0 50 50;360 50 50" keyTimes="0;1" dur="1s" repeatCount="indefinite" type="rotate" attributeName="transform"></animateTransform>
			</circle><g></g></g></svg>
	)
	// return (
	// 	<img
	// 		css={css`
	// 			object-fit: contain;
	// 		`}
	// 		src="https://d2z53scj8veve3.cloudfront.net/shopdeck-home/loader-200px.gif"
	// 		width={width}
	// 		height={height}
	// 	/>
	// )
}

export const PageSpinner = () => (
	<div css={styles.loaderWrapper}>
		<Spinner />
	</div>
)

export default Spinner;
