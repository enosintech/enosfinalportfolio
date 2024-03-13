import React from 'react'

import arrow from "../assets/icons/arrow.png"

function RightWorkComponent(props) {
  return (
    <div className="w-[65%] h-[80%] translate-y-6 relative">
        <div className="w-full h-full persCube pers650 flex items-start justify-center">
            <div className={`w-[90%] h-full bg-white rounded-[20px] persMove flex flex-col ${props.animationClass}`}>
                <div className='w-full h-[85%] flex items-center justify-center'>
                    <div className='w-[99%] h-[99%] bg-black rounded-[20px]'></div>
                </div>
                <div className='w-full h-[15%] flex flex-col items-end px-3 py-2'>
                    <span className='nohemiBlack text-[25px] uppercase'>makeupbyram</span>
                    <div className='flex items-center justify-center nohemiLight gap-5 rounded-full border-black border p-2'>
                        <span>ReactJS TailwindCSS GSAP</span>
                    </div>
                </div>
            </div>
        </div>
        <div className={`w-[200px] h-[200px] absolute rounded-full bg-[#1db954] -bottom-5 -left-14 flex items-center justify-center ${props.ballAnimationClass}`}>
            <img src={arrow} className="size-20 -rotate-45"/>
        </div>
    </div>
  )
}

export default RightWorkComponent;
