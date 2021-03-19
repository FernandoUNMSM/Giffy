import React, { useState, useEffect } from 'react'
import Category from 'components/Category'
import getTrendingTerms from 'services/getTrendingTerms'

export default function TrendingSearches() {
  const [trends, setTrends] = useState([])
  useEffect(() => {
    // console.log('jjj')
    getTrendingTerms()
    .then(setTrends)
  }, [])
  return <Category name="Trendings" options={trends} />
}