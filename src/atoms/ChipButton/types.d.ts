export type ChipButtonProps = {
	items: {
		label: string;
		value: string;
	}[];
	value?: string;
	onChange?: (updatedValue: string) => void;
}
