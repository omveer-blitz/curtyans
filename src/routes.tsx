import React from "react";
import { asyncComponent } from "after";
import { PageSpinner } from "atoms/Spinner/Spinner";

export default [

	{
		path: "/styleguide",
		Component: asyncComponent({
      loader: () => import(/* webpackChunkName: "Styleguide" */ "./pages/Styleguide"),
      Placeholder: PageSpinner,
      chunkName: "Styleguide"
    }),
	},
  {
    path: "/",
    Component: asyncComponent({
      loader: () => import(/* webpackChunkName: "Home" */ "./pages/Home"),
      Placeholder: PageSpinner,
      chunkName: "Home"
    }),
  },
	{
    path: "/about-us",
    Component: asyncComponent({
      loader: () => import(/* webpackChunkName: "about-us" */ "./pages/AboutUs"),
      Placeholder: PageSpinner,
      chunkName: "about-us"
    }),
  },
	{
    path: "/collection",
    Component: asyncComponent({
      loader: () => import(/* webpackChunkName: "collection-page" */ "./pages/Collection"),
      Placeholder: PageSpinner,
      chunkName: "collection-page"
    }),
  },
	{
    path: "/product/:sku_id",
    Component: asyncComponent({
      loader: () => import(/* webpackChunkName: "catalogue-page" */ "./pages/Catalogue"),
      Placeholder: PageSpinner,
      chunkName: "catalogue-page"
    }),
  },
	{
    path: "/book-visit-form",
    Component: asyncComponent({
      loader: () => import(/* webpackChunkName: "book-visit-form" */ "./pages/BookDemoForm"),
      Placeholder: PageSpinner,
      chunkName: "book-visit-form"
    }),
  },
  {
		path: "/terms",
		Component: asyncComponent({
      loader: () => import(/* webpackChunkName: "TermsAndConditions" */ "./pages/TermsAndConditions"),
      Placeholder: PageSpinner,
      chunkName: "TermsAndConditions"
    }),
	},
	{
		path: "/faq",
		Component: asyncComponent({
      loader: () => import(/* webpackChunkName: "faq" */ "./pages/FAQ"),
      Placeholder: PageSpinner,
      chunkName: "faq"
    }),
	},
  {
		path: "/privacyPolicy",
		Component: asyncComponent({
      loader: () => import(/* webpackChunkName: "PrivacyPolicy" */ "./pages/PrivacyPolicy"),
      Placeholder: PageSpinner,
      chunkName: "PrivacyPolicy"
    }),
	},
	{
		path: "/privacy-policy",
		Component: asyncComponent({
      loader: () => import(/* webpackChunkName: "PrivacyPolicy" */ "./pages/PrivacyPolicy"),
      Placeholder: PageSpinner,
      chunkName: "PrivacyPolicy"
    }),
  },
  {
		path: "/product-categories",
		Component: asyncComponent({
      loader: () => import(/* webpackChunkName: "/ProductCategories" */ "./pages/ProductCategories"),
      Placeholder: PageSpinner,
      chunkName: "/ProductCategories"
    }),
  },
];
