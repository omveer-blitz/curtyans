import * as globals from './globals';
import { client } from './fetch';
import { EventRequest, EventResponse } from './types';

export const push = async (
	data: Pick<EventRequest, 'event_label' | 'event_datum'>,
): Promise<EventResponse | void> => {

 	const utmParams = globals.get(globals.keys.utmParams);
	const device = globals.get(globals.keys.device);

	const newPayload = {
		...data,
 		visitor_id: globals.get(globals.keys.visitorId) || "",
		session_id: globals.get(globals.keys.sessionId) || "",
		language: navigator.language,
		useragent: navigator.userAgent,
		platform: (device && device.isMobile ? "mobile" : "web"),
		utm_source: utmParams ? utmParams.utm_source : '',
		utm_campaign: utmParams ? utmParams.utm_campaign : '',
		utm_medium: utmParams ? utmParams.utm_medium : '',
		utm_content: utmParams ? utmParams.utm_content : '',
		utm_term: utmParams ? utmParams.utm_term : '',
		urlslug: window.location.pathname
	};

	if (['DEVELOPMENT'].includes(process.env.ENVIRONMENT || "")) {
		return console.log(newPayload);
	}

	const response = await client.post<EventRequest, EventResponse>(
		{
			url: process.env.API_EVENT_URL || "",
			payload: newPayload,
		}
	);
	return response.data;
}

