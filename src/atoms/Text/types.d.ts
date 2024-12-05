import { Color, FontStyleGuide, Spacing, TextAlign, TextTransform, TextWordWrap, TextWrap } from "../types";


export type TextProps = {
	as?: React.ElementType;
	fontStyleGuide: FontStyleGuide;
	fontStyleGuideXL?: FontStyleGuide;
	align?: TextAlign;
	alignXL?: TextAlign;
	color?: Color;
	underline?: boolean;
	strikeThrough?: boolean;
	textTransform?: TextTransform;
	textWrap?: TextWrap;
	wordWrap?: TextWordWrap;
	mt?: Spacing;
	mb?: Spacing;
	ml?: Spacing;
	mr?: Spacing;
	primaryGradient?: boolean;
	ellipsis?: string | 'auto';
}
