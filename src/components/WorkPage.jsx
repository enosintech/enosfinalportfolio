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

import about3 from "../assets/images/about3.webp";
import spaceImage1 from "../assets/images/spaceImage1.webp";
import arrow from "../assets/icons/arrow.png";
import workPic from "../assets/images/workPic.webp";
import workPrompt from '../assets/images/workPrompt.webp';
import workBackground from "../assets/images/workBackground.webp";

import astronautInSpace from "../assets/videos/astronautinspace.mp4";

function WorkPage() {

  return (
    <>
      <div className="relative flex flex-col">
        <div className="backgroundColorChange">
          <div className="w-full h-[100svh] relative flex items-center justify-end overflow-y-visible">
            <div className="w-full h-[300svh] absolute z-[-1] top-0 shipTrigger"></div>
            <div className="w-full h-full top-0 absolute modelPin overflow-y-visible z-[500] pointer-events-none">
              <Canvas>
                  <ambientLight intensity={4}/>
                      <Suspense fallback={null}>
                          <Model />
                      </Suspense>
                  <OrbitControls enableZoom={false} enableRotate={true}/>
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
            </div>
          </div>
        </div>
        <div className="w-full h-[500svh] reviewTrigger relative z-[9]">
          <div className="w-full h-1/5 absolute top-0 reviewPin workScaleDown flex">
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-[25%] h-[60%] relative">
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
