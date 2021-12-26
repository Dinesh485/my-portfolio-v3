import { useEffect, useState } from "react"

const useViewPort =() =>{
    const [viewWidth, setViewWidth] = useState()
    const [viewHeight, setViewHeight] = useState()

  useEffect(() =>{
     setViewWidth(window.innerWidth)
     window.addEventListener('resize', () =>{
       setViewWidth(window.innerWidth)
       setViewHeight(window.innerHeight)
     })
  },[])

  return{height: viewHeight, width: viewWidth}
}

export default useViewPort