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
				<Text as="h3" color="flamingo" fontStyleGuide="heading3" align="center" mb="2xl">Terms and Conditions</Text>
				<Text as="p" fontStyleGuide="heading7" color="flamingo" mb="md">Introduction</Text>
				<Text as="p" fontStyleGuide="body4" color="mine-shaft" mb="lg">
					Welcome to curtayns.com. These Terms and Conditions govern your access to and use of our website, products, and services. By using curtayns.com, you agree to these Terms. Please read them carefully.
				</Text>
				<Text as="p" fontStyleGuide="heading7" color="flamingo" mb="md">Definitions</Text>
				<Text as="div" fontStyleGuide="body4" color="mine-shaft" mb="lg">
					<Text as="div" fontStyleGuide="body4" color="mine-shaft" ml="md">
					<b>&#x2022;&nbsp;</b><b>"We," "Us," "Our"</b>: Refers to curtayns.com
					</Text>
					<Text as="div" fontStyleGuide="body4" color="mine-shaft" ml="md">
					<b>&#x2022;&nbsp;</b><b>"User" or "You"</b>: Refers to the person or entity accessing our website or services.
					</Text>
					<Text as="div" fontStyleGuide="body4" color="mine-shaft" ml="md">
					<b>&#x2022;&nbsp;</b><b>"Products"</b>: Refers to all items sold on curtayns.com, including curtains, blinds, wallpapers, and related services.
					</Text>
				</Text>
				<Text as="p" fontStyleGuide="heading7" color="flamingo" mb="md">Use of the Website</Text>
				<Text as="div" fontStyleGuide="body4" color="mine-shaft" mb="lg">
					<Text as="div" fontStyleGuide="body4" color="mine-shaft" ml="md">
					<b>&#x2022;&nbsp;</b> You agree to use the website for lawful purposes only.
					</Text>
					<Text as="div" fontStyleGuide="body4" color="mine-shaft" ml="md">
					<b>&#x2022;&nbsp;</b> You are responsible for ensuring the accuracy of all information provided during purchase or inquiry.
					</Text>
					<Text as="div" fontStyleGuide="body4" color="mine-shaft" ml="md">
					<b>&#x2022;&nbsp;</b> Unauthorized use of this website may give rise to a claim for damages.
					</Text>
				</Text>
				<Text as="p" fontStyleGuide="heading7" color="flamingo" mb="md">Orders and Payments</Text>
				<Text as="div" fontStyleGuide="body4" color="mine-shaft" mb="lg">
					<Text as="div" fontStyleGuide="body4" color="mine-shaft" ml="md">
					<b>&#x2022;&nbsp;</b> All orders are subject to acceptance and availability.
					</Text>
					<Text as="div" fontStyleGuide="body4" color="mine-shaft" ml="md">
					<b>&#x2022;&nbsp;</b> Payment must be made in full at the time of purchase or before the delivery/installation.
					</Text>
					<Text as="div" fontStyleGuide="body4" color="mine-shaft" ml="md">
					<b>&#x2022;&nbsp;</b> Prices are inclusive of VAT (based on your location).
					</Text>
				</Text>
				<Text as="p" fontStyleGuide="heading7" color="flamingo" mb="md">Returns and Refunds</Text>
				<Text as="div" fontStyleGuide="body4" color="mine-shaft" mb="lg">
					<Text as="div" fontStyleGuide="body4" color="mine-shaft" ml="md">
					<b>&#x2022;&nbsp;</b> Custom-made products, including curtains and blinds are made to order. Due to the bespoke nature of these items, they are non-returnable and non-refundable. However, if your curtains arrive damaged or defective, <b>we will offer immediate resolutions</b> to ensure your satisfaction.
					</Text>
					<Text as="div" fontStyleGuide="body4" color="mine-shaft" ml="md">
					<b>&#x2022;&nbsp;</b> Custom products are covered by a <b>1-year warranty</b> for manufacturing defects. This does not include damages caused by misuse, or wear and tear.
					</Text>
				</Text>
				<Text as="p" fontStyleGuide="heading7" color="flamingo" mb="md">Intellectual Property</Text>
				<Text as="div" fontStyleGuide="body4" color="mine-shaft" mb="lg">
					<Text as="div" fontStyleGuide="body4" color="mine-shaft" ml="md">
					<b>&#x2022;&nbsp;</b> All content on this website, including images, text, and designs, is the property of curtayns.com.
					</Text>
					<Text as="div" fontStyleGuide="body4" color="mine-shaft" ml="md">
					<b>&#x2022;&nbsp;</b> Unauthorized reproduction or redistribution of any part of this website is prohibited.
					</Text>
				</Text>
				<Text as="p" fontStyleGuide="heading7" color="flamingo" mb="md">Limitation of Liability</Text>
				<Text as="div" fontStyleGuide="body4" color="mine-shaft" mb="lg">
					<Text as="div" fontStyleGuide="body4" color="mine-shaft" ml="md">
					<b>&#x2022;&nbsp;</b> We are not liable for any indirect or consequential loss arising from the use of our products or services.
					</Text>
					<Text as="div" fontStyleGuide="body4" color="mine-shaft" ml="md">
					<b>&#x2022;&nbsp;</b> Our liability is limited to the purchase price of the product in question.
					</Text>
				</Text>
				<Text as="p" fontStyleGuide="heading7" color="flamingo" mb="md">Amendments</Text>
				<Text as="div" fontStyleGuide="body4" color="mine-shaft" mb="lg">
					We reserve the right to update these Terms and Conditions at any time. Changes will be posted on this page, and continued use of the website constitutes acceptance of these changes.
				</Text>
				<Text as="p" fontStyleGuide="heading7" color="flamingo" mb="md">Contact Us</Text>
				<Text as="div" fontStyleGuide="body4" color="mine-shaft" mb="lg">
					For questions or concerns regarding these Terms and Conditions, please contact us at: <b>Email: info@curtayns.com</b>
				</Text>
			</PageContainer>
			<Footer />
		</>
	)
}
