import { useContext, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";

import { CursorContext } from "../utils/CursorContextProvider.jsx";
import useMousePosition from "../hooks/useMousePosition.js";

import landingPageVideo from "../assets/videos/LandingPageVideo.mp4";

import arrow from "../assets/icons/arrow.png";

function LandingPage(props) {

    const { X, Y } = useMousePosition();
    const [ cursor, setCursor ] = useContext(CursorContext);

    const toggleCursorHover = useCallback(() => {
      setCursor(({hover}) => ({ hover: !hover }))
    });

    const toggleCursorActive = useCallback(() => {
      setCursor(({active}) => ({ active: !active }))
    });

  return (
    <>
      <div className="w-full h-[200svh] relative flex flex-col overflow-x-hidden">
        <div className={`cursor sm:flex hidden fixed left-0 rounded-full top-0 ${cursor.hover ? "w-[15px] h-[15px] bg-white" : cursor.active ? "w-[8px] h-[8px] bg-white" : "border-2 border-[#1db954] w-[40px] h-[40px]"} z-[9999] transition-[width,height] items-center justify-center`} style={{top: Y, left: X}}>
          <div className="w-[8px] h-[8px] rounded-full bg-[#1db954]"></div>
        </div>
        <div className={`w-[100vw] sm:text-[18px] text-[14px] h-[40px] z-[700] fixed top-[94dvh] flex items-center justify-end px-3 sm:px-8 opacity-0 contactAppear`}>
          <div className="flex items-center gap-1 contactVanish group">
            <FontAwesomeIcon icon={faCertificate} className="animate-spin text-[#1db954] group-hover:text-white transition-all"/>
            <span className="text-white cursor-pointer select-none uppercase nohemiLight tracking-tight group-hover:text-[#1db954] transition-all" >open to work</span>
          </div>
        </div>
        <div className="fixed z-[100] top-5 right-10 w-fit h-fit flex items-center justify-center gap-10">
          <span className="nohemiRegular text-white">Selected Works</span>  
          <div className="text-white nohemiRegular p-5 bg-[#1db954] rounded-full w-fit h-fit">Let's Talk.</div>
        </div>
        <div className="rounded-full opacityRotate w-[120px] h-[120px] z-[20000] bg-gray-700 flex items-center justify-center fixed bottom-10 left-28">
          <img src={arrow} className="invert rotate-[90deg]"/>
        </div>
        <div className="absolute w-[350px] flex flex-col h-[120px] top-28 left-0 right-0 mx-auto uppercase nohemiBold z-[13]">
          <div className="bg-white rounded-full w-fit h-fit p-3 absolute left-0 top-0">
            front end developer
          </div>
          <div className="w-fit h-fit p-3 bg-[#1db954] rounded-full absolute top-0 bottom-0 my-auto -right-1">
            ux/ui designer
          </div>
          <div className="w-fit h-fit p-3 border-white border-2 rounded-full text-white bottom-0 absolute left-12">
            creative coder
          </div>
          <span className="text-white absolute bottom-5 right-20 text-[100px] max-h-[30px]">*</span>
        </div>
        <div className="w-full h-[100svh] flex flex-col gap-10 items-center justify-center relative scalePin z-[12]">
            <div className="absolute z-[10] uppercase text-[400px] left-20 w-fit min-w-fit slussenBlackExp text-white textlefter">enosintech</div>
            <div className="imageGrow flex items-center justify-center overflow-hidden">
              <video key={landingPageVideo} autoPlay={true} loop={true} muted={true} playsInline={true} className="w-full h-full object-cover">
                <source src={landingPageVideo} type="video/mp4"/>
                Video Format Not Supported
              </video>
            </div>
        </div>
        <div className="w-full h-[100svh] flex flex-col spacer relative makeWideTrigger">
          
        </div>
      </div>
    </>
  )
}

export default LandingPage;