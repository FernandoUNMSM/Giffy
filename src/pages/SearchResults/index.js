import React from 'react'
import Spinner from 'components/Spinner/Spinner'
import ListOfGifs from 'components/ListOfGifs/ListOfGifts'
import { useGifts } from 'hooks/useGifs'

function SearchResults({ params }) {
  const { keyword } = params
  const { loading, gifs, setPage} = useGifts({ keyword })

  const handleNextPage = () => setPage(prevPage => prevPage + 1)

  return <>
    {loading
      ? <Spinner />
      : <>
        <h3>{decodeURI(keyword)}</h3>
        <ListOfGifs gifs={gifs} />
        <button onClick={handleNextPage}>get next page</button>
      </>
    }
  </>
}
export default SearchResults