import React, { useCallback, useEffect, useRef } from 'react'
import Spinner from 'components/Spinner/Spinner'
import ListOfGifs from 'components/ListOfGifs/ListOfGifts'
import { useGifs } from 'hooks/useGifs'
import useNearScreen from 'hooks/useNearScreen'
import debounce from 'just-debounce-it'
import './styles.css'
import useSEO from 'hooks/useSEO'
import { Helmet } from 'react-helmet'

function SearchResults({ params }) {
  const externalRef = useRef()
  const { keyword } = params
  const { loading, gifs, setPage } = useGifs({ keyword })
  console.log(params)
  const { isNearScreen } = useNearScreen({
    distance: '300px',
    externalRef: loading ? null : externalRef,
    once: false
  })

  const title = gifs ? `Resultados de ${keyword}` : ''

  // useSEO({description: 'Resultados', title})

  // const handleNextPage = () => setPage(prevPage => prevPage + 1)

  const debounceHandleNextPage = useCallback(debounce(
    () => setPage(prevPage => prevPage + 1), 200
  ), [])//Usamos el useCallback porque se renderiza varias veces el componente y cada ves que se renderiza estaria definiendo nuevamente la funcion y por eso usamos el useCallback para que guarde la funcion

  useEffect(() => {
    console.log(isNearScreen)
    if (isNearScreen) debounceHandleNextPage()
  }, [isNearScreen, debounceHandleNextPage])

  return <>
    {loading
      ? <Spinner />
      : <>
        <Helmet>
          <title>{title} || Giffy</title>
          <meta name="description" content={`${title} || Giffy`}/>
        </Helmet>
        <h3>{decodeURI(keyword)}</h3>
        <ListOfGifs gifs={gifs} />
        {/* <button onClick={handleNextPage}>get next page</button> */}
        <div className="visor" ref={externalRef}></div>
      </>
    }
  </>
}
export default SearchResults