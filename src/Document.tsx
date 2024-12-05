import React from "react";
import {
	AfterRoot,
	AfterData,
	AfterScripts,
	AfterStyles,
	__AfterContext,
	DocumentProps,
	DocumentgetInitialProps,
} from "after";
import serialize from 'serialize-javascript';
import organisationStructuredData from "snippets/organisationStructuredData";

// Styles
import normalizeStyle from "./styles/normalize";
import variableStyle from "./styles/variables";
import baseStyle from "./styles/base";
import { Global } from "@emotion/react";

class Document extends React.Component<DocumentProps> {
	static async getInitialProps({ renderPage }: DocumentgetInitialProps) {
		const page = await renderPage();
		return { ...page };
	}

	render() {
		const { helmet, customParams } = this.props;
		const { locals } = customParams;

		// get attributes from React Helmet
		const htmlAttrs = helmet.htmlAttributes.toComponent();
		const bodyAttrs = helmet.bodyAttributes.toComponent();


		return (
			<html lang="en-IN" {...htmlAttrs}>
				<head>
					<meta charSet="utf-8" />
					<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<meta name="google" content="notranslate" />
					<meta
						name="description"
						content={organisationStructuredData.description}
					/>
					<meta
						property="og:title"
						content={organisationStructuredData.name}
					/>
					<meta
						property="og:description"
						content={organisationStructuredData.description}
					/>
					<meta
						property="twitter:title"
						content={organisationStructuredData.name}
					/>
					<meta
						property="twitter:description"
						content={organisationStructuredData.description}
					/>
					<meta name="twitter:card" content="summary_large_image" />
					<meta property="og:type" content="website" />
					<meta property="og:keywords" content="Curtayns" />
					<title>{organisationStructuredData.name}</title>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
					<link rel="preconnect" href="https://d2z53scj8veve3.cloudfront.net" crossOrigin="anonymous" />
					{helmet.title.toComponent()}
					{helmet.meta.toComponent()}
					{helmet.link.toComponent()}
					<Global styles={normalizeStyle} />
					<Global styles={variableStyle} />
					<Global styles={baseStyle} />
					<AfterStyles />
					<script
						type="application/ld+json"
						dangerouslySetInnerHTML={{ __html: JSON.stringify(organisationStructuredData) }}
					/>
				</head>
				<body {...bodyAttrs}>
					<AfterRoot />
					<AfterData />
					<AfterScripts />
					<span dangerouslySetInnerHTML={{ __html: `<script>window.__PRELOADED_LOCALS__ = ${serialize(locals)}</script>` }} />
					<span
						dangerouslySetInnerHTML={{
							__html: `
								<script>
									window.WebFontConfig = {
										google: { families: ["Montserrat:400,700&display=swap"] }
									};
									(function() {
										var wf = document.createElement('script');
										wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
										wf.type = 'text/javascript';
										wf.async = 'true';
										var s = document.getElementsByTagName('script')[0];
										s.parentNode.insertBefore(wf, s);
									})();
								</script>
							`
						}}
					/>
				</body>
			</html>
		);
	}
}

export default Document;
