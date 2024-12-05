const organisationData = {
	image: "url",
	url: "website url",
	logo: "logo url",
	name: "Curtayns",
	description: "Company Business",
	email: "admin email of company",
	foundingDate: "2022-01-01",
	address: {
		streetAddress: "Address Line 1",
		addressLocality: "Address Line 2",
		addressCountry: "Address Line 3",
		addressRegion: "Address Line 4",
		postalCode: "Zip Code"
	}
}

export default {
	"@context": "https://schema.org",
	"@type": "Organization",
	"image": organisationData.image,
	"url": organisationData.url,
	"logo": organisationData.logo,
	"name": organisationData.name,
	"description": organisationData.description,
	"email": organisationData.email,
	"foundingDate": organisationData.foundingDate,
	"address": {
		"@type": "PostalAddress",
		"streetAddress": organisationData.address.streetAddress,
		"addressLocality": organisationData.address.addressLocality,
		"addressCountry": organisationData.address.addressCountry,
		"addressRegion": organisationData.address.addressRegion,
		"postalCode": organisationData.address.postalCode
	}
}

// const organizationStructuredData = {
// 	"@context": "https://schema.org",
// 	"@type": "Organization",
// 	"image": "https://cdn.zeplin.io/6433a23cf1f1aa25d8e6725e/assets/a7ca3d39-815f-4007-a229-52762925ccbd.svg",
// 	"url": "https://shopdeck.com/",
// 	"logo": "https://pro.shopdeck.com/logo512.png",
// 	"name": "ShopDeck - Create your online brand",
// 	"description": "ShopDeck helps sellers to create their ecommerce store/website, manage logistics, payment and everything for a business to sell stuffs online.",
// 	"email": "admin@blitzscale.co",
// 	"foundingDate": "2022-01-01",
// 	"address": {
// 		"@type": "PostalAddress",
// 		"streetAddress": "Address Line 1",
// 		"addressLocality": "Address Line 2",
// 		"addressCountry": "Address Line 3",
// 		"addressRegion": "Address Line 4",
// 		"postalCode": "Zip Code"
// 	}
// };
