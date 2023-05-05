import axios from 'axios';

// const API_URL = 'http://localhost:99/api/scrap';
const API_URL = `https://scraping-app.vercel.app/api/scrap`;

export type ScrappedData = {
	title: string;
	description: string;
	author: string;
	image: string;
	type: string;
	canonicalUrl: string;
	locale: string;
	publishedDate: string;
};
type ResponseErrorType = {
	status: 0;
	error: string;
};
type ResponseSuccessType = {
	status: 1;
	data: ScrappedData | string;
};

export const scrapUrl = async (url: string, screenshotMode = false) => {
	// const res = await fetch(API_URL, {
	// 	method: 'POST',
	// 	body: JSON.stringify({ url, generateScreenshot: screenshotMode }),
	// 	headers: {
	// 		'content-type': 'application/json',
	// 	},
	// });

	const res = await axios.post(API_URL, {
		url,
		generateScreenshot: screenshotMode,
	});
	const data: ResponseErrorType | ResponseSuccessType = await res.data;
	// const data: ResponseErrorType | ResponseSuccessType = await res.json();
	return data;
};
