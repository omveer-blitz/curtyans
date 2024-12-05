import { Spacing } from "atoms/types";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
	title?: string;
	required?: boolean;
	validationType?: 'success' | 'warning' | 'error' | 'none';
	validationMessage?: string;
	fullWidth?: boolean;
	mt?: Spacing;
	mb?: Spacing;
	ml?: Spacing;
	mr?: Spacing;
}
