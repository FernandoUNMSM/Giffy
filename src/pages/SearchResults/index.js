import React from 'react'
import Spinner from '../../components/Spinner/Spinner'
import ListOfGifs from '../../components/ListOfGifs/ListOfGifts'
import {useGifts} from '../../hooks/useGifs'

function SearchResults ({ params }) {
  const { keyword } = params
  const {loading, gifs} = useGifts({ keyword })

  return <>
    {loading
      ? <Spinner />
      : <ListOfGifs gifs={gifs} />
    }
  </>
}
export default SearchResults