import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useContext, useCallback } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei';

import { CursorContext } from "../utils/CursorContextProvider";
import { Model } from "../assets/3d-models/ship/Scene";

import enos1 from "../assets/images/mainenos1.webp";
import enos2 from "../assets/images/mainenos2.webp";
import enos3 from "../assets/images/mainenos3.webp";
import enos4 from "../assets/images/mainenos4.webp";
import enos5 from "../assets/images/mainenos5.webp";
import bio from "../assets/images/bio.webp";
import moon from "../assets/images/moonImage.webp";
import about1 from "../assets/images/about1.webp";
import about2 from "../assets/images/about2.webp";
import about3 from "../assets/images/about3.webp";
import about4 from "../assets/images/about4.webp";
import backend from "../assets/images/backend.webp";
import documentation from "../assets/images/document.webp";
import frontend from "../assets/images/frontend.webp";
import quality from "../assets/images/qualityassurance.webp";
import uxui from "../assets/images/uxui.webp";
import webmobile from "../assets/images/webmobiledev.webp";
import typescript from "../assets/images/typescript.webp";
import python from "../assets/images/python.webp";
import figma from "../assets/images/figma.webp";
import mern from "../assets/images/mern.webp";
import tailwind from "../assets/images/tailwind.webp";
import react from "../assets/images/reactjs.webp";
import node from "../assets/images/node.webp";
import javascript from "../assets/images/javascript.webp";

function AboutmePage() {
  const [ cursor, setCursor ] = useContext(CursorContext);

  const toggleCursorHover = useCallback(() => {
    setCursor(({hover}) => ({ hover: !hover }))
  });

  const toggleCursorActive = useCallback(() => {
    setCursor(({active}) => ({ active: !active }))
  });

  return (
    <>
        <div className="w-full h-[100svh] bg-black relative flex flex-col z-[600]">
          <div className="w-full h-[200px] absolute top-[-100px] bg-gradient-to-b from-transparent via-50% via-black to-black contactAppearTrigger">

          </div>
          <div className="w-full h-[50%] flex items-center justify-center">
            <div className="w-[30%] relative z-[10000] h-[80%] flex flex-col items-center justify-evenly">
                <div className="w-[70%] h-[70%] flex flex-col">
                    {tripDetails.map((tripDetail, index) => (
                        <div key={tripDetail.id} index={index} className={`w-full h-1/5 ${tripDetail.id === tripDetails.length ? "border-none pb-2" : "border-b-4 pb-1"} border-white flex items-end justify-between px-3 text-white`}>
                            <span className="nohemiRegular text-[13px]">{tripDetail.text1}</span>
                            <span className="nohemiExtraBold text-[18px]">{tripDetail.text2}</span>
                        </div>
                    ))}
                </div>
            </div>
          </div>
          <div className="w-full h-[50%] flex px-14">
            <div className="w-full h-full flex flex-col">
                <div className="w-full h-[90%] flex items-center justify-evenly">
                    <div className="xl:w-[15%] lg:w-[20%] w-[25%] h-[50%] md:h-[65%] sm:h-[60%] lg:h-[70%] xl:h-[80%] rounded-xl shadow-md -rotate-[10deg] group relative hover:scale-[1.3] transition-all duration-300 cursor-pointer select-none" onMouseEnter={toggleCursorHover} onMouseLeave={() => {
                        if(cursor.hover === true){
                            toggleCursorHover();
                        }
                    }} onMouseDown={toggleCursorActive} onMouseUp={() => {
                        toggleCursorActive();
                        if(cursor.hover === false){
                            toggleCursorHover();
                        }
                    }}>
                        <img src={about1} className="w-full h-full rounded-xl object-cover" alt="about Enos"/>
                        <div className="w-fit h-fit flex flex-col absolute bottom-2 md:bottom-10 right-1 md:right-4 text-[8px] md:text-[11px] text-right">
                            <span className="text-white nohemiBlack tracking-tight uppercase">learn about</span>
                            <span className="text-white nohemiBlack tracking-tight uppercase">command pilot</span>
                            <span className="text-white nohemiSemiBold tracking-tight uppercase text-[6px] md:text-[9px] opacity-0 group-hover:opacity-100 transition-all duration-500">about me</span>
                        </div>
                    </div>
                    <div className="xl:w-[15%] lg:w-[20%] w-[25%] h-[50%] md:h-[65%] sm:h-[60%] lg:h-[70%] xl:h-[80%] rounded-xl shadow-md rotate-[4deg] group relative hover:scale-[1.3] transition-all duration-300 cursor-pointer select-none" onMouseEnter={toggleCursorHover} onMouseLeave={() => {
                        if(cursor.hover === true){
                            toggleCursorHover();
                        }
                    }} onMouseDown={toggleCursorActive} onMouseUp={() => {
                        toggleCursorActive();
                        if(cursor.hover === false){
                            toggleCursorHover();
                        }
                    }}>
                        <img src={about3} className="w-full h-full rounded-xl object-cover" alt="deep in space"/>
                        <div className="w-fit h-fit flex flex-col absolute bottom-2 md:bottom-10 right-1 md:right-4 text-[8px] md:text-[11px] text-right">
                            <span className="text-white nohemiBlack tracking-tight uppercase">deep</span>
                            <span className="text-white nohemiBlack tracking-tight uppercase">in space</span>
                            <span className="text-white nohemiSemiBold tracking-tight uppercase text-[6px] md:text-[9px] opacity-0 group-hover:opacity-100 transition-all duration-500">space tour</span>
                        </div>
                    </div>
                    <div className="xl:w-[15%] lg:w-[20%] w-[25%] h-[50%] md:h-[65%] sm:h-[60%] lg:h-[70%] xl:h-[80%] rounded-xl shadow-md -rotate-[7deg] group relative hover:scale-[1.3] transition-all duration-300 cursor-pointer select-none" onMouseEnter={toggleCursorHover} onMouseLeave={() => {
                        if(cursor.hover === true){
                            toggleCursorHover();
                        }
                    }} onMouseDown={toggleCursorActive} onMouseUp={() => {
                        toggleCursorActive();
                        if(cursor.hover === false){
                            toggleCursorHover();
                        }
                    }}>
                        <img src={about4} className="w-full h-full rounded-xl object-cover" alt="mars"/>
                        <div className="w-fit h-fit flex flex-col absolute bottom-2 md:bottom-10 right-1 md:right-4 text-[8px] md:text-[11px] text-right">
                            <span className="text-white nohemiBlack tracking-tight uppercase">gale</span>
                            <span className="text-white nohemiBlack tracking-tight uppercase">crater</span>
                            <span className="text-white nohemiSemiBold tracking-tight uppercase text-[6px] md:text-[9px] opacity-0 group-hover:opacity-100 transition-all duration-500">Mars</span>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[500svh] bg-black z-[600] relative overflow-x-hidden yieldTrigger">
            <div className="w-full h-1/5 aboutPin flex items-center relative">
                <div className="w-[150vw] min-w-[150vw] h-[75%] backdrop-blur-[3px] flex yieldLeft relative">
                    <div className="w-[33.33%] min-w-[33.33%] h-full flex items-center justify-end">
                        <div className="w-[55%] h-[93%] rounded-xl relative overflow-hidden">
                            <div className="w-full h-full absolute motiv">
                                <img className="w-full h-full object-cover" src={enos2} alt="Picture of Enos"/>
                            </div>
                            <div className="w-full h-full absolute motiv">
                                <img className="w-full h-full object-cover" src={enos3} alt="Picture of Enos"/>
                            </div>
                            <div className="w-full h-full absolute motiv">
                                <img className="w-full h-full object-cover" src={enos4} alt="Picture of Enos"/>
                            </div>
                            <div className="w-full h-full absolute motiv">
                                <img className="w-full h-full object-cover" src={enos5} alt="Picture of Enos"/>
                            </div>
                            <div className="w-full h-full absolute motiv">
                                <img className="w-full h-full object-cover" src={enos1} alt="Picture of Enos"/>
                            </div>
                        </div>
                    </div>
                    <div className="w-[33.33%] min-w-[33.33%] h-full flex items-center justify-center">
                        <div className="w-[75%] h-[93%] flex flex-col">
                            <div className="w-full h-[50%] flex justify-end">
                                <p className="w-[80%] h-fit text-[22px] uppercase nohemiSemiBold text-white righttoleft">
                               hi there, i am <span className="text-[#1db954]">enos nsamba,</span> a software developer and lifelong learner from zambia, currently in lusaka. I have an orientation for detail and symmetrical design. I love when things fit and I have an eye for when they don't</p>
                            </div>
                            <div className="w-full h-[50%] flex items-center pl-5">
                                <div className="rounded-full w-[220px] h-[220px] overflow-hidden">
                                    <img className="w-full h-full object-contain" src={moon} alt="moon image"/>
                                </div>
                            </div>        
                        </div>
                    </div>
                    <div className="w-[33.33%]  min-w-[33.33%] h-full flex items-center justify-start">
                        <div className="w-[55%] h-[93%] flex flex-col text-white">
                            <div className="w-full h-1/3 flex flex-col">
                                <span className="w-full h-[20%] flex items-center uppercase nohemiLight border-b-2 border-white">summary</span>
                                <div className="w-full h-[80%] flex">
                                    <div className="w-1/2 h-full flex flex-col items-center justify-center uppercase">
                                        <span className="nohemiBlack text-[60px] text-[#1bd954]">3</span>
                                        <span className="nohemiSemiBold">professional projects</span>
                                    </div>
                                    <div className="w-1/2 h-full flex flex-col items-center justify-center uppercase">
                                        <span className="nohemiBlack text-[60px] text-[#1bd954]">20+</span>
                                        <span className="nohemiSemiBold">learning projects</span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-1/3 flex flex-col">
                                <div className="w-full h-full flex">
                                    <div className="w-[50%] h-full items-center justify-center flex px-3">
                                        <div className="flex flex-col uppercase nohemiSemiBold text-[#1db954]">
                                            <span>distance travelled</span>
                                            <span>in code</span>
                                        </div>
                                    </div>
                                    <div className="w-[50%] h-full items-center justify-center flex flex-col uppercase text-[25px] nohemiBold">
                                        <span>50,000+</span>
                                        <span>lines</span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-1/3 flex">
                                <div className="w-full h-full flex flex-col-reverse items-center justify-center gap-8">
                                    <div className="w-full flex items-center justify-evenly">
                                        <img className="w-[65px] h-[65px] rotate-[-9deg] object-contain" alt="node icon" src={node}/>
                                        <img className="w-[65px] h-[65px] rotate-[-15deg] object-contain" alt="ts icon" src={javascript}/>
                                        <img className="w-[65px] h-[65px] rotate-[19deg] object-contain" alt="react icon" src={react}/>
                                        <img className="w-[65px] h-[65px] rotate-[19deg] object-contain" alt="tailwind icon" src={tailwind}/>
                                    </div>
                                    <span className="uppercase nohemiSemiBold text-[20px]">prefers</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full h-[100svh] bg-black relative flex items-center justify-center overflow-y-visible">
          <div className="w-full h-[200svh] min-h-[200svh] top-0 absolute z-[-1] shipTrigger"></div>          
          <div className="w-full h-full top-0 absolute modelPin overflow-y-visible">
            <Canvas>
                <ambientLight intensity={1.25}/>
                    <Model />
                <OrbitControls enableZoom={false} enableRotate={false}/>
            </Canvas>       
          </div>          
          <div className="h-full w-[25%] flex flex-col items-center justify-between pt-20 pb-5">
            <div className="w-fit h-fit uppercase flex flex-col">
                <span className="beckanr text-[55px] text-[#1db954]">key tools</span>
                <span className="text-[50px] -translate-y-6 nohemiSemiBold text-white">& services</span>
            </div>        
          </div>
          <div className="h-full w-[75%] relative">
            <div className="w-full h-[80%] absolute bottom-0 flex flex-col items-center">
                {abilities.map((ability, index) => (
                    <div key={ability.id} index={index} className={`w-[95%] group px-2 relative transition-all hover:text-black text-white text-[30px] h-1/6 border-b border-gray-400 flex items-center justify-between`}>
                        <div className="w-0 group-hover:w-full h-full bg-white absolute left-0 z-[0] transition-all"></div>
                        <span className="nohemiLight relative z-[1]">{ability.text1}</span>
                        <div className="flex items-center relative z-[1] gap-2">
                            <span className="nohemiBold">{ability.text2}</span>
                            <div className="w-[35px] h-[35px]">
                                <img className="w-full h-full object-contain" alt="tool icon" src={ability.image2}/>
                            </div>
                        </div>
                    </div>
                ))}            
            </div>       
          </div>
        </div>
    </>
  )
}

export default AboutmePage;

const tripDetails = [
    {
        id: 1,
        text1: "DESTINATION",
        text2: "Mars",
    },
    {
        id: 2,
        text1: "KM FROM LIFT OFF",
        text2: "408 Km",
    },
    {
        id: 3,
        text1: "KM TO DESTINATION",
        text2: "480 Mil Km",
    },
    {
        id: 4,
        text1: "ETA",
        text2: "7 Months"
    },
    {
        id: 5,
        text1: "CURRENT SPEED",
        text2: "Escape Velocity",
    },
]

const abilities = [
    {
        id:1,
        image1: frontend,
        text1: "Frontend Design",
        image2: tailwind,
        text2: "Tailwind CSS",
    },
    {
        id:2,
        image1: backend,
        text1: "Backend Design",
        image2: node,
        text2: "Node JS",
    },
    {
        id:3,
        image1: uxui,
        text1: "UX/UI Design",
        image2: figma,
        text2: "Figma",
    },
    {
        id:4,
        image1: webmobile,
        text1: "Web & Mobile",
        image2: react,
        text2: "React/ Native",
    },
    {
        id:5,
        image1: quality,
        text1: "Quality Assurance",
        image2: javascript,
        text2: "Javascript",
    },
    {
        id: 6,
        image1: documentation,
        text1: "Documentation",
        image2: python,
        text2: "Python",
    },
]
