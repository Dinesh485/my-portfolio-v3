
import BgText from "../HOC/bgText";
import Section from "../HOC/section";
import Wrapper from "../HOC/wrapper";
import ProfileImage from '../assets/profileimage.png'
import Skills from "../components/skills";
import { useContext } from "react";
import { darkModeContext } from "../context/darkModeContext";
import { motion } from "framer-motion";


const About = () => {
     
     const {darkMode} = useContext(darkModeContext)
     
     const varients = {
          visible :{
               x:0,
               
               transition :{
                    type:'tween',
                    delay: 0.5,
                    duration: 0.3
               }
          },
          hidden: {
               x: '-100%',
               
          }
     }

    return ( 
        <Section extend={'py-28 box-content xs:box-border  xs:pb-0 xl:p-0'} id = {'about'}>
           
             <BgText extend={"top-0 right-0 xl:bottom-0  xl:top-auto  "}>About</BgText>
             <Wrapper extend={'z-10 lg:flex lg:items-center lg:justify-center'}>
                  <div className="flex flex-col justify-center items-center gap-5 text-center lg:grid lg:grid-cols-2 lg:justify-items-center lg:items-start lg:text-left xl:max-w-[800px] " style = {{textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>
                  <div className="w-[fit-content] overflow-hidden " >
                    <motion.div initial = 'hidden' whileInView = 'visible' variants={varients} viewport={{once: true}} className=" border-black border-4 border-solid dark:border-white" style={!darkMode ?{boxShadow:'-10px -10px 30px #FFFFFF, 5px 5px 30px rgba(0, 0, 0, 0.53)'} :null}>

                    <img    src={ProfileImage} alt="" className="w-[150px] lg:w-[250px]"  />   
                    </motion.div>
                  </div>
                   <div className="flex flex-col gap-5 items-center ">
                   <p className="text-base lg:text-lg max-w-[400px] ">I specialize in front end development and currently pursuing a degree in computer science. <br /> Learning web development on my own is both fun and challenging. I'm constantly improving myself to be a better developer than i am today.</p>
                   <h2 className="text-xl  font-medium">Skills</h2>
                   <div className="lg:w-full">
                       <Skills />
                   </div>
                   </div>
                  </div>
                   
             </Wrapper>

        </Section>
     );
}



export default About;