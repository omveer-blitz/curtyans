import { SerializedStyles } from "@emotion/react";
import { Spacing } from "atoms/types";

export type CardProps = {
	as?: React.ElementType;
	size?: Spacing | 'collapsed';
	mt?: Spacing;
	mb?: Spacing;
	ml?: Spacing;
	mr?: Spacing;
	css?: SerializedStyles;

}
