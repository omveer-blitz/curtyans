export type CheckboxGroupProps<T> = {
	name?: string;
	defaultValue?: T[];
	value: T[];
	onChange: (value: T[], event: React.ChangeEvent<HTMLInputElement>) => void;
}
