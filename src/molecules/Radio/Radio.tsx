import React, { PropsWithChildren } from "react";
import { css } from "@emotion/react";

import Text from "atoms/Text";
import Flexbox from "atoms/Flexbox";
import { RadioProps } from "./types";

import useControlled from "hooks/useControlled";
import { RadioGroupContext } from "context/RadioGroupContext";

const styles = {
	labelStyle: css`
		cursor: pointer;
	`,
	radio: css`
		/* Add if not using autoprefixer */
		-webkit-appearance: none;
		appearance: none;
		/* For iOS < 15 to remove gradient background */
		background-color: #fff;
		/* Not removed via appearance */
		margin: 0;

		width: 16px;
		height: 16px;
		background-color: var(--color-white);
		border-radius: 50%;
		border: 1px solid var(--color-flamingo);

		display: grid;
		place-content: center;
		overflow: hidden;
		cursor: pointer;

		&:disabled {
			background-color: var(--color-dusty-gray);
			border-color: var(--color-dusty-gray);
		}

		&::before {
			border-radius: 50%;
			content: '';
			width: 12px;
			height: 12px;
			transform: scale(0);
  		transition: 60ms transform ease-in-out;
  		box-shadow: inset 1em 1em var(--color-flamingo);
		}

		&:checked::before {
			transform: scale(1);
		}

	`
}

export default (props: PropsWithChildren<RadioProps>): JSX.Element => {
	const {
		children,
		value: propsValue,
		onChange: propsOnChange,
		checked: propsChecked,
		defaultChecked = false,
		disabled,
		readOnly,
		mt,
		ml,
		mr,
		mb,
		...rest
	} = props;

	const radioGroupContext = React.useContext(RadioGroupContext);

	const _useControlled = useControlled(
		radioGroupContext && radioGroupContext.value ? radioGroupContext.value === propsValue : propsChecked,
		defaultChecked
	);
	const checked = _useControlled[0] as boolean;
	const setChecked = _useControlled[1] as ((nextValue: boolean) => void);

	const onChangeHandler = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
		if (disabled || readOnly) return;

		setChecked(true);

		if (propsOnChange) {
			return propsOnChange(propsValue, true, event);
		}

		if (radioGroupContext && radioGroupContext.onChange) {
			radioGroupContext.onChange(propsValue, event);
		}

	}, [propsOnChange, radioGroupContext, propsValue, setChecked, disabled, readOnly]);

	const htmlInputProps = { ...rest };

	const isControlled = !!radioGroupContext;
	if(isControlled) {
		htmlInputProps[isControlled ? 'checked' : 'defaultChecked'] = checked;
	}
	if(isControlled && radioGroupContext.name) {
		htmlInputProps.name = radioGroupContext.name;
	}

	return (
		<label
			css={css`
				${styles.labelStyle};
				${mt && `margin-top: var(--spacing-${mt});`}
				${mr && `margin-right: var(--spacing-${mr});`}
				${ml && `margin-left: var(--spacing-${ml});`}
				${mb && `margin-bottom: var(--spacing-${mb});`}
			`}>
			<Flexbox direction="row" justify="flex-start" align="center">
				<input
					type="radio"
					onClick={(event) => event.stopPropagation()}
					css={styles.radio}
					value={propsValue}
					checked={checked}
					onChange={onChangeHandler}
					disabled={disabled}
					readOnly={readOnly}
					{...htmlInputProps}
				/>
				<Text as="div" ml="sm" color="mine-shaft" fontStyleGuide="body4">{children}</Text>
			</Flexbox>
		</label>

	)
}
