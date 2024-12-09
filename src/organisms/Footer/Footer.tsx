import React from "react";
import { css } from "@emotion/react";

import Text from "atoms/Text";
import HashLink from "atoms/HashLink";
import Flexbox from "atoms/Flexbox";
import { FlexboxItem } from "atoms/Flexbox/Flexbox";
import WidgetContainer from "atoms/WidgetContainer";
import ResponsiveDiv from "atoms/ResponsiveDiv";

import CurtyansLogo from "molecules/CurtyansLogo";

import LinkedIn from "icons/LinkedIn";
import Facebook from "icons/Facebook";
import YouTube from "icons/YouTube";
import Instagram from "icons/Instagram";
import LocationPin from "icons/LocationPin";
import Divider from "atoms/Divider";
import Link from "atoms/Link";
import Email from "icons/Email";
import Whatsapp from "icons/Whatsapp";


const styles = {
	footerWrapper: css`
		background-color: var(--color-flamingo100);
	`,
	addressBarWrapper: css`
		cursor: pointer;
	`,
}

const FindUsOnline = () => {
	return (
		<ResponsiveDiv mb="xxl">
			<Text color="mine-shaft" fontStyleGuide="body3" mb="md">Find Us Online</Text>
			<Flexbox direction="row" justify="start" align="center">
				<FlexboxItem colspan={"auto"} mr="md">
					<Link to="" target="_blank">
						<Facebook />
					</Link>
				</FlexboxItem>
				<FlexboxItem colspan={"auto"} mr="md">
					<Link to="" target="_blank">
						<YouTube />
					</Link>
				</FlexboxItem>
				<FlexboxItem colspan={"auto"} mr="md">
					<Link to="" target="_blank">
						<Instagram />
					</Link>
				</FlexboxItem>
			</Flexbox>
		</ResponsiveDiv>
	)
}

const AddressBar = () => {
	return (
		<>
			<Text color="mine-shaft" fontStyleGuide="body3" mb="md">We Are In</Text>
			<Flexbox direction="row" justify="flex-start" align="flex-start" mb="sm">
				<FlexboxItem colspan={"auto"} mr="sm">
					<LocationPin />
				</FlexboxItem>
				<FlexboxItem colspan={18}>
					<Text color="mine-shaft" fontStyleGuide="body5" mb="xs">
						Sharjah Publishing City Free Zone, Sharjah, United Arab Emirates
					</Text>
					{/* <Text color="mine-shaft" fontStyleGuide="body5" mb="xs">
						Address Line 2
					</Text> */}
				</FlexboxItem>
			</Flexbox>
			<Flexbox direction="row" justify="flex-start" align="flex-start" mb="sm">
				<FlexboxItem colspan={"auto"} mr="sm">
					<Whatsapp />
				</FlexboxItem>
				<FlexboxItem colspan={"auto"}>
					<Text color="mine-shaft" fontStyleGuide="body5" mb="xs">
						+971 564989555
					</Text>
				</FlexboxItem>
			</Flexbox>
			<Flexbox direction="row" justify="flex-start" align="flex-start" mb="sm">
				<FlexboxItem colspan={"auto"} mr="sm">
					<Email />
				</FlexboxItem>
				<FlexboxItem colspan={"auto"}>
					<Text color="mine-shaft" fontStyleGuide="body5" mb="xs">
					info@curtayns.com
					</Text>
				</FlexboxItem>
			</Flexbox>
		</>
	)
}

export default () => {
	return (
		<footer
			css={styles.footerWrapper}
		>
			<WidgetContainer>
				<ResponsiveDiv>
					<Flexbox direction="row" justify="space-between" align="flex-start">
						<FlexboxItem colspan={24} colspanXL={8}>
							<CurtyansLogo />
							<Text color="mine-shaft" fontStyleGuide="body5" mt="md" mb="xs">
								About Business Lorem Ipsum Dolor Sit Amet
							</Text>
							<Text color="mine-shaft" fontStyleGuide="body5" mb="xxl">
								Copyright @2024 Curtyans. All rights reserved
							</Text>
							<FindUsOnline />

						</FlexboxItem>
						<FlexboxItem colspan={24} colspanXL={6}>
							<Text color="mine-shaft" fontStyleGuide="body3" mb="md">Explore</Text>
							<Flexbox direction="row" justify="space-between" align="flex-start" mb="xxl">
								<FlexboxItem colspan={12}>
									<Text as="div" color="mine-shaft" fontStyleGuide="body4" mb="sm">
										<Link type="primary" to="/about-us">About Us</Link>
									</Text>
									<Text as="div" color="mine-shaft" fontStyleGuide="body4" mb="sm">
										<Link type="primary" to="/terms">Terms of Use</Link>
									</Text>
									<Text as="div" color="mine-shaft" fontStyleGuide="body4" mb="sm">
										<Link type="primary" to="/privacy-policy">Privacy Policy</Link>
									</Text>
									<Text as="div" color="mine-shaft" fontStyleGuide="body4" mb="sm">
										<Link type="primary" to="/product-categories">Product Categories</Link>
									</Text>
								</FlexboxItem>
								<FlexboxItem colspan={12}>
									<Text as="div" color="mine-shaft" fontStyleGuide="body4" mb="sm">
										<Link type="primary" to="/faq">Help</Link>
									</Text>
									<Text as="div" color="mine-shaft" fontStyleGuide="body4" mb="sm">
										<Link type="primary" to="/collection">Our Collection</Link>
									</Text>
									<Text as="div" color="mine-shaft" fontStyleGuide="body4" mb="sm">
										<Link type="primary" to="/book-visit-form">Book a Free Consultation</Link>
									</Text>
								</FlexboxItem>
							</Flexbox>
						</FlexboxItem>
						<FlexboxItem colspan={24} colspanXL={6}>
							<AddressBar />
						</FlexboxItem>
					</Flexbox>
				</ResponsiveDiv>
			</WidgetContainer>
		</footer>
	)
}
