import { useEffect, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import nasa from "../assets/images/nasa.webp";

const Sphere = () => {
    return (
        <>
            <pointLight intensity={10000} position={[0, 100, 30]} color={0xffffff}/>
            <mesh position={[0, 3, 0]}>
                <sphereGeometry args={[8, 64, 64]} />
                <meshStandardMaterial color={"#ad6242"} roughness={0.4} />
            </mesh>
        </>
    );
};

function MarsPage() {
    
    const baseApodUrl = 'https://api.nasa.gov/planetary/apod?api_key=';
    const apiKey = 'SgxX6ChTJseeCpJdu8Wvr8orsddu2wFbhxIxYXFm';

    const [ nasaApodData, setNasaApodData ] = useState({});

    useEffect(() => {
        fetch(baseApodUrl + apiKey)
        .then(response => response.json())
        .then (json => {
            setNasaApodData(json)
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
      <div className="w-full h-[100svh] flex-col flex items-center justify-center relative overflow-y-visible overflow-x-hidden">
        <h1 className="text-white nohemiBlack text-[450px] translate-y-32">MARS</h1>
        <div className="w-full h-[200px] flex items-center justify-center gap-5">
            <div className="w-[150px] h-[150px] rounded-[16px] bg-white"></div>
            <div className="w-[150px] h-[150px] rounded-[16px] bg-white"></div>
            <div className="w-[150px] h-[150px] rounded-[16px] bg-white"></div>
        </div>
        <div className="w-full h-full absolute top-0 left-0">
            <Canvas
                camera={{position: [0, 0, 20]}}
            >   
                <Suspense fallback={null}>
                    <Sphere />
                </Suspense>
                <OrbitControls enableZoom={false} enablePan={false} autoRotate={true} autoRotateSpeed={3}/>
            </Canvas>
        </div>          
      </div>
      <div className="w-full h-[100svh] relative pt-[60px] px-20 flex items-center justify-center overflow-x-hidden opacityTrigger">
        <div className="w-[93%] h-[92%] flex">
            <div className="w-1/2 h-full flex flex-col">
                <h1 className="font-black text-white text-[40px] text-justify">Sadly, <span className="text-[#1db954]">Life on Mars</span> is only just a song. But while you're here, let's bring your idea to life!</h1>
                <h2 className="agRegular text-white text-[30px] mt-5">I am currently open to <span className="text-[#1db954]">Full time</span> and <span className="text-[#1db954]">Freelance</span> roles</h2>
                <div className="flex-1 items-center">
                    <div className="w-[95%] h-[90%] rounded-[20px] px-5">
                        <form className="w-full h-full flex flex-col justify-evenly items-center relative">
                            <div className="w-full h-[20%] flex justify-center gap-5 ">
                                <input type="text" placeholder="Your Name" className="bg-black px-2 agRegular text-white text-[20px] outline-none w-1/2 border-b-2 border-[#1db954]"/>
                                <input type="email" placeholder="Your Email" className="bg-black px-2 agRegular text-white text-[20px] outline-none w-1/2 border-b-2 border-[#1db954]"/>
                            </div>
                            <textarea placeholder="Your Message" className="w-full h-[55%] border-b-2 py-1 px-2 border-[#1db954] bg-black outline-none resize-none text-white text-[20px] agRegular">

                            </textarea>
                            <div className="w-full flex justify-end">
                                <input type="submit" className=" w-[200px] p-4 h-fit rounded-full bg-[#1db954] text-white agBlack" value="Send Message"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="w-1/2 h-full flex flex-col px-5 py-5 items-center">
                <div className="w-[90%] flex justify-end px-1">
                    <span className="text-white uppercase agBlack">futher enquiries or collaboration</span>
                </div>
                <div className="w-[90%] h-[30%] rounded-[16px] border-white border-2 flex items-center justify-center">
                    <a className="text-[40px] nohemiLight text-white">enos.nsambaj@gmail.com</a>
                </div>
                <div className="w-[90%] h-[40%] flex flex-col gap-1 p-3 items-end uppercase text-white text-[20px]">
                    <span className="agBlack">socials</span>
                    <span className="agRegular"><a>github</a></span>
                    <span className="agRegular"><a>linkedin</a></span>
                    <span className="agRegular"><a>medium</a></span>
                    <span className="agRegular"><a>twitter</a></span>
                    <span className="agRegular"><a>instagram</a></span>
                </div>
                <div className="w-[90%] h-[20%] flex flex-col items-end uppercase text-white text-[20px]">
                    <span className="agBlack">local time</span>
                    <span className="agRegular">2 : 28 : 36 PM GMT +2</span>
                </div>
            </div>
        </div>
      </div>
      <div className="w-full h-[40svh] rotateTrigger flex justify-end">
        <div className="h-full w-[40%] flex flex-col justify-between py-5 px-48">
            <div className="flex flex-col items-end text-white uppercase text-[20px]">
                <span className="agBlack">navigation</span>
                <span className="agRegular">Home</span>
                <span className="agRegular">About</span>
                <span className="agRegular">Work</span>
                <span className="agRegular">Contact</span>
            </div>
            <div className="flex flex-col items-end text-[30px] text-white nohemiBlack">
                <span>© {new Date().getFullYear()}</span>
                <span>ENOSINTECH</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default MarsPage
