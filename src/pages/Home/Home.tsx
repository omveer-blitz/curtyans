import React from "react";
import { css } from "@emotion/react";
import Divider from "atoms/Divider";
import Header from "organisms/Header";
import Footer from "organisms/Footer";
import Features from "organisms/Widgets/Features";
import NeedHelp from "organisms/Widgets/NeedHelp";
import ShopOurBestSellers from "organisms/Widgets/ShopOurBestSellers/ShopOurBestSellers";
import HowDoesItWork from "organisms/Widgets/HowDoesItWork";
import Testimonials from "organisms/Widgets/Testimonials";
import HeroBanner from "organisms/Widgets/HeroBanner/HeroBanner";
import Subline from "organisms/Widgets/Subline";
import { Ctx } from "after";
import { HomePageProps } from "./types";
import { PageSpinner } from "atoms/Spinner/Spinner";

const response = {
	code: 200,
	data: {
		hero_banner: {
			title: "Elevate your space",
			sub_title: "With Custom Curtains, Blinds, and Wallpapers",
			image_url: "http://d3m6ysvindj7rm.cloudfront.net/hero-banner.jpg"
		},
		subline: "Transform your home with designs crafted to fit your style and space. Experience elegance, precision, and unmatched quality - all tailored for you.",
		best_sellers: {
			title: "Shop Our Bestsellers",
			sub_title: "Prices for standard 2m x 3m windows",
			entities: [
				{
					sku_id: "101",
					media: [{
						type: 'image',
						url: "https://kurtains.ae/wp-content/uploads/2024/07/Mask-group-1-300x225.png",
					}],
					product_name: "Sheer only",
					selling_price: 299,
				},
				{
					sku_id: "101",
					media: [{
						type: 'image',
						url: "https://kurtains.ae/wp-content/uploads/2024/07/Rectangle-1064-1-300x225.png",
					}],
					product_name: "Blackout only",
					selling_price: 450,
				},
				{ sku_id: "101",
					media: [{
						type: "image",
						url: "https://kurtains.ae/wp-content/uploads/2024/07/Rectangle-1067-1-300x225.png",
					}],
					product_name: "Sheer + Blackout",
					selling_price: 1200,
				},
				{
					sku_id: "101",
					media: [{
						type: "image",
						url: "https://kurtains.ae/wp-content/uploads/2024/07/Rectangle-1070-1-300x225.png",
					}],
					product_name: "Roller",
					selling_price: 393,
				}
			]
		},
		features: {
			title: 'Key Features',
			entities: [
				{
					image_url: "http://d3m6ysvindj7rm.cloudfront.net/made-to-measure.jpg",
					title: "Made-to-Measure Solutions",
					description: "Perfect fit every time with our precise customization. Made just for you!"
				},
				{
					image_url: "http://d3m6ysvindj7rm.cloudfront.net/premium-quality.jpg",
					title: "Premium Materials",
					description: "A curated collection of fabrics and finishes to suit any aesthetic."
				},
				{
					image_url: "http://d3m6ysvindj7rm.cloudfront.net/end-to-end-service.jpg",
					title: "End-to-End Service",
					description: "From consultation to professional installation, we’ve got you covered."
				}
			]
		},
		testimonials: {
			title: "Customers Love Us!",
			entities: [
				{
					"profile_url": "https://randomuser.me/api/portraits/men/14.jpg",
					"rating": 4,
					"review": "Flawless service! The blackout curtains are of premium quality and completely block out the harsh Dubai sun. The team arrived on time and installed everything in under an hour. I also ordered wallpaper, and it was expertly installed. Quick, efficient, and affordable—excellent from start to finish!",
					"review_date": "23 November 2024",
					"user_name": "John Henry",
				},
				{
					"profile_url": "https://randomuser.me/api/portraits/women/16.jpg",
					"rating": 5,
					"review": "Excellent experience! The curtains are thick, elegant, and block sunlight perfectly. Installation was done in just 45 minutes, and they handled everything professionally. I also chose a stunning wallpaper, which was installed seamlessly. Prices are great, and the service is even better—highly recommend for Dubai residents!",
					"review_date": "06 November 2024",
					"user_name": "Marie Pearson",
				},
				{
					"profile_url": "https://randomuser.me/api/portraits/men/85.jpg",
					"rating": 4,
					"review": "Highly recommended! The blackout curtains are luxurious and perfect for Dubai’s bright weather. Installation was quick, taking less than an hour. I also ordered wallpaper, and the team installed it flawlessly. Everything looks amazing! Great pricing, fast delivery, and outstanding service from start to finish.",
					"review_date": "14 November 2024",
					"user_name": "Matt Watier",
				},
				{
					"profile_url": "https://randomuser.me/api/portraits/men/4.jpg",
					"rating": 3,
					"review": "Good products, but service needs improvement. The curtains are high-quality and block sunlight effectively, and the wallpaper looks stunning. However, the installation team seemed rushed, and a few minor details were missed. I had to call them back to fix it. Great prices, but service could be more attentive.",
					"review_date": "19 November 2024",
					"user_name": "Alfie Holland",
				},
				{
					"profile_url": "https://randomuser.me/api/portraits/men/50.jpg",
					"rating": 5,
					"review": "Outstanding quality and service! The curtains are high-quality, block out sunlight completely, and were installed in under 45 minutes. The wallpaper installation was smooth and added a stylish touch. Prices are very reasonable for the quality. If you're in Dubai, this is the perfect place to shop!",
					"review_date": "27 November 2024",
					"user_name": "Bradley Olson",
				},
				{
					"profile_url": "https://randomuser.me/api/portraits/men/47.jpg",
					"rating": 4,
					"review": "Flawless service! The blackout curtains are of premium quality and completely block out the harsh Dubai sun. The team arrived on time and installed everything in under an hour. I also ordered wallpaper, and it was expertly installed. Quick, efficient, and affordable—excellent from start to finish!",
					"review_date": "21 November 2024",
					"user_name": "Nikko Stanley",
				},
				{
					"profile_url": "https://randomuser.me/api/portraits/women/8.jpg",
					"rating": 5,
					"review": "Impeccable service! The curtains are thick, block out sunlight, and feel luxurious. The team installed both the curtains and wallpaper in about an hour. Everything was done with precision and care. Prices were competitive, and the service was top-notch. Great experience overall!",
					"review_date": "03 November 2024",
					"user_name": "Miriam Wade",
				},
				{
					"profile_url": "https://randomuser.me/api/portraits/women/84.jpg",
					"rating": 4,
					"review": "Fast and professional! The curtains are stunning and block sunlight perfectly. Installation took less than an hour, and the team was efficient and polite. The wallpaper installation was flawless, adding a modern touch to the room. Excellent pricing and quick service—perfect for Dubai’s needs!",
					"review_date": "06 November 2024",
					"user_name": "Amanda Cook",
				},
			]
		},
		how_does_it_work: {
			title: "How does it work?",
			video_url: "https://kurtains.ae/wp-content/uploads/2024/01/sheer-are-closing-1.mp4",
		}
	}
}

const Home = (props: HomePageProps) => {
	const { isLoading, data: responseData } = props;

	if (isLoading || !responseData || responseData.data_type !== 'home') return (
		<PageSpinner />
	);

	const { data } = responseData;
	const { hero_banner = {}, subline = '', best_sellers = {}, features = {}, testimonials = {}, how_does_it_work = {} } = data;

	return (
		<>
			<Header />
			<HeroBanner {...hero_banner} />
			<Subline text={subline} />
			<ShopOurBestSellers {...best_sellers} />
			<Features {...features} />
			<Testimonials {...testimonials} />
			<HowDoesItWork {...how_does_it_work} />
			<NeedHelp />
			<Footer />
		</>
	)
}


Home.getInitialProps = ({
	match,
	req,
	res,
	scrollToTop,
	customParams,
	...rest
}: Ctx<string>) => {
	return Promise.resolve({
		data: {
			...response,
			data_type: 'home'
		}
	});
}

export default Home;
