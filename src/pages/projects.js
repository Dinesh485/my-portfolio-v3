import ProjectList from "../components/projectList";
import SunMoonSvg from "../components/sunMoonSvg";
import BgText from "../HOC/bgText";
import Section from "../HOC/section";
import Wrapper from "../HOC/wrapper";

const Projects = () => {
    return ( 
        <Section extend={'py-24'} id ={'projects'}>
            <BgText extend={'top-0 xl:right-0'}>
                 Projects
            </BgText>
            <SunMoonSvg animateFrom  = {-200} extend={'bottom-0 left-0 transform -translate-x-1/3 translate-y-1/3 xl:hidden'} />
            <Wrapper extend={'xl:flex xl:items-center '}>
            <ProjectList />
            </Wrapper>
        </Section>
     );
}
 
export default Projects;