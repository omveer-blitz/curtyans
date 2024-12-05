import React, { PropsWithChildren } from "react";
import { css } from "@emotion/react";
import { ButtonProps } from "./types";
import { useNavigate } from "react-router-dom";

const styles = {
	normalize: css`
		position: relative;
		appearance: none;
		overflow: hidden;
		outline: 0px;
		&:hover, &:active, &:focus {
			outline: 0px;
		}
		border: none;
		cursor: pointer;
	`,
	base: css`
		font-family: var(--font-family-heading7);
		font-size: var(--font-size-heading7);
		font-weight: var(--font-weight-heading7);
		line-height: var(--font-lineheight-heading7);
		padding: var(--spacing-md) var(--spacing-xl);
		border-radius: var(--spacing-sm);
	`,
	primaryType: css`
		border: 2px solid var(--color-flamingo);
		background-color: var(--color-flamingo);
		color: var(--color-white);
		transition: all .3s;
		box-shadow:  0 5px #3f0401;

		&:hover {
			//background-color: var(--color-mine-shaft);
			//border-color: var(--color-mine-shaft);
			//color: var(--color-white);
			transform: translateY(5px);
			box-shadow: none;
		}

		&:hover * {
			fill: var(--color-white);
		}
	`,
	secondaryType: css`
		border: 2px solid var(--color-flamingo);
		background-color: transparent;
		color: var(--color-flamingo);
		transition: all .3s;
		box-shadow: 0 5px #666666;

		&:hover {
			//background-color: var(--color-flamingo);
			//color: var(--color-white);
			transform: translateY(5px);
			box-shadow: none;
		}
	`,
	disabled: css`
    background-color: var(--color-dusty-gray);
		border-color: var(--color-dusty-gray);
    color: white;
		cursor: not-allowed !important;
		box-shadow: none !important;
		transform: translateY(5px);

		&:hover {
    	background-color: var(--color-dusty-gray);
			border-color: var(--color-dusty-gray);
			transform: translateY(5px);
		}
	`,
	fullWidth: css`
		width: 100%;
	`
}

const noOp = () => {}

const Button = (props: PropsWithChildren<ButtonProps>): JSX.Element => {
	const { type, full = false, to, navigateOptions, onClick, disabled } = props;
	const navigate = useNavigate();

	const onClickHandler = React.useCallback((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		to && navigate(to, navigateOptions);
		onClick && onClick(event);
	}, [onClick, navigate, to, navigateOptions]);

	return (
		<button
			css={css`
				${styles.normalize};
				${styles.base};
				${full && styles.fullWidth};
				${styles[`${type}Type`]};
				${disabled && styles.disabled};
				${props.passedCss && props.passedCss};
			`}
			onClick={disabled ? noOp : onClickHandler}
			disabled={disabled}
		>
			{props.children}
		</button>
	)
}

export default Button;
