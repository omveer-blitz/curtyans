import { SerializedStyles } from "@emotion/react";
import { Spacing, ValueType } from "atoms/types";

export type CheckboxProps = React.ClassAttributes<HTMLInputElement> & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value'> & {
	css?: SerializedStyles;
} & {
	mt?: Spacing;
	mb?: Spacing;
	ml?: Spacing;
	mr?: Spacing;
	value: ValueType;
	defaultChecked?: boolean;
	onChange?: (value: ValueType, checked: boolean, event: React.ChangeEvent<HTMLInputElement>) => void;
}
