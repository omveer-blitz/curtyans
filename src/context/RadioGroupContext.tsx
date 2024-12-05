import React from "react";

export type RadioGroupContextType<T = string | number> = {
	name?: string;
	value?: T;
	onChange?: (itemValue: T, event: React.ChangeEvent<HTMLInputElement>) => void;
}
export const RadioGroupContext = React.createContext<RadioGroupContextType | undefined>(undefined);
