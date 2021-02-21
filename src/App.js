import React from 'react';
import './App.css';
// import ListOfGifts from './components/ListOfGifs/ListOfGifts';
import Home from './pages/Home'

import { Route } from 'wouter';
import SearchResults from './pages/SearchResults';
import Detail from './pages/Detail';
import StaticContext from './context/StaticContext'
import { GifsContextProvider } from './context/GifsContext';

function App() {
  return (
    <StaticContext.Provider value={
      {
        name: 'Oscar',
        suscribete: true
      }
    }>
      <div className="App">
        <section className="App-content">
          <GifsContextProvider>
            <Route
              component = {Home}
              path = "/"
            />
            <Route
              component = {SearchResults}
              path = "/search/:keyword"
            />
            <Route
              component = {Detail}
              path = "/searchGif/:id"
            />
          </GifsContextProvider>
          {/* <ListOfGifts keyword={'nekopara'}/> */}
        </section>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
