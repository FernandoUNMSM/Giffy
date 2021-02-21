import React from 'react';
import './Gif.css'
import {Link, router} from 'wouter'

function Gif({ title = "nyan", id, url }) {
	return (
		<div className="Gif">
			<div className="Gif-buttons">
				{/* <Fav id={id}></Fav> */}
			</div>
			<Link to={`/searchGif/${id}`} className='Gif-link'>
				<h4>{title}</h4>
				<img loading='lazy' alt={title} src={url} />
			</Link>
		</div>
	)
}
export default Gif;