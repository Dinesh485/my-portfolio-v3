import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useEffect } from 'react'
import webcreativesio from '../assets/webcreativesio.png'
import fastfoodeminescu from '../assets/fastfoodeminescu.png'
import restorio from '../assets/restorio.png'
import anafoxbeauty from '../assets/anafoxbeauty.png'
import outlight from '../assets/outlight.png'

const projectList = [
  {
    image: webcreativesio,
    title: 'webcreatives.io',
    description: 'Web site for a startup',
    link: 'https://webcreatives.io'
  },
  {
    image: fastfoodeminescu,
    title: 'fast Food Eminescu',
    description: 'A food delivery website for a romanian restraunt',
    link: 'https://fastfoodeminescu.ro'
  },
  {
    image: anafoxbeauty,
    title: 'AnaFoxBeauty',
    description: 'Website for a beauty parlor',
    link: 'https://anafoxbeauty.org'
  },
  {
    image: restorio,
    title: 'Restorio',
    description: 'A website for an apple repair store in romania',
    link: 'https://restorio.ro'
  },
  {
    image: outlight,
    title: 'outlight',
    description: 'Outlight is a website that provides instagram and youtube services',
    link: 'https://restorio.ro'
  },

  
]
const Project = ({ image, title, description,link }) => {
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
  return <motion.a  rel= 'noreferrer' target='_blank' href = {link} variants = {varients} className="w-full h-full group    flex flex-col justify-end  leading-4 text-sm border-[#181818]  dark:border-white  border xl:border-2 border-solid" style={{background: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center top'  }}>
           
           {!image ? <div className='w-full h-full grid items-center uppercase text-lg md:text-xl xl:text-2xl  text-center bg-white text-black font-bold p-4'>coming soon</div> 
           :
           
              <div className=' xl:w-1/2 h-full xl:h-auto  flex flex-col justify-end  p-2 lg:p-4 bg-gradient-to-tr from-black  to-transparent xl:from-transparent xl:text-[#181818] xl:dark:text-white xl:border-[#181818] text-white xl:border-t-2 xl:border-r-2  xl:dark:border-white  xl:bg-[#f3e353]  xl:dark:bg-[#181818]  xl:translate-y-full xl:group-hover:translate-y-0 transition-all ease-out '>
           <div className='capitalize my-2 border-b border-white w-fit pb-2 font-medium xl:border-[#181818] xl:dark:border-white xl:text-lg '>{title}</div>
          <p className='text-xs'>{description}</p>
           </div>}
  </motion.a>;
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
      {Array.from({length: Math.ceil((projectList.length / 6)  ) }, (_, i) =>{
               let arr = [...projectList.slice(i * 6, (i + 1) * 6)]
               if (arr.length < 6) {
                arr = arr.concat(new Array(6 - arr.length).fill({
                  image:'',
                  title: '',
                  description: '',
                  link: ''
                },));
                arr = arr.slice(0, 6);
              }
              console.log(arr)
          return <motion.div initial ='hidden' whileInView= 'visible' viewport={{ once: true, amount: 0.5}} transition={{staggerChildren: 0.1}} className="snap-center h-full min-w-full  grid grid-flow-col grid-cols-2 grid-rows-4 gap-2  xl:grid-cols-4 xl:grid-rows-2">
                  {arr.map((project, index) =>{
                      if(project.title){
                        return(
                          <div key = {index} className = {`overflow-hidden ${index === 0 && 'xl:col-span-2'} ${index===2 && 'row-span-2 xl:row-span-1 xl:col-span-2'} ${index === 3 && 'row-span-2 xl:row-span-1 '}`}>
                              <Project {...project}/>
                        </div>
                         )
                      }else{
                        return (
                          <div key = {index} className = {`overflow-hidden ${index === 0 && 'xl:col-span-2'} ${index===2 && 'row-span-2 xl:row-span-1 xl:col-span-2'} ${index === 3 && 'row-span-2 xl:row-span-1 '}`}>
                              <Project image = {''} title = {''} description={' '} />
                        </div>
                        )
                      }
                  })}
          </motion.div>
      })}

    </div>
  );
};

export default ProjectList;
