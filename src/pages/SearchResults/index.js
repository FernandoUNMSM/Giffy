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
  const handleNextPage = () => setPage(prevPage => prevPage + 1)
  // const handleNextPage = () => console.log('jk')

  const debounceHandleNextPage = useCallback(debounce(
    handleNextPage, 1000
  ),[])

  useEffect(()=>{
    console.log(isNearScreen)
    if(isNearScreen) debounceHandleNextPage()
  }, [isNearScreen])

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