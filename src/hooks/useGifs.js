import { useEffect, useState, useContext } from 'react'
import getGifs from '../services/getGifs'
import GifsContext from '../context/GifsContext'

const INITIAL_PAGE = 0

export function useGifs({ keyword } = { keyword: null }){
  const [loading, setLoading] = useState(false)
  const [loadingNextPage, setLoadingNextPage] = useState(false)
  // const [gifs, setGifs] = useState([])
  const [page, setPage] = useState(INITIAL_PAGE)
  const {gifs, setGifs} = useContext(GifsContext)

  const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'

  useEffect(function () {
    setLoading(true)
    //Recuperamos la keyword del localstorage
    //Esto es lo mismo a keyword ? keyword : localStorage.getItem('lastKeyword')
    getGifs({ keyword: keywordToUse })
    .then(gifs => {
      setGifs(gifs)
      setLoading(false)
      //Guardamos la keyword usada el el localstorage
      if(keyword) localStorage.setItem('lastKeyword', keyword)
    })
  }, [keyword, setGifs, keywordToUse])

  useEffect(()=>{
    if(page === INITIAL_PAGE) return
    setLoadingNextPage(true)
    getGifs({keyword: keywordToUse, page})
      .then(nextGifs => {
        setGifs(prevGifs => prevGifs.concat(nextGifs))
        setLoadingNextPage(false)
      })
  },[page, keywordToUse, setGifs])

  return {loading, gifs, setPage}
}

// export function useGifts()