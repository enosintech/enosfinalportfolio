import React from "react";

import rocket from "../assets/icons/rocket.webp";

const ScrollBar = React.forwardRef((props, ref) => (
    <div className="w-[15px] h-[85svh] fixed left-2 lg:left-5 z-[10000] top-20 flex contactAppear opacity-0 flex-col items-center overflow-visible" ref={ref}>
        <div className="w-fit h-fit overflow-visible absolute top-0 -left-[7px] progress flex flex-col">
            <div class="flameContainer">
                <div class="flameRed flame"></div>
                <div class="flameOrange flame"></div>
                <div class="flameYellow flame"></div>
                <div class="flameWhite flame"></div>
                <div class="flameBlue flameCircle"></div>
                <div class="flameBlack flameCircle"></div>
            </div>
            <img  src={rocket} alt="space rocket" className="rotate-180 min-w-[30px] h-[50px] object-fill"/>
        </div>
        <span className="text-white nohemiThin text-[10px]">Earth</span>
        <div className="w-[7px] h-[7px] rounded-full bg-white"></div>
        <div className="w-0 h-full border border-white flex flex-col items-start"></div>
        <div className="w-[15px] h-[15px] border-4 border-white rounded-full"></div>
        <span className="text-white nohemiBlack text-[12px]">Mars</span>
    </div>
));

export default ScrollBar;
