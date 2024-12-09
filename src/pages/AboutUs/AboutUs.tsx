import Button from "atoms/Button";
import Flexbox from "atoms/Flexbox";
import { FlexboxItem } from "atoms/Flexbox/Flexbox";
import PageContainer from "atoms/PageContainer"
import Text from "atoms/Text";
import Footer from "organisms/Footer";
import Header from "organisms/Header";

export default () => {
	return (
		<>
			<Header />

			<PageContainer>
				<Text as="h3" color="flamingo" fontStyleGuide="heading3" align="center" mb="2xl">About Us</Text>
				<Text as="p" fontStyleGuide="heading7" color="flamingo" mb="md">Our Story</Text>
				<Text as="p" fontStyleGuide="body4" color="mine-shaft" mb="lg">
					At curtayns.com, we believe your home is a reflection of your personality, and every detail matters. Founded with the mission to bring elegance and functionality to living spaces, we specialize in crafting custom-made curtains, blinds, and wallpapers that enhance both style and comfort.
					<br />
					From modest beginnings, we have grown into a trusted name in home decor across the UAE, offering a seamless blend of craftsmanship, innovation, and premium quality.
					<br />
					Whether it’s elegant drapes, functional blinds, or statement wallpapers, we’re here to turn your vision into reality. Explore our curated collections to find decor that perfectly complements your space.
				</Text>
				<Text as="p" fontStyleGuide="heading7" color="flamingo" mb="md">Our Vision</Text>
				<Text as="p" fontStyleGuide="body4" color="mine-shaft" mb="lg">
					"To revolutionize home decor by offering tailored curtains, blinds and more that combine functionality with elegance."
				</Text>
				<Text as="p" fontStyleGuide="heading7" color="flamingo" mb="md">Our Values</Text>
				<Text as="div" fontStyleGuide="body4" color="mine-shaft" mb="lg">
					<Text as="div" fontStyleGuide="body4" color="mine-shaft" ml="md">
						<b>1.&nbsp;</b> <b>Customer-Centricity</b>: We place your needs and preferences at the heart of everything we do, ensuring every product reflects your unique taste and style.
					</Text>
					<Text as="div" fontStyleGuide="body4" color="mine-shaft" ml="md">
						<b>2.&nbsp;</b> <b>Excellence in Craftsmanship</b>: We believe in delivering nothing short of perfection. From premium materials to precise tailoring, our products are crafted with attention to the finest details.
					</Text>
					<Text as="div" fontStyleGuide="body4" color="mine-shaft" ml="md">
						<b>3.&nbsp;</b> <b>Integrity & Trust</b>: Transparent pricing, honest communication, and dependable service are the cornerstones of our relationship with our customers.
					</Text>
					<Text as="div" fontStyleGuide="body4" color="mine-shaft" ml="md">
						<b>4.&nbsp;</b> <b>Community Focus</b>: Proudly serving the UAE, we celebrate local tastes and preferences while delivering globally inspired designs.
					</Text>
				</Text>
				<Text as="p" fontStyleGuide="heading7" color="flamingo" mb="md">Why Choose Us</Text>
				<Text as="div" fontStyleGuide="body4" color="mine-shaft" mb="lg">
					<Text as="div" fontStyleGuide="body4" color="mine-shaft" ml="md">
						<b>1.&nbsp;</b> <b>Custom Solutions</b>: Every order is made just for you, ensuring a unique and perfect fit.
					</Text>
					<Text as="div" fontStyleGuide="body4" color="mine-shaft" ml="md">
						<b>2.&nbsp;</b> <b>Exceptional Craftsmanship</b>: Combining functionality with style.
					</Text>
					<Text as="div" fontStyleGuide="body4" color="mine-shaft" ml="md">
						<b>3.&nbsp;</b> <b>Seamless Experience</b>: Shop online, visualize your decor, and enjoy white-glove delivery and installation.
					</Text>
					<Text as="div" fontStyleGuide="body4" color="mine-shaft" ml="md">
						<b>4.&nbsp;</b> <b>Local Expertise</b>: Proudly based in the UAE, we understand the unique preferences of our region.
					</Text>
				</Text>

				<Flexbox direction="row" justify="center" align="stretch" mt="2xl">
					<FlexboxItem colspan={11} colspanXL={6}>
						<Button full type="primary" to="/book-visit-form">Book a Free Consultation</Button>
					</FlexboxItem>
					<FlexboxItem colspan={1} />
					<FlexboxItem colspan={11} colspanXL={6}>
						<Button full type="secondary" to="/collection">Explore Our Collection</Button>
					</FlexboxItem>
				</Flexbox>
			</PageContainer>
			<Footer />
		</>
	)
}
