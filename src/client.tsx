import React from "react";
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { After, ensureReady, ServerAppState } from "after";
import routes from "./routes";
import { App } from "./App";
import * as globals from "./services/globals";
import Modal from "react-modal";

// window.__PRELOADED_LOCALS__
export const store = (window['__PRELOADED_LOCALS__'] || {});

const utmParams = store.utmParams;
const visitorId = store.visitorId;
const sessionId = store.sessionId;
const device = store.device;

globals.set(globals.keys.utmParams, utmParams);
globals.set(globals.keys.visitorId, visitorId);
globals.set(globals.keys.sessionId, sessionId);
globals.set(globals.keys.device, device);

function renderApp() {
	ensureReady(routes).then((data) => {
		const rootElement = document.getElementById("root");
		rootElement && Modal.setAppElement(rootElement);
		if (rootElement) {
			hydrateRoot(
				rootElement,
				<BrowserRouter>
					{/* <CacheProvider value={createCache({ key: 'css', prepend: true })}> */}
						<App>
							<After transitionBehavior='instant' customParams={{ locals: store }} data={data as unknown as ServerAppState} routes={routes} />
						</App>
					{/* </CacheProvider> */}
				</BrowserRouter>
			);
		} else {
			console.error("Root element not found");
		}
	});
}

renderApp();

if (module.hot) {
	module.hot.accept("./routes", renderApp);
}


/**
 *
 * <Routes>

						{routes.map((route, index) => {
							const Component = route.Component;
							return (
								<Route
									path={route.path}
									key={`route--${index}`}
									Component={() => {
										return (
											<Component
											/>
										)
									}}
								/>
							)
						})}
					</Routes>
 */
