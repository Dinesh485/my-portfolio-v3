
const Section = ({ children, extend, id,  }) => {
 
 

  return  (
   
    <section className={`relative w-full  h-full min-h-[700px]  xl:min-w-full   ${extend}`} id={id}>
      {children}
    </section>
 
  ) 
};

export default Section;
