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
        <div className="w-full h-[100svh] pt-[60px] relative flex items-end overflow-x-hidden">
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
          <div className="absolute top-0 w-full h-full flex items-center justify-center spacePin z-[500] pointer-events-none">
            <svg viewBox="400 0 1728 852" fill="none" preserveAspectRatio="xMidYMin slice" className="w-[100vw] h-[100lvh] relative">
              <defs>
                  <filter id="displacementFilter2">
                      <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="1" result="noise"/>
                      <feDisplacementMap in="SourceGraphic" in2="noise" scale="50" xChannelSelector="R" yChannelSelector="G"/>
                  </filter>
                  <mask id="circleMask2">
                      <circle cx="1280" cy="800" r="0" fill="white" className="displacement2"/>
                  </mask>
              </defs>
              <image className="maskedObject" width="140%" height="140%" xlinkHref={motherearth}/>
            </svg>       
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
          <div className="absolute h-[55px] sm:bottom-6 bottom-5 sm:left-14 left-4 flex items-center gap-2 z-[10000] scrollAppear">
            <div className="w-0 h-full border-[#1db954] border animate-scroll transition-a;;"></div>
            <div className="flex flex-col uppercase transition-all nohemiExtraBold text-white text-[12px] md:text-[18px] lg:text-[23px] tracking-wide">
              <span>scroll for</span>
              <span>lift off</span>
            </div>
          </div>
          <div className={`absolute top-1 right-3 w-fit h-fit z-[500] transition-all duration-300 flex items-center gap-2 ${tvVisible === "tv" ? "opacity-100" : "opacity-0"}`}>
            <FontAwesomeIcon icon={faVolumeHigh} size="lg"/>
            <span className="text-gray-500 uppercase nohemiBlack">sound on</span>
          </div>
          <div className="w-full h-[92%] xl:px-28 flex flex-col items-center justify-start gap-3 relative">
            <div className="w-[120px] h-[30px] flex items-center justify-evenly">
              <FontAwesomeIcon icon={faHouse} color={tvVisible === "home" ? "#1db954" : "white"} size="lg" className="hover:opacity-75 active:opacity-50 cursor-pointer select-none" onClick={() => {
                setTvVisible("home");
              }} onMouseEnter={toggleCursorHover} onMouseLeave={() => {
                if(cursor.hover === true){
                  toggleCursorHover();
                }
              }} onMouseDown={toggleCursorActive} onMouseUp={toggleCursorActive}/>
              <FontAwesomeIcon icon={faTv} color={tvVisible === "tv" ? "#1db954" : "white"} className="text-[18px] hover:opacity-75 active:opacity-50 cursor-pointer select-none" onClick={() => {
                setTvVisible("tv")
              }} onMouseEnter={toggleCursorHover} onMouseLeave={() => {
                if(cursor.hover === true){
                  toggleCursorHover();
                }
              }} onMouseDown={toggleCursorActive} onMouseUp={toggleCursorActive}/>
            </div>
            <div className="w-fit h-[30px] shadow-md border-white border-[0.5px] rounded-full relative flex items-center justify-center nohemiBold uppercase text-[13px]">
              <div className="w-[25px] h-full flex items-center justify-center">
                <div className="w-[10px] h-[10px] bg-[#1db954] pingBoxShadow rounded-full"></div>
              </div>
              <span className="pr-3 py-1 text-white">open to work</span>
            </div>
            <div className="md:w-[55%] lg:w-[45%] sm:w-[70%] w-[85%] h-[70%] overflow-hidden relative flex flex-col items-end scalePin">
              {tvVisible === "tv"
              ?
                <div className="w-full h-full bg-black rounded-2xl overflow-hidden">
                  <iframe className="w-full h-full object-cover"  src="https://www.youtube.com/embed/KJwYBJMSbPI?si=I_efS_ZMZEVZ-xqO?&autoplay=1&controls=0&loop=1" title="Earth" frameborder="0" allow="accelerometer; autoplay; clipboard-write; modestbranding; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                </div>
              :
                <div className="w-full h-full flex">
                  <div className="w-full h-full rounded-2xl relative flex flex-col">
                    <div className={`w-full h-full rounded-2xl absolute transition-all duration-200 overflow-hidden ${workVisible ? "opacity-100" : "opacity-0"}`}>
                      <img src={workPrompt} className="w-full h-full object-cover" alt="workPrompt"/>
                      <div className="w-fit h-fit flex flex-col p-3 text-white absolute top-5 left-5 uppercase nohemiBlack">
                        <span>1. BantuRide</span>
                        <span>2. MakeupbyRam</span>
                        <span>3. ZedCart</span>
                      </div>
                    </div>
                    <div className={`w-full h-full flex justify-end rounded-2xl absolute transition-all duration-200 bg-black z-[10500] ${contactVisible ? "opacity-100" : "opacity-0"}`}>
                        <div className="w-fit h-fit rounded-full absolute sm:left-10 left-8 md:left-14 xl:left-32 top-20">
                          <img src={earth} className="w-[220px] h-[220px] rounded-full object-cover animate-rotate" alt="planet earth"/>
                        </div>
                        <div className="w-fit h-full flex lg:-translate-x-1 xl:-translate-x-5 2xl:-translate-x-20 flex-col justify-center pt-8 min-[500px]:px-5 px-2">
                            <span className="flex items-center justify-end text-white nohemiThin text-[40px] sm:text-[50px] tracking-tighter">I am</span>
                            <span className="flex items-center justify-end text-white nohemiExtraLight text-[40px] sm:text-[50px] tracking-tighter">ready to work</span>
                            <span className="flex items-center justify-end text-white nohemiLight text-[35px] sm:text-[45px] lg:text-[50px] tracking-tighter">anywhere on earth</span>
                        </div>
                    </div>
                    <div className={`${contactVisible || workVisible ? "rounded-2xl" : "rounded-none"} transition-all overflow-hidden w-full h-full bg-black relative`}>
                      <div className="w-full h-full">
                        <video key={enosVideo} controls={false} autoPlay={true} loop={true}  muted={true} playsInline className="w-full h-full object-cover">
                          <source src={enosVideo} type="video/mp4"/>
                          Video Format Not Supported
                        </video>
                      </div>
                      <div className="absolute bg-gradient-to-b from-black via-transparent top-0 to-black w-full h-full z-[8000]"></div>
                      <div className="absolute bg-gradient-to-r from-black via-transparent top-0 to-black w-full h-full z-[8000]"></div>
                      <div className={`absolute z-[10000] text-center text-[19px] left-0 right-0 mx-auto bottom-8 w-fit h-fit flex flex-col text-white uppercase`}>
                        <span className="nohemiBlack text-[27px]">enos nsamba</span>
                        <span className="nohemiRegular">front end developer</span>
                      </div>
                    </div>
                  </div>
                </div>
              }
              <div className="w-full h-[20%] text-[15px] sm:text-[17px] flex items-center justify-center gap-20 z-[10500]">
                <span className={`uppercase nohemiThin tracking-tighter ${contactVisible ? "opacity-0" : "opacity-100"} text-white transition-all cursor-pointer select-none hover:text-[#1db954]`} onMouseEnter={() => {
                    setWorkVisible(true)
                    toggleCursorHover()
                }} onMouseLeave={() => {
                    setWorkVisible(false)
                    if(cursor.hover === true){
                      toggleCursorHover();
                    }
                }} onMouseDown={toggleCursorActive} onMouseUp={toggleCursorActive}>view my work</span>
                <span className={`uppercase nohemiThin tracking-tighter ${workVisible ? "opacity-0" : "opacity-100"} text-white transition-all cursor-pointer select-none hover:text-[#1db954]`} onMouseEnter={() => {
                    setContactVisible(true)
                    toggleCursorHover();
                }} onMouseLeave={() => {
                    setContactVisible(false)
                    if(cursor.hover === true){
                      toggleCursorHover();
                    }
                }} onClick={() => {
                  props.setContact(true);
                }} onMouseDown={toggleCursorActive} onMouseUp={toggleCursorActive}>contact me</span>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default LandingPage;