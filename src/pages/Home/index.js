import React, { useState } from "react"
import { Link, useLocation } from "wouter"
import ListOfGifs from 'components/ListOfGifs/ListOfGifts'
import { useGifts } from 'hooks/useGifs'
import TrendingSearches from 'components/TrendingSearches'
import './styles.css'

function Home() {
  const [keyword, setKeyword] = useState('')
  const [path, pushLocation] = useLocation()
  const {loading, gifs} = useGifts()

  const handleSubmit = evt => {
    evt.preventDefault()//Evita recargar la pagina con el sumbit del form
    pushLocation(`/search/${keyword}`)//Cambia la ruta
    console.log(keyword)
  }
  const handleChange = evt => {
    setKeyword(evt.target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <button>Buscar</button>
        <input placeholder="Search a gif here..." onChange={handleChange} type='text' value={keyword} />
      </form>
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