import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lottie from "lottie-react";

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

function LandingPage() {
    const [ workVisible, setWorkVisible ] = useState(false);
    const [ contactVisible, setContactVisible ] = useState(false);
    const component = useRef(null);

    useEffect(() => {
      let ctx = gsap.context(() => {
        const imgs = gsap.utils.toArray(".motiv");
        const next = 1.5;
        const fade = 1.5;

        gsap.set(imgs[0], {autoAlpha: 1})

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
          start: "top top",
          end: "bottom -200%",
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
      }, component)

      return () => ctx.revert();
    }, [])

  return (
    <>
        <div className="w-full h-[100svh] pt-[60px] relative flex items-end overflow-x-hidden" ref={component}>
          <div className="w-fit h-[30px] absolute bg-slate-100 shadow-md border-gray-300 rounded-full p-3 flex items-center justify-center nohemiBlack uppercase text-[13px] top-[120px] mx-auto left-0 right-0">Available Now</div>
          <div className="w-full h-[92%] xl:px-28 grid grid-cols-2 grid-rows-4 gap-0">
            <div className="md:row-span-3 row-span-2 md:col-span-1 col-span-2 md:row-start-1 row-start-1 md:cols-start-1 col-start-1 flex items-center md:justify-end justify-center">
              <div className="w-[75%] h-[80%] md:mr-4 bg-slate-100 shadow-md border border-gray-200 rounded-2xl relative flex">
                <div className={`w-full h-full rounded-2xl absolute transition-all duration-200 z-[12] overflow-hidden ${workVisible ? "opacity-100" : "opacity-0"}`}>
                  <img src={workPrompt} className="w-full h-full object-cover" alt="workPrompt"/>
                  <div className="w-fit h-fit flex flex-col p-3 text-white absolute top-5 left-5 uppercase nohemiBlack">
                    <span>1. BantuRide</span>
                    <span>2. MakeupbyRam</span>
                    <span>3. ZedCart</span>
                  </div>
                </div>
                <div className={`w-full h-full flex justify-end rounded-2xl absolute transition-all duration-200 bg-black z-[12] ${contactVisible ? "opacity-100" : "opacity-0"}`}>
                    <div className="w-fit h-fit rounded-full absolute left-14 top-10">
                      <img src={earth} className="w-[220px] h-[220px] rounded-full object-cover" alt="planet earth"/>
                    </div>
                    <div className="w-fit h-full flex -translate-x-4 flex-col justify-center pt-8 px-5">
                        <span className="flex items-center justify-end text-white nohemiThin text-[50px] tracking-tighter">I am</span>
                        <span className="flex items-center justify-end text-white nohemiExtraLight text-[50px] tracking-tighter">ready to work</span>
                        <span className="flex items-center justify-end text-white nohemiLight text-[50px] tracking-tighter">anywhere on earth</span>
                    </div>
                </div>
                <div className="w-[40%] h-full flex justify-center items-start py-6 z-[11]">
                    <div className="lg:w-[250px] w-[180px] lg:h-[275px] md:h-[175px] h-[190px] rounded-2xl lg:translate-x-8 translate-x-6 shadow-md translate-y-1 overflow-hidden relative">
                      <div className='motiv w-full h-full absolute top-0 rounded-tr-2xl overflow-hidden'>
                        <img className='w-full h-full object-cover' src={enos1} alt="Picture of Enos"/>
                      </div>
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
                    </div>
                </div>
                <div className="w-[60%] min-w-[60%] h-full flex flex-col justify-start relative translate-y-1 translate-x-2 md:translate-x-0 sm:-translate-x-5 lg:translate-x-2 2xl:-translate-x-3 z-[11]">
                  <div className="w-full h-[25%] flex pr-5 justify-end translate-y-8">
                      <span className="nohemiThin text-[50px] md:text-[60px] lg:text-[70px] tracking-tight">Hi</span>
                  </div>
                  <div className="w-full h-[25%] flex pr-5 justify-end translate-y-1">
                      <span className="nohemiExtraLight text-[55px] md:text-[65px] lg:text-[75px] tracking-tight">I am</span>
                  </div>
                  <div className="w-full h-[25%] flex pr-5 justify-end -translate-y-5">
                      <span className="nohemiBlack text-[60px] md:text-[70px] lg:text-[80px] tracking-tight">Enos</span>
                  </div>
                  <div className="w-full h-[5%] flex justify-end md:-translate-y-5 lg:-translate-y-2 pr-5">
                      <span className="nohemiExtraBold uppercase text-[12px] md:text-[13px] lg:text-[17px]">software developer</span>
                  </div>
                </div>
                <div className="w-full h-[20%] text-[12px] md:text-[15px] lg:text-[18px] absolute bottom-0 flex items-center justify-evenly z-[13]">
                  <span className={`uppercase nohemiLight tracking-tight ${contactVisible ? "opacity-0" : "opacity-100"} transition-all cursor-pointer select-none hover:text-white`} onMouseEnter={() => {
                      setWorkVisible(true)
                  }} onMouseLeave={() => {
                      setWorkVisible(false)
                  }}>view my work</span>
                  <span className={`uppercase nohemiLight tracking-tight ${workVisible ? "opacity-0" : "opacity-100"} transition-all cursor-pointer select-none hover:text-white`} onMouseEnter={() => {
                      setContactVisible(true)
                  }} onMouseLeave={() => {
                      setContactVisible(false)
                  }}>contact me</span>
                </div>
              </div>
            </div>
            <div className="md:row-span-3 row-span-2 md:col-span-1 col-span-2 md:row-start-1 row-start-3 md:cols-start-2 col-start-1 flex md:items-center items-start md:justify-start justify-center">
              <div className="w-[75%] h-[80%] md:ml-4 bg-slate-100 shadow-md border border-gray-200 rounded-2xl relative">
                <div className="w-full h-[80%] flex flex-col">
                  <div className="w-full h-[35%] flex items-center justify-between pr-6">
                    <div className="w-[50%] h-full flex items-center justify-center">
                        <div className="w-1/2 h-full flex items-center justify-end">
                            <div className="w-[80%] h-[80%] flex items-center justify-center">
                                <Lottie 
                                  className="w-full h-full object-contain"
                                  animationData={dynamicCube}
                                />
                            </div>
                        </div>
                        <div className="w-0 h-[55%] lg:h-[70%] border border-black"></div>
                        <div className="w-1/2 h-[80%] text-[14px] pl-2 flex flex-col justify-center">
                            <div className="flex uppercase nohemiBlack translate-y-1">
                                <span>de</span>
                                <span className="italic">sign</span>
                                <span className="ml-[1.5px]">er</span>
                            </div>
                            <div className="flex uppercase nohemiSemiBold tracking-tight">
                                <span>developer</span>
                            </div>
                            <div className="flex uppercase nohemiLight tracking-tight -translate-y-1">
                                <span>writer</span>
                            </div>
                        </div>
                    </div>
                    <Link to="/blog" className="lg:w-[130px] sm:w-[105px] w-[90px] h-[50px] shadow bg-black cursor-pointer select-none hover:opacity-75 active:opacity-50 rounded-full flex items-center justify-center">
                        <span className="nohemiBlack text-white uppercase text-[12px] lg:text-[15px]">go to blog</span>
                    </Link>
                  </div>
                  <div className="w-full h-[65%] flex items-center justify-center">
                    <div className="rounded-xl w-[90%] h-full bg-white relative flex flex-col">
                        <div className="w-full h-[20%] text-[13px] md:text-[12px] lg:text-[15px] flex items-center justify-between px-4 uppercase tracking-tight">
                            <span className="nohemiBlack">latest articles</span>
                            <span className="nohemiRegular">total articles: 19</span>
                        </div>
                        <div className="w-full h-[80%] flex flex-col">
                            {latestBlogs.map((blog, index) => (
                              <LatestBlogsComponent 
                                key={blog.id}
                                index={index}
                                {...blog}
                              />
                            ))}
                        </div>
                    </div>           
                  </div>
                  <div className="w-full h-[20%] flex items-center justify-center gap-1 absolute bottom-0">
                    <div className="lg:w-[10px] w-[8px] lg:h-[10px] h-[8px] rounded-full border-[3px] border-black animate-pulse"></div>
                    <span className="nohemiBlack uppercase text-[12px] lg:text-[14px]">currently in lusaka, zm (gmt +2)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute w-full h-full top-0 flex items-center justify-center spacePin">
            <svg viewBox="0 0 1728 852" fill="none" preserveAspectRatio="xMidYMin slice" className="w-[100%] h-[100%] relative">
              <defs>
                  <filter id="displacementFilter2">
                      <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="1" result="noise"/>
                      <feDisplacementMap in="SourceGraphic" in2="noise" scale="50" xChannelSelector="R" yChannelSelector="G"/>
                  </filter>
                  <mask id="circleMask2">
                      <circle cx="870" cy="800" r="50" fill="white" className="displacement2"/>
                  </mask>
              </defs>
              <foreignObject width="100%" height="100%" preserveAspectRatio="xMidYMin slice" mask="url(#circleMask2)">
                  <video key={space} xmlns="http://www.w3.org/1999/xhtml" height="100%" width="100%" autoPlay loop muted crossOrigin="anonymous" className="relative object-contain">
                      <source src={space} type="video/mp4"/>
                      Video Format not Supported
                  </video>
              </foreignObject>
            </svg>       
          </div>
        </div>
    </>
  )
}

export default LandingPage;

const latestBlogs = [
  {
      id: 1, 
      title: "how to center a div",
      length: 2,
  },
  {
      id: 2, 
      title: "5 must know coding principles",
      length: 5,
  },
];