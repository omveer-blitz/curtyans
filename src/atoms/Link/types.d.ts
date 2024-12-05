import { LinkProps } from "react-router-dom";

export type SDLinkProps = LinkProps & {
	underline?: boolean;
	type?: 'primary' | 'secondary';
}
