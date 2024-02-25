import { Route, Routes } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";

import HomeScreen from "./screens/HomeScreen.jsx";
import BlogScreen from "./screens/BlogScreen.jsx";

import rocket from "./assets/icons/rocket.webp";
import space from "./assets/videos/space.mp4";
import { useEffect, useRef } from "react";

function App() {

  const component = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".displacement2", {
        attr: {
          r: 3000,
        },
        scrollTrigger: {
          trigger: ".spacer",
          scrub: true
        }
      })
    }, component)

    return () => ctx.revert();
  }, [])
  return (
    <>
      <div className="w-[100dvw] h-[60px] z-[300] fixed top-0 flex items-center justify-between px-5 sm:px-8 md:px-10">
        <div className="w-fit h-fit">
          <span className="nohemiBlack uppercase text-[14px] md:text-[16px] lg:text-[18px] text-white transition-all">enosintech</span>
        </div>
        <div className="w-fit h-full flex items-center justify-center">
          <div className={`w-[100px] md:w-[110px] md:h-[69%] lg:w-[120px] lg:h-[73%] h-[65%] bg-white transition-all rounded-full flex items-center justify-evenly`}>
            <a href="https://github.com/enosintech" className="hover:opacity-75 active:opacity-50 transition-all duration-200" target="_blank"><FontAwesomeIcon icon={faGithub} color={"black"} size="lg"/></a>
            <a href="https://www.linkedin.com/in/enosintech/" className="hover:opacity-75 active:opacity-50 transition-all duration-200" target="_blank"><FontAwesomeIcon icon={faLinkedin} color={"black"} size="lg"/></a>
            <a href="https://medium.com/@enos.nsambaj" className="hover:opacity-75 active:opacity-50 transition-all duration-200" target="_blank"><FontAwesomeIcon icon={faGlobe} color={"black"} size="lg"/></a>
          </div>
        </div>
      </div>
      <div className='w-[30px] h-[60px] left-0 right-0 mx-auto border-4 border-white mb-2 rounded-full flex items-start justify-center fixed bottom-2 z-[200]'>
        <div className='w-[15px] h-[15px] rounded-full bg-white animate-bouncer'></div>
      </div>
      <div className="w-[15px] h-[85svh] fixed left-2 lg:left-5 z-[200] top-20 flex flex-col items-center overflow-visible scrollbar">
        <div className="w-fit h-fit overflow-visible absolute top-0 -left-[2px] progress flex flex-col">
            <div class="flameContainer">
                <div class="flameRed flame"></div>
                <div class="flameOrange flame"></div>
                <div class="flameYellow flame"></div>
                <div class="flameWhite flame"></div>
                <div class="flameBlue flameCircle"></div>
                <div class="flameBlack flameCircle"></div>
            </div>
            <img  src={rocket} alt="space rocket" className="w-fit h-fit object-contain scale-[3] -translate-x-[0.5px] rotate-[133deg]"/>
        </div>
        <span className="text-white nohemiThin text-[10px]">Earth</span>
        <div className="w-[7px] h-[7px] rounded-full bg-white"></div>
        <div className="w-0 h-full border border-white flex flex-col items-start">
            
        </div>
        <div className="w-[15px] h-[15px] border-4 border-white rounded-full"></div>
        <span className="text-white nohemiBlack text-[12px]">Mars</span>
      </div>
      <div className={`w-[100dvw] h-[40px] z-[300] fixed top-[95dvh] flex justify-between px-8 nohemiBlack`}>
        <span className="text-white uppercase tracking-tight">available now</span>
        <span className="text-white uppercase tracking-tight">contact me</span>
      </div>
      <div className="fixed w-full h-[100lvh] flex items-center justify-center spacePin" ref={component}>
        <svg viewBox="0 0 1728 852" fill="none" preserveAspectRatio="xMidYMin slice" className="w-[100%] h-[100lvh] relative">
          <defs>
              <filter id="displacementFilter2">
                  <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="1" result="noise"/>
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale="50" xChannelSelector="R" yChannelSelector="G"/>
              </filter>
              <mask id="circleMask2">
                  <circle cx="870" cy="800" r="50" fill="white" className="displacement2"/>
              </mask>
          </defs>
          <foreignObject width="100%" height="100%" preserveAspectRatio="xMidYMin slice" className="maskedObject">
              <video key={space} xmlns="http://www.w3.org/1999/xhtml" autoPlay loop muted crossOrigin="anonymous" className="relative object-contain">
                  <source src={space} type="video/mp4"/>
                  Video Format not Supported
              </video>
          </foreignObject>
          {/*<image width="100%" height="100%" mask="url(#circleMask2)" className="object-cover w-full h-full" xlinkHref={marsb}/>*/}
        </svg>       
      </div>
      <Routes>
        <Route path="/" element={<HomeScreen />}/>
        <Route path="/blog" element={<BlogScreen />} />
      </Routes>
    </>
  )
}

export default App;
