import React from 'react';
import { Link, useLocation } from "wouter"
import './styles.css'

export default function Category({name, options=[]}={}) {
  return (
    <>
      <div className="category">
        <h3 className="App-title">{name}</h3>
        <ul>
          {options.map((popularGif) => (
            <li key={popularGif}>
              <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}