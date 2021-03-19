import Spinner from 'components/Spinner/Spinner'
import useSingleGif from 'hooks/useSingleGif'
import useSEO from 'hooks/useSEO'
import React from 'react'
import { Redirect } from 'wouter'
import Gif from './../../components/Gif/Gif'
import { Helmet } from 'react-helmet'

function Detail({ params }) {
	const { gif, isLoading, isError } = useSingleGif({ id: params.id })
	// console.log(gif)
	const title = gif ? gif.title : ''
	// useSEO({description: 'Detalle',title})

	if (isLoading) return (<>
		<Helmet>
			<title>Cargando...</title>
		</Helmet>
		<Spinner />
	</>)
	if (isError) return <Redirect to='/404' />
	if (!gif) return null

	return (
		<>
			<Helmet>
				<title>{title} || Giffy</title>
			</Helmet>
			<h3>{gif.title}</h3>
			<Gif
				{...gif}
			/>
		</>
	)
}
export default Detail