import { IconProps } from "./types";

export default (props: IconProps): JSX.Element => {
	const { width = 16, height = 16 } = props;
	return (
		<svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
			<path fillRule="evenodd" clipRule="evenodd" d="M1.12128 12.6073L7.03818 2.49412C7.42212 1.83789 8.45558 1.83462 8.84454 2.48841L14.8754 12.6255C15.2429 13.2433 14.7537 13.9942 13.9809 13.9969C11.7664 14.0047 9.88309 13.9963 7.99977 13.988C6.12108 13.9796 4.24239 13.9713 2.03498 13.979C1.25842 13.9817 0.7567 13.2305 1.12128 12.6073Z" stroke="#F44336"/>
			<path fillRule="evenodd" clipRule="evenodd" d="M8 5C8.27615 5 8.5 5.14924 8.5 5.33333L8.5 8.66667C8.5 8.85076 8.27615 9 8 9C7.72386 9 7.5 8.85076 7.5 8.66667L7.5 5.33333C7.5 5.14924 7.72386 5 8 5ZM8 12C8.41422 12 8.75001 11.6642 8.75001 11.25C8.75001 10.8358 8.41422 10.5 8 10.5C7.58579 10.5 7.25 10.8358 7.25 11.25C7.25 11.6642 7.58579 12 8 12Z" fill="#F44336"/>
		</svg>
	)
}
