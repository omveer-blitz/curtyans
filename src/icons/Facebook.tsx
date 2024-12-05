import { IconProps } from "./types";

export default (props: IconProps): JSX.Element => {
	const { width = 24, height = 24 } = props;
	return (
		<svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
			<g id="Socials">
				<g clipPath="url(#clip0_293_7777)">
					<rect width={width} height={height} rx="12" fill="white" />
					<path id="facebook" d="M24 12C24 5.37264 18.6274 0 12 0C5.37264 0 0 5.37264 0 12C0 17.6275 3.87456 22.3498 9.10128 23.6467V15.6672H6.62688V12H9.10128V10.4198C9.10128 6.33552 10.9498 4.4424 14.9597 4.4424C15.72 4.4424 17.0318 4.59168 17.5685 4.74048V8.06448C17.2853 8.03472 16.7933 8.01984 16.1822 8.01984C14.2147 8.01984 13.4544 8.76528 13.4544 10.703V12H17.3741L16.7006 15.6672H13.4544V23.9122C19.3954 23.1946 24 18.1354 24 12Z" fill="var(--color-flamingo)" />
				</g>
			</g>
			<defs>
				<clipPath id="clip0_293_7777">
					<rect width={width} height={height} rx="12" fill="white" />
				</clipPath>
			</defs>
		</svg>
	)
}
