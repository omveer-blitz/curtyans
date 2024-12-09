import { css } from "@emotion/react"
import Header from "organisms/Header"
import Text from "atoms/Text";
import ResponsiveDiv from "atoms/ResponsiveDiv";
import WidgetContainer from "atoms/WidgetContainer";
import Footer from "organisms/Footer";
import Link from "atoms/Link";
import PageContainer from "atoms/PageContainer";

export default () => {
	return (
		<>
			<Header />

			<PageContainer>
				<Text as="h3" color="flamingo" fontStyleGuide="heading3" align="center" mb="2xl">Privacy Policy</Text>
				<Text as="p" fontStyleGuide="heading7" color="flamingo" mb="md">Privacy Policy for Curtayns</Text>
				<Text as="p" fontStyleGuide="body4" color="mine-shaft" mb="lg">
				  At Curtayns, we value your privacy and are committed to protecting your personal information. This policy outlines how we collect, use, and safeguard your data when you interact with our website.
				</Text>
				<Text as="p" fontStyleGuide="heading7" color="flamingo" mb="md">Information We Collect</Text>

				<Text as="div" fontStyleGuide="body4" color="mine-shaft" mb="lg">
					<Text as="div" fontStyleGuide="body4" color="mine-shaft" ml="md">
					<b>&#x2022;&nbsp;</b>Personal details (name, email, phone number) when you make a purchase or inquiry.
					</Text>
					<Text as="div" fontStyleGuide="body4" color="mine-shaft" ml="md">
						<b>&#x2022;&nbsp;</b>Payment information for order processing, managed securely via trusted third-party providers.
					</Text>
					<Text as="div" fontStyleGuide="body4" color="mine-shaft" ml="md">
						<b>&#x2022;&nbsp;</b>Transparent pricing, honest communication, and dependable service are the cornerstones of our relationship with our customers.
					</Text>
					<Text as="div" fontStyleGuide="body4" color="mine-shaft" ml="md">
						<b>&#x2022;&nbsp;</b>Browsing data (cookies, IP addresses) for improving website experience.
					</Text>
				</Text>

				<Text as="p" fontStyleGuide="heading7" color="flamingo" mb="md">How We Use Your Information</Text>

				<Text as="div" fontStyleGuide="body4" color="mine-shaft" mb="lg">
					<Text as="div" fontStyleGuide="body4" color="mine-shaft" ml="md">
					<b>&#x2022;&nbsp;</b>To process orders and deliver products.
					</Text>
					<Text as="div" fontStyleGuide="body4" color="mine-shaft" ml="md">
						<b>&#x2022;&nbsp;</b>To communicate updates, offers, and customer support.
					</Text>
					<Text as="div" fontStyleGuide="body4" color="mine-shaft" ml="md">
						<b>&#x2022;&nbsp;</b>To enhance user experience and analyze website performance.
					</Text>
				</Text>

				<Text as="p" fontStyleGuide="heading7" color="flamingo" mb="md">Sharing Your Data</Text>

				<Text as="div" fontStyleGuide="body4" color="mine-shaft" mb="lg">
					<Text as="div" fontStyleGuide="body4" color="mine-shaft">
					We do not sell your personal information. Limited data may be shared with trusted partners to fulfill orders, process payments, or improve our services.
					</Text>
				</Text>

				<Text as="p" fontStyleGuide="heading7" color="flamingo" mb="md">Data Security</Text>

				<Text as="div" fontStyleGuide="body4" color="mine-shaft" mb="lg">
					<Text as="div" fontStyleGuide="body4" color="mine-shaft">
					Your information is protected with advanced encryption and strict access controls.
					</Text>
				</Text>

				<Text as="p" fontStyleGuide="heading7" color="flamingo" mb="md">Your Rights</Text>

				<Text as="div" fontStyleGuide="body4" color="mine-shaft" mb="lg">
					<Text as="div" fontStyleGuide="body4" color="mine-shaft">
					You can request access, correction, or deletion of your personal data anytime.
					</Text>
				</Text>

				<Text as="p" fontStyleGuide="heading7" color="flamingo" mb="md">Contact Us</Text>

				<Text as="div" fontStyleGuide="body4" color="mine-shaft" mb="lg">
					<Text as="div" fontStyleGuide="body4" color="mine-shaft">
					For privacy concerns or inquiries, email us at <b>privacy@curtayns.com.</b>
					</Text>
				</Text>

			</PageContainer>
			<Footer />
		</>
	)

}
