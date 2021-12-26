import ContactLinks from "../components/contackLinks";
import BgText from "../HOC/bgText";
import Section from "../HOC/section";
import Wrapper from "../HOC/wrapper";
  


const Contact = () => {
    return ( 
        <Section extend={'xl:w-[fit-content] xl:min-w-[fit-content] xl:h-[fit-content] xl:fixed  xl:left-10 2xl:left-16 xl:bottom-10 xl:m-0 xl:z-50'} id = {'contact'}>
            <BgText extend={'top-0 origin-bottom-right right-0 -rotate-90 xl:hidden'}>
                    Contact
                </BgText>
            <Wrapper extend={'flex items-center justify-center'}>
                
                <ContactLinks />
             
            </Wrapper>
        </Section>
     );
}
 
export default Contact;