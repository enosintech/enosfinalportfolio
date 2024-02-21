import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

import about3 from "../assets/images/about3.webp"
import mercury from "../assets/images/mercury.webp";
import venus from "../assets/images/venus.webp";
import earth from "../assets/images/earth.webp";
import mars from "../assets/images/mars.webp";
import jupiter from "../assets/images/jupiter.webp";
import saturn from "../assets/images/saturn.webp";
import uranus from "../assets/images/uranus.webp";
import neptune from "../assets/images/neptune.webp";
import asteroidbelt from "../assets/images/asteroidbelt.webp";
import spaceImage1 from "../assets/images/spaceImage1.webp";
import spaceImage2 from "../assets/images/spaceImage2.webp";
import spaceImage3 from "../assets/images/spaceImage3.webp";
import spaceImage4 from "../assets/images/spaceImage4.webp";
import spaceImage5 from "../assets/images/spaceImage5.webp";
import spaceImage6 from "../assets/images/spaceImage6.webp";
import spaceImage7 from "../assets/images/spaceImage7.webp";
import spaceImage8 from "../assets/images/spaceImage9.webp";
import spaceImage9 from "../assets/images/spaceImage10.webp";
import nasa from "../assets/images/nasa.webp";


import astronautinspace from "../assets/videos/astronautinspace.mp4";

function SpacePage() {

  const baseUrl = 'https://api.nasa.gov/planetary/apod?api_key=';
  const apiKey = 'SgxX6ChTJseeCpJdu8Wvr8orsddu2wFbhxIxYXFm';

  const [ nasaApodData, setNasaApodData ] = useState({});
  const solarSystem = useRef(null);
  const spaceGallery = useRef(null);

  useEffect(() => {
    fetch(baseUrl + apiKey)
    .then(response => response.json())
    .then (json => {
        setNasaApodData(json)
    })

    let ctx1 = gsap.context(() => {
      gsap.to(".up", {
        y: 150,
        scrollTrigger: {
            trigger: ".solarSystemTrigger",
            scrub: true,
            start: "top center",
        }
      })
    
      gsap.to(".down", {
          y: -150,
          scrollTrigger: {
              trigger : ".solarSystemTrigger",
              scrub: true,
              start: "top center"
          }
      })
    }, solarSystem)

    let ctx2 = gsap.context(() => {
      gsap.fromTo(".stagger", {
        y: 500,
    }, {
        y: 0,
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".staggerTrigger",
            scrub: true,
            start: "top 90%",
            end: "top 200px",
        }
    })
    }, spaceGallery)

    return(() => {
      ctx1.revert();
      ctx2.revert();
    })
  }, [])

  return (
    <>
      <div className="w-full h-[100dvh] min-h-[100dvh] flex items-center justify-center relative overflow-x-hidden">
          <video key={astronautinspace} loop muted autoPlay className={`bg-white w-full h-full object-cover`}>
              <source src={astronautinspace} type="video/mp4"/>
              Video Format Not supported
          </video>
          <div className="w-full h-full absolute top-0 bg-gradient-to-b from-black to-black via-transparent from-[0.1%] to-[99.99%]%"></div>
          <div className="w-fit h-fit absolute md:bottom-40 bottom-28 left-10 md:left-20 z-[2] flex items-center justify-center gap-3">
              <img className="md:w-[70px] w-[50px] md:h-[90px] h-[65px] object-cover rounded-xl" src={about3} alt="deepinspace"/>
              <div className="w-0 h-[60px] md:h-[92px] border-white border-2"></div>
              <div className="flex flex-col w-fit h-fit text-white uppercase nohemiExtraBold">
                  <span className="text-[15px] md:text-[25px]">deep in space</span>
                  <span className="nohemiLight text-[10px] md:text-[15px]">space tour</span>
              </div>
          </div>
      </div>
      <div className="w-full h-[100dvh] bg-black min-h-[100dvh] flex flex-col overflow-x-hidden" ref={solarSystem}>
        <div className="w-full h-full bg-stars relative solarSystemTrigger">
            <div className="w-[650px] h-[650px] bg-[#ffdd50] rounded-full sun absolute top-0 bottom-0 my-auto -translate-x-[40%] min-[500px]:-translate-x-[20%] sm:translate-x-0 -left-full sm:left-[-80%] md:left-[-60%] lg:left-[-45%] xl:left-[-35%] 2xl:left-[-25%]"></div>
            <div className="w-[85%] h-fit absolute top-0 bottom-0 my-auto right-0 flex items-center justify-evenly">
                <div className="lg:w-[50px] w-[20px] md:w-[35px] md:h-[35px] h-[20px] lg:h-[50px] rounded-full down relative">
                    <img className="w-full h-full rounded-full object-cover" src={mercury} alt="mercury"/>
                    <span className="nohemiRegular text-white text-[10px] lg:text-[12px] absolute -bottom-6 text-center w-full">Mercury</span>
                </div>
                <div className="lg:w-[80px] w-[30px] h-[30px] lg:h-[80px] rounded-full up relative">
                    <img className="w-full h-full rounded-full object-cover" src={venus} alt="venus"/>
                    <span className="nohemiRegular text-white text-[10px] lg:text-[12px] absolute -bottom-6 text-center w-full">Venus</span>
                </div>
                <div className="w-[85px] h-[85px] rounded-full down relative">
                    <img className="w-full h-full rounded-full object-cover" src={earth} alt="earth" />
                    <span className="nohemiRegular text-white text-[12px] absolute -bottom-6 text-center w-full">Earth</span>
                    <div className="w-fit h-fit p-3 absolute -top-32 left-0 right-0 mx-auto flex flex-col">
                        <span className="text-white text-center uppercase nohemiBlack">fun fact</span>
                        <span className="w-[300px] text-[12px] text-white nohemiRegular">Earth may not be flat, but it is not perfectly round either. The planet bulges around the equator by an extra 0.3 percent as a result of the fact that it rotates about its axis.</span>
                    </div>
                </div>
                <div className="w-[70px] h-[70px] rounded-full up relative">
                    <img className="w-full h-full rounded-full object-cover" src={mars} alt="mars"/>
                    <span className="nohemiRegular text-white text-[12px] absolute -bottom-6 text-center w-full">Mars</span>
                </div>
                <div className="w-[220px] h-[220px] rounded-full up relative">
                    <img className="w-full h-full roundeed-full object-cover" src={jupiter} alt="jupiter"/>
                    <span className="nohemiRegular text-white text-[12px] absolute -bottom-6 text-center w-full">Jupiter</span>
                    <div className="w-[30px] h-full absolute -left-10 top-0">
                      <img className="w-full h-full object-cover" src={asteroidbelt}/>
                    </div>
                </div>
                <div className="w-[200px] h-[200px] rounded-full down overflow-visible relative">
                    <img className="w-full h-full rounded-full overflow-visible object-cover" src={saturn} alt="saturn"/>
                    <span className="nohemiRegular text-white text-[12px] absolute -bottom-6 text-center w-full">Saturn</span>
                </div>
                <div className="w-[110px] h-[110px] rounded-full up relative">
                    <img className="w-full h-full rounded-full object-cover" src={uranus} alt="uranus"/>
                    <span className="nohemiRegular text-white text-[12px] absolute -bottom-6 text-center w-full">Uranus</span>
                </div>
                <div className="w-[100px] h-[100px] rounded-full down relative">
                    <img className="w-full h-full rounded-full object-cover" src={neptune} alt="neptune"/>
                    <span className="nohemiRegular text-white text-[12px] absolute -bottom-6 text-center w-full">Neptune</span>
                </div>
            </div>
        </div>
      </div>
      <div className="w-full h-[100dvh] bg-black flex items-center justify-center overflow-x-hidden" ref={spaceGallery}>
        <div className="w-[85%] h-[85%] max-[500px]:h-[75%] flex flex-col rounded-b-xl overflow-hidden staggerTrigger">
            <div className="w-full h-[8%] border-b-4 border-white flex items-center justify-between px-5">
                <span className="nohemiBlack text-white text-[14px] min-[500px]:text-[20px] uppercase">space gallery</span>
                <span className="nohemiLight text-white min-[500px]:text-[18px] text-[12px]">photos from unsplash</span>
            </div>
            <div className="w-full h-[92%] grid lg:grid-rows-2 grid-rows-3 lg:grid-cols-4 grid-cols-3 gap-1">
                <img className="w-full h-full object-cover stagger" src={spaceImage1} alt="spaceImage1"/>
                <img className="w-full h-full object-cover stagger" src={spaceImage2} alt="spaceImage2"/>
                <img className="w-full  h-full object-cover stagger" src={spaceImage3} alt="spaceImage3"/>
                <img className="w-full h-full object-cover stagger" src={spaceImage4} alt="spaceImage4"/>
                <img className="w-full h-full object-cover stagger" src={spaceImage5} alt="spaceImage5"/>
                <img className="w-full h-full object-cover stagger" src={spaceImage6} alt="spaceImage6"/>
                <img className="w-full h-full object-cover stagger" src={spaceImage7} alt="spaceImage7"/>
                <img className="w-full h-full object-cover stagger" src={spaceImage8} alt="spaceImage8"/>
                <img className="w-full h-full lg:hidden object-cover stagger" src={spaceImage9} alt="spaceImage9"/>
            </div>
        </div>
      </div>
      <div className="w-full h-[100dvh] bg-black flex items-center justify-center overflow-x-hidden">
        <div className="w-[85%] h-[85%] relative flex md:flex-row flex-col bg-black overflow-hidden">
            <div className="md:w-1/2 w-full md:h-full h-1/2 relative rounded-xl">
                {nasaApodData.media_type === "video" ? 
                    <iframe src={nasaApodData.url} className="h-full w-full rounded-xl border-2 border-white"  />
                    :
                    <img className='h-full w-full rounded-xl' src={nasaApodData.url} alt='Nasa Picture of the Day' />
                }
                <div className="absolute top-0 w-full h-full bg-gradient-to-r from-black via-transparent from-[5%] via-[20%] to-transparent"></div>
                <div className="absolute top-0 w-full h-full bg-gradient-to-l from-black via-transparent from-[5%] via-[20%] to-transparent"></div>
                <div className="absolute top-0 w-full h-full bg-gradient-to-b from-black via-transparent to-transparent from-[5%] via-[20%] to-95%"></div>
                <div className="absolute top-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent from-[5%] via-[20%] to-95%"></div>
            </div>
            <div className="md:w-1/2 w-full md:h-full h-1/2 flex flex-col text-white">
                <div className="w-full h-[10%] flex items-end justify-between xl:text-[16px] md:text-[9px] min-[800px]:text-[10px] text-[9px] min-[540px]:text-[12px] max-[550px]:px-2  lg:text-[13px] xl:px-5">
                    <span className="nohemiRegular uppercase tracking-wide">picture of the day</span>
                    <span className="nohemiBlack uppercase">{nasaApodData.title}</span>
                </div>
                <div className="w-full h-[80%] flex items-center justify-center px-8 lg:px-14">
                    <p className="text-justify nohemiRegular tracking-tight xl:text-[16px] lg:text-[14px] md:text-[12px] sm:text-[10px] min-[500px]:text-[10px] text-[10px] min-h-fit max-h-[350px] overflow-scroll">{nasaApodData.explanation}</p>
                </div>
            </div>
            <div className="w-fit h-fit absolute bottom-1 right-5 flex items-center gap-2">
                <div className="sm:w-[60px] sm:h-[60px] w-[40px] h-[40px] rounded-full">
                    <img className="w-full h-full rounded-full object-cover" src={nasa} alt="nasa Image"/>
                </div>
                <div className="border-2 border-white w-0 h-[40px] sm:h-[50px]"></div>
                <div className="flex flex-col text-white min-w-[500px]:text-[16px] text-[12px] nohemiBlack uppercase tracking-tight">
                    <span>national aeronautics and</span>
                    <span>space administration</span>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default SpacePage;
