import {API_KEY, API_URL} from './settings'

const fromApiResponseToGif = apiResponse => {
	const { data } = apiResponse
  const { images, title, id } = data
  const { url } = images.downsized_medium

  return { title, id, url }
}

function getSingleGif({ id }) {
	const API = `${API_URL}/gifs/${id}?api_key=${API_KEY}`;

	return fetch(API)
		.then(res => res.json())
		.then(fromApiResponseToGif)
}

export default getSingleGif;