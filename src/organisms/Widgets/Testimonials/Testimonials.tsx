import React from "react";
import { css } from "@emotion/react";
import testimonialDetails from "json/testimonials";

import Text from "atoms/Text";
import WidgetContainer from "atoms/WidgetContainer";
import Flexbox from "atoms/Flexbox";
import ResponsiveDiv from "atoms/ResponsiveDiv";
import Image from "atoms/Image";
import Card from "molecules/Card";

import { Testimonial } from "typings/testimonial.type";
import { FlexboxItem } from "atoms/Flexbox/Flexbox";
import Carousel from "atoms/Carousel";
import Arrow from "icons/Arrow";
import Button from "atoms/Button";
import { TestimonialsProps } from "./types";

const styles = {
	cardWrapper: css`
		padding: var(--spacing-lg);
		height: 100%;
	`,
	card: css`
		border-top: var(--spacing-sm) solid var(--color-flamingo);
	`,
	profilePic: css`
		width: 64px;
		height: 64px;
		border-radius: 50%;
	`,
	reviewWrapper: css`
		overflow: auto;
		height: 240px;

		&::-webkit-scrollbar {
			width: var(--spacing-sm);
		};

		&::-webkit-scrollbar-track {
			-webkit-box-shadow: inset 0 0 6px var(--color-flamingo100);
			border-radius: var(--spacing-sm);
		}

		&::-webkit-scrollbar-thumb {
			border-radius: var(--spacing-sm);
			-webkit-box-shadow: inset 0 0 6px var(--color-flamingo500);
		}
	`,
	carouselWrapper: css`
		position: relative;
		padding-bottom: var(--spacing-xxl);
	`
}

const TestimonialCard = (props: Testimonial) => {
	return (
		<ResponsiveDiv
			css={styles.cardWrapper}
		>
			<Card size="lg" css={styles.card}>
				<Flexbox direction="row" justify="space-between" align="center" mb="md">
					<FlexboxItem colspan={8} colspanXL={8}>
						<Image css={styles.profilePic} src={props.profile_url} width={"64"} height={64} />
					</FlexboxItem>
					<FlexboxItem colspan={16} colspanXL={16}>
						<Text fontStyleGuide="heading7" color="mine-shaft">{props.user_name}</Text>
						<Text mb="xs" fontStyleGuide="body5" color="dusty-gray">{props.review_date}</Text>
					</FlexboxItem>
				</Flexbox>
				<ResponsiveDiv css={styles.reviewWrapper}>
					<Text fontStyleGuide="body5" color="mine-shaft">{props.review}</Text>
				</ResponsiveDiv>
			</Card>
		</ResponsiveDiv>
	)
}

export default (props: TestimonialsProps) => {
	return (
		<WidgetContainer enableBackground>
			<Text align="center" color="mine-shaft" fontStyleGuide="heading3" mb="2xl">{props.title}</Text>
			<ResponsiveDiv css={styles.carouselWrapper}>
				<Carousel
					additionalTransfrom={0}
					arrows={false}
					showDots
					renderDotsOutside
					autoPlay
					autoPlaySpeed={1000}
					centerMode={false}
					containerClass="container"
					draggable
					focusOnSelect={false}
					infinite
					keyBoardControl
					minimumTouchDrag={80}
					pauseOnHover
					responsive={{
						desktop: {
							breakpoint: {
								max: 3000,
								min: 1200
							},
							items: 4,
						},
						mobile: {
							breakpoint: {
								max: 748,
								min: 0
							},
							items: 1,
						},
						tablet: {
							breakpoint: {
								max: 1200,
								min: 749
							},
							items: 2,
						}
					}}
					rewind={false}
					rewindWithAnimation={false}
					rtl={false}
					shouldResetAutoplay
					sliderClass=""
					slidesToSlide={1}
					swipeable
				>

					{(props.entities || []).map((testimonial, index) => (
						<TestimonialCard key={`testimonial-${index}-${testimonial.user_name}`} {...testimonial} />
					))}
				</Carousel>
			</ResponsiveDiv>
		</WidgetContainer>
	)
}
