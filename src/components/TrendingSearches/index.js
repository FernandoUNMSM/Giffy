import React, {Suspense} from 'react'
import useNearScreen from 'hooks/useNearScreen'
import Spinner from 'components/Spinner/Spinner'
// import TrendingSearches from 'components/TrendingSearches/trendingSearches'
const TrendingSearches = React.lazy(
  () => import('./trendingSearches')
)

export default function LazyTrending() {
  const {isNearScreen, fromRef} = useNearScreen({distance: '150px'})

  return <div ref={fromRef}>
    {
      isNearScreen
      ? <Suspense fallback={<Spinner/>}>
          <TrendingSearches/>
      </Suspense>
      : <Spinner/>
    }
  </div>
}