import { SerializedStyles } from "@emotion/react"
import { Spacing } from "atoms/types";

export type ResponsiveDivProps =  {
	as?: React.ElementType;
	xs?: SerializedStyles;
	xl?: SerializedStyles;
	css?: SerializedStyles;
	onClick?: React.MouseEventHandler<HTMLDivElement>;
	onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
	onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
	onMouseMove?: React.MouseEventHandler<HTMLDivElement>;
	mt?: Spacing;
	mb?: Spacing;
	ml?: Spacing;
	mr?: Spacing;
}
