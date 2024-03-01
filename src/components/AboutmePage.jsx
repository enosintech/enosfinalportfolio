import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useContext, useCallback } from "react";
import gsap from "gsap";

import { CursorContext } from "../utils/CursorContextProvider";

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

function AboutmePage() {
  const component = useRef(null);
  const [ cursor, setCursor ] = useContext(CursorContext);

  const toggleCursorHover = useCallback(() => {
    setCursor(({hover}) => ({ hover: !hover }))
  });

  const toggleCursorActive = useCallback(() => {
    setCursor(({active}) => ({ active: !active }))
  });

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".displacement", {
        attr: {
            r: 300,
        },
        scrollTrigger: {
            trigger: ".svgTrigger",
            scrub: true,
        }
    })
    }, component)

    return () => ctx.revert();
  }, [])
  return (
    <>
        <div className="w-full h-[100svh] bg-black relative flex flex-col">
          <div className="w-full h-[200px] absolute top-[-100px] bg-gradient-to-b from-transparent via-50% via-black to-black contactAppearTrigger">

          </div>
          <div className="w-full h-[50%] flex items-center justify-center">
            <div className="w-[30%] relative z-[10000] h-[80%] flex flex-col items-center justify-evenly">
                <div className="w-[70%] h-[70%] flex flex-col">
                    {tripDetails.map((tripDetail, index) => (
                        <div key={tripDetail.id} index={index} className={`w-full h-1/5 ${tripDetail.id === tripDetails.length ? "border-none pb-2" : "border-b-4 pb-1"} border-white flex items-end justify-between px-3 uppercase text-white`}>
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
        <div className="w-full h-[100svh] bg-black relative flex lg:flex-row-reverse flex-col overflow-x-visible" ref={component}>
          
        </div>
        <div className="w-full h-[100svh] bg-black relative flex items-center justify-center">
          
        </div>
    </>
  )
}

export default AboutmePage;

const tripDetails = [
    {
        id: 1,
        text1: "destination",
        text2: "mars",
    },
    {
        id: 2,
        text1: "km from lift-off",
        text2: "408 km",
    },
    {
        id: 3,
        text1: "km to destination",
        text2: "480 M Km",
    },
    {
        id: 4,
        text1: "eta",
        text2: "7 Months"
    },
    {
        id: 5,
        text1: "current speed",
        text2: "escape velocity",
    },
]

const abilities = [
    {
        id:1,
        image1: frontend,
        text1: "frontend design",
        image2: tailwind,
        text2: "tailwind css",
    },
    {
        id:2,
        image1: backend,
        text1: "backend design",
        image2: mern,
        text2: "mern stack",
    },
    {
        id:3,
        image1: uxui,
        text1: "ux/ui design",
        image2: figma,
        text2: "figma",
    },
    {
        id:4,
        image1: webmobile,
        text1: "web & mobile",
        image2: react,
        text2: "react/ native",
    },
    {
        id:5,
        image1: quality,
        text1: "quality assurance",
        image2: typescript,
        text2: "typescript",
    },
    {
        id: 6,
        image1: documentation,
        text1: "documentation",
        image2: python,
        text2: "python",
    },
]
