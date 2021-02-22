import React, { useState, useEffect, useRef } from 'react'
import Category from 'components/Category'
import getTrendingTerms from 'services/getTrendingTerms'
import useNearScreen from 'hooks/useNearScreen'

function TrendingSearches() {
  const [trends, setTrends] = useState([])
  useEffect(() => {
    getTrendingTerms()
    .then(setTrends)
  }, [])
  return <Category name="Gifs mas buscados" options={trends} />
}

export default function LazyTrending() {
  const {isNearScreen, fromRef} = useNearScreen('')

  return <div ref={fromRef}>
    {
      isNearScreen ? <TrendingSearches/> : null
    }
  </div>
}