import React from "react";
import { css } from "@emotion/react";
import { ChipButtonProps } from "./types";
import useControlled from "hooks/useControlled";


const styles = {
	chipContainer: css`
		display: flex;
		flex-direction: row;
		align-items: center;
		border: 2px solid var(--color-flamingo);
		border-right: 0;
		border-radius: var(--spacing-sm);
	`,
	base: css`
		font-family: var(--font-family-heading7);
		font-size: var(--font-size-heading7);
		font-weight: var(--font-weight-heading7);
		line-height: var(--font-lineheight-heading7);
		padding: var(--spacing-md) var(--spacing-xl);
	`,
	primaryType: css`
		border-right: 2px solid var(--color-flamingo);
		background-color: var(--color-flamingo);
		color: var(--color-white);
		transition: all .3s;
		cursor: pointer;
	`,
	secondaryType: css`
		border-right: 2px solid var(--color-flamingo);
		background-color: transparent;
		color: var(--color-flamingo);
		transition: all .3s;
		cursor: pointer;

		&:hover {
			background-color: var(--color-flamingo);
			color: var(--color-white);
		}
	`,
	disabled: css`
    background-color: var(--color-dusty-gray);
		border-color: var(--color-dusty-gray);
    color: white;
		cursor: not-allowed !important;
		&:hover {
    	background-color: var(--color-dusty-gray);
			border-color: var(--color-dusty-gray);
		}
	`,
}

export default (props: ChipButtonProps) => {
	const { items, onChange } = props;
	const [value, setValue] = useControlled(props.value, '');

	const onClickHandler = React.useCallback((updatedValue: string, event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		(setValue as ((nextValue: string | undefined) => void))(updatedValue);
		if(onChange) {
			onChange(updatedValue);
		}
		event.stopPropagation();
	}, [value, onChange])

	return (
		<div
			css={styles.chipContainer}
		>
			{items.map((item) => (
				<div
					role="button"
					key={item.value}
					css={css`
						${styles.base};
						${item.value === value ? styles.primaryType : styles.secondaryType}
					`}
					onClick={(event) => onClickHandler(item.value, event)}
				>
					{item.label}
				</div>
			))}
		</div>
	)
}
