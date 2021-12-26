import { motion } from "framer-motion";
import {  useContext, useEffect,  } from "react";




import { darkModeContext } from "../context/darkModeContext";
import ScrollSpy from "./scrollSpy";


const NavBar = () => {

  
     

  return (
    <nav
      className="fixed z-50  flex items-center justify-end gap-3 xs:gap-4 w-full top-0 mx-auto p-4 h-[90px] text-sm bg-gradient-to-b from-[#F5F5F5] dark:from-black to-transparent  lg:gap-8 xl:text-base xl:gap-10 xl:px-20 2xl:px-24 2xl:py-16 2xl:gap-12 capitalize  "
      style={{
        textShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
       
      }}
    >
     <ScrollSpy items = {['projects','contact', 'start', 'about']} activeClass={'active'} element={'.App'}>
     <a href="#start">start</a>
      <a href="#about">about</a>
      <a href="#projects">projects</a>
      <a href="#contact" className="xl:hidden">contact</a>
     </ScrollSpy>
    
     

      <ThemeToggleBtn />
    </nav>
  );
};

const ThemeToggleBtn = () => {
  const {darkMode, setDarkMode} = useContext(darkModeContext)


  useEffect(() =>{
      if(darkMode){
          document.documentElement.classList.add('dark')
      }else{
        document.documentElement.classList.remove('dark')
      }
  })
  return (
    <motion.button
      onClick={() => setDarkMode(!darkMode) }
      className={`w-[60px] h-[30px]  rounded-[33px] flex  ${darkMode ? "justify-end" : "justify-start"} outline-none  box-content items-center p-[2px] bg-white dark:bg-black dark:ring-2 dark:ring-white xs:p-[4px]`}
      style={!darkMode &&{
        boxShadow: "-4px -4px 10px #FFFFFF, 6px 6px 10px rgba(0, 0, 0, 0.25), inset 0px 0px 4px rgba(0, 0, 0, 0.25)",
      }}
    >
      <motion.span
        transition={{ type: "tween", duration: 0.2 }}
        layout
        className="bg-[#181818] dark:bg-white h-full w-1/2 rounded-full block "
        style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
      ></motion.span>
    </motion.button>
  );
};

export default NavBar;
