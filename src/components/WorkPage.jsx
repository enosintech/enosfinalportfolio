import { Suspense } from "react";
import { Canvas, extend } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from 'three';

import { Model } from "../assets/3d-models/space_shuttle/Scene";
import SpaceDust from "./SpaceDust";

import MobileWorkComponent from "./MobileWorkComponent";
import WebsiteWorkComponent from "./WebsiteWorkComponent";
import RightWorkComponent from "./RightWorkComponent";
import LeftWorkComponent from "./LeftWorkComponent";

import about1 from "../assets/images/about1.webp";
import reactjs from "../assets/images/reactjs.webp";
import javascript from "../assets/images/javascript.webp";
import tailwind from "../assets/images/tailwind.webp";
import node from "../assets/images/node.webp";
import python from "../assets/images/python.webp";
import figma from "../assets/images/figma.webp";
import spaceImage1 from "../assets/images/spaceImage1.webp";
import arrow from "../assets/icons/arrow.png";
import workPic from "../assets/images/workPic.webp";
import workPrompt from '../assets/images/workPrompt.webp';
import workBackground from "../assets/images/workBackground.webp";

import astronautInSpace from "../assets/videos/astronautinspace.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function WorkPage() {

  return (
    <>
      <div className="relative flex flex-col">
        <div className="backgroundColorChange">
          <div className="w-full h-[100svh] relative flex items-center justify-end overflow-y-visible">
            <div className="w-full h-[700svh] absolute z-[-1] top-0 shipTrigger"></div>
            <div className="w-full h-full top-0 absolute modelPin overflow-y-visible z-[500] pointer-events-none">
              <Canvas>
                  <ambientLight intensity={4}/>
                      <Suspense fallback={null}>
                          <Model />
                      </Suspense>
                  <OrbitControls enableZoom={false} enableRotate={false}/>
              </Canvas>       
            </div>
            <div className="w-[85%] h-full flex flex-col workTextTrigger">
              <div className="uppercase max-h-[280px] slussenBlack text-white flex items-center slideInText">
                  <span className="text-[300px]">selected</span>
              </div>
              <div className="flex items-center appearText opacity-0 justify-end max-h-[240px]">
                  <div className="w-[300px] h-0 border-4 border-white"></div>
                  <div className="uppercase font-thin italic text-white"><span className="text-[200px]">works</span></div>
              </div>
              <div className="w-full h-[20%] appearText opacity-0 flex items-center justify-end px-10">
                  <p className="w-[400px] font-bold text-[18px] text-justify text-white uppercase">I have helped build both impactful and fun projects. Here's a curated list of some significant ones.</p>
              </div>
            </div>          
          </div>
          <div className="relative">
            <div className="w-full h-full absolute top-0 left-0 z-[-1]">
              <Canvas
                pixelRatio={window.devicePixelRatio}
                camera={{ fov: 100, position: [0, 0, 95] }}
                onCreated={({ gl, size, camera }) => {
                  if (size.width < 600) {
                    camera.position.z = 110;
                  }
                  gl.setClearColor(new THREE.Color('#000000'));
                }}>
                <directionalLight position={[0, 5, 0]} intensity={2}/>
                <SpaceDust count={1000}/>
              </Canvas>
            </div>
            <div className="w-full h-[100svh] flex justify-end">  
              <div className="w-1/2 h-full flex items-start justify-center parallaxTrigger">
                <RightWorkComponent animationClass={"parallax"} ballAnimationClass={"ballParallax"}/>
              </div>
            </div>
            <div className="w-full h-[100svh] flex justify-start">
              <div className="w-1/2 h-full flex items-start justify-center parallaxTrigger4">
                <LeftWorkComponent animationClass={"parallax4"} ballAnimationClass={"ballParallax4"}/>
              </div>
            </div>
            <div className="w-full h-[100svh] flex justify-end">
              <div className="w-1/2 h-full flex items-start justify-center parallaxTrigger2">
                <RightWorkComponent animationClass={"parallax2"} ballAnimationClass={"ballParallax2"}/>
              </div>
            </div>
            <div className="w-full h-[100svh] flex justify-start">
              <div className="w-1/2 h-full flex items-start justify-center parallaxTrigger5">
                <LeftWorkComponent animationClass={"parallax5"} ballAnimationClass={"ballParallax5"}/>
              </div>
            </div>
            <div className="w-full h-[100svh] flex justify-end">
              <div className="w-1/2 h-full flex items-start justify-center parallaxTrigger3">
                <RightWorkComponent animationClass={"parallax3"} ballAnimationClass={"ballParallax3"}/>
              </div>
            </div>
            <div className="w-full h-[100svh] flex justify-start">
              <div className="w-1/2 h-full flex items-start justify-center parallaxTrigger6">
                <LeftWorkComponent animationClass={"parallax6"} ballAnimationClass={"ballParallax6"}/>
              </div>
              <div className="w-1/2 h-full flex flex-col items-center justify-center gap-2">
                <FontAwesomeIcon icon={faGithub} size="7x" color="white" />
                <div className="flex items-center gap-2 text-white">
                  <span className="uppercase nohemiBlack">view more work on github</span>
                  <img src={arrow} className="invert size-10 -rotate-45"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[100svh] flex">
          <div className="w-[30%] h-full flex items-start justify-end pt-20">
            <div className="w-[90%] h-[75%] flex flex-col">
              <span className="w-full h-[10%] text-[#1db954] flex items-center px-4 nohemiExtraBold uppercase text-[30px]">
                tools & services
              </span>
              <div className="w-full h-[90%] border-white border rounded-lg flex flex-col">
                <div className="w-full h-[35%] flex items-start pt-10 px-5">
                  <p className="w-[350px] h-fit text-justify nohemiSemiBold text-white uppercase text-[12px] tracking-wide">
                    As a full stack developer with a focus on frontend, I am able to not only design a good product, but implement and ship into the world as well. below are my key services on offer.
                  </p>
                </div>
                <div className="w-full h-[65%] flex flex-col px-4 text-[#1db954] uppercase nohemiBlack">
                  {services.map((service, index) => (
                    <div key={service.id} index={index} className="w-full h-[14.286%] border-t-2 border-white flex items-center px-2">
                      <span>{service.text1}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>        
          </div>
          <div className="w-[70%] h-full flex items-center justify-center scaleAppearTrigger">
            <div className="h-[85%] w-[70%] flex flex-col">
              <span className="w-full h-[10%] flex items-center justify-center nohemiLight opacity-70 text-white">Bento Box size is relative to my proficiency</span>
              <div className="w-full h-[90%] flex">
                <div className="w-1/3 h-full flex flex-col">
                  <div className="w-full h-1/2 flex items-end justify-end pb-1">
                    <div className="w-[75%] h-[70%] rounded-[20px] border-white border-2 relative group hover:bg-white transition-all duration-150 scaleAppear">
                      <img className="object-contain w-[45px] h-[45px] absolute top-3 left-2" alt="React Icon" src={tailwind}/>
                      <span className="text-[17px] nohemiRegular absolute text-white bottom-2 left-4 group-hover:text-black transition-all duration-150">Tailwind CSS</span> 
                    </div>
                  </div>
                  <div className="w-full h-1/2 flex items-start justify-end pt-1">
                    <div className="w-[65%] h-[60%] rounded-[20px] border-white border-2 relative group hover:bg-white transition-all duration-150 scaleAppear">
                      <img className="object-contain w-[45px] h-[45px] absolute top-3 left-2" alt="React Icon" src={node}/>
                      <span className="text-[17px] nohemiRegular absolute text-white bottom-2 left-4 group-hover:text-black transition-all duration-150">NodeJS</span> 
                    </div>
                  </div>
                </div>
                <div className="w-1/3 h-full flex flex-col">
                  <div className="w-full h-1/2 flex items-end justify-center pb-1">
                    <div className="w-[95%] h-[85%] rounded-[20px] border-white border-2 relative group hover:bg-white transition-all duration-150 scaleAppear">
                      <img className="object-contain w-[50px] h-[50px] absolute top-3 left-2" alt="React Icon" src={reactjs}/>
                      <span className="text-[18px] nohemiRegular absolute text-white bottom-2 left-4 group-hover:text-black transition-all duration-150">React / React Native</span>    
                    </div>
                  </div>
                  <div className="w-full h-1/2 flex items-start justify-center pt-1">
                    <div className="w-[95%] h-[70%] rounded-[20px] border-white border-2 relative group hover:bg-white transition-all duration-150 scaleAppear">
                      <img className="object-contain w-[50px] h-[50px] absolute top-3 left-2" alt="Javascript Icon" src={javascript}/>
                      <span className="text-[18px] nohemiRegular absolute text-white bottom-2 left-4 group-hover:text-black transition-all duration-150">Javascript</span> 
                    </div>
                  </div>
                </div>
                <div className="w-1/3 h-full flex flex-col">
                  <div className="w-full h-1/2 flex items-end justify-start pb-1">
                    <div className="w-[50%] h-[45%] rounded-[20px] border-white border-2 relative group hover:bg-white transition-all duration-150 scaleAppear">
                      <img className="object-contain w-[40px] h-[40px] absolute top-3 left-2" alt="React Icon" src={figma}/>
                      <span className="text-[16px] nohemiRegular absolute text-white bottom-2 left-4 group-hover:text-black transition-all duration-150">Figma</span> 
                    </div>
                  </div>
                  <div className="w-full h-1/2 flex items-start justify-start pt-1">
                    <div className="w-[60%] h-[55%] rounded-[20px] border-white border-2 relative group hover:bg-white transition-all duration-150 scaleAppear">
                    <img className="object-contain w-[40px] h-[40px] absolute top-3 left-2" alt="React Icon" src={python}/>
                      <span className="text-[16px] nohemiRegular absolute text-white bottom-2 left-4 group-hover:text-black transition-all duration-150">Python</span> 
                    </div>
                  </div>
                </div>
              </div>
            </div>            
          </div>        
        </div>
        <div className="w-full h-[500svh] reviewTrigger relative z-[9]">
          <div className="w-full h-1/5 absolute top-0 reviewPin workScaleDown flex">
            <div className="w-1/2 h-full flex items-center justify-center bg-stars">
              <div className="w-fit h-fit flex flex-col items-center justify-center gap-3 scale-[1.8]">
                <div className="w-[150px] h-[200px] pathclip relative">
                  <img className="w-full h-full object-cover" alt="lost in space" src={about1}/>
                </div>
                <span className="nohemiBold text-white uppercase text-[10px]">lost in space</span>
              </div>
            </div>
            <div className="w-1/2 h-full flex items-center justify-center relative">
              <span className="uppercase slussenBlackExp text-[#1db954] absolute -left-20 text-[30px] -rotate-90">testimonials</span>
              <div className="w-[50%] h-[60%] relative">
                <div className="absolute w-full h-full bg-green-500 rounded-xl -top-[10%] -left-[10%] stagger"></div>
                <div className="absolute top-0 w-full h-full bg-yellow-500 rounded-xl stagger"></div>
                <div className="absolute w-full h-full bg-purple-500 rounded-xl top-[10%] left-[10%] stagger"></div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </>
  )
}

export default WorkPage;

const services = [
  {
      id:1,
      text1: "Frontend Design",
  },
  {
      id:2,
      text1: "Backend Design",
  },
  {
      id:3,
      text1: "UX/UI Design",
  },
  {
      id:4,
      text1: "Web & Mobile",
  },
  {
      id:5,
      text1: "Quality Assurance",
  },
  {
      id: 6,
      text1: "Documentation",
  },
  {
      id: 7,
      text1: "Automation",
  },
]
