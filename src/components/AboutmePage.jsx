import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef } from "react";
import gsap from "gsap";

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
        <div className="w-full h-[100dvh] bg-black relative flex flex-col">
          <div className="w-full h-[200px] absolute top-[-100px] bg-gradient-to-b from-transparent via-50% via-black to-black">

          </div>
          <div className="w-full h-[45%] flex px-14 translate-y-32">
            <div className="w-full h-full flex flex-col">
                <div className="w-full h-[10%] flex items-center justify-center">
                    <span className="text-gray-400 nohemiBlack uppercase">highlights from the trip</span>
                </div>
                <div className="w-full h-[90%] flex items-center justify-evenly">
                    <div className="xl:w-[15%] lg:w-[20%] w-[25%] h-[50%] md:h-[65%] sm:h-[60%] lg:h-[70%] xl:h-[80%] rounded-xl shadow-md -rotate-[10deg] group relative hover:scale-[1.3] transition-all duration-300 cursor-pointer select-none">
                        <img src={about1} className="w-full h-full rounded-xl object-cover" alt="about Enos"/>
                        <div className="w-fit h-fit flex flex-col absolute bottom-2 md:bottom-10 right-1 md:right-4 text-[8px] md:text-[11px] text-right">
                            <span className="text-white nohemiBlack tracking-tight uppercase">learn about</span>
                            <span className="text-white nohemiBlack tracking-tight uppercase">command pilot</span>
                            <span className="text-white nohemiSemiBold tracking-tight uppercase text-[6px] md:text-[9px] opacity-0 group-hover:opacity-100 transition-all duration-500">about me</span>
                        </div>
                    </div>
                    <div className="xl:w-[15%] lg:w-[20%] w-[25%] h-[50%] md:h-[65%] sm:h-[60%] lg:h-[70%] xl:h-[80%] rounded-xl shadow-md rotate-[6deg] group relative hover:scale-[1.3] transition-all duration-300 cursor-pointer select-none">
                        <img src={about2} className="w-full h-full rounded-xl object-cover" alt="work picture"/>
                        <div className="w-fit h-fit flex flex-col absolute bottom-2 md:bottom-10 right-1 md:right-4 text-[8px] md:text-[11px] text-right">
                            <span className="text-white nohemiBlack tracking-tight uppercase">busiest place</span>
                            <span className="text-white nohemiBlack tracking-tight uppercase">in the universe</span>
                            <span className="text-white nohemiSemiBold tracking-tight uppercase text-[6px] md:text-[9px] opacity-0 group-hover:opacity-100 transition-all duration-500">view work</span>
                        </div>
                    </div>
                    <div className="xl:w-[15%] lg:w-[20%] w-[25%] h-[50%] md:h-[65%] sm:h-[60%] lg:h-[70%] xl:h-[80%] rounded-xl shadow-md -rotate-[4deg] group relative hover:scale-[1.3] transition-all duration-300 cursor-pointer select-none">
                        <img src={about3} className="w-full h-full rounded-xl object-cover" alt="deep in space"/>
                        <div className="w-fit h-fit flex flex-col absolute bottom-2 md:bottom-10 right-1 md:right-4 text-[8px] md:text-[11px] text-right">
                            <span className="text-white nohemiBlack tracking-tight uppercase">deep</span>
                            <span className="text-white nohemiBlack tracking-tight uppercase">in space</span>
                            <span className="text-white nohemiSemiBold tracking-tight uppercase text-[6px] md:text-[9px] opacity-0 group-hover:opacity-100 transition-all duration-500">space tour</span>
                        </div>
                    </div>
                    <div className="xl:w-[15%] lg:w-[20%] w-[25%] h-[50%] md:h-[65%] sm:h-[60%] lg:h-[70%] xl:h-[80%] rounded-xl shadow-md rotate-[7deg] group relative hover:scale-[1.3] transition-all duration-300 cursor-pointer select-none">
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
          <div className="w-full h-[25%] lg:px-14 translate-y-44 overflow-hidden">
            <div className="w-full h-full flex items-center justify-center text-[20px] sm:text-[35px] md:text-[40px] lg:text-[50px] xl:text-[60px] 2xl:text-[70px]">
                <span className="text-white nohemiBlack uppercase tracking-tight">creative coder</span>
                <span className="text-white nohemiExtraLight uppercase tracking-tighter">software developer</span>
            </div>
          </div>
          <div className="w-fit h-fit flex items-center justify-center translate-y-20 lg:translate-y-44 gap-2 absolute bottom-0 right-10 z-20">
            <div className="animate-rotate"><FontAwesomeIcon icon={faAsterisk} size="3x" color="white"/></div>
            <div className="w-[45px] h-[45px] border-4 border-white flex justify-center items-center rounded-full">
                <div className="w-[30px] h-[30px] border-4 border-white rounded-full flex items-center justify-center">
                    <div className="w-[10px] h-[10px] bg-white animate-enlarge transition-all rounded-full"></div>
                </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[100dvh] bg-black relative flex lg:flex-row-reverse flex-col overflow-x-hidden" ref={component}>
          <div className="w-[40%] h-fit absolute lg:top-20 top-[50dvh] left-8 lg:left-20 flex flex-col overflow-visible">
            <div className="w-fit h-fit pl-2 flex nohemiBlack text-white uppercase tracking-tight text-[40px] lg:text-[100px]">
                <span>e</span>
                <span className="italic">n</span>
                <span>os</span>
            </div>
            <div className="w-fit h-fit pl-2 flex nohemiBlack lg:-translate-y-14 translate-x-10 text-white uppercase tracking-tight text-[40px] lg:text-[100px]">
                <span className="italic">n</span>
                <span>samba</span>
            </div>
            <div className="w-full h-fit flex items-center justify-end md:px-8">
                <span className="text-white nohemiSemiBold -translate-y-3 lg:-translate-y-20 text-[18px] tracking-tighter">/e.nos n'sam.ba/</span>
            </div>
            <div className="md:w-[530px] sm:w-[450px] w-[330px] lg:w-full h-full min-h-full absolute -bottom-40 lg:relative flex flex-row-reverse lg:-translate-x-6">
                <div className="absolute -bottom-40 left-3 rounded-full min-w-[200px] w-[200px] h-[200px]">
                    <img className="w-full h-full rounded-full object-cover moon" src={moon} alt="moon"/>
                </div>
                <div className="min-w-[80%] w-[80%] h-full relative">
                    <div className="absolute top-5 -left-14 w-[30px] border-2 border-white h-0"></div>
                    <p className="absolute pl-5 w-fit h-fit text-justify top-3 right-2 nohemiRegular tracking-widest uppercase text-[11px] sm:text-[13px] md:text-[15px] lg:text-[17px] text-white">i am a software developer and lifelong learner from zambia, currently in Lusaka. I have an orientation for detail and symmetrical design. I love when things fit and I have an eye for when they don't. </p>
                </div>
            </div>
          </div>
          <div className="lg:w-[50%] w-full lg:h-full h-[50%] flex items-center justify-center relative svgTrigger">
            <svg viewBox="0 0 1728 852" fill="none" preserveAspectRatio="xMidYMin slice" className="w-[100%] h-[100%]">
                <defs>
                    <filter id="displacementFilter">
                        <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="1" result="noise"/>
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="50" xChannelSelector="R" yChannelSelector="G"/>
                    </filter>
                    <mask id="circleMask">
                        <circle cx="850" cy="450" r="0" fill="white" className="displacement"/>
                    </mask>
                </defs>
                <image width="100%" height="100%" mask="url(#circleMask)" xlinkHref={bio}/>
            </svg>
          </div>
        </div>
        <div className="w-full h-[100dvh] bg-black relative flex items-center justify-center">
          <div className="w-[85%] h-[85%] flex flex-col">
              <div className="w-full h-[10%] md:text-lg text-[14px] nohemiBlack flex items-center justify-between px-5 border-b-[0.5px] border-white">
                  <span className="text-white uppercase transition-all tracking-wide">key skills</span>
                  <span className="text-white uppercase transition-all tracking-wide">key tools</span>
              </div>
              <div className="w-full h-[90%] flex flex-col">
                {abilities.map((ability, index) => (
                  <div key={ability.id} index={index} className={`w-full h-1/6 border-white ${ability.id != 6 ? "border-b-4" : "border-none"} flex items-center justify-between px-5 group hover:bg-white transition-all`}>
                      <div className="w-fit h-fit flex items-center justify-center gap-3">   
                          <img src={ability.image1} alt="frontend Image" className="w-[20px] h-[20px] object-contain invert group-hover:invert-0"/>
                          <span className="nohemiRegular text-[12px] md:text-lg text-white uppercase tracking-wide group-hover:text-black transition-all">{ability.text1}</span>
                      </div>
                      <div className="w-fit h-fit flex items-center justify-center gap-3">   
                          <span className="nohemiRegular text-[12px] md:text-lg text-white uppercase tracking-wide group-hover:text-black transition-all">{ability.text2}</span>
                          <img src={ability.image2} alt="tailwind image" className="w-[20px] h-[20px] object-contain"/>
                      </div>
                  </div>
                ))}
              </div>
          </div>
          <div className="w-fit h-fit absolute bottom-0 flex text-[10px] md:text-[18px] items-center justify-center gap-2 uppercase text-white">
            <span className="nohemiBlack">currently learning: </span>
            <span className="nohemiLight">nextjs, automation with python, canvasketch</span>
          </div>
        </div>
    </>
  )
}

export default AboutmePage;

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
