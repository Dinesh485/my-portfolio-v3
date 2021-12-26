import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useEffect } from 'react/cjs/react.development'
import project1 from '../assets/project1.jpg'
import project2 from '../assets/project2.jpg'
import project3 from '../assets/project3.jpg'
import project4 from '../assets/project4.jpg'
import project5 from '../assets/project5.jpg'
import project6 from '../assets/project6.jpg'

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
  return <motion.div variants = {varients} className="w-full h-full  text-white flex flex-col justify-end p-2 leading-4 text-sm border-black border-3 border-solid" style={{background: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center',textShadow: '0px 4px 4px rgba(0, 0, 0, 0.50)',  }}>
          <div>{title}</div>
          <p className='text-xs'>{description}</p>
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
           <a href = '/' className="overflow-hidden xl:col-span-2">
                 <Project image = {project1} title = {'project1'} description={'some descr'}/>
           </a>
           <a href = '/' className="overflow-hidden ">
                 <Project image = {project2} title = {'project2'} description={'some descr'} />
           </a>
           <a href = '/' className="overflow-hidden  row-span-2 xl:row-span-1 xl:col-span-2">
           <Project image = {project3} title = {'project3'} description={'some descr'} />
           </a>
           <a href = '/' className="overflow-hidden row-span-2 xl:row-span-1 ">
           <Project image = {project4} title = {'project4'} description={'some descr'} />
           </a>
           <a href = '/' className="overflow-hidden ">
           <Project image = {project5} title = {'project5'} description={'some descr'} />
           </a>
           <a href = '/' className="overflow-hidden ">
           <Project image = {project6} title = {'project6'} description={'some descr'} />
           </a>
       </motion.div>
       <motion.div initial ='hidden' whileInView= 'visible' viewport={{ once: true, amount: 0.5}} transition={{staggerChildren: 0.1}} className="snap-center h-full min-w-full  grid grid-flow-col grid-cols-2 grid-rows-4 gap-2  xl:grid-cols-4 xl:grid-rows-2">
           <a href = '/' className="overflow-hidden xl:col-span-2">
                 <Project image = {project1} title = {'project1'} description={'some descr'}/>
           </a>
           <a href = '/' className="overflow-hidden ">
                 <Project image = {project2} title = {'project2'} description={'some descr'} />
           </a>
           <a href = '/' className="overflow-hidden  row-span-2 xl:row-span-1 xl:col-span-2">
           <Project image = {project3} title = {'project3'} description={'some descr'} />
           </a>
           <a href = '/' className="overflow-hidden row-span-2 xl:row-span-1 ">
           <Project image = {project4} title = {'project4'} description={'some descr'} />
           </a>
           <a href = '/' className="overflow-hidden ">
           <Project image = {project5} title = {'project5'} description={'some descr'} />
           </a>
           <a href = '/' className="overflow-hidden ">
           <Project image = {project6} title = {'project6'} description={'some descr'} />
           </a>
       </motion.div>
      
       
      
    </div>
  );
};

export default ProjectList;
