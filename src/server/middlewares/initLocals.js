import { v4 as uuidv4 } from 'uuid';
import MobileDetect from "mobile-detect";
import { matchesUA } from 'browserslist-useragent';

export default (req, res, next) => {
	// Initialize locals with some request data
	req.locals = req.locals || {};
	const userAgent = req.headers['user-agent'] || '';

	const queryParams = req.query;
	const mobileDetect = new MobileDetect(userAgent);

	req.locals.sessionId = uuidv4();

	req.locals.device = {
		isWebview: queryParams.platform === 'android',
		userAgent: mobileDetect.userAgent(),
		isMobile: mobileDetect.mobile() || mobileDetect.tablet(),
		isTablet: mobileDetect.tablet(),
		isModernBrowser: matchesUA(userAgent, {
			browsers: ['Firefox >= 53', 'Edge >= 15', 'Chrome >= 58', 'iOS >= 10.1'],
			allowHigherVersions: true,
		}),
	};

	req.locals.timeStamp = new Date();

	req.locals.utmParams = {
		utm_source: queryParams.utm_source,
		utm_medium: queryParams.utm_medium,
		utm_campaign: queryParams.utm_campaign,
		utm_content: queryParams.utm_content,
		utm_term: queryParams.utm_term,
	};
	req.locals.allQueryParams = queryParams || {};

	next();
};
