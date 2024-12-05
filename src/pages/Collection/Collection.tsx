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

const response = {
	code: 200,
	data: {
		entities: [
			{
				product_name: "sheer",
				sku_id: "product-001",
				description: "Sheer fabric curtains, allowing sunlight to enter your room and softening it. Ideal to get privacy in a bedroom or living room.",
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
			{
				product_name: "blackout roller blinds",
				sku_id: "product-002",
				description: "Blinds blend style with ease, offering privacy and light control while being easy to clean and fitting any room’s look.",
				mrp: 393,
				selling_price: 393,
				emi_option: {
					emi_price: 135,
					emi_duration_in_months: 3,
				},
				category: ["blinds"],
				media: [
					{
						type: "image",
						url: "https://kurtains.ae/wp-content/uploads/2023/03/IMG_05431.jpg"
					},
					{
						type: "image",
						url: "https://kurtains.ae/wp-content/uploads/2023/03/ROLF-3125_Shipley-Light-Grey_Roller-EVO-Life-2024x1718.jpg"
					},
					{
						type: "image",
						url: "https://kurtains.ae/wp-content/uploads/2023/03/ROLF-3126_Shipley-Dark-Grey_Roller-EVO-Life.jpg",
					}
				],
				attributes: {
					dimension: {
						length: "1.5m",
						breadth: "2m",
					}
				}
			},
			{
				product_name: "sheer",
				sku_id: "product-001",
				description: "Sheer fabric curtains, allowing sunlight to enter your room and softening it. Ideal to get privacy in a bedroom or living room.",
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
			{
				product_name: "blackout roller blinds",
				sku_id: "product-002",
				description: "Blinds blend style with ease, offering privacy and light control while being easy to clean and fitting any room’s look.",
				mrp: 393,
				selling_price: 393,
				emi_option: {
					emi_price: 135,
					emi_duration_in_months: 3,
				},
				category: ["blinds"],
				media: [
					{
						type: "image",
						url: "https://kurtains.ae/wp-content/uploads/2023/03/IMG_05431.jpg"
					},
					{
						type: "image",
						url: "https://kurtains.ae/wp-content/uploads/2023/03/ROLF-3125_Shipley-Light-Grey_Roller-EVO-Life-2024x1718.jpg"
					},
					{
						type: "image",
						url: "https://kurtains.ae/wp-content/uploads/2023/03/ROLF-3126_Shipley-Dark-Grey_Roller-EVO-Life.jpg",
					}
				],
				attributes: {
					dimension: {
						length: "1.5m",
						breadth: "2m",
					}
				}
			},
			{
				product_name: "sheer",
				sku_id: "product-001",
				description: "Sheer fabric curtains, allowing sunlight to enter your room and softening it. Ideal to get privacy in a bedroom or living room.",
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
			{
				product_name: "blackout roller blinds",
				sku_id: "product-002",
				description: "Blinds blend style with ease, offering privacy and light control while being easy to clean and fitting any room’s look.",
				mrp: 393,
				selling_price: 393,
				emi_option: {
					emi_price: 135,
					emi_duration_in_months: 3,
				},
				category: ["blinds"],
				media: [
					{
						type: "image",
						url: "https://kurtains.ae/wp-content/uploads/2023/03/IMG_05431.jpg"
					},
					{
						type: "image",
						url: "https://kurtains.ae/wp-content/uploads/2023/03/ROLF-3125_Shipley-Light-Grey_Roller-EVO-Life-2024x1718.jpg"
					},
					{
						type: "image",
						url: "https://kurtains.ae/wp-content/uploads/2023/03/ROLF-3126_Shipley-Dark-Grey_Roller-EVO-Life.jpg",
					}
				],
				attributes: {
					dimension: {
						length: "1.5m",
						breadth: "2m",
					}
				}
			},
			{
				product_name: "sheer",
				sku_id: "product-001",
				description: "Sheer fabric curtains, allowing sunlight to enter your room and softening it. Ideal to get privacy in a bedroom or living room.",
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
			{
				product_name: "blackout roller blinds",
				sku_id: "product-002",
				description: "Blinds blend style with ease, offering privacy and light control while being easy to clean and fitting any room’s look.",
				mrp: 393,
				selling_price: 393,
				emi_option: {
					emi_price: 135,
					emi_duration_in_months: 3,
				},
				category: ["blinds"],
				media: [
					{
						type: "image",
						url: "https://kurtains.ae/wp-content/uploads/2023/03/IMG_05431.jpg"
					},
					{
						type: "image",
						url: "https://kurtains.ae/wp-content/uploads/2023/03/ROLF-3125_Shipley-Light-Grey_Roller-EVO-Life-2024x1718.jpg"
					},
					{
						type: "image",
						url: "https://kurtains.ae/wp-content/uploads/2023/03/ROLF-3126_Shipley-Dark-Grey_Roller-EVO-Life.jpg",
					}
				],
				attributes: {
					dimension: {
						length: "1.5m",
						breadth: "2m",
					}
				}
			},
			{
				product_name: "sheer",
				sku_id: "product-001",
				description: "Sheer fabric curtains, allowing sunlight to enter your room and softening it. Ideal to get privacy in a bedroom or living room.",
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
			{
				product_name: "blackout roller blinds",
				sku_id: "product-002",
				description: "Blinds blend style with ease, offering privacy and light control while being easy to clean and fitting any room’s look.",
				mrp: 393,
				selling_price: 393,
				emi_option: {
					emi_price: 135,
					emi_duration_in_months: 3,
				},
				category: ["blinds"],
				media: [
					{
						type: "image",
						url: "https://kurtains.ae/wp-content/uploads/2023/03/IMG_05431.jpg"
					},
					{
						type: "image",
						url: "https://kurtains.ae/wp-content/uploads/2023/03/ROLF-3125_Shipley-Light-Grey_Roller-EVO-Life-2024x1718.jpg"
					},
					{
						type: "image",
						url: "https://kurtains.ae/wp-content/uploads/2023/03/ROLF-3126_Shipley-Dark-Grey_Roller-EVO-Life.jpg",
					}
				],
				attributes: {
					dimension: {
						length: "1.5m",
						breadth: "2m",
					}
				}
			},
			{
				product_name: "sheer",
				sku_id: "product-001",
				description: "Sheer fabric curtains, allowing sunlight to enter your room and softening it. Ideal to get privacy in a bedroom or living room.",
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
			{
				product_name: "blackout roller blinds",
				sku_id: "product-002",
				description: "Blinds blend style with ease, offering privacy and light control while being easy to clean and fitting any room’s look.",
				mrp: 393,
				selling_price: 393,
				emi_option: {
					emi_price: 135,
					emi_duration_in_months: 3,
				},
				category: ["blinds"],
				media: [
					{
						type: "image",
						url: "https://kurtains.ae/wp-content/uploads/2023/03/IMG_05431.jpg"
					},
					{
						type: "image",
						url: "https://kurtains.ae/wp-content/uploads/2023/03/ROLF-3125_Shipley-Light-Grey_Roller-EVO-Life-2024x1718.jpg"
					},
					{
						type: "image",
						url: "https://kurtains.ae/wp-content/uploads/2023/03/ROLF-3126_Shipley-Dark-Grey_Roller-EVO-Life.jpg",
					}
				],
				attributes: {
					dimension: {
						length: "1.5m",
						breadth: "2m",
					}
				}
			},
			{
				product_name: "sheer",
				sku_id: "product-001",
				description: "Sheer fabric curtains, allowing sunlight to enter your room and softening it. Ideal to get privacy in a bedroom or living room.",
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
			{
				product_name: "blackout roller blinds",
				sku_id: "product-002",
				description: "Blinds blend style with ease, offering privacy and light control while being easy to clean and fitting any room’s look.",
				mrp: 393,
				selling_price: 393,
				emi_option: {
					emi_price: 135,
					emi_duration_in_months: 3,
				},
				category: ["blinds"],
				media: [
					{
						type: "image",
						url: "https://kurtains.ae/wp-content/uploads/2023/03/IMG_05431.jpg"
					},
					{
						type: "image",
						url: "https://kurtains.ae/wp-content/uploads/2023/03/ROLF-3125_Shipley-Light-Grey_Roller-EVO-Life-2024x1718.jpg"
					},
					{
						type: "image",
						url: "https://kurtains.ae/wp-content/uploads/2023/03/ROLF-3126_Shipley-Dark-Grey_Roller-EVO-Life.jpg",
					}
				],
				attributes: {
					dimension: {
						length: "1.5m",
						breadth: "2m",
					}
				}
			},
			{
				product_name: "sheer",
				sku_id: "product-001",
				description: "Sheer fabric curtains, allowing sunlight to enter your room and softening it. Ideal to get privacy in a bedroom or living room.",
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
			{
				product_name: "blackout roller blinds",
				sku_id: "product-002",
				description: "Blinds blend style with ease, offering privacy and light control while being easy to clean and fitting any room’s look.",
				mrp: 393,
				selling_price: 393,
				emi_option: {
					emi_price: 135,
					emi_duration_in_months: 3,
				},
				category: ["blinds"],
				media: [
					{
						type: "image",
						url: "https://kurtains.ae/wp-content/uploads/2023/03/IMG_05431.jpg"
					},
					{
						type: "image",
						url: "https://kurtains.ae/wp-content/uploads/2023/03/ROLF-3125_Shipley-Light-Grey_Roller-EVO-Life-2024x1718.jpg"
					},
					{
						type: "image",
						url: "https://kurtains.ae/wp-content/uploads/2023/03/ROLF-3126_Shipley-Dark-Grey_Roller-EVO-Life.jpg",
					}
				],
				attributes: {
					dimension: {
						length: "1.5m",
						breadth: "2m",
					}
				}
			},
			{
				product_name: "sheer",
				sku_id: "product-001",
				description: "Sheer fabric curtains, allowing sunlight to enter your room and softening it. Ideal to get privacy in a bedroom or living room.",
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
			{
				product_name: "blackout roller blinds",
				sku_id: "product-002",
				description: "Blinds blend style with ease, offering privacy and light control while being easy to clean and fitting any room’s look.",
				mrp: 393,
				selling_price: 393,
				emi_option: {
					emi_price: 135,
					emi_duration_in_months: 3,
				},
				category: ["blinds"],
				media: [
					{
						type: "image",
						url: "https://kurtains.ae/wp-content/uploads/2023/03/IMG_05431.jpg"
					},
					{
						type: "image",
						url: "https://kurtains.ae/wp-content/uploads/2023/03/ROLF-3125_Shipley-Light-Grey_Roller-EVO-Life-2024x1718.jpg"
					},
					{
						type: "image",
						url: "https://kurtains.ae/wp-content/uploads/2023/03/ROLF-3126_Shipley-Dark-Grey_Roller-EVO-Life.jpg",
					}
				],
				attributes: {
					dimension: {
						length: "1.5m",
						breadth: "2m",
					}
				}
			},
		]
	},
}

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
	const { data: responseData, isLoading } = props;
	const [selectedCategory, setSelectedCategory] = React.useState(categories[0].value);

	if(isLoading || !responseData || responseData.data_type !== 'collection') {
		return <PageSpinner />
	}

	const { data: { entities: productsData } } = responseData;
	const productsToRender = productsData.filter(product => selectedCategory === 'all' || product.category.includes(selectedCategory as Category))
	return (
		<>
			<Header />
			<PageContainer>
				<Flexbox direction="row" justify="space-between" align="center">
					<FlexboxItem colspan={"auto"} colspanXL={"auto"} mb="xxl">
						<Text as="h1" fontStyleGuide="heading3" color="mine-shaft">{`Our Products`}</Text>
					</FlexboxItem>
					<FlexboxItem colspan={"auto"} colspanXL={"auto"} mb="xxl">
						<ChipButton items={categories} value={selectedCategory} onChange={setSelectedCategory} />
					</FlexboxItem>
				</Flexbox>
				<Flexbox direction="row" justify="flex-start" align="stretch">
					{productsToRender.map((product, index) => (
						<FlexboxItem key={`productcard-${index}-${product.sku_id}`} colspan={12} colspanXL={8} mb="lg">
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
	console.log('>>> getInitialProps called: ');
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve({ data: {...response, data_type: 'collection' } })
		}, 1000);
	})
}

export default CollectionPage;
