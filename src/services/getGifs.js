const apiKey = 'uLowYZ0U9XhPYMShzKi1VmALEIj1Rxsw&q';

function getGifs({keyword = 'monogatari'} = {}) {
const API = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}=${keyword}&limit=25&offset=0&rating=g&lang=en`;

	return fetch(API)
		.then(res => res.json())
		.then(response => {
			// const data = response.data
			const { data } = response
			//Al poner los corchetes como la constante se llama igual al valor retornado lo ponemos con llaves y nos ahorramos el .data de la respuesta
			if (Array.isArray(data)) {
				//Comprueba si se recibio un array en la API
				const gifs = data.map(image => {
					const {images, title, id} = image
					const {url} = images.downsized_medium
					return {title, id, url}
				})
				return gifs
			}
		})
}

export default getGifs;

