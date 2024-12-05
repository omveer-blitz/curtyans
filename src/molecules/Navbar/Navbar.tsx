import React from "react";
import { css } from "@emotion/react";
import Flexbox from "atoms/Flexbox";
import { NavbarProps } from "./types";
import Button from "atoms/Button";
import HashLink from "atoms/HashLink";
import Link from "atoms/Link";


const navItems = [
	{ label: "Explore Our Collection", url: "/collection", type: "link" },
	{ label: "About Us", url: "/about-us", type: "link" },
	{ label: "Help", url: "/faq", type: "link" },
]

const styles = {
	navItemHolderDesktop: css`
		padding-left: var(--spacing-sm);
	`,
	navItemDesktop: css`
		padding: var(--spacing-md) var(--spacing-lg);
	`,
	navItemHolderMobile: css`
		padding: var(--spacing-xs) 0;
	`,
	navItemMobile: css`
		padding: var(--spacing-md) var(--spacing-lg);
	`,
}

export default (props: NavbarProps): JSX.Element => {
	const { type } = props;

	if (type === 'desktop') return (
		<Flexbox
			as="nav"
			justify="flex-start"
			align="center"
			direction="row"
		>
			{navItems.map(
				item => (
					<React.Fragment key={item.label}>
						{item.type === "link" ? (<div
							css={styles.navItemHolderDesktop}
						>
							<div css={styles.navItemDesktop}>
								<Link
									to={item.url}
								>
									<b>{item.label}</b>
								</Link>
							</div>
						</div>) : (
							<Button to={item.url} type="primary">
								{item.label}
							</Button>
						)}
					</React.Fragment>
				)
			)}
		</Flexbox>
	)

	if (type === 'mobile') return (

		<Flexbox
			as="nav"
			justify="flex-start"
			align="flex-start"
			direction="column"
		>
			{navItems.filter(item => item.type === 'link').map(
				item => (
					<React.Fragment key={item.label}>
						{item.type === "link" ? (<div
							css={styles.navItemHolderMobile}
							key={item.label}
						>
							<div css={styles.navItemMobile}>
								<Link
									to={item.url}
								>
									<b>{item.label}</b>
								</Link>
							</div>
						</div>) : (
							<Button to={item.url} type="primary">
								{item.label}
							</Button>
						)}
					</React.Fragment>
				)
			)}
		</Flexbox>
	)

	return <></>;
}
