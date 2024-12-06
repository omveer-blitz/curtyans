import express from "express";
import { render } from "after";
import Document from "./Document";
import routes from "./routes";
import { renderToString } from "react-dom/server";
import cookieParser from 'cookie-parser';
import { setVisitorId, initLocals } from "./server/middlewares";
import { App } from "./App";
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

const assets = require(process.env.DAZZLE_ASSETS_MANIFEST || "");
const chunks = require(process.env.DAZZLE_CHUNKS_MANIFEST || "");

const server = express();
server
	.disable("x-powered-by")
	.use(cookieParser())
	.use(initLocals)
	.use(setVisitorId)
	.use(express.static(process.env.DAZZLE_PUBLIC_DIR || ""))
	.get("/health", (req, res) => {
		return res.send('Okay!');
	})
	.get("/*", async (req, res) => {

		// Add a custom renderer to add redux provider
		const customRenderer = (node) => ({
			html: renderToString(
				<CacheProvider value={createCache({ key: 'css' })}>
					<App>
						{node}
					</App>
				</CacheProvider>
			),
		});

		try {
			const html = await render({
				req,
				res,
				routes,
				assets,
				chunks,
				document: Document,
				customRenderer,
				scrollToTop: true,
				customParams: {
					locals: req['locals']
				}
			});

			res.send(html);
		} catch (error) {
			res.json({ message: error.message, stack: error.stack });
		}
	});

export default server;
