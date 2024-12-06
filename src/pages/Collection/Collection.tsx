import React from "react";
import { css } from "@emotion/react";
import PageContainer from "atoms/PageContainer";
import Flexbox from "atoms/Flexbox";
import Text from "atoms/Text";
import { FlexboxItem } from "atoms/Flexbox/Flexbox";
import Header from "organisms/Header";
import Footer from "organisms/Footer";
import productList from "json/productList";
import { Ctx } from "after";
import ChipButton from "atoms/ChipButton";
import { CollectionPageProps } from "./types";
import ProductCard from "molecules/ProductCard";
import { Category } from "typings/product.type";
import { PageSpinner } from "atoms/Spinner/Spinner";
import { getCollectionPageData } from "services/pages";


const categories = [
	{
		label: 'All',
		value: 'all'
	},
	{
		label: 'Curtain',
		value: 'curtain'
	},
	{
		label: 'Blinds',
		value: 'blinds',
	},
	{
		label: 'Wallpaper',
		value: 'wallpaper'
	},
	{
		label: 'Carpets and Rugs',
		value: 'carpets_and_rugs'
	}
]

const CollectionPage = (props: CollectionPageProps) => {
	const { pagedata, isLoading } = props;
	const [selectedCategory, setSelectedCategory] = React.useState(categories[0].value);

	if(isLoading || !pagedata || pagedata.data_type !== 'collection') {
		return <PageSpinner />
	}

	const { data: { entities: productsData } } = pagedata;
	const productsToRender = productsData.filter(product => selectedCategory === 'all' || product.category.includes(selectedCategory as Category))
	return (
		<>
			<Header />
			<PageContainer>
				<Flexbox direction="row" justify="space-between" align="center">
					<FlexboxItem colspan={"auto"} colspanXL={"auto"} mb="xxl">
						<Text as="h1" fontStyleGuide="heading3" color="mine-shaft">{`Our Products`}</Text>
					</FlexboxItem>
					<FlexboxItem css={css`overflow: hidden;`} colspan={"auto"} colspanXL={"auto"} mb="xxl">
						<ChipButton items={categories} value={selectedCategory} onChange={setSelectedCategory} />
					</FlexboxItem>
				</Flexbox>
				<Flexbox direction="row" justify="flex-start" align="stretch">
					{productsToRender.map((product, index) => (
						<FlexboxItem key={`productcard-${index}-${product.sku_id}`} colspan={24} colspanMD={12} colspanXL={8} mb="lg">
							<div
								css={css`
									padding: 0 var(--spacing-sm);
									height: 100%;
								`}
							>
								<ProductCard {...product} />
							</div>
						</FlexboxItem>
					))}
				</Flexbox>
			</PageContainer>
			<Footer />
		</>
	)
}

CollectionPage.getInitialProps = ({
	match,
	req,
	res,
	scrollToTop,
	customParams,
	...rest
}: Ctx<string>) => {
	const promise = getCollectionPageData()
		.then((response) => {
			return {
				pagedata: {
					...response,
					data_type: 'collection'
				}
			}
		});
	return promise;
}

export default CollectionPage;
