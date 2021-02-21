import React, { useState } from "react"
import { Link, useLocation } from "wouter"
import ListOfGifs from "../../components/ListOfGifs/ListOfGifts"
import { useGifts } from "../../hooks/useGifs"
import TrendingSearches from '../../components/TrendingSearches'
import './styles.css'
function Home() {
  const [keyword, setKeyword] = useState('')
  const [path, pushLocation] = useLocation()
  const {loading, gifs} = useGifts()

  const handleSumbit = evt => {
    evt.preventDefault()//Evita recargar la pagina con el sumbit del form
    pushLocation(`/search/${keyword}`)//Cambia la ruta
    console.log(keyword)
  }
  const handleChange = evt => {
    setKeyword(evt.target.value)
  }

  return (
    <>
      <form onSubmit={handleSumbit}>
        <input placeholder="Search a GIF" onChange={handleChange} type="text" value={keyword}/>
      </form>
      <h3>Ultima busqueda</h3>
      <div className="homeContainer">
        <ListOfGifs gifs={gifs}/>
        <TrendingSearches/>
      </div>
    </>
  )
}

export default Home