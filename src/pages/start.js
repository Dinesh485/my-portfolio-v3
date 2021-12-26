import SunMoonSvg from "../components/sunMoonSvg";
import AnimatedCharacters from "../HOC/AnimatedText";
import BgText from "../HOC/bgText";
import Section from "../HOC/section";
import Wrapper from "../HOC/wrapper";

const Start = () => {
   
  


  return (
    <Section extend={'z-10 '} id = {'start'}>
      <SunMoonSvg  animateFrom = {200} extend={"transform bottom-0 right-0 translate-x-1/3 translate-y-1/3 xl:hidden"} />
      <BgText extend={"top-10 left-0 lg:top-0 "}>Start</BgText>
      <Wrapper extend={'flex flex-col justify-center relative 2xl:max-w-[1500px]'}>
        <div className="text-[45px] font-normal xs:text-[64px] lg:text-[84px] 2xl:text-[96px] leading-[3rem] xs:leading-[4.5rem] md:leading-none " style = {{textShadow: '5px 5px 10px rgba(0, 0, 0, 0.25)'}}>
          <h1>Hello!<br></br>I'm  <span className="font-courgette font-bold">
              <AnimatedCharacters  text = {'Dinesh'} />
            </span></h1>
          <p className="text-base xs:text-lg lg:mt-3 xl:text-xl xl:font-medium 2xl:text-2xl 2xl:font-normal">I'm a fullstack web developer</p>
        </div>
      </Wrapper>
      
    </Section>
  );
};

export default Start;
