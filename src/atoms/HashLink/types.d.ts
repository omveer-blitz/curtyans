export type HashLinkProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
	to?: string;
	type?: 'primary' | 'secondary';
}
