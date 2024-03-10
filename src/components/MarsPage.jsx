import { useEffect, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { Model, Model2 } from "../assets/3d-models/ship/Scene";

import nasa from "../assets/images/nasa.webp";
import arrow from "../assets/icons/arrow.png";
import about4 from "../assets/images/about4.webp";
import mars from "../assets/videos/mars.mp4";
import distancemars from "../assets/images/distancemars.webp";
import galecrater from "../assets/images/galecrater.webp";
import marsBackground from "../assets/images/marsbackground.webp";

import astronaut from "../assets/videos/astronaut.mp4";

function MarsPage() {

    const baseApodUrl = 'https://api.nasa.gov/planetary/apod?api_key=';
    const basePhotoUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/latest_photos?api_key='
    const apiKey = 'SgxX6ChTJseeCpJdu8Wvr8orsddu2wFbhxIxYXFm';

    const [ nasaApodData, setNasaApodData ] = useState({});
    const [ marsPhotoData, setMarsPhotoData] = useState();

    useEffect(() => {
        fetch(baseApodUrl + apiKey)
        .then(response => response.json())
        .then (json => {
            setNasaApodData(json)
        })
    }, [])

    useEffect(() => {
        fetch(basePhotoUrl + apiKey)
        .then(response => response.json())
        .then(json => {
            setMarsPhotoData(json.latest_photos)
        })
    }, [])

  return (
    <div className="bg-black relative z-[10]">
      <div className="w-full h-[100svh] flex flex-col items-center justify-between pt-10 overflow-x-hidden workScaleDownTrigger">
         <div className="w-[90%] h-[70%] border-white border rounded-xl flex items-center justify-evenly overflow-hidden">
            <div className="w-[45%] h-[95%] relative">
                {nasaApodData.media_type === "video" ? 
                    <iframe src={nasaApodData.url} className="h-full w-full"  />
                    :
                    <img className='h-full w-full' src={nasaApodData.url} alt='Nasa Picture of the Day' />
                }
                <div className="absolute top-0 w-full h-full bg-gradient-to-r from-black via-transparent from-[5%] via-[20%] to-transparent"></div>
                <div className="absolute top-0 w-full h-full bg-gradient-to-l from-black via-transparent from-[5%] via-[20%] to-transparent"></div>
                <div className="absolute top-0 w-full h-full bg-gradient-to-b from-black via-transparent to-transparent from-[5%] via-[20%] to-95%"></div>
                <div className="absolute top-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent from-[5%] via-[20%] to-95%"></div>
            </div>
            <div className="w-[45%] h-[95%] flex flex-col">
                <div className="w-full h-[8%] flex items-center justify-between uppercase text-white">
                    <span className="nohemiLight">picture of the day</span>
                    <span className="nohemiExtraBold">{nasaApodData.title}</span>
                </div>
                <div className="w-full h-[75%] flex items-center justify-center px-8">
                    <p className="text-justify text-white nohemiRegular">{nasaApodData.explanation}</p>
                </div>
                <div className="w-full h-[17%] flex items-center justify-end">
                    <div className="w-fit h-fit flex items-center gap-2">
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
         </div>
         <div className="w-full h-[20%] flex items-center justify-between px-20">
            <span className="text-[15px] nohemiLight text-white uppercase">is there life on mars?</span>  
            <div className="w-fit h-full flex flex-row-reverse items-center justify-center gap-3">
                <div className="w-0 h-[45%] border-2 border-[#1db954]"></div>
                <div className="flex flex-col uppercase text-white nohemiExtraBold text-[18px] righttoleft">
                    <span>approaching mars</span>
                    <span className="nohemiRegular">gale crater</span>
                </div>
            </div> 
         </div>
      </div>
      <div className="w-full h-[100svh] flex-col flex justify-between relative overflow-x-hidden">
            <div className="w-full h-[200svh] absolute z-[-1] top-0 shipTrigger2"></div>    
            <div className="w-full h-full top-0 absolute modelPin2 overflow-y-visible z-[500] pointer-events-none">
                <Canvas>
                    <ambientLight intensity={1.25}/>
                        <Suspense fallback={null}>
                            <Model2 />
                        </Suspense>
                    <OrbitControls enableZoom={false} enableRotate={false}/>
                </Canvas>       
            </div> 
            <div className="w-full h-[55%] px-20 relative">
                <span className="text-[400px] uppercase nohemiBlack text-[#1db954]">mars</span>
                <span className="absolute bottom-20 right-60 rotate-[-15deg] font-ds text-[50px] text-white">the red planet</span>
            </div>
            <div className="w-full h-[30%] flex items-center justify-end gap-10 px-20 relative">
                <div className="w-[13%] h-[75%] rounded-xl overflow-hidden">
                    <img className="w-full h-full object-cover" alt="gale crater" src={galecrater}/>
                </div>
                <div className="w-[13%] h-[75%] rounded-xl overflow-hidden">
                    <video key={astronaut} className="w-full h-full object-cover" controls={false} autoPlay={true} loop={true} muted={true} playsInline={true} >
                        <source key={astronaut} src={astronaut} type="video/mp4"/>
                        Video Format Not Supported
                    </video>
                </div>
                <div className="w-[13%] h-[75%] rounded-xl overflow-hidden">
                    <img className="w-full h-full object-cover" alt="distance to mars" src={about4}/>
                </div>
            </div>
      </div>
      <div className="w-full h-[100svh] relative pt-[60px] px-20 flex flex-col overflow-x-hidden opacityTrigger">
        <div className="w-full h-fit flex items-center justify-between text-white uppercase">
            <span className="nohemiExtraBold text-[50px]">sadly, <span className="text-[#1db954]">life on mars</span> is only just a song.</span>
            <div className="flex items-center gap-2">
                <span className="nohemiRegular hover:text-[#1db954] transition-all duration-300 relative z-[500]">go back home</span>
                <img src={arrow} className="size-8 invert rotate-[-45deg]"/>
            </div>
        </div>
        <div className="">
            <span className="text-white uppercase text-[50px] nohemiExtraBold">but while you're here,</span>
        </div>
        <div className="w-fit h-[350px] -translate-y-[6%] -translate-x-2 relative z-[500] flex items-center pt-20">
            <span className="uppercase text-white text-[400px] nohemiBlack transition-all duration-300">hmu</span>
            <span className="absolute bottom-60 -right-28 rotate-[-15deg] font-ds text-[50px] text-[#1db954] transition-all duration-300">hit me up</span>
        </div>
        <div className="w-fit h-fit text-[30px] text-white nohemiRegular">
            <span>I am open to <span className="text-[#1db954]">Full Time</span> and <span className="text-[#1db954]">Freelance</span> roles.</span>
        </div>
        <a target="_blank" href="https://github.com/enosintech">
            <div className="absolute cursor-pointer group w-[80px] sm:w-[100px] lg:w-[300px] h-[40px] sm:h-[60px] sm:bottom-24 bottom-7 left-10 sm:left-20 border-[2.5px] overflow-hidden z-[600] bg-white border-white flex">
              <div className="lg:w-[18%] w-[50%] h-full bg-black flex items-center justify-center">
                <FontAwesomeIcon icon={faGithub} color="white" size="xl" className="relative z-[10000]"/>
              </div>
              <div className="w-[65%] lg:flex h-full hidden items-center justify-center pl-5 relative z-[10000]">  
                <span className="text-black lg:opacity-100 opacity-0 nohemiSemiBold uppercase">connect on github</span>
              </div>
              <div className="lg:w-[17%] w-[50%] h-full flex items-center justify-center lg:justify-start relative z-[10000]">
                <img src={arrow} className="size-8 rotate-[-45deg]"/>
              </div>
              <div className="absolute w-0 group-hover:lg:w-[82%] group-hover:w-[50%] transition-all duration-300 right-0 h-full bg-[#1db954]"></div>
            </div>
          </a>
        <div className="absolute bottom-0 w-full h-[30%] bg-green-500 left-0 z-[-1]">
            <div className="w-full h-full bg-gradient-to-b from-black via-transparent to-transparent absolute top-0"></div>
            <img className="w-full h-full object-cover object-bottom" alt="marsBackground" src={marsBackground}/>
        </div>
        <div className="absolute bottom-10 left-20 text-white uppercase nohemiBlack">© {new Date().getFullYear()} enosintech</div>
      </div>
    </div>
  )
}

export default MarsPage
