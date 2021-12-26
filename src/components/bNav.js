import { useContext } from "react";
import { darkModeContext } from "../context/darkModeContext";

import ScrollSpy from "./scrollSpy";


const Bnav = ({position, items}) => {
   const {darkMode} = useContext(darkModeContext)
 
  return (
    <div className="hidden xl:flex fixed bottom-14 left-1/2 transform -translate-x-1/2 items-center justify-center gap-2 z-50 ">
      <button onClick={() => {if(position !==0 ) window.location = `#${items[position-1]}` } } style = {{ filter: `drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.48))`}} className={`transition-opacity duration-150 ${position <= 0 ?'pointer-events-none opacity-0' : 'pointer-events-auto opacity-100'}`} >
      <svg className="w-8 rotate-180  fill-current dark:fill-[black] dark:stroke-current " viewBox="0 0 24 24" style = {{filter: `drop-shadow(2px 2px ${darkMode ? '0px' : '2px'} #FFFFFF)`}} >
          <path d="M6.028 0v6.425l5.549 5.575-5.549 5.575v6.425l11.944-12z" />
        </svg>
      </button>
     <ScrollSpy items={['start', 'projects','about']} element={'.App'} activeClass={"bNav-active"}>
     <a  href = '#start' className="w-full box-content p-4">
           <span className="w-2 h-2 rounded-full bg-black/50 block transform transition-all dark:bg-white/50 scale-[1] duration-300">

           </span>
        </a>
     <a href = '#about' className="w-full box-content p-4">
           <span className="w-2 h-2 rounded-full bg-black/50 block transform transition-transform dark:bg-white/50 scale-[1] duration-300">

           </span>
        </a>
     <a  href = '#projects' className="w-full box-content p-4">
           <span className="w-2 h-2 rounded-full bg-black/50 block transform transition-all dark:bg-white/50 scale-100 duration-300">

           </span>
        </a>
     </ScrollSpy>
      <button onClick = {() => {if(position < items.length-1)  window.location = `#${items[position+1]}` }} style = {{ filter: "drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.48))"}} className={`transition-opacity duration-150 ${position === items.length-1 ?'pointer-events-none opacity-0' : 'pointer-events-auto opacity-100'}`} >
        <svg className="w-8   fill-current dark:fill-[black] dark:stroke-current"  viewBox="0 0 24 24" style = {{filter:`drop-shadow(-2px -2px ${darkMode? '0px' : "2px"} #FFFFFF)`}}>
          <path d="M6.028 0v6.425l5.549 5.575-5.549 5.575v6.425l11.944-12z" />
        </svg>
      </button>
    </div>
  );
};


export default Bnav;
