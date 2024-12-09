// GET /home
const homeAPIResponse = {
	code: 200,
	data: {
		hero_banner: {
			title: "Elevate Your Space with Custom Curtains, Blinds, and Wallpapers is a single sentence.",
			sub_title: "",
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

// GET /collection
const collectionAPIResponse = {
	code: 200,
	data: {
		categories: [
			{
				label: 'All',
				value: 'all',
				coming_soon: false,
			},
			{
				label: 'Curtain',
				value: 'curtain',
				coming_soon: true,
			},
			{
				label: 'Blinds',
				value: 'blinds',
				coming_soon: true,
			},
			{
				label: 'Wallpaper',
				value: 'wallpaper',
				coming_soon: true,
			},
			{
				label: 'Carpets and Rugs',
				value: 'carpets_and_rugs',
				coming_soon: true,
			}
		],
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

// GET /product/:sku_id
const productAPIResponse = {
	code: 200,
	data: {
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
}

// Excel sheet format for catalogues - columns
// ["product_name", "sku_id", "description", "mrp", "selling_price", "emi_option.emi_price", "emi_option.emi_duration_in_months", "category", "media1_type", "media1_url", "media2_type", "media2_url", "media3_type", "media3_url", "attributes.dimension.length", "attributes.dimension.breadth"]

// POST /book-visit
/** Request
 * {
		first_name: string;
		last_name: string;
		email: string;
		phone: string;
		address: string;
		flat_no?: string;
		city: string;
		visit_date: string;
		category_type: string;
		comment?: string;
	}
 */

	// POST /contact-us
	/**
	 * Request
	 * {
	 * 	name: string;
	 *  email_address: string;
	 *  phone_number?: string;
	 *  query_type: 'product_enquiry' | 'order_support' | 'consultation_request' | 'other';
	 *  message: string;
	 * }
	 */
