import MobileWorkComponent from "./MobileWorkComponent";
import WebsiteWorkComponent from "./WebsiteWorkComponent";

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
        <div className="">
          <div className="w-full h-[100svh] flex items-center justify-center">
            <div className="w-fit h-fit flex flex-col items-center relative">
              <span className="nohemiBlack z-10 text-gray-400 text-[14px] sm:text-[20px] tracking-wider uppercase">upcoming</span>
              <div className="relative z-10 text-white text-[30px] sm:text-[55px] tracking-tighter uppercase">
                  <span>s</span>
                  <span className="italic">e</span>
                  <span>l</span>
                  <span className="italic">e</span>
                  <span>ct </span>
                  <span>proj</span>
                  <span className="italic">e</span>
                  <span>cts</span>
              </div>
            </div>
          </div>
          <div className="w-full h-[700svh] relative workYieldTrigger">
            <div className="w-full h-[100svh] workPin absolute top-0 flex justify-center items-end">
              <div className="h-[90%] rounded-t-[50px] relative widthGrow widthShrink overflow-hidden">
                <img className="absolute top-0 w-full h-full object-cover z-[-1]" alt="work Background" src={workBackground}/>
                <div className="w-[675vw] h-full flex workYield backdrop-blur-xl vanish"> 
                  <div className="w-[11.11%] min-w-[11.11%] h-full flex flex-col text-white pt-20 px-20 relative">
                    <span className="uppercase nohemiExtraBold text-[22px]">my work</span>
                    <div className="flex flex-col nohemiThin text-[40px] mt-5">
                      <span>1. MakeupbyRam</span>
                      <span>2. BantuRide</span>
                      <span>3. ZedCart</span>
                      <span>4. The Evolution of Cars</span>
                      <span>5. Meal Rocket</span>
                      <span>6. Tesla Clone</span>
                      <span>7. For Chisanga</span>
                      <span>8. Spotify Clone</span>
                    </div>
                    <div className="absolute top-40 right-20 w-[400px]">
                      <p className="uppercase text-[13px] righttoleft nohemiRegular">listed here are some professional as well as personal projects I have carried out. My professional projects cannot be viewed on github as they are private repositories, my learning projects however, can</p>
                    </div>
                    <div className="absolute bottom-14 right-20 w-[400px] h-[400px] rounded-2xl overflow-hidden">
                      <img src={workPrompt} alt="my work" className="w-full h-full object-cover"/>
                    </div>
                  </div>
                  <div className="w-[11.11%] min-w-[11.11%] h-full flex items-end justify-center relative">
                    <div className="w-[80%] h-[10%] absolute top-0 flex items-center justify-between text-white uppercase px-5">
                      <span className="nohemiLight">1/8</span>
                      <span className="nohemiBlack">professional project</span>
                    </div>
                    <WebsiteWorkComponent />
                  </div>
                  <div className="w-[11.11%] min-w-[11.11%] h-full flex items-end justify-center relative">
                    <div className="w-[80%] h-[10%] absolute top-0 flex items-center justify-between text-white uppercase px-5">
                      <span className="nohemiLight">1/8</span>
                      <span className="nohemiBlack">professional project</span>
                    </div>
                    <WebsiteWorkComponent />
                  </div>
                  <div className="w-[11.11%] min-w-[11.11%] h-full flex items-end justify-center relative">
                    <div className="w-[80%] h-[10%] absolute top-0 flex items-center justify-between text-white uppercase px-5">
                      <span className="nohemiLight">1/8</span>
                      <span className="nohemiBlack">professional project</span>
                    </div>
                    <WebsiteWorkComponent />
                  </div>
                  <div className="w-[11.11%] min-w-[11.11%] h-full flex items-end justify-center relative">
                    <div className="w-[80%] h-[10%] absolute top-0 flex items-center justify-between text-white uppercase px-5">
                      <span className="nohemiLight">1/8</span>
                      <span className="nohemiBlack">professional project</span>
                    </div>
                    <WebsiteWorkComponent />
                  </div>
                  <div className="w-[11.11%] min-w-[11.11%] h-full flex items-end justify-center relative">
                    <div className="w-[80%] h-[10%] absolute top-0 flex items-center justify-between text-white uppercase px-5">
                      <span className="nohemiLight">1/8</span>
                      <span className="nohemiBlack">professional project</span>
                    </div>
                    <WebsiteWorkComponent />
                  </div>
                  <div className="w-[11.11%] min-w-[11.11%] h-full flex items-end justify-center relative">
                    <div className="w-[80%] h-[10%] absolute top-0 flex items-center justify-between text-white uppercase px-5">
                      <span className="nohemiLight">1/8</span>
                      <span className="nohemiBlack">professional project</span>
                    </div>
                    <WebsiteWorkComponent />
                  </div>
                  <div className="w-[11.11%] min-w-[11.11%] h-full flex items-end justify-center relative">
                    <div className="w-[80%] h-[10%] absolute top-0 flex items-center justify-between text-white uppercase px-5">
                      <span className="nohemiLight">1/8</span>
                      <span className="nohemiBlack">professional project</span>
                    </div>
                    <WebsiteWorkComponent />
                  </div>
                  <div className="w-[11.11%] min-w-[11.11%] h-full flex items-end justify-center relative">
                    <div className="w-[80%] h-[10%] absolute top-0 flex items-center justify-between text-white uppercase px-5">
                      <span className="nohemiLight">1/8</span>
                      <span className="nohemiBlack">professional project</span>
                    </div>
                    <WebsiteWorkComponent />
                  </div>
                </div>
              </div>
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
