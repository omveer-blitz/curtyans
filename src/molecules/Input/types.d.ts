import { Spacing } from "atoms/types";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
	title?: string;
	required?: boolean;
	leftAddon?: JSX.Element;
	validationType?: 'success' | 'warning' | 'error' | 'none';
	validationMessage?: string;
	fullWidth?: boolean;
	mt?: Spacing;
	mb?: Spacing;
	ml?: Spacing;
	mr?: Spacing;
}
