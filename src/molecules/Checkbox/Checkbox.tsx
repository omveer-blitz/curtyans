import React, { PropsWithChildren } from "react";
import { css } from "@emotion/react";

import Text from "atoms/Text";
import Flexbox from "atoms/Flexbox";
import { CheckboxProps } from "./types";
import useControlled from "hooks/useControlled";
import { ValueType } from "atoms/types";
import { CheckboxGroupContext } from "context/CheckboxGroupContext";
import ResponsiveDiv from "atoms/ResponsiveDiv";

const styles = {
	labelStyle: css`
		cursor: pointer;
	`,
	checkbox: css`
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
		border-radius: 2px;
		border: 1px solid var(--color-flamingo);

		display: grid;
		place-content: center;
		overflow: hidden;
		cursor: pointer;
		position: relative;

		&:disabled {
			background-color: var(--color-dusty-gray);
			border-color: var(--color-dusty-gray);
		}

		&::before {
			border-radius: 2px;
			content: '';
			width: 16px;
			height: 16px;
			transform: scale(0);
  		transition: 60ms transform ease-in-out;
  		background-color: var(--color-flamingo);
		}

		&::after {
			content: '';
			width: 4px;
			height: 8px;
			left: 5px;
			top: 1px;
			border-bottom: 1px solid var(--color-white);
			border-right: 1px solid var(--color-white);
			position: absolute;
			transform: scale(0) rotate(45deg);
  		transition: 60ms transform ease-in-out;
		}

		&:checked::before {
			transform: scale(1);
		}

		&:checked::after {
			transform: scale(1) rotate(45deg);
		}

	`
}

export default (props: PropsWithChildren<CheckboxProps>): JSX.Element => {
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

	const checkboxGroupContext = React.useContext(CheckboxGroupContext);

	const _useControlled = useControlled(propsChecked, defaultChecked);
	const selfChecked = _useControlled[0] as boolean;
	const setSelfChecked = _useControlled[1] as ((nextValue: boolean) => void);
	// Either <Checkbox> is checked itself or by parent <CheckboxGroup>
	const selfControlled = _useControlled[2] as boolean;

	const checked = React.useMemo(() => {
		// if this <Checkbox> does not receive CheckboxGroupContext
		// then return self's checked flag
		if (!checkboxGroupContext) return selfChecked;

		// otherwise look into values array to find whether propsValue exists in it or not
		return checkboxGroupContext.value ? checkboxGroupContext.value.some(v => v === propsValue) : false;
	}, [checkboxGroupContext, selfChecked, propsValue]);

	const isControlled = checkboxGroupContext ? true : selfControlled;
	const htmlInputProps = { ...rest };
	if (isControlled && checkboxGroupContext) {
		htmlInputProps.name = checkboxGroupContext.name;
	}

	const onChangeHandler = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
		const nextChecked = event.target.checked;
		if (disabled || readOnly) return;

		setSelfChecked(nextChecked);

		if (propsOnChange) {
			return propsOnChange(propsValue, nextChecked, event);
		}
		if (checkboxGroupContext && checkboxGroupContext.onChange) {
			return checkboxGroupContext.onChange(propsValue, nextChecked, event);
		}
	}, [propsOnChange, propsValue, setSelfChecked, selfChecked, checkboxGroupContext, disabled, readOnly]);

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
					type="checkbox"
					onClick={(event) => event.stopPropagation()}
					css={styles.checkbox}
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
