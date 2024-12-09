import React from "react";
import { css } from "@emotion/react";
import Flexbox from "atoms/Flexbox";
import Text from "atoms/Text";
import { FlexboxItem } from "atoms/Flexbox/Flexbox";
import Navbar from "molecules/Navbar";
import ResponsiveDiv from "atoms/ResponsiveDiv";
import Button from "atoms/Button";
import Animated from "molecules/Animated";
import Hamburger from "icons/Hamburger";
import CurtyansLogo from "molecules/CurtyansLogo";

const styles = {
	headerContainer: css`
		max-width: var(--max-desktop-width);
		margin: 0 auto;
		padding: var(--spacing-md) var(--spacing-lg);
		position: relative;
		background-color: var(--color-white);
		z-index: 5;
	`,
	headerContainerXL: css`
		padding: var(--spacing-md) var(--spacing-lg);
	`,
	navdropdownOverlay: css`
		//width: 97vw;
		height: 0;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		overflow: hidden;
		transition: all 500ms;
		z-index: 4;
	`,
	navdropdownContainer: css`
		padding: var(--spacing-lg);
		transition: all 500ms;
		background-color: var(--color-white);
		transform: translateY(-100%);
		border-bottom: 1px solid var(--color-dusty-gray);
	`,
}


const Header = () => {
	const [isOpened, setOpen] = React.useState(false);

	return (
		<ResponsiveDiv
			css={css`
				min-height: 78px;
			`}
		>
			<ResponsiveDiv
				css={css`
					position: fixed;
					left: 0;
					right: 0;
					z-index: 100;
					background-color: var(--color-white);
					box-shadow: 0 4px 6px -6px var(--color-black);
				`}
			>
				<ResponsiveDiv
					css={styles.headerContainer}
					xl={styles.headerContainerXL}
					as="header"
				>
					<Flexbox
						direction="row"
						justify="space-between"
						align="center"
						wrap="nowrap"
					>
						<FlexboxItem colspan={"auto"}>
							<ResponsiveDiv
								xs={css`
										svg {
											width: 140px;
										}

									`}
								xl={css`
										svg {
											width: 203px;
										}
									`}
							>
								<CurtyansLogo />
							</ResponsiveDiv>
						</FlexboxItem>
						<FlexboxItem colspan={"auto"}>
							<ResponsiveDiv
								xs={css`
										display: none;
									`}
								xl={css`
										display: block;
									`}
							>
								<Navbar type="desktop" />
							</ResponsiveDiv>
						</FlexboxItem>
						<FlexboxItem colspan={"auto"}>
							<Flexbox direction="row" justify="space-between" align="center" gap={8} wrap="nowrap">
								<Button to={"/book-visit-form"} type="primary">
									{"Book a Free Consultation"}
								</Button>
								<ResponsiveDiv
									xl={css`
											display: none;
											cursor: pointer;
										`}
									onClick={() => setOpen(!isOpened)}
								>
									<Hamburger width={38} height={38} />
								</ResponsiveDiv>
							</Flexbox>
						</FlexboxItem>
					</Flexbox>
				</ResponsiveDiv>
			</ResponsiveDiv>
			<ResponsiveDiv
				as="section"
				css={css`
					${styles.navdropdownOverlay}
					${isOpened && `height: 100vh;`}
				`}
				onClick={() => {
					const newState = !isOpened;
					setOpen(newState);
					document.body.style.overflow = newState ? 'hidden' : 'unset';
				}}
			>
				<div
					css={css`
						${styles.navdropdownContainer}
						${isOpened && `transform: translateY(64px);`}
					`}
				>
					<Navbar type="mobile" />
				</div>
			</ResponsiveDiv>
		</ResponsiveDiv>
	)
}

export default Header;
