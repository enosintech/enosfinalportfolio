import React from 'react'

import arrow from "../assets/icons/arrow.png"
import space from "../assets/videos/space.mp4"

function RightWorkComponent(props) {
  return (
    <div className="w-[65%] h-[80%] translate-y-6 relative">
        <div className="w-full h-full persCube pers650 flex items-start justify-center">
            <div className={`w-[90%] h-full persMove rounded-t-[20px] overflow-hidden bg-black flex flex-col ${props.animationClass}`}>
                <div className='w-full h-full absolute top-0 left-0 flex items-center justify-center'>
                    <div className='w-full h-full bg-white flex items-center justify-center'>
                        <video key={space} className='w-full h-full object-cover' autoPlay={true} loop={true} playsInline={true} muted={true}>
                            <source src={space} type="video/mp4"/>
                            Video Format Not Supported
                        </video>
                    </div>
                </div>
                <div className='w-full h-full bg-gradient-to-b from-transparent via-transparent to-black pointer-events-none absolute top-0 left-0'></div>
                <div className='w-fit absolute bottom-3 right-2 h-[15%] flex flex-col items-center px-3 py-2 text-white'>
                    <span className='nohemiBlack text-[25px] uppercase'>makeupbyram</span>
                    <div className='flex items-center justify-center nohemiLight gap-5 rounded-full border-white border p-2'>
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
