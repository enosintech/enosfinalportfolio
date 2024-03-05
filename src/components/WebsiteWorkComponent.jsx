import arrow from "../assets/icons/arrow.png";
import macbook from "../assets/images/macbook.webp";
import iphone from "../assets/images/iphone.webp";

function WebsiteWorkComponent() {
  return (
    <div className="w-[60%] h-[85%] rounded-[60px] bg-white flex flex-col">
        <div className="w-full h-[30%] px-[54px] flex justify-between items-center">
        <div className="flex flex-col w-[40%] uppercase">
            <span className="nohemiBlack text-[25px]">makeupbyram</span>
            <span className="nohemiSemiBold text-[22px]">Established 2022</span>
            <p className="nohemiRegular text-[14px]">makeupbyram is a makeup studio based in kuala lumpur, malaysia.</p>
        </div>
        <div className="w-[100px] h-[100px] rounded-full bg-black backgroundColorChange flex items-center justify-center">
            <img src={arrow} className="size-12 invert rotate-[-45deg]"/>
        </div>
        </div>
        <div className="w-full h-[70%] flex items-center justify-center">
        <div className="w-[90%] h-[95%] bg-black backgroundColorChange rounded-[60px] flex flex-col justify-end items-center relative">
            <div className="w-[400px] h-[150px] absolute top-5 flex flex-col">
            <span className="uppercase text-[12px] text-white nohemiLight w-full h-[20%] flex items-center justify-center">made with</span>
            <div className="w-full h-[80%] bg-yellow-500 flex items-center justify-evenly">
                <div className="w-1/4 h-full flex items-center justify-center bg-white"></div>
                <div className="w-1/4 h-full flex items-center justify-center bg-green-500"></div>
                <div className="w-1/4 h-full flex items-center justify-center bg-orange-500"></div>
                <div className="w-1/4 h-full flex items-center justify-center bg-purple-500"></div>
            </div>
            </div>
            <div className="w-full h-[90%] flex justify-center items-end gap-5">
            <div className=" w-fit h-fit relative">
                <img src={macbook} alt="macbook icon" className="w-fit h-[280px] object-contain relative z-[2]"/>
                <img className="bg-red-500 absolute left-0 right-0 mx-auto top-0 h-[250px] w-[80%] rounded-t-[20px] z-[1]"/>
            </div>
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

export default WebsiteWorkComponent;
