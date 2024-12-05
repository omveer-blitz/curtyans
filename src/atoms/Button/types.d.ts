import { SerializedStyles } from "@emotion/react";
import { NavigateOptions } from "react-router-dom";

export type ButtonProps = {
	type: 'primary' | 'secondary';
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	full?: boolean;
	to?: string;
	navigateOptions?: NavigateOptions;
	disabled?: boolean;
	passedCss?: SerializedStyles;
}
