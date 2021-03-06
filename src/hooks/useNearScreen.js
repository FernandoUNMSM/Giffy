import { useState, useEffect, useRef } from 'react'

export default function useNearScreen ({distance = '100px', externalRef, once = true}={}){
  const [isNearScreen, setShow] = useState(false)
  const fromRef = useRef()
  useEffect(() => {
    let observer
    const element = externalRef ? externalRef.current : fromRef.current

    const onchange = (entries, observer) => {
      const el = entries[0]
      if(el.isIntersecting){
        setShow(true)
        once && observer.disconnect()
      }else {
        !once && setShow(false)
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
      if(element) observer.observe(element)
    })

    return () => observer && observer.disconnect()
  })
  return {isNearScreen, fromRef}
}
