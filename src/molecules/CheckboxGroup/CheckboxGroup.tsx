import React from "react";
import { CheckboxGroupProps } from "./types";
import useControlled from "hooks/useControlled";
import { CheckboxGroupContext } from "context/CheckboxGroupContext";

function CheckboxGroup<T extends string | number>(props: React.PropsWithChildren<CheckboxGroupProps<T>>) {
	const { defaultValue, value: propsValue, onChange, name, children } = props;

	// just a glorify way to use useState
	// useRef inside useControlled is used to keep track of whether defaultValue
	// was supplied or not, making it controlled or uncontrolled
	const _useControlled = useControlled<T[]>(propsValue, defaultValue);

	const value = _useControlled[0] as T[];
	const setValue = _useControlled[1] as ((nextValue: T[]) => void);
	const isControlled = _useControlled[2] as boolean;


	const handleChange = React.useCallback((itemValue: T, itemChecked: boolean, event) => {
		let nextValue = value;

		// if checkbox is clicked, then push this to array
		if(itemChecked) {
			nextValue.push(itemValue);
		} else {
			nextValue = nextValue.filter(v => v !== itemValue);
		}
		setValue(nextValue);

		if(onChange) {
			onChange(nextValue, event);
		}
	}, [onChange, setValue, value]);

	const contextValue = React.useMemo(() => {
		return {
			onChange: handleChange,
			value,
			name,
		}
	}, [handleChange, isControlled, value, name]);

	return (
		<CheckboxGroupContext.Provider value={contextValue}>
			{children}
		</CheckboxGroupContext.Provider>
	)
}

export default CheckboxGroup;
