
import { useEffect, useRef, useState } from "react";
import Bnav from "./components/bNav";
import Cursor from "./components/cursor";
import NavBar from "./components/navBar";
import SunMoonSvg from "./components/sunMoonSvg";

import { darkModeContext } from "./context/darkModeContext";
import useViewPort from "./hooks/useViewPort";

import About from "./pages/about";
import Contact from "./pages/contact";
import Projects from "./pages/projects";
import Start from "./pages/start";




function App() {
  const [darkMode, setDarkMode] = useState(true)
  const app = useRef(null)
  const {width: vw} = useViewPort()
 
  const [position, setPosition] = useState(0)
   const items = ['start', 'about', 'projects']
   
   const cb = (entry) =>{
    
    entry.forEach(e =>{
       if(e.isIntersecting){
          const id = e.target.getAttribute('id')  
          const index = items.indexOf(id)
          
          setPosition(index)
       }
    })
 }

useEffect(()=>{
       
   

    items.forEach((item) =>{
        const scrollItem = document.querySelector(`#${item}`)
        const observer = new IntersectionObserver(cb,{root: app.current, threshold: 0.5, rootMargin: vw>=1280 ? "4000px 0px 4000px 0px" : '0px 0px 0px 0px'})
        observer.observe(scrollItem)
      
    })
  
   

})


const animateSun = (position) =>{
  switch(position){
     case 0 :
       return 'bottom-0 right-0 translate-x-[10%] translate-y-[10%] dark:translate-x-[30%] dark:translate-y-[30%] '
     case 1: 
     return 'bottom-full right-full translate-x-2/3 translate-y-2/3 rotate-[-175deg]';
     case 2: 
     return 'bottom-0 right-full translate-x-2/3 translate-y-1/3 rotate-[10deg]';
     default: 
     return 'bottom-0 right-0 translate-x-1/3 translate-y-1/3 '
  }
}
useEffect(()=>{
  let i =0
 vw >= 1280 && app.current.addEventListener('wheel', (e) =>{
        
       if(e.deltaY >0){
        i++
         if(i>4){
           app.current.scrollLeft +=  app.current.offsetWidth
           i =0
          }
       }
       if(e.deltaY <0){
         i--
        if(i< -4){
          app.current.scrollLeft -=  app.current.offsetWidth
          i =0
         }
       }
      
  })
},[vw])
 
  return (
  
    
   <darkModeContext.Provider value={{darkMode, setDarkMode}}>
      <div ref = {app} className="App bg-[#F5F5F5] dark:bg-black dark:text-white font-Roboto h-full overflow-y-scroll overflow-x-hidden xl:overflow-x-scroll transition-all duration-300 xl:flex xl:overflow-y-hidden ">
      <SunMoonSvg  animateFrom = {200} extend={`hidden transform ${animateSun(position)}   xl:block transition-all duration-1000 ease-out  `} />
       <NavBar />
        
        <Start />
        <About />
        <Projects />
        <Contact />
        <Bnav position = {position} items = {items}  />
    </div>


     <Cursor />
    
   </darkModeContext.Provider>
 
  );
}

export default App;
