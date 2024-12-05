import React from "react";

const useControlled = <T>(controlledValue: T, defaultValue: T | undefined) => {
	const controlledRef = React.useRef(false);
	controlledRef.current = controlledValue !== undefined;

	const [uncontrolledValue, setUncontrolledValue] = React.useState<T | undefined>(defaultValue);

	const value = controlledRef.current ? controlledValue : uncontrolledValue;

	const setValue = React.useCallback((nextValue: T | undefined) => {
		if(!controlledRef.current) {
			setUncontrolledValue(nextValue);
		}
	}, [controlledRef]);

	return [value, setValue, controlledRef.current];
}

export default useControlled;
