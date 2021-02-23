import {API_KEY, API_URL} from './settings'


const fromApiResponseToGifs = apiResponse => {
	const { data } = apiResponse
	//Al poner los corchetes como la constante se llama igual al valor retornado lo ponemos con llaves y nos ahorramos el .data de la respuesta
	if (Array.isArray(data)) {
		//Comprueba si se recibio un array en la API
		const gifs = data.map(image => {
			const { images, title, id } = image
			const { url } = images.downsized_medium
			return { title, id, url }
		})
		return gifs
	}
	return []
}


function getGifs({ limit = 25, keyword = 'monogatari', page = 0 } = {}) {
	const API = `${API_URL}/gifs/search?api_key=${API_KEY}=${keyword}&limit=${limit}&offset=${limit*page}&rating=g&lang=en`;

	return fetch(API)
		.then(res => res.json())
		.then(fromApiResponseToGifs)
}

export default getGifs;

