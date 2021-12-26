import  React, { useState } from "react";
import { useEffect } from "react";
import useViewPort from "../hooks/useViewPort";

const ScrollSpy = ({items, children, element ,activeClass}) => {
   const [elementId , setElementId] = useState('')
    const {width : vw} =  useViewPort()
    
    const cb = (entry) =>{
    
        entry.forEach(e =>{
           if(e.isIntersecting){
              const id = e.target.getAttribute('id')
               setElementId(id)
            
           }
        })
     }

    useEffect(()=>{
           
        const scrollEle = document.querySelector(element)
    
        items.forEach((item) =>{
            const scrollItem = document.querySelector(`#${item}`)
            const observer = new IntersectionObserver(cb,{root: scrollEle, threshold: 0.5, rootMargin: vw>=1280 ? "4000px 0px 4000px 0px" : '0px 0px 0px 0px'})
            observer.observe(scrollItem)
          
        })
    },[element, items, vw])

    const ModifiedChildren = () =>
    React.Children.map(children, child =>{
            const href  = child.props.href
            const classNames = child.props.className
            if(href.includes(elementId)){
                return   React.cloneElement(child, {
                    className: `${classNames} ${activeClass}`
                  })  
            }else{
                return child
            }   
    }
       
    );

    return ( 
        <>
        <ModifiedChildren />
        </>
     );
}
 
export default ScrollSpy;