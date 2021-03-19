import React, { useEffect, useState } from 'react'
import {useGifs} from 'hooks/useGifs'
import getSingleGif from 'services/getSingleGif'

export default function useSingleGif ({id}) {
  const {gifs} = useGifs()
  const gifFromCache = gifs.find(singleGif => singleGif.id === id)

  const [gif, setGif] = useState(gifFromCache)
  const [isLoading, setLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(()=>{
    if(!gif){
      setLoading(true)
      getSingleGif({id})
      .then(gif =>{
        setGif(gif)
        setLoading(false)
        setIsError(false)
      }).catch(err => {
        setLoading(false)
        setIsError(true)
      })
    }
  },[gif, id])

  return {gif, isLoading, isError}
}