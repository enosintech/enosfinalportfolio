import { useEffect, useRef, useState, useContext, useCallback } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lottie from "lottie-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faCertificate, faHouse, faTv, faVolumeHigh } from "@fortawesome/free-solid-svg-icons";

import { CursorContext } from "../utils/CursorContextProvider.jsx";
import useMousePosition from "../hooks/useMousePosition.js";

import LatestBlogsComponent from "../components/LatestBlogsComponent.jsx";

import space from "../assets/videos/space.mp4";

import enos1 from "../assets/images/mainenos1.webp";
import enos2 from "../assets/images/mainenos2.webp";
import enos3 from "../assets/images/mainenos3.webp";
import enos4 from "../assets/images/mainenos4.webp";
import enos5 from "../assets/images/mainenos5.webp";
import earth from "../assets/images/earth.webp";
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
    const component = useRef(null);

    const { X, Y } = useMousePosition();
    const [ cursor, setCursor ] = useContext(CursorContext);

    const toggleCursor = useCallback(() => {
      setCursor(({active}) => ({ active: !active }))
    });

    useEffect(() => {
      let ctx = gsap.context(() => {
        const imgs = gsap.utils.toArray(".motiv");
        const next = 0.8;
        const fade = 0.8;

        gsap.set(imgs[0], {autoAlpha: 1})

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".contactAppearTrigger",
            toggleActions: "play none none reverse",
          }
        })

        const crossFade = () => {
          gsap.timeline()
          .to(imgs[0], {autoAlpha: 0, duration: fade})
          .to(imgs[1], {autoAlpha: 1, duration: fade}, 0)
  
          imgs.push(imgs.shift())
  
          gsap.delayedCall(next, crossFade);
        }

        gsap.delayedCall(next, crossFade);

        ScrollTrigger.create({
          trigger: ".spacePin",
          end: "bottom -300%",
          pin: true,
        })

        gsap.to(".displacement2", {
          attr: {
            r: 3000,
          },
          scrollTrigger: {
            trigger: ".spacer",
            scrub: true
          }
        })

        gsap.set(".cursor", {
          xPercent: -50, yPercent: -50
        })

        tl.fromTo(".contactAppear", {
          opacity: 0,
        }, {
          opacity: 1,
        })
    
      }, component)

      return () => {
        ctx.revert();
      };
    }, [tvVisible])

  return (
    <>
        <div className="w-full h-[100svh] pt-[60px] relative flex items-end overflow-x-hidden" ref={component}>
          <div className={`cursor sm:block hidden fixed left-0 rounded-full top-0 ${cursor.active ? "w-[30px] h-[30px] bg-none border-2 border-[#1db954]" : "bg-[#1db954] border-none w-[100px] h-[100px]"} z-[9999]  transition-all`} style={{top: Y, left: X}}></div>
          <div className={`w-[100dvw] sm:text-[18px] text-[14px] h-[40px] z-[500] fixed top-[95dvh] flex items-center justify-between px-3 sm:px-8 contactAppear`}>
            <span className="text-white uppercase nohemiLight tracking-tight" onMouseEnter={toggleCursor} onMouseLeave={toggleCursor}>available now</span>
            <div className="flex items-center gap-1">
              <FontAwesomeIcon icon={faCertificate} color={cursor.active ? "white" : "#1db954"} className="animate-spin"/>
              <span className="text-white cursor-pointer select-none uppercase nohemiExtraBold tracking-tight hover:text-[#1db954] transition-all"  onMouseEnter={toggleCursor} onMouseLeave={toggleCursor} onClick={() => {
                props.setContact(true);
              }}>contact me</span>
            </div>
          </div>
          <div className="absolute top-0 w-full h-[100lvh] flex items-center justify-center spacePin">
            <svg viewBox="130 0 1728 852" fill="none" preserveAspectRatio="xMidYMin slice" className="w-[100vw] h-[100lvh] relative">
              <defs>
                  <filter id="displacementFilter2">
                      <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="1" result="noise"/>
                      <feDisplacementMap in="SourceGraphic" in2="noise" scale="50" xChannelSelector="R" yChannelSelector="G"/>
                  </filter>
                  <mask id="circleMask2">
                      <circle cx="1000" cy="800" r="60" fill="white" className="displacement2"/>
                  </mask>
              </defs>
              <image className="maskedObject" width="120%" height="120%" xlinkHref={planetearth}/>
            </svg>       
          </div>
          <div className="absolute cursor-pointer group w-[80px] sm:w-[100px] lg:w-[300px] h-[40px] sm:h-[60px] sm:bottom-8 bottom-7 right-4 sm:right-14 border-[2.5px] overflow-hidden z-[600] bg-black border-black flex" onMouseEnter={toggleCursor} onMouseLeave={toggleCursor}>
            <div className="lg:w-[18%] w-[50%] h-full bg-white flex items-center justify-center">
              <FontAwesomeIcon icon={faGithub} color="black" size="xl" className="relative z-[10000]"/>
            </div>
            <div className="w-[65%] lg:flex h-full hidden items-center justify-center pl-5 relative z-[10000]">  
              <span className="text-white lg:opacity-100 opacity-0 nohemiSemiBold uppercase">find me on github</span>
            </div>
            <div className="lg:w-[17%] w-[50%] h-full flex items-center justify-center lg:justify-start relative z-[10000]">
              <img src={arrow} className="size-8 invert rotate-[-45deg]"/>
            </div>
            <div className="absolute w-0 group-hover:lg:w-[82%] group-hover:w-[50%] transition-all duration-300 right-0 h-full bg-[#1db954]"></div>
          </div>
          <div className="absolute h-[55px] sm:bottom-6 bottom-5 sm:left-14 left-4 flex items-center gap-2 z-[10000]">
            <div className="w-0 h-full border-[#1db954] border animate-scroll transition-a;;"></div>
            <div className="flex flex-col uppercase transition-all nohemiExtraBold text-[12px] md:text-[18px] lg:text-[23px] tracking-wide">
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
              <FontAwesomeIcon icon={faHouse} color={tvVisible === "home" ? "#1db954" : "black"} size="lg" className="hover:opacity-75 active:opacity-50 cursor-pointer select-none" onClick={() => {
                setTvVisible("home")
              }} onMouseEnter={toggleCursor} onMouseLeave={toggleCursor}/>
              <FontAwesomeIcon icon={faTv} color={tvVisible === "tv" ? "#1db954" : "black"} className="text-[18px] hover:opacity-75 active:opacity-50 cursor-pointer select-none" onClick={() => {
                setTvVisible("tv")
              }} onMouseEnter={toggleCursor} onMouseLeave={toggleCursor}/>
            </div>
            <div className="w-fit h-[30px] bg-slate-100 shadow-md border-gray-300 rounded-full relative z-[10000] p-3 flex items-center justify-center nohemiBlack uppercase text-[13px]">Available Now</div>
            {tvVisible === "tv"
            ?
              <div className="md:w-[55%] lg:w-[45%] sm:w-[70%] w-[85%] h-[70%] bg-black rounded-2xl overflow-hidden">
                <iframe className="w-full h-full object-cover"  src="https://www.youtube.com/embed/KJwYBJMSbPI?si=I_efS_ZMZEVZ-xqO?&autoplay=1&controls=0&loop=1" title="Earth" frameborder="0" allow="accelerometer; autoplay; clipboard-write; modestbranding; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
              </div>
            :
              <div className="md:w-[55%] lg:w-[45%] sm:w-[70%] w-[85%] h-[70%] flex">
                <div className="w-full h-full rounded-2xl relative flex flex-col">
                  <div className={`w-full h-full rounded-2xl absolute transition-all duration-200 z-[10500] overflow-hidden ${workVisible ? "opacity-100" : "opacity-0"}`}>
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
                  <div className="w-full h-[50%] flex justify-center items-center">
                      <div className="lg:w-[160px] w-[180px] lg:h-[220px] md:h-[175px] h-[190px] rounded-2xl shadow-md overflow-hidden hover:opacity-20 relative z-[9998]">
                        <div className='motiv w-full h-full absolute top-0 rounded-tr-2xl overflow-hidden'>
                          <img className='w-full h-full object-cover' src={enos2} alt="Picture of Enos"/>
                        </div>
                        <div className='motiv w-full h-full absolute top-0 rounded-tr-2xl overflow-hidden'>
                          <img className='w-full h-full object-cover' src={enos3} alt="Picture of Enos"/>
                        </div>
                        <div className='motiv w-full h-full absolute top-0 rounded-tr-2xl overflow-hidden'>
                          <img className='w-full h-full object-cover' src={enos4} alt="Picture of Enos"/>
                        </div>
                        <div className='motiv w-full h-full absolute top-0 rounded-tr-2xl overflow-hidden'>
                          <img className='w-full h-full object-cover' src={enos5} alt="Picture of Enos"/>
                        </div>
                        <div className='motiv w-full h-full absolute top-0 rounded-tr-2xl overflow-hidden'>
                          <img className='w-full h-full object-cover' src={enos1} alt="Picture of Enos"/>
                        </div>
                      </div>
                  </div>
                  <div className="h-[50%] w-full flex flex-col items-center relative z-[10000]">
                    <span className="nohemiBlack text-[80px]">Enos</span>
                    <span className="nohemiLight text-[25px] uppercase">full stack developer</span>
                  </div>
                </div>
              </div>
            }
            <div className="md:w-[45%] sm:w-[70%] w-[85%] h-[5%] text-[15px] sm:text-[18px] absolute bottom-40 flex items-center justify-evenly z-[10500]">
                    <span className={`uppercase nohemiThin tracking-tight ${contactVisible ? "opacity-0" : "opacity-100"} ${tvVisible === "tv" ? "text-white" : "text-black"} transition-all cursor-pointer select-none hover:text-[#1db954]`} onMouseEnter={() => {
                        setWorkVisible(true)
                    }} onMouseLeave={() => {
                        setWorkVisible(false)
                    }}>view my work</span>
                    <span className={`uppercase nohemiThin tracking-tight ${workVisible ? "opacity-0" : "opacity-100"} ${tvVisible === "tv" ? "text-white" : "text-black"} transition-all cursor-pointer select-none hover:text-[#1db954]`} onMouseEnter={() => {
                        setContactVisible(true)
                    }} onMouseLeave={() => {
                        setContactVisible(false)
                    }} onClick={() => {
                      props.setContact(true);
                    }}>contact me</span>
                  </div>
          </div>
        </div>
    </>
  )
}

export default LandingPage;