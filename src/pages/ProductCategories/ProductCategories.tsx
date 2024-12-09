import { css } from "@emotion/react"
import Header from "organisms/Header"
import Text from "atoms/Text";
import ResponsiveDiv from "atoms/ResponsiveDiv";
import WidgetContainer from "atoms/WidgetContainer";
import Footer from "organisms/Footer";
import Link from "atoms/Link";
import PageContainer from "atoms/PageContainer";
import Flexbox from "atoms/Flexbox";
import Button from "atoms/Button";
import { FlexboxItem } from "atoms/Flexbox/Flexbox";

export default () => {
	return (
		<>
			<Header />

			<PageContainer>
				<Text
					as="h3"
					color="flamingo"
					fontStyleGuide="heading3"
					align="center"
					mb="2xl"
				>
					Product Categories
				</Text>
				<Text as="p" fontStyleGuide="heading7" color="flamingo" mb="md">
					Curtains
				</Text>
				<Text as="p" fontStyleGuide="body4" color="mine-shaft" mb="lg">
					<b>Description:&nbsp;</b>Discover a wide selection of custom-made
					curtains to suit any space. From luxurious fabrics to practical
					designs, our curtains are crafted to elevate your interiors with style
					and functionality.
				</Text>
				<Text as="p" fontStyleGuide="body4" color="mine-shaft" mb="lg">
					<b>Key Types:&nbsp;</b>
				</Text>

				<Text as="div" fontStyleGuide="body4" color="mine-shaft" mb="lg">
					<Text as="div" fontStyleGuide="body4" color="mine-shaft" ml="md">
						<b>&#x2022; Blackout Curtains:&nbsp;</b>Perfect for bedrooms and
						spaces needing complete light control.
					</Text>
					<Text as="div" fontStyleGuide="body4" color="mine-shaft" ml="md">
						<b>&#x2022; Sheer Curtains:&nbsp;</b>Add an airy elegance with
						lightweight, translucent fabrics.
					</Text>
					<Text as="div" fontStyleGuide="body4" color="mine-shaft" ml="md">
						<b>&#x2022; Layered Curtains:&nbsp;</b>Combine sheer and blackout
						options for versatility.
					</Text>
				</Text>

				<Text as="p" fontStyleGuide="heading7" color="flamingo" mb="md">
					Blinds (Coming Soon)
				</Text>
				<Text as="p" fontStyleGuide="body4" color="mine-shaft" mb="lg">
					<b>Description:&nbsp;</b>Explore modern and stylish blinds that
					combine aesthetics with practicality. Our made-to-measure blinds come
					in a variety of designs to complement any room.
				</Text>
				<Text as="p" fontStyleGuide="body4" color="mine-shaft" mb="lg">
					<b>Key Types:&nbsp;</b>
				</Text>

				<Text as="div" fontStyleGuide="body4" color="mine-shaft" mb="lg">
					<Text as="div" fontStyleGuide="body4" color="mine-shaft" ml="md">
						<b>&#x2022; Roller Blinds:&nbsp;</b>Simple, sleek, and ideal for
						minimalist spaces.
					</Text>
					<Text as="div" fontStyleGuide="body4" color="mine-shaft" ml="md">
						<b>&#x2022; Roman Blinds:&nbsp;</b>Soft folds for a sophisticated
						look.
					</Text>
					<Text as="div" fontStyleGuide="body4" color="mine-shaft" ml="md">
						<b>&#x2022; Venetian Blinds:&nbsp;</b>Versatile and durable with
						adjustable slats for light control.
					</Text>
				</Text>

				<Text as="p" fontStyleGuide="heading7" color="flamingo" mb="md">
					Wallpapers (Coming Soon)
				</Text>
				<Text as="p" fontStyleGuide="body4" color="mine-shaft" mb="lg">
					<b>Description:&nbsp;</b>Revamp your walls with our curated collection
					of wallpapers. From bold patterns to subtle textures, our designs
					bring personality and warmth to any room.
				</Text>
				<Text as="p" fontStyleGuide="body4" color="mine-shaft" mb="lg">
					<b>Key Types:&nbsp;</b>
				</Text>

				<Text as="div" fontStyleGuide="body4" color="mine-shaft" mb="lg">
					<Text as="div" fontStyleGuide="body4" color="mine-shaft" ml="md">
						<b>&#x2022; Geometric Patterns:&nbsp;</b>Contemporary and
						eye-catching.
					</Text>
					<Text as="div" fontStyleGuide="body4" color="mine-shaft" ml="md">
						<b>&#x2022; Floral Prints:&nbsp;</b>Timeless and charming.
					</Text>
					<Text as="div" fontStyleGuide="body4" color="mine-shaft" ml="md">
						<b>&#x2022; Textured Wallpapers:&nbsp;</b>Add depth and character to
						your walls.
					</Text>
				</Text>

				<Text as="p" fontStyleGuide="heading7" color="flamingo" mb="md">
					Carpets and Rugs (Coming Soon)
				</Text>
				<Text as="p" fontStyleGuide="body4" color="mine-shaft" mb="lg">
					<b>Description:&nbsp;</b>Complete your home decor with cozy and
					stylish carpets and rugs, designed to match your curtains and overall
					interior theme.
				</Text>
				<Text as="p" fontStyleGuide="body4" color="mine-shaft" mb="lg">
					<b>Key Types:&nbsp;</b>
				</Text>

				<Text as="div" fontStyleGuide="body4" color="mine-shaft" mb="lg">
					<Text as="div" fontStyleGuide="body4" color="mine-shaft" ml="md">
						<b>&#x2022;&nbsp;</b>Soft, durable materials for comfort and
						longevity.
					</Text>
					<Text as="div" fontStyleGuide="body4" color="mine-shaft" ml="md">
						<b>&#x2022;&nbsp;</b>Custom sizes and patterns to fit any space.
					</Text>
					<Text as="div" fontStyleGuide="body4" color="mine-shaft" ml="md">
						<b>&#x2022;&nbsp;</b>Matching designs to complement your curtains
						and wallpapers.
					</Text>
				</Text>

				<Flexbox direction="row" justify="start" align="stretch" mt="2xl">
					<FlexboxItem colspan={11} colspanXL={6}>
						<Button full type="primary" to="/book-visit-form">
							Book a Free Consultation
						</Button>
					</FlexboxItem>
				</Flexbox>
			</PageContainer>
			<Footer />
		</>
	);

}
