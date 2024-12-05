import React from "react";

export type CheckboxGroupContextType<T = string | number> = {
	name?: string;
	value?: T[];
	onChange?: (itemValue: T, itemChecked: boolean, event: React.ChangeEvent<HTMLInputElement>) => void;
}
export const CheckboxGroupContext = React.createContext<CheckboxGroupContextType | undefined>(undefined);
