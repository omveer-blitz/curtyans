import React from "react";
import { css } from "@emotion/react";
import Text from "atoms/Text";
import Divider from "atoms/Divider";
import Flexbox from "atoms/Flexbox";
import { FlexboxItem } from "atoms/Flexbox/Flexbox";
import Button from "atoms/Button";
import Link from "atoms/Link";
import Header from "organisms/Header";
import Animated from "molecules/Animated";
import Footer from "organisms/Footer";

export default () => {
	return (
		<>

			<Header />
			<section css={css`padding: var(--spacing-lg);`}>
				<Text as={"h1"} fontStyleGuide="heading1" color="mine-shaft">
					Style Guide
				</Text>
				<Divider />

				<Text as={"h1"} fontStyleGuide="heading1" color="mine-shaft">
					Heading 1
				</Text>
				<Divider spacing="sm" />
				<Animated trigger="inview" animation="fadeInUp" duration={1} delay={0.5} timingFunction="ease" iteration={1}>
					<Text as={"h2"} fontStyleGuide="heading2" color="mine-shaft">
						Heading 2
					</Text>
				</Animated>
				<Divider spacing="sm" />
				<Animated trigger="inview" animation="fadeInUp" duration={1} delay={1} timingFunction="ease" iteration={1}>
					<Text as={"h3"} fontStyleGuide="heading3" color="mine-shaft">
						Heading 3
					</Text>
				</Animated>
				<Divider spacing="sm" />
				<Animated trigger="inview" animation="fadeInUp" duration={1} delay={1.5} timingFunction="ease" iteration={1}>
					<Text as={"h4"} fontStyleGuide="heading4" color="mine-shaft">
						Heading 4
					</Text>
				</Animated>
				<Divider spacing="sm" />
				<Animated trigger="inview" animation="fadeInUp" duration={1} delay={1.5} timingFunction="ease" iteration={1}>
					<Text as={"h5"} fontStyleGuide="heading5" color="mine-shaft">
						Heading 5
					</Text>
				</Animated>
				<Divider spacing="sm" />
				<Animated trigger="inview" animation="fadeInUp" duration={1} delay={1.5} timingFunction="ease" iteration={1}>
					<Text as={"h6"} fontStyleGuide="heading6" color="mine-shaft">
						Heading 6
					</Text>
				</Animated>
				<Divider spacing="sm" />
				<Animated trigger="inview" animation="fadeInUp" duration={1} delay={1.5} timingFunction="ease" iteration={1}>
					<Text as={"h6"} fontStyleGuide="heading7" color="mine-shaft">
						Heading 7
					</Text>
				</Animated>
				<Divider spacing="sm" />
				<Animated trigger="inview" animation="fadeInUp" duration={1} delay={2} timingFunction="ease" iteration={1}>
					<Text as={"p"} fontStyleGuide="body1" color="mine-shaft">
						Body 1
					</Text>
				</Animated>
				<Divider spacing="sm" />
				<Animated trigger="inview" animation="fadeInUp" duration={1} delay={2.5} timingFunction="ease" iteration={1}>
					<Text as={"p"} fontStyleGuide="body2" color="mine-shaft">
						Body 2
					</Text>
				</Animated>
				<Divider spacing="sm" />
				<Animated trigger="inview" animation="fadeInUp" duration={1} delay={3} timingFunction="ease" iteration={1}>
					<Text as={"p"} fontStyleGuide="body3" color="mine-shaft">
						Body 3
					</Text>
				</Animated>
				<Divider spacing="sm" />
				<Animated trigger="inview" animation="fadeInUp" duration={1} delay={3.5} timingFunction="ease" iteration={1}>
					<Text as={"p"} fontStyleGuide="body4" color="mine-shaft">
						Body 4
					</Text>
				</Animated>
				<Divider spacing="sm" />
				<Animated trigger="inview" animation="fadeInUp" duration={1} delay={3.5} timingFunction="ease" iteration={1}>
					<Text as={"p"} fontStyleGuide="body5" color="mine-shaft">
						Body 5
					</Text>
				</Animated>
				<Divider spacing="sm" />
				<Animated trigger="inview" animation="fadeInUp" duration={1} delay={4} timingFunction="ease" iteration={1}>
					<Text as={"h5"} fontStyleGuide="heading4" color="mine-shaft">
						Buttons
					</Text>
					<Flexbox justify="flex-start" align="center" direction="row">
						<FlexboxItem mt="sm" mb="sm" colspan={24} colspanXL={6}>
							<Button type="primary" full>Book a Free Visit</Button>
						</FlexboxItem>
						<FlexboxItem mt="sm" mb="sm" colspan={24} colspanXL={6}>
							<Button type="secondary" full>Book a Free Visit</Button>
						</FlexboxItem>
						<FlexboxItem mt="sm" mb="sm" colspan={24} colspanXL={6}>
							<Link to={"/"}>Back to Home Page</Link>
						</FlexboxItem>
					</Flexbox>
				</Animated>
			</section>
			<Footer />
		</>
	)
}
