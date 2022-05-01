import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useEffect } from 'react'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.png'
import commingsoon from '../assets/commingsoon.gif'

const Project = ({ image, title, description }) => {
    const varients = {
      hidden: {
         x: "-100%"
      },
      visible:{
        x:0,
        transition: {
          type: 'tween',
          duration: 0.5,
          ease: 'easeIn'
        } 
      }
    }
  return <motion.div variants = {varients} className="w-full h-full group    flex flex-col justify-end  leading-4 text-sm border-[#181818]  dark:border-white  border xl:border-2 border-solid" style={{background: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center'  }}>
           
           {!image ? <div className='w-full h-full grid items-center uppercase text-lg md:text-xl xl:text-2xl  text-center bg-white text-black font-bold p-4'>coming soon</div> 
           :
            <div className=' xl:w-1/2 h-full xl:h-auto  flex flex-col justify-end  p-2 lg:p-4 bg-gradient-to-tr from-black  to-transparent xl:from-transparent xl:text-[#181818] xl:dark:text-white xl:border-[#181818] text-white xl:border-t-2 xl:border-r-2  xl:dark:border-white  xl:bg-[#f3e353]  xl:dark:bg-[#181818]  xl:translate-y-full xl:group-hover:translate-y-0 transition-all ease-out '>
           <div className='capitalize my-2 border-b border-white w-fit pb-2 font-medium xl:border-[#181818] xl:dark:border-white xl:text-lg '>{title}</div>
          <p className='text-xs'>{description}</p>
           </div>}
  </motion.div>;
};

const ProjectList = () => {
    const scrollEle = useRef(null)
    useEffect(()=>{
       scrollEle.current.addEventListener('wheel', (e) =>{
             e.preventDefault()
            if(e.deltaY >0 ){
              scrollEle.current.scrollLeft +=  scrollEle.current.offsetWidth
            }
            if(e.deltaY <0 ){
              scrollEle.current.scrollLeft -=  scrollEle.current.offsetWidth
            }
           
       })
    },[])
  return (
    <div ref  = {scrollEle} className="w-full h-full overflow-x-auto flex justify-start gap-2 xl:h-4/5 xl:w-11/12 xl:mx-auto project-list pb-2 snap-x snap-mandatory">
       <motion.div initial ='hidden' whileInView= 'visible' viewport={{ once: true, amount: 0.5}} transition={{staggerChildren: 0.1}} className="snap-center h-full min-w-full  grid grid-flow-col grid-cols-2 grid-rows-4 gap-2  xl:grid-cols-4 xl:grid-rows-2">
           <a href = 'https://frosty-panini-e1e45f.netlify.app/'  target = '_blank' className="overflow-hidden xl:col-span-2">
                 <Project image = {project1} title = {'Notes app'} description={'made with react, mongodb, express'}/>
           </a>
           <a href = 'https://vigilant-boyd-f9dee2.netlify.app/' target = '_blank' className="overflow-hidden ">
                 <Project image = {project2} title = {'Rock Paper scissors'} description={'made with react'} />
           </a>
           <a href = 'https://laughing-fermi-b36d7d.netlify.app/' target = '_blank' className="overflow-hidden  row-span-2 xl:row-span-1 xl:col-span-2">
           <Project image = {project3} title = {'Old portfolio'} description={'made with react'} />
           </a>
           <a href = 'https://heuristic-hodgkin-a8f129.netlify.app/' target = '_blank' className="overflow-hidden row-span-2 xl:row-span-1 ">
           <Project image = {project4} title = {'GifPlanet'} description={'Made with react and ghify api'} />
           </a>
           <a href = '/' className="overflow-hidden ">
           <Project image = {''} title = {'project5'} description={'some descr'} />
           </a>
           <a href = '/' className="overflow-hidden ">
           <Project image = {''} title = {'project6'} description={'some descr'} />
           </a>
       </motion.div>
       <motion.div initial ='hidden' whileInView= 'visible' viewport={{ once: true, amount: 0.5}} transition={{staggerChildren: 0.1}} className="snap-center h-full min-w-full  grid grid-flow-col grid-cols-2 grid-rows-4 gap-2  xl:grid-cols-4 xl:grid-rows-2">
           <a href = '/' className="overflow-hidden xl:col-span-2">
                 <Project image = {''} title = {'project1'} description={'some descr'}/>
           </a>
           <a href = '/' className="overflow-hidden ">
                 <Project image = {''} title = {'project2'} description={'some descr'} />
           </a>
           <a href = '/' className="overflow-hidden  row-span-2 xl:row-span-1 xl:col-span-2">
           <Project image = {''} title = {'project3'} description={'some descr'} />
           </a>
           <a href = '/' className="overflow-hidden row-span-2 xl:row-span-1 ">
           <Project image = {''} title = {'project4'} description={'some descr'} />
           </a>
           <a href = '/' className="overflow-hidden ">
           <Project image = {''} title = {'project5'} description={'some descr'} />
           </a>
           <a href = '/' className="overflow-hidden ">
           <Project image = {''} title = {'project6'} description={'some descr'} />
           </a>
       </motion.div>
      
       
      
    </div>
  );
};

export default ProjectList;
