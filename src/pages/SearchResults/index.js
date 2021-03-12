import React, {useCallback, useEffect, useRef} from 'react'
import Spinner from 'components/Spinner/Spinner'
import ListOfGifs from 'components/ListOfGifs/ListOfGifts'
import { useGifts } from 'hooks/useGifs'
import useNearScreen from 'hooks/useNearScreen'
import debounce from 'just-debounce-it'
import './styles.css'


function SearchResults({ params }) {
  const externalRef = useRef()
  const { keyword } = params
  const { loading, gifs, setPage} = useGifts({ keyword })
  const {isNearScreen, fromRef} = useNearScreen({
    distance: '300px',
    externalRef: loading ? null : externalRef,
    once: false
  })

  // const handleNextPage = () => setPage(prevPage => prevPage + 1)

  const debounceHandleNextPage = useCallback(debounce(
    () => setPage(prevPage => prevPage + 1), 200
  ),[])//Usamos el useCallback porque se renderiza varias veces el componente y cada ves que se renderiza estaria definiendo nuevamente la funcion y por eso usamos el useCallback para que guarde la funcion

  useEffect(()=>{
    console.log(isNearScreen)
    if(isNearScreen) debounceHandleNextPage()
  }, [isNearScreen, debounceHandleNextPage])

  return <>
    {loading
      ? <Spinner />
      : <>
        <h3>{decodeURI(keyword)}</h3>
        <ListOfGifs gifs={gifs} />
        {/* <button onClick={handleNextPage}>get next page</button> */}
        <div className="visor" ref={externalRef}></div>
      </>
    }
  </>
}
export default SearchResults