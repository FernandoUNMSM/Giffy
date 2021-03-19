import React, { useCallback } from "react"
import { useLocation } from "wouter"
import ListOfGifs from 'components/ListOfGifs/ListOfGifts'
import { useGifs } from 'hooks/useGifs'
import TrendingSearches from 'components/TrendingSearches'
import './styles.css'
import SearchForm from 'components/SearchForm'
import {Helmet} from 'react-helmet'

function Home() {
  const [Link, pushLocation] = useLocation()
  const {gifs} = useGifs()

  const handleSubmit = useCallback((keyword) => {
    pushLocation(`/search/${keyword}`)//Cambia la ruta
  },[pushLocation])

  // const element = useMemo(() => <SearchForm onSubmit={handleSubmit}/>,[handleSubmit])
  //esta es una manera de hacer que no se renderize el seachform cuando se renderiza el home

  return (
    <>
      <Helmet>
        <title>Home || Giffy</title>
      </Helmet>
      <SearchForm onSubmit={handleSubmit}/>
      {/* {element} */}
      <div className="App-main">
        <div className="App-results">
          <h3 className="App-title">Última búsqueda</h3>
          <ListOfGifs gifs={gifs} />
        </div>
        <div className="App-category">
          <TrendingSearches />
        </div>
      </div>
    </>
  )
}

export default Home