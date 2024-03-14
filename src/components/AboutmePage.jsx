import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useContext, useCallback, Suspense } from "react";
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
        <div className="w-full h-[500svh] z-[600] relative overflow-x-hidden yieldTrigger">
            <div className="w-full h-1/5 aboutPin contactAppearTrigger flex items-center relative">
                <div className="w-[150vw] min-w-[150vw] h-[75%] flex yieldLeft relative">
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
                            <div className="w-full h-[95%] flex justify-start">
                                <p className="w-full h-fit text-[30px] px-5 nohemiRegular text-white text-justify">
                               Hi there, I am <span className="text-[#1db954]">Enos Nsamba,</span> a software developer, lifelong learner and an absolute tinkerer from Zambia, currently in Lusaka. I have an orientation for detail and symmetrical design. I love when things fit and I have an eye for when they don't. When I am not coding, I love to write and ponder on things.</p>
                            </div>
                            <div className="w-full h-[5%] border-y-2 border-white text-white uppercase nohemiBold flex items-center justify-center gap-2">
                                <span>lusaka, zm</span>
                                <span>·</span>
                                <span>21° C</span>
                                <span>·</span>
                                <span>15.4155° S, 28.2773° E</span>
                                <span>·</span>  
                                <span>12 : 56 : 33 PM CAT</span>
                            </div>       
                        </div>
                    </div>
                    <div className="w-[33.33%]  min-w-[33.33%] h-full flex items-center justify-start">
                        <div className="w-[55%] h-[93%] flex flex-col text-white">
                            <div className="w-full h-1/3 flex flex-col">
                                <span className="w-full h-[20%] flex items-center uppercase nohemiLight border-b-2 border-white">summary</span>
                                <div className="w-full h-[80%] flex">
                                    <div className="w-1/2 h-full flex flex-col items-center justify-center uppercase">
                                        <span className="nohemiBlack text-[60px] text-[#1bd954]">4</span>
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
