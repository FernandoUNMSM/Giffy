import React, { useState, useEffect, useRef } from 'react'
import Category from 'components/Category'
import getTrendingTerms from 'services/getTrendingTerms'

export default function TrendingSearches() {
  const [trends, setTrends] = useState([])
  useEffect(() => {
    getTrendingTerms()
    .then(setTrends)
  }, [])
  return <Category name="Gifs mas buscados" options={trends} />
}