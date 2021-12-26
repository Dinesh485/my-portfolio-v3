import { useEffect, useRef } from "react"

const Cursor = () => {
    
  const cursor = useRef(null)
  const trail = useRef(null)

    useEffect(() =>{
        trail.current.style.transform = `scale(2)`
        window.addEventListener('mousemove', (e) =>{
          cursor.current.style.transform = `translate(${e.clientX}px , ${e.clientY}px)`
          trail.current.style.transform = `translate(${e.clientX}px , ${e.clientY}px) scale(1.5)`
           
        })
        
       },[])
    return ( 
        <>
        <div  ref = {trail} className = 'w-4 h-4 pointer-events-none rounded-full shadow-xl fixed hidden xl:block box-border z-50 p-0.5  top-0 left-0 duration-500 ease-out  bg-black/0 backdrop-filter backdrop-invert ' >
        </div>
        <div  ref= {cursor} className = 'w-4 h-4 pointer-events-none rounded-full shadow-xl fixed hidden xl:block  z-50 bg-white/0 top-0 left-0 backdrop-filter backdrop-invert ' >
        </div>
        </>
     );
}
 
export default Cursor;