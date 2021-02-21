import React, { useState } from "react"
import { Link, useLocation } from "wouter"
import ListOfGifs from "../../components/ListOfGifs/ListOfGifts"
import { useGifts } from "../../hooks/useGifs"


const POPULAR_GIFS = ["Monogatari", "Oppais", "Yuri", "Code"]

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
      <ListOfGifs gifs={gifs}/>
      <h3 className="App-title">Los gifs más populares</h3>
      <ul>
      {POPULAR_GIFS.map((popularGif) => (
        <li key={popularGif}>
          <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
        </li>
      ))}
      </ul>
    </>
  )
}

export default Home