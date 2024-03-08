import arrow from "../assets/icons/arrow.png";
import reactjs from "../assets/images/reactjs.webp";
import node from "../assets/images/node.webp";
import tailwind from "../assets/images/tailwind.webp";
import figma from "../assets/images/figma.webp";

function WebsiteWorkComponent() {
  return (
    <div className="w-[80%] h-[90%] rounded-t-[50px] bg-black flex flex-col">
        <div className="w-full h-[30%] px-[54px] flex justify-between items-center">
        <div className="flex flex-col w-[40%] text-white uppercase">
            <span className="nohemiBlack text-[25px]">makeupbyram</span>
            <span className="nohemiSemiBold text-[22px]">Established 2022</span>
            <p className="nohemiRegular text-[14px]">makeupbyram is a makeup studio based in kuala lumpur, malaysia.</p>
        </div>
        <div className="w-[100px] h-[100px] rounded-full bg-[#1db954] flex items-center justify-center">
            <img src={arrow} className="size-12 invert rotate-[-45deg]"/>
        </div>
        </div>
        <div className="w-full h-[70%] flex items-start justify-center">
        <div className="w-[90%] h-[95%] bg-white rounded-2xl relative">
            <div className="absolute bottom-5 right-5 flex flex-col gap-2">
                <span className="text-center uppercase nohemiBold text-[12px]">made with</span>
                <div className="flex items-center gap-2">
                    <img className="w-[20px] h-[20px] object-contain" alt="tool used" src={reactjs}/>
                    <img className="w-[20px] h-[20px] object-contain" alt="tool used" src={node}/>
                    <img className="w-[20px] h-[20px] object-contain" alt="tool used" src={tailwind}/>
                    <img className="w-[20px] h-[20px] object-contain" alt="tool used" src={figma}/>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default WebsiteWorkComponent;
