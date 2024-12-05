import React from "react";
import { asyncComponent } from "after";

export default [

	{
		path: "/styleguide",
		Component: asyncComponent({
      loader: () => import(/* webpackChunkName: "Styleguide" */ "./pages/Styleguide"),
      Placeholder: () => <div>...LOADING...</div>,
      chunkName: "Styleguide"
    }),
	},
  {
    path: "/",
    Component: asyncComponent({
      loader: () => import(/* webpackChunkName: "Home" */ "./pages/Home"),
      Placeholder: () => <div>...LOADING...</div>,
      chunkName: "Home"
    }),
  },
	{
    path: "/about-us",
    Component: asyncComponent({
      loader: () => import(/* webpackChunkName: "about-us" */ "./pages/AboutUs"),
      Placeholder: () => <div>...LOADING...</div>,
      chunkName: "about-us"
    }),
  },
	{
    path: "/collection",
    Component: asyncComponent({
      loader: () => import(/* webpackChunkName: "collection-page" */ "./pages/Collection"),
      Placeholder: () => <div>...LOADING...</div>,
      chunkName: "collection-page"
    }),
  },
	{
    path: "/product/:sku_id",
    Component: asyncComponent({
      loader: () => import(/* webpackChunkName: "catalogue-page" */ "./pages/Catalogue"),
      Placeholder: () => <div>...LOADING...</div>,
      chunkName: "catalogue-page"
    }),
  },
	{
    path: "/book-visit-form",
    Component: asyncComponent({
      loader: () => import(/* webpackChunkName: "book-visit-form" */ "./pages/BookDemoForm"),
      Placeholder: () => <div>...LOADING...</div>,
      chunkName: "book-visit-form"
    }),
  },
  {
		path: "/terms",
		Component: asyncComponent({
      loader: () => import(/* webpackChunkName: "TermsAndConditions" */ "./pages/TermsAndConditions"),
      Placeholder: () => <div>...LOADING...</div>,
      chunkName: "TermsAndConditions"
    }),
	},
	{
		path: "/faq",
		Component: asyncComponent({
      loader: () => import(/* webpackChunkName: "faq" */ "./pages/FAQ"),
      Placeholder: () => <div>...LOADING...</div>,
      chunkName: "faq"
    }),
	},
  {
		path: "/privacyPolicy",
		Component: asyncComponent({
      loader: () => import(/* webpackChunkName: "PrivacyPolicy" */ "./pages/PrivacyPolicy"),
      Placeholder: () => <div>...LOADING...</div>,
      chunkName: "PrivacyPolicy"
    }),
	},
	{
		path: "/privacy-policy",
		Component: asyncComponent({
      loader: () => import(/* webpackChunkName: "PrivacyPolicy" */ "./pages/PrivacyPolicy"),
      Placeholder: () => <div>...LOADING...</div>,
      chunkName: "PrivacyPolicy"
    }),
	},
];
