import { useState, useEffect, useRef } from 'react'

export default function useNearScreen ({distance = '100px'}={}){
  let observer
  const [isNearScreen, setShow] = useState(false)
  const fromRef = useRef()
  useEffect(() => {
    const onchange = (entries, observer) => {
      const el = entries[0]
      console.log(el.isIntersecting)
      if(el.isIntersecting){
        setShow(true)
        observer.disconnect()
      }
    }

    Promise.resolve(
      typeof IntersectionObserver !== 'undefined'
      ? IntersectionObserver
      : import('intersection-observer')
    ).then(()=>{
      const observer = new IntersectionObserver(onchange, {
        rootMargin: distance//Esto hace que cuando halla 100px lanze la señal
      })
      observer.observe(fromRef.current)
    })

    return () => observer && observer.disconnect()
  })
  return {isNearScreen, fromRef}
}
