import { motion} from 'framer-motion'
import { useContext, useEffect, useRef } from 'react';
import { darkModeContext } from '../context/darkModeContext';
const SunMoonSvg = ({extend, animateFrom}) => {
    const sun= useRef(null)
    const animateInVarients = {
        hidden: {

          x: animateFrom,
          rotate: 90,
          transition:{type: 'tween', duration: 0.7, ease: 'easeOut'}
        },
        visible:{
          x:0,
          rotate: 0,
          transition:{type: 'tween', duration: 0.7, ease: 'easeOut', staggerChildren: 0.3, when: 'beforeChildren'},
          
        }
    }

    const moonCirlcles = {
       hidden: {
         scale: 0.5,
         transition:{type: 'tween', duration: 0.5, ease: 'easeOut'}
       },
        visible: {
         scale: 1,
         transition:{type: 'tween', duration: 0.5, ease: 'easeOut'}
       }
    }
 
    const {darkMode} = useContext(darkModeContext)
   

    useEffect(()=>{
        window.addEventListener('wheel',(e) =>{
          if(e.deltaY>0){
               
          }else{

          }
        })
    },[])


    return ( 
      
      <div  className={`absolute z-0 w-[400px] xs:w-[550px] lg:w-[800px] 2xl:dark:w-[1200px] text-[#f3e353] xl:fixed ${extend}`}>
     
      {!darkMode ?
      <div>
      
      <motion.svg ref = {sun} className ='text-[#f3e353] fill-current drop-shadow-2xl' initial= "hidden"  whileInView="visible" viewport= {{once: true}} variants={animateInVarients} style= {{originX: 'center', originY: 'center'}} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24">
        <path className='fill-current ' d="M4.069 13h-4.069v-2h4.069c-.041.328-.069.661-.069 1s.028.672.069 1zm3.034-7.312l-2.881-2.881-1.414 1.414 2.881 2.881c.411-.529.885-1.003 1.414-1.414zm11.209 1.414l2.881-2.881-1.414-1.414-2.881 2.881c.528.411 1.002.886 1.414 1.414zm-6.312-3.102c.339 0 .672.028 1 .069v-4.069h-2v4.069c.328-.041.661-.069 1-.069zm0 16c-.339 0-.672-.028-1-.069v4.069h2v-4.069c-.328.041-.661.069-1 .069zm7.931-9c.041.328.069.661.069 1s-.028.672-.069 1h4.069v-2h-4.069zm-3.033 7.312l2.88 2.88 1.415-1.414-2.88-2.88c-.412.528-.886 1.002-1.415 1.414zm-11.21-1.415l-2.88 2.88 1.414 1.414 2.88-2.88c-.528-.411-1.003-.885-1.414-1.414zm6.312-10.897c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6z"/>
      </motion.svg>
      </div>
      :
      <motion.svg initial = 'hidden' whileInView = 'visible' viewport={{once: true}}   variants={animateInVarients} style= {{originX: 'center', originY: 'center'}} className=" fill-current " viewBox="0 0 589 589" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.circle variants={moonCirlcles} cx="294.5" cy="294.5" r="203.885" fill="#C4C4C475" fillOpacity="0.46"/>
      <motion.circle variants={moonCirlcles} cx="294.5" cy="294.5" r="294.5" fill="#C4C4C470" fillOpacity="0.44"/>
      <motion.circle  cx="294.5" cy="294.5" r="158.577" fill="#F3F3F3"/>
      </motion.svg>
      
    }
      
      </div>
      
      
      

     );
}
 
export default SunMoonSvg;