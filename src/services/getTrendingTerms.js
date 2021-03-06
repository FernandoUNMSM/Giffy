import { API_KEY, API_URL } from './settings'

const fromApiResponseToGifs = apiResponse => {
	const { data } = apiResponse

	return data
}

export default function getTrendingTerms() {
	// console.log('jkj')
	const API = `${API_URL}/trending/searches?api_key=${API_KEY}`;
	return fetch(API)
		.then(res => res.json())
		.then(fromApiResponseToGifs)
}


