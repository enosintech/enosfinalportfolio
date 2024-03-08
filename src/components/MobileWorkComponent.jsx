import arrow from "../assets/icons/arrow.png";
import iphone from "../assets/images/iphone.webp";
import reactjs from "../assets/images/reactjs.webp";
import tailwind from "../assets/images/tailwind.webp"
import node from "../assets/images/node.webp";
import figma from "../assets/images/figma.webp";

function MobileWorkComponent() {
  return (
    <div className="w-[60%] h-[85%] rounded-[60px] bg-white flex flex-col">
        <div className="w-full h-[30%] px-[54px] flex justify-between items-center">
        <div className="flex flex-col w-[40%] uppercase">
            <span className="nohemiBlack text-[25px]">banturide</span>
            <span className="nohemiSemiBold text-[22px]">Established 2023</span>
            <p className="nohemiRegular text-[14px]">banturide is an e-hailing mobile application based in livingstone, zm.</p>
        </div>
        <div className="w-[100px] h-[100px] rounded-full bg-black backgroundColorChange flex items-center justify-center">
            <img src={arrow} className="size-12 invert rotate-[-45deg]"/>
        </div>
        </div>
        <div className="w-full h-[70%] flex items-center justify-center">
        <div className="w-[90%] h-[95%] bg-black backgroundColorChange rounded-[60px] flex flex-col justify-end items-center relative">
            <div className="w-[400px] h-[150px] absolute top-5 flex flex-col">
            <span className="uppercase text-[12px] text-white nohemiExtraBold w-full h-[20%] flex items-center justify-center">made with</span>
            <div className="w-full h-[80%] flex items-center justify-evenly">
                <div className="w-1/4 h-full flex flex-col gap-2 items-center justify-center">
                    <img className="w-[70px] h-[70px] object-contain" alt="tools" src={reactjs}/>
                    <span className="text-white nohemiLight text-[12px]">React JS</span>
                </div>
                <div className="w-1/4 h-full flex flex-col gap-2 items-center justify-center">
                    <img className="w-[70px] h-[70px] object-contain" alt="tools" src={tailwind}/>
                    <span className="text-white nohemiLight text-[12px]">Tailwind CSS</span>
                </div>
                <div className="w-1/4 h-full flex flex-col gap-2 items-center justify-center">
                    <img className="w-[70px] h-[70px] object-contain" alt="tools" src={node}/>
                    <span className="text-white nohemiLight text-[12px]">Node JS</span>
                </div>
                <div className="w-1/4 h-full flex flex-col gap-2 items-center justify-center">
                    <img className="w-[70px] h-[70px] object-contain" alt="tools" src={figma}/>
                    <span className="text-white nohemiLight text-[12px]">Figma</span>
                </div>
            </div>
            </div>
            <div className="w-full h-[90%] flex justify-center items-end gap-5">
            <div className="w-fit h-fit relative">
                <img src={iphone} alt="iphone icon" className="w-fit h-[250px] relative z-[2]"/>
                <img className="bg-green-500 absolute top-0 h-[250px] w-[99%] rounded-[20px] z-[1]"/>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default MobileWorkComponent
