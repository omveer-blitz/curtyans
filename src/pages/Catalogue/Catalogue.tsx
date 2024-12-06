import React from "react";
import { css } from "@emotion/react";

import PageContainer from "atoms/PageContainer";
import ResponsiveDiv from "atoms/ResponsiveDiv";
import Image from "atoms/Image";
import Video from "atoms/Video";
import Flexbox from "atoms/Flexbox";
import { FlexboxItem } from "atoms/Flexbox/Flexbox";
import Text from "atoms/Text";
import { PageSpinner } from "atoms/Spinner/Spinner";
import Button from "atoms/Button";
import Carousel from "atoms/Carousel";
import ImageZoomer from "molecules/ImageZoomer";
import BaseModal, { bottomSheetStyle } from "molecules/Modal/Modal";
import NeedHelp from "organisms/Widgets/NeedHelp";
import Trustmarkers from "organisms/Widgets/Trustmarkers";
import Header from "organisms/Header";
import Footer from "organisms/Footer";

import { CataloguePageProps, FullScreenImageProps } from "./types";
import { Ctx } from "after";
import { Media } from "typings/product.type";
import Card from "molecules/Card";
import Cross from "icons/Cross";
import { getProductPageData } from "services/pages";

const response = {
	code: 200,
	data: {
		product_name: "sheer",
		sku_id: "product-001",
		description: "Sheer fabric curtains, allowing sunlight to enter your room and softening it. Ideal to get privacy in a bedroom or living room. Sheer fabric curtains, allowing sunlight to enter your room and softening it. Ideal to get privacy in a bedroom or living room. Sheer fabric curtains, allowing sunlight to enter your room and softening it. Ideal to get privacy in a bedroom or living room. Sheer fabric curtains, allowing sunlight to enter your room and softening it. Ideal to get privacy in a bedroom or living room.",
		mrp: 513,
		selling_price: 513,
		emi_option: {
			emi_price: 176,
			emi_duration_in_months: 3,
		},
		category: ["curtain"],
		media: [
			{
				type: "image",
				url: "https://kurtains.ae/wp-content/uploads/2023/03/Container.png"
			},
			{
				type: "image",
				url: "https://kurtains.ae/wp-content/uploads/2023/03/IMG_0585-Edit1-1024x683.jpg"
			},
			{
				type: "image",
				url: "https://kurtains.ae/wp-content/uploads/2023/03/KURTAINS-2-e1705534055472-1024x923.jpg"
			}
		],
		attributes: {
			dimension: {
				length: "2m",
				breadth: "3m",
			}
		}
	},
}

const styles = {
	imageDisplayStyle: css`
		width: 100%;
		height: 100%;
		aspect-ratio: 1;
		object-fit: cover;
	`,
	mediaWrapper: css`
		cursor: zoom-in;
	`,
	carouselWrapper: css`
		position: relative;
	`,
}

const FullScreenImage = (props: FullScreenImageProps) => {
	if(!props.media) return null;
	if(props.media.type === 'video') return null;
	return (
		<BaseModal isOpen style={bottomSheetStyle}>
			<Card
				size="xxl"
				css={css`
					height: 100%;
					display: flex;
					flex-direction: row;
					justify-content: center;
					align-items: center;
					padding-top: var(--spacing-2xl);
					position: relative;
				`}
			>
				<Button
					type="primary"
					onClick={props.closeModal}
					passedCss={css`
						position: absolute;
						top: 0;
						right: 0;
						z-index: 1;
						border-radius: 50%;
						padding: var(--spacing-xs) var(--spacing-sm);
					`}
				>
					<Cross fill="white" width={16} height={16} />
				</Button>
				<ImageZoomer src={props.media.url} />
			</Card>
		</BaseModal>
	)
}

const Catalogue = (props: CataloguePageProps) => {
	const { isLoading, pagedata } = props;
	const [selectedMedia, setSelectedMedia] = React.useState<Media | null>(null);

	if (isLoading || !pagedata || pagedata.data_type !== 'product') return (
		<PageSpinner />
	);

	const { data: product } =  pagedata;

	if(!Object.keys(product).length) return (
		<>
			<Header />
			<PageContainer>
				<Text textWrap="balance" fontStyleGuide="heading3" color="flamingo" align="center" mb="md">Oops! This product is currently not available</Text>
				<Text textWrap="balance" fontStyleGuide="body4" color="mine-shaft" align="center" mb="md">It looks like we are out of this product or the product does not exist</Text>
				<Flexbox direction="row" align="center" justify="center" mb="xl">
					<Button type="secondary" to="/collection">Explore Our Collection</Button>
				</Flexbox>
			</PageContainer>
			<Footer />
		</>
	)

	return (
		<>
			<Header />
			<PageContainer>
				{selectedMedia && <FullScreenImage closeModal={() => setSelectedMedia(null)} media={selectedMedia} />}
				<Flexbox direction="row" justify="space-between" align="flex-start">
					<FlexboxItem colspan={24} colspanXL={14} mb="xxl">
						<ResponsiveDiv css={styles.carouselWrapper}>
							<Carousel
								additionalTransfrom={0}
								arrows
								autoPlay={false}
								centerMode={false}
								className=""
								containerClass="container"
								dotListClass=""
								draggable
								focusOnSelect={false}
								infinite
								itemClass=""
								keyBoardControl
								minimumTouchDrag={80}
								pauseOnHover
								partialVisbile={false}
								responsive={{
									desktop: {
										breakpoint: {
											max: 200000,
											min: 1200
										},
										items: 1,
										partialVisibilityGutter: 40
									},
									mobile: {
										breakpoint: {
											max: 1200,
											min: 0
										},
										items: 1,
										partialVisibilityGutter: 30
									},
								}}
								rewind={false}
								rewindWithAnimation={false}
								rtl={false}
								shouldResetAutoplay
								sliderClass=""
								slidesToSlide={1}
								swipeable
							>
								{product.media.map((media, index) => (
									<ResponsiveDiv onClick={() => setSelectedMedia(media)} css={styles.mediaWrapper} key={`${product.sku_id}-carousel-${index}`}>
										{media.type === 'video' ? (
											<Video loop aspectRatio={1} controls={false} autoPlay src={media.url} />
										) : (
											<Image css={styles.imageDisplayStyle} src={media.url} />
										)}
									</ResponsiveDiv>
								))}
							</Carousel>
						</ResponsiveDiv>
					</FlexboxItem>
					<FlexboxItem colspan={0} colspanXL={1} />
					<FlexboxItem colspan={24} colspanXL={9}>
						<Text fontStyleGuide="heading3" mb="xxl" color="mine-shaft" textTransform="capitalize">{product.product_name}</Text>
						<Text fontStyleGuide="heading6" mb="sm" color="flamingo">{`AED ${product.selling_price}`}</Text>
						{product.attributes && product.attributes.dimension && (
							<Text fontStyleGuide="body5" mb="sm" color="mine-shaft">{`${product.attributes.dimension.length} x ${product.attributes.dimension.breadth}` }</Text>
						)}
						<Text fontStyleGuide="body5" color="mine-shaft">
							{product.description}
						</Text>
						{product.emi_option && (
							<Text as="div" fontStyleGuide="body5" color="mine-shaft" mt="sm">
								EMI Option:&nbsp;
								<Text as="span" fontStyleGuide="heading7" color="mine-shaft">{`AED ${product.emi_option.emi_price}/mo`}</Text>
								&nbsp;for {product.emi_option.emi_duration_in_months} months
							</Text>
						)}
						<ResponsiveDiv mt="xxl">
							<Button full to={"/book-visit-form"} type="primary">
								{"Book a Free Visit"}
							</Button>
						</ResponsiveDiv>
					</FlexboxItem>
				</Flexbox>
			</PageContainer>
			<Trustmarkers />
			<NeedHelp />
			<Footer />
		</>
	)
}

Catalogue.getInitialProps = ({
	match,
	req,
	res,
	scrollToTop,
	customParams,
	...rest
}: Ctx<string>) => {
	const { sku_id: skuId = '' } = match.params;
	return getProductPageData(skuId).then((response) => {
		return {
			pagedata: {
				...response,
				data_type: 'product'
			}
		}
	})
}

export default Catalogue;
