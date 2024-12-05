export type DeviceType = {
	isWebview: boolean;
	userAgent: string;
	isMobile: boolean;
	isTablet: boolean;
	isModernBrowser: boolean,
}

export type UTMParamsType = {
	utm_source?: string,
	utm_medium?: string,
	utm_campaign?: string,
	utm_content?: string,
	utm_term?: string,
}
