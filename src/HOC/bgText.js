import { motion } from "framer-motion";
import useViewPort from "../hooks/useViewPort";



const BgText = ({children, extend}) => {
    const {width: vw} = useViewPort()
   
    const varients = {
        hidden: {
            opacity: 0,
            x: 200,
        },
        visible: {
            opacity: 1,
            x:0,
            transition: {
                type: 'tween',
                duration: 0.5,
                delay: 0.3,
                ease: 'easeOut'
            }
        }
        
    }
    return ( 
       vw >=1280 ? <motion.div viewport = {{amount: 'some', once: true}} initial ={'hidden'} whileInView = 'visible' variants={varients} className= {`xs:text-[130px] text-[100px] absolute text-[#B1B1B136] font-bold leading-none lg:text-[150px] xl:text-[200px] 2xl:text-[300px] ${extend}`} >
            {children}
        </motion.div>
        :  <div  className= {`xs:text-[130px] text-[100px] absolute text-[#B1B1B136] font-bold leading-none lg:text-[150px] xl:text-[200px] ${extend}`} >
        {children}
    </div>
     );
}
 
export default BgText;