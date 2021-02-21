import { useEffect, useState, useContext } from 'react'
import getGifs from '../services/getGifs'
import GifsContext from '../context/GifsContext'


export function useGifts({ keyword } = { keyword: null }){
  const [loading, setLoading] = useState(false)
  // const [gifs, setGifs] = useState([])
  const {gifs, setGifs} = useContext(GifsContext)

  useEffect(function () {
    setLoading(true)
    //Recuperamos la keyword del localstorage
    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'
    //Esto es lo mismo a keyword ? keyword : localStorage.getItem('lastKeyword')
    getGifs({ keyword: keywordToUse })
    .then(gifs => {
      setGifs(gifs)
      setLoading(false)
      //Guardamos la keyword usada el el localstorage
      if(keyword) localStorage.setItem('lastKeyword', keyword)
    })
  }, [keyword, setGifs])

  return {loading, gifs}
}

// export function useGifts()