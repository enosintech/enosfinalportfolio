import about4 from "../assets/images/about4.webp";
import mars from "../assets/videos/mars.mp4";
import distancemars from "../assets/images/distancemars.webp";
import galecrater from "../assets/images/galecrater.webp";
import marsBackground from "../assets/images/marsbackground.webp";

import astronaut from "../assets/videos/astronaut.mp4";

function MarsPage() {
  return (
    <>
      <div className="w-full h-[100dvh] bg-black flex items-center justify-center overflow-x-hidden">
          <div className="w-fit h-fit flex flex-col items-center relative">
              <span className="nohemiExtraBold z-10 text-gray-400 text-[14px] sm:text-[20px] tracking-wider uppercase">upcoming</span>
              <div className="nohemilight relative z-10 text-white text-[30px] sm:text-[55px] tracking-tighter uppercase">
                  <span>th</span>
                  <span className="italic">e </span>
                  <span>r</span>
                  <span className="italic">e</span>
                  <span>d plan</span>
                  <span className="italic">e</span>
                  <span>t</span>
              </div>
              <div className="absolute z-[3] grainy red left-14 top-8  rounded-full w-[150px] h-[150px] bg-red-500"></div>
              <div className="absolute z-[2] grainy blue bottom-5 left-0 right-0 mx-auto rounded-full w-[150px] h-[150px] bg-blue-500"></div>
              <div className="absolute z-[1] grainy purple right-20 top-2 rounded-full w-[150px] h-[150px] bg-purple-500"></div>
              <svg className="absolute">
              <filter id="grainy">
                  <feTurbulence 
                  type="turbulence"
                  baseFrequency="0.8"
                  />
              </filter>
              <mask id="grainyMask">
                  <circle r="100%" fill="red" className="grainyMask"/>
              </mask>
              </svg>
          </div>
      </div>
      <div className="w-full h-[100dvh] relative overflow-x-hidden">
          <video key={mars} className="w-full h-full object-cover" loop muted autoPlay>
              <source src={mars} type="video/mp4"/>
              Video Format Not Supported
          </video>
          <div className="w-full h-full top-0 absolute bg-gradient-to-b from-black via-transparent to-black from-[1%] to-[99.5%]"></div>
          <div className="w-fit h-fit absolute md:bottom-40 bottom-28 left-10 md:left-20 z-[2] flex items-center justify-center gap-3">
              <img className="md:w-[70px] w-[50px] md:h-[90px] h-[65px] object-cover rounded-xl" src={about4} alt="deepinspace"/>
              <div className="w-0 h-[60px] md:h-[92px] border-white border-2"></div>
              <div className="flex flex-col w-fit h-fit text-white uppercase nohemiExtraBold">
                  <span className="text-[15px] md:text-[25px]">approaching mars</span>
                  <span className="nohemiLight text-[10px] md:text-[15px]">gale crater</span>
              </div>
          </div>
      </div>
      <div className="w-full h-[20dvh] overflow-x-hidden bg-black"></div>
      <div className="w-full h-[100dvh] min-h-[100dvh] relative flex flex-col overflow-x-hidden">
        <div className="w-full h-1/2 relative flex items-center justify-center gap-5 md:gap-20">
            <div className="xl:w-[18%] lg:w-[25%] md:w-[23%] sm:w-[25%] w-[23%] h-[50%] sm:h-[65%] md:h-[75%] lg:h-[80%] xl:h-[85%] shadow rounded-2xl overflow-hidden relative">
                <img className="w-full h-full object-cover" src={galecrater}  alt="gale crater"/>
                <div className="absolute w-fit h-fit bottom-6 right-5">
                    <span className="text-white lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] nohemiBlack uppercase tracking-tight">gale crater</span>
                </div>
            </div>
            <div className="xl:w-[18%] lg:w-[25%] md:w-[23%] sm:w-[25%] w-[23%] h-[50%] sm:h-[65%] md:h-[75%] lg:h-[80%] xl:h-[85%] shadow rounded-2xl overflow-hidden relative">
                <video key={astronaut} autoPlay loop  muted className="w-full h-full object-cover">
                    <source src={astronaut} type="video/mp4"/>
                    Video Format Not Supported
                </video>
                <div className="absolute w-fit h-fit bottom-6 right-5">
                    <span className="text-white lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] nohemiBlack uppercase tracking-tight">on mars</span>
                </div>
            </div>
            <div className="xl:w-[18%] lg:w-[25%] md:w-[23%] sm:w-[25%] w-[23%] h-[50%] sm:h-[65%] md:h-[75%] lg:h-[80%] xl:h-[85%] shadow rounded-2xl overflow-hidden relative">
                <img className="w-full h-full object-cover" src={distancemars} alt="mars from a distance"/>
                <div className="absolute w-fit h-fit bottom-6 right-5">
                    <span className="text-white lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] nohemiBlack uppercase tracking-tight">the red planet</span>
                </div>
            </div>
            <img className="w-full h-full object-cover absolute top-0 z-[-1]" src={marsBackground} alt="marsBackground" />
            <div className="absolute top-0 w-full h-full bg-gradient-to-b z-[-1] from-transparent via-transparent to-black"></div>
            <div className="absolute top-0 w-full h-full bg-gradient-to-b z-[-1] from-black via-transparent  to-transparent"></div>
        </div>
        <div className="w-full h-1/2 bg-black flex flex-col items-center justify-center gap-5">
            <span className="text-white nohemiLight md:text-[30px] sm:text-[25px] text-[14px] lg:text-[35px] tracking-wider uppercase">sadly, life on mars is only just a song</span>
            <div className="md:w-[450px] w-[350px] h-[60px] flex items-center justify-evenly">
                <div className="w-[35%] h-[75%] bg-slate-100 rounded-2xl flex items-center justify-center">
                    <span className="nohemiBlack max-[768px]:text-[12px] uppercase tracking-tight">go back home</span>
                </div>
                <div className="w-[35%] h-[75%] bg-slate-800 rounded-2xl flex items-center justify-center">
                    <span className="nohemiBlack max-[768px]:text-[12px] text-white uppercase tracking-tight">contact me</span>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default MarsPage
