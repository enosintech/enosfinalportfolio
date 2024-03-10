import { useEffect, useRef, useState, useContext, useCallback } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lottie from "lottie-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faCertificate, faHouse, faTv, faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import { math, random } from "canvas-sketch-util";

import { CursorContext } from "../utils/CursorContextProvider.jsx";
import useMousePosition from "../hooks/useMousePosition.js";

import LatestBlogsComponent from "../components/LatestBlogsComponent.jsx";

import space from "../assets/videos/space.mp4";
import enosVideo from "../assets/videos/enos.mp4";

import earth from "../assets/images/earth.webp";
import motherearth from "../assets/images/motherearth.webp";
import workPrompt from "../assets/images/workPrompt.webp";
import dynamicCube from "../assets/animations/dynamicCube.json";
import bio from "../assets/images/bio.webp";
import marsb from "../assets/images/marsbackground.webp";
import planetearth from "../assets/images/planetearth.webp";
import arrow from "../assets/icons/arrow.png";

function LandingPage(props) {
    const [ workVisible, setWorkVisible ] = useState(false);
    const [ contactVisible, setContactVisible ] = useState(false);
    const [ tvVisible, setTvVisible ] = useState("home"); 

    const { X, Y } = useMousePosition();
    const [ cursor, setCursor ] = useContext(CursorContext);

    const toggleCursorHover = useCallback(() => {
      setCursor(({hover}) => ({ hover: !hover }))
    });

    const toggleCursorActive = useCallback(() => {
      setCursor(({active}) => ({ active: !active }))
    });

  return (
    <>
      <div className="w-full h-[100svh] relative flex items-end overflow-x-hidden">
        <div className={`cursor sm:flex hidden fixed left-0 rounded-full top-0 ${cursor.hover ? "w-[15px] h-[15px] bg-[#1db954]" : cursor.active ? "w-[8px] h-[8px] bg-[#1db954]" : "border-2 border-[#1db954] w-[40px] h-[40px]"} z-[9999] transition-[width,height] items-center justify-center`} style={{top: Y, left: X}}>
          <div className="w-[8px] h-[8px] rounded-full bg-[#1db954]"></div>
        </div>
        <div className={`w-[100dvw] sm:text-[18px] text-[14px] h-[40px] z-[700] fixed top-[95dvh] flex items-center justify-between px-3 sm:px-8 opacity-0 contactAppear contactDissappear`}>
          <span className="text-white uppercase nohemiLight tracking-tight opacityGone" onMouseEnter={toggleCursorHover} onMouseLeave={toggleCursorHover}>open to work</span>
          <div className="flex items-center gap-1 opacityGrow group">
            <FontAwesomeIcon icon={faCertificate} className="animate-spin text-[#1db954] group-hover:text-white transition-all"/>
            <span className="text-white cursor-pointer select-none uppercase nohemiExtraBold tracking-tight group-hover:text-[#1db954] transition-all"  onMouseEnter={toggleCursorHover} onMouseLeave={() => {
              if(cursor.hover === true){
                toggleCursorHover();
              }
            }} onClick={() => {
              props.setContact(true);
            }} onMouseDown={toggleCursorActive} onMouseUp={toggleCursorActive}>contact me</span>
          </div>
        </div>
        <a target="_blank" href="https://github.com/enosintech">
          <div className="absolute cursor-pointer group w-[80px] sm:w-[100px] lg:w-[300px] h-[40px] sm:h-[60px] sm:bottom-8 bottom-7 right-4 sm:right-14 border-[2.5px] overflow-hidden z-[600] bg-white border-white flex" onMouseEnter={toggleCursorHover} onMouseLeave={() => {
              if(cursor.hover === true){
                toggleCursorHover();
              }
            }} onMouseDown={toggleCursorActive} onMouseUp={toggleCursorActive}>
            <div className="lg:w-[18%] w-[50%] h-full bg-black flex items-center justify-center">
              <FontAwesomeIcon icon={faGithub} color="white" size="xl" className="relative z-[10000]"/>
            </div>
            <div className="w-[65%] lg:flex h-full hidden items-center justify-center pl-5 relative z-[10000]">  
              <span className="text-black lg:opacity-100 opacity-0 nohemiSemiBold uppercase">find me on github</span>
            </div>
            <div className="lg:w-[17%] w-[50%] h-full flex items-center justify-center lg:justify-start relative z-[10000]">
              <img src={arrow} className="size-8 rotate-[-45deg]"/>
            </div>
            <div className="absolute w-0 group-hover:lg:w-[82%] group-hover:w-[50%] transition-all duration-300 right-0 h-full bg-[#1db954]"></div>
          </div>
        </a>
        <div className="absolute h-[60px] sm:bottom-6 bottom-5 w-full pointer-events-none justify-center flex items-center gap-2 z-[10000] scrollAppear">
          <div className="w-[30px] h-full rounded-full border-4 border-white flex items-start justify-center py-1">
            <div className="w-[15px] h-[15px] rounded-full bg-white flex animate-bouncer"></div>
          </div>
        </div>
        <div className="w-full h-full flex flex-col items-center justify-center relative scalePin z-[10]">
            <div className="w-full h-[70%] relative">
              <div className="absolute w-full h-full bg-gradient-to-b from-black via-transparent to-black"></div>
              <div className="absolute w-full h-full bg-gradient-to-r from-black via-transparent to-black"></div>
              <div className="absolute z-[-1] top-0 left-0 w-full h-full hidden">
                <video key={enosVideo} autoPlay={true} loop={true} muted={true} playsInline={true} className="w-full h-full object-cover">
                  <source src={enosVideo} type="video/mp4"/>
                  Video Format Not Supported
                </video>
              </div>
              <div className="absolute bottom-0 left-20 uppercase nasalization text-white translate-y-28 text-[400px]">
                <span>e</span>
                <span>n</span>
                <span>o</span>
                <span>s</span>
              </div> 
            </div>
            <div className="w-full h-[30%] flex flex-col relative">
              <div className="w-full h-[40%] bg-[#1db954] flex items-center justify-between px-28 uppercase text-black">
                <span className="nohemiExtraBold text-[50px]">full stack developer</span>
                <span className="nohemiLight text-[20px]">contact me</span>
              </div>
              <div className="w-fit mt-3 h-[100px] relative text-white flex flex-col justify-between left-28">
                <span className="text-[12px] nohemiBlack"></span>
                <span className="uppercase nohemiLight text-[#1db954]">scroll to learn more</span>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default LandingPage;