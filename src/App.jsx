import { Route, Routes } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGlobe, faHouse } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import CursorContextProvider from "./utils/CursorContextProvider.jsx";

import HomeScreen from "./screens/HomeScreen.jsx";

import rocket from "./assets/icons/rocket.webp";
import arrow from "./assets/icons/arrow.png";
import space from "./assets/videos/space.mp4";
import marsb from "./assets/images/marsbackground.webp";

gsap.registerPlugin(ScrollTrigger);

function App({children}) {

  const component = useRef(null);
  const [ contactVisible, setContactVisible ] = useState(false);

  const setContact = (state) => {
    setContactVisible(state)
  }

  useEffect(() => {
    const scrollBar = document.querySelector(".scrollbar");

    const height = scrollBar?.clientHeight; 

    let ctx = gsap.context(() => {
      gsap.fromTo(".progress", {
        y: 0,
      }, {
        y: height - 50,
        scrollTrigger: {
          trigger: "html",
          scrub: true,
        }
      })
    }, component)

    return (() => {
      ctx.revert();
    })
  }, [])

  return (
    <>
    <CursorContextProvider>
      <div className="w-[100dvw] h-[60px] z-[10000] fixed top-0 flex items-center justify-between px-5 sm:px-8 md:px-10">
        <div className="w-fit h-fit">
          <span className="nohemiBlack uppercase text-[14px] md:text-[16px] lg:text-[18px] text-white transition-all">enosintech</span>
        </div>
        <div className="w-fit h-fit flex flex-col md:text-[18px] text-[14px] text-white nohemiLight translate-y-10">
          <span>3:02 PM CAT</span>
          <span>15.4155° S</span>
          <span>28.2773° E</span>
          <span>Lusaka  21.C</span>
        </div>
      </div>
      <div className="w-[15px] h-[85svh] fixed left-2 lg:left-5 z-[10000] top-20 flex flex-col items-center overflow-visible scrollbar" ref={component}>
        <div className="w-fit h-fit overflow-visible absolute top-0 -left-[7px] progress flex flex-col">
            <div class="flameContainer">
                <div class="flameRed flame"></div>
                <div class="flameOrange flame"></div>
                <div class="flameYellow flame"></div>
                <div class="flameWhite flame"></div>
                <div class="flameBlue flameCircle"></div>
                <div class="flameBlack flameCircle"></div>
            </div>
            <img  src={rocket} alt="space rocket" className="rotate-180 min-w-[30px] h-[50px] object-fill"/>
        </div>
        <span className="text-white nohemiThin text-[10px]">Earth</span>
        <div className="w-[7px] h-[7px] rounded-full bg-white"></div>
        <div className="w-0 h-full border border-white flex flex-col items-start">
            
        </div>
        <div className="w-[15px] h-[15px] border-4 border-white rounded-full"></div>
        <span className="text-white nohemiBlack text-[12px]">Mars</span>
      </div>
      <div className={`fixed top-0 left-0 w-[100dvw] backdrop-blur-2xl z-[11000] transition-all duration-[800ms] ${contactVisible ? "h-[100lvh]" : "h-0"} flex items-center justify-center`}>
        <div className={`w-[85%] h-[85%] relative transition-all duration-300 ${contactVisible ? "block opacity-100" : "hidden opacity-0"}`}>  
          <div className="w-fit h-fit absolute top-0 left-0 flex items-center justify-center">
            <div className="w-[80px] h-[80px] rounded-full bg-[#1DB954] flex items-center justify-center hover:opacity-75 active:opacity-50 cursor-pointer select-none" onClick={() => {
              setContactVisible(false);
            }}>
              <img src={arrow} className="size-8 invert rotate-[-160deg]"/>
            </div>
            <div className="w-[50px] h-[50px] rounded-full bg-slate-100 flex items-center justify-center">
              <FontAwesomeIcon icon={faHouse}/>
            </div>
          </div>
        </div>
      </div>
      <HomeScreen setContact={setContact}/>
    </CursorContextProvider>
    </>
  )
}

export default App;
