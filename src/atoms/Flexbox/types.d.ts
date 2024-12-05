import { SerializedStyles } from "@emotion/react";
import { Spacing } from "atoms/types";

export type FlexboxProps = {
	direction: 'row' | 'column' | 'row-reverse' | 'column-reverse';
	justify: 'flex-start' | 'center' | 'flex-end' | 'start' | 'end' | 'space-around' | 'space-between' | 'space-evenly';
	align: 'flex-start' | 'center' | 'flex-end' | 'baseline' | 'stretch';
	as?: React.ElementType;
	css?: SerializedStyles;
	wrap?: "wrap" | "nowrap" | "wrap-reverse" | "unset";
	gap?: number;
	mt?: Spacing;
	mb?: Spacing;
	ml?: Spacing;
	mr?: Spacing;

}

export type FlexboxItemProps = {
	colspan: number | "auto";
	colspanXL?: number | "auto";
	colspanMD?: number | "auto";
	as?: React.ElementType;
	css?: SerializedStyles;
	mt?: Spacing;
	mb?: Spacing;
	ml?: Spacing;
	mr?: Spacing;
}
