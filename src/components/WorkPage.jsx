import MobileWorkComponent from "./MobileWorkComponent";
import WebsiteWorkComponent from "./WebsiteWorkComponent";

import about3 from "../assets/images/about3.webp";
import spaceImage1 from "../assets/images/spaceImage1.webp";
import arrow from "../assets/icons/arrow.png";

import astronautInSpace from "../assets/videos/astronautinspace.mp4";

function WorkPage() {
  return (
    <>
      <div className="relative flex flex-col">
        <div className="w-full h-[100svh] space overflow-y-hidden absolute top-20 z-[-1]">
          <div className="particle"></div> 
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
        <div className="w-full h-[100svh] flex justify-end">
          <div className="w-1/2 h-full flex items-center">
            <div className="w-full h-[60%] flex flex-col">
              <div className="w-full h-[80%] flex items-center justify-evenly">
                <div className="w-[40%] h-[85%] bg-white rounded-2xl overflow-hidden">
                  <video key={astronautInSpace} autoPlay={true} loop={true} muted={true} playsInline={true} className="w-full
                   h-full object-cover">
                    <source key={astronautInSpace} src={astronautInSpace} type="video/mp4"/>
                  </video>
                </div>
                <div className="w-[40%] h-[85%] bg-white rounded-2xl overflow-hidden">
                  <img className="w-full h-full object-cover" alt="deep in space image" src={about3}/>
                </div>
              </div>
              <div className="w-full h-[20%] flex items-center justify-between px-[70px]">
                <span className="text-[15px] nohemiLight text-white uppercase">view my work here</span>
                <div className="w-fit h-full flex flex-row-reverse items-center justify-center gap-2">
                  <div className="w-0 h-[75%] border-2 border-[#1db954]"></div>
                  <div className="flex flex-col uppercase text-white nohemiBold text-[23px] righttoleft">
                    <span>deep in</span>
                    <span>space</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="backgroundColorChange">
          <div className="w-full h-[100svh] flex items-center justify-center">
            <div className="w-fit h-fit flex flex-col items-center relative">
              <span className="nohemiBlack z-10 text-gray-400 text-[14px] sm:text-[20px] tracking-wider uppercase">upcoming</span>
              <div className="relative z-10 text-white text-[30px] sm:text-[55px] tracking-tighter uppercase">
                  <span>s</span>
                  <span className="italic">e</span>
                  <span>l</span>
                  <span className="italic">e</span>
                  <span>ct</span>
                  <span> proj</span>
                  <span className="italic">e</span>
                  <span>cts</span>
              </div>
            </div>
          </div>
          <div className="w-full h-[100svh] flex items-center justify-center purpleTrigger">
            <WebsiteWorkComponent />
          </div> 
          <div className="w-full h-[100svh] flex items-center justify-center greenTrigger">
            <MobileWorkComponent />
          </div>
          <div className="w-full h-[100svh] flex items-center justify-center redTrigger">
            <WebsiteWorkComponent />
          </div>
          <div className="w-full h-[100svh] flex items-center justify-center greenerTrigger">
            <WebsiteWorkComponent />
          </div>
          <div className="w-full h-[500svh] relative workYieldTrigger overflow-x-hidden">
            <div className="w-full h-1/5 workPin flex items-center blackTrigger">
              <div className="w-[425vw] min-w-[425vw] h-[80%] workYieldLeft flex relative">
                <div className="w-[20%] min-w-[20%] h-full flex items-center justify-center">
                  <div className="w-[85%] h-[85%] rounded-md bg-white">

                  </div>
                </div>
                <div className="w-[20%] min-w-[20%] h-full flex items-center">
                  <div className="w-[85%] h-[85%] rounded-md bg-white">

                  </div>
                </div>
                <div className="w-[20%] min-w-[20%] h-full flex items-center">
                  <div className="w-[85%] h-[85%] rounded-md bg-white">

                  </div>
                </div>
                <div className="w-[20%] min-w-[20%] h-full flex items-center">
                  <div className="w-[85%] h-[85%] rounded-md bg-white">

                  </div>
                </div>
                <div className="w-[20%] min-w-[20%] h-full flex items-center">
                  <div className="w-[85%] h-[85%] rounded-md bg-white">

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[300svh] flex flex-col items-end relative">
          <div className="w-full h-full space overflow-y-hidden absolute top-0 z-[-1]">
            <div className="particle"></div> 
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
          </div>
          <div className="w-1/2 h-1/3 absolute top-0 left-0 whyPin flex items-center justify-center">
            <div className="w-[50%] h-[40%] flex justify-center gap-5">
              <div className="w-0 h-full border-2 border-[#1db954]"></div>
              <div className="flex flex-col w-[80%] h-full uppercase slussenBlackExp text-white text-[80px] -translate-y-3">
                <span>why</span>
                <span>hire</span>
                <span className="text-[#1db954]">enos</span>
                <div className="flex gap-2 items-center text-center w-full">
                  <span className="text-white nohemiLight uppercase text-[13px]">find all my work on github</span>
                  <img src={arrow} className="size-5 invert rotate-[-45deg]"/>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2 h-1/3 flex items-center justify-center">
            <div className="w-[50%] h-[40%] flex justify-center bg-yellow-500">
              
            </div>
          </div>
          <div className="w-1/2 h-1/3 flex items-center justify-center">
            <div className="w-[50%] h-[40%] flex justify-center bg-purple-500">
              
            </div>
          </div>
          <div className="w-1/2 h-1/3 flex items-center justify-center">
            <div className="w-[50%] h-[40%] flex justify-center bg-red-500">
              
            </div>
          </div>
        </div>
        <div className="w-full h-[500svh] reviewTrigger relative z-[9]">
          <div className="w-full h-1/5 absolute top-0 reviewPin workScaleDown flex">
            <div className="w-1/2 h-full flex flex-col pt-[60px] translate-x-[8%]">
              <div className="w-full h-[80%] flex flex-col">
                <div className="w-full h-1/3 flex items-center justify-end gap-5 slussenBlackExp text-[#1db954] text-[100px] uppercase">
                  <span>the</span>
                  <span>voices</span>
                </div>
                <div className="w-full h-1/3 flex items-center justify-end gap-5 slussenBlackExp text-[#1db954] text-[100px] uppercase">
                  <span>of</span>
                  <span>other</span>
                </div>
                <div className="w-full h-1/3 flex items-center justify-end gap-5 slussenBlackExp text-[#1db954] text-[100px] uppercase">
                  <span>people</span>
                </div>
              </div>
              <div className="w-full h-[20%] text-right">
                <span className="text-white uppercase nohemiSemiBold">what do my clients say about me?</span>
              </div>
            </div>
            <div className="w-1/2 h-full flex items-center justify-center">
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
