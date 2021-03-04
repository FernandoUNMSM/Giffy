import React, {useRef} from 'react'
import Spinner from 'components/Spinner/Spinner'
import ListOfGifs from 'components/ListOfGifs/ListOfGifts'
import { useGifts } from 'hooks/useGifs'
import useNearScreen from 'hooks/useNearScreen'

function SearchResults({ params }) {
  const externalRef = useRef()
  const { keyword } = params
  const { loading, gifs, setPage} = useGifts({ keyword })
  const {isNearScreen, fromRef} = useNearScreen({externalRef: loading ? null : externalRef})
  // const handleNextPage = () => setPage(prevPage => prevPage + 1)

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