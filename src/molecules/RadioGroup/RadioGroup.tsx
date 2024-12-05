import React from "react";
import { RadioGroupProps } from "./types";
import useControlled from "hooks/useControlled";
import { RadioGroupContext } from "context/RadioGroupContext";


function RadioGroup<T extends string | number>(props: React.PropsWithChildren<RadioGroupProps<T>>) {
	const { defaultValue, value: propsValue, onChange, name, children } = props;

	// just a glorify way to use useState
	// useRef inside useControlled is used to keep track of whether defaultValue
	// was supplied or not, making it controlled or uncontrolled
	const _useControlled = useControlled<T>(propsValue, defaultValue);

	const value = _useControlled[0] as T;
	const setValue = _useControlled[1] as ((nextValue: T) => void);
	const isControlled = _useControlled[2] as boolean;


	const handleChange = React.useCallback((nextValue: T, event) => {
		setValue(nextValue);
		if(onChange) {
			onChange(nextValue, event);
		}
	}, [onChange, setValue]);

	const contextValue = React.useMemo(() => {
		return {
			onChange: handleChange,
			value,
			name,
		}
	}, [handleChange, isControlled, value, name]);

	return (
		<RadioGroupContext.Provider value={contextValue}>
			{children}
		</RadioGroupContext.Provider>
	)
}

export default RadioGroup;
