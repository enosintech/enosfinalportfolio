import { Route, Routes } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGlobe, faHouse } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import CursorContextProvider from "./utils/CursorContextProvider.jsx";

import HomeScreen from "./screens/HomeScreen.jsx";

import rocket from "./assets/icons/rocket.webp";
import arrow from "./assets/icons/arrow.png";
import space from "./assets/videos/space.mp4";
import marsb from "./assets/images/marsbackground.webp";

gsap.registerPlugin(ScrollTrigger);

function App({children}) {

  const component = useRef(null);
  const scrollBarRef = useRef(null);
  const [ contactVisible, setContactVisible ] = useState(false);

  const setContact = (state) => {
    setContactVisible(state)
  }

  useEffect(() => {

    const height = scrollBarRef?.current.clientHeight; 

    let ctx = gsap.context(() => {
      const imgs = gsap.utils.toArray(".motiv");
      const next = 0.8;
      const fade = 0.8;

      gsap.set(imgs[0], {autoAlpha: 1})

      const crossFade = () => {
          gsap.timeline()
          .to(imgs[0], {autoAlpha: 0, duration: fade})
          .to(imgs[1], {autoAlpha: 1, duration: fade}, 0)

          imgs.push(imgs.shift())

          gsap.delayedCall(next, crossFade);
      }

      gsap.delayedCall(next, crossFade);

      ScrollTrigger.create({
        trigger: ".spacePin",
        start: "top top",
        end: "bottom -225%",
        pin: true,
      })

      ScrollTrigger.create({
        trigger: ".scalePin",
        start: "top top",
        end: "bottom -200%",
        pin: true,
      })

      ScrollTrigger.create({
        trigger: ".aboutPin",
        start: "top top",
        end: "bottom -300%",
        pin: true
      })

      ScrollTrigger.create({
        trigger: ".modelPin",
        start: "top top",
        end: "bottom -100%",
        pin: true,
      })

      ScrollTrigger.create({
        trigger: ".modelPin2",
        start: "top top",
        end: "bottom -100%",
        pin: true
      })

      ScrollTrigger.create({
        trigger: ".workPin",
        start: "top top",
        end: "bottom -500%",
        pin: true
      })

      ScrollTrigger.create({
        trigger: ".whyPin",
        start: "top top",
        end: "bottom -100%",
        pin: true,
      })

      ScrollTrigger.create({
        trigger: ".widePin",
        start: "top top",
        end: "bottom -100%",
        pin: true,
      })

      ScrollTrigger.create({
        trigger: ".reviewPin",
        start: "tpo top",
        end: "bottom -500%",
        pin: true,
      })

      gsap.fromTo(".yieldLeft", {
        xPercent: 0,
      }, {
        xPercent: -33,
        scrollTrigger: {
            trigger: ".yieldTrigger",
            start: "top top",
            end: "bottom top",
            scrub: true,
        }
      })

      gsap.fromTo(".workYield", {
        xPercent: 0,
      }, {
        xPercent: -90,
        scrollTrigger: {
          trigger: ".workYieldTrigger",
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      })

      gsap.fromTo(".scalePin", {
        scale: 1,
      }, {
        scale: 0,
        scrollTrigger: {
          trigger: ".spacer",
          scrub: true,
        }
      })

      gsap.fromTo(".workScaleDown", {
        scale: 1,
      }, {
        scale: 0,
        scrollTrigger: {
          trigger: ".workScaleDownTrigger",
          scrub: true
        }
      })

      gsap.to(".displacement2", {
        attr: {
          r: 1000,
        },
        scrollTrigger: {
          trigger: ".spacer",
          scrub: true
        }
      })

      gsap.fromTo(".progress", {
        y: 0,
      }, {
        y: height - 65,
        scrollTrigger: {
          trigger: "html",
          scrub: true,
        }
      })

      gsap.set(".cursor", {
        xPercent: -50, yPercent: -50
      })

      gsap.to(".contactAppear", {
        opacity: 1,
        scrollTrigger: {
          trigger: ".contactAppearTrigger",
          toggleActions: "play none none reverse",
        }
      })

      gsap.to(".opacityGone", {
        opacity: 0,
        duration: 0.3,
        scrollTrigger: {
          trigger: ".opacityTrigger",
          toggleActions: "play none none reverse"
        }
      })

      gsap.to(".opacityGrow", {
        scale: 2,
        x: -100,
        scrollTrigger: {
          trigger: ".opacityTrigger",
          scrub: true,
        }
      })

      gsap.fromTo(".scrollAppear", {
        opacity: 1,
      }, {
        opacity: 0,
        scrollTrigger: {
          trigger: ".spacer",
          toggleActions: "play none none reverse"
        }
      })

      gsap.fromTo(".stagger", {
        yPercent: 140,
        xPercent: 140
      }, {
        yPercent: 0,
        xPercent: 0,
        stagger: 0.4,
        scrollTrigger: {
          trigger: ".reviewTrigger",
          start: "top center",
          end: "bottom bottom",
          scrub: true,
        }
      })

      gsap.fromTo(".widthGrow", {
        width: "0%",
      }, {
        width: "85%",
        scrollTrigger: {
          trigger: ".workPin",
          start: "top bottom",
          end: "top top",
          scrub: true,
        }
      })

      gsap.fromTo(".widthGrow", {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
      }, {
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        scrollTrigger: {
          trigger: ".workYieldTrigger",
          start: "bottom 120%",
          scrub: true,
        }
      })

      gsap.fromTo(".widthShrink", {
        width: "85%",
        height: "90%",
      }, {
        width: "0%",
        height: "0%",
        scrollTrigger: {
          trigger: ".reviewPin",
          scrub: true,
          start: "top bottom",
        }
      })

      gsap.fromTo(".vanish", {
        opacity: 1,
      }, {
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: ".reviewPin",
          start: "top bottom",
          toggleActions: "play none none reverse",
        }
      })

      gsap.to(".makeWide", {
        width: "40%",
        scrollTrigger: {
          trigger: ".makeWideTrigger",
          scrub: true,
        }
      })

      gsap.fromTo(".makeWider", {
        width: "0%",
        height: "95%",
        borderRadius: 16
      }, {
        width :"100%",
        height: "100%",
        borderRadius: 0,
        scrollTrigger: {
          trigger: ".makeWiderTrigger",
          scrub: true,
          end: "top 50px"
        }
      })

    }, component)

    return (() => {
      ctx.revert();
    })
  }, [])

  return (
    <div ref={component}>
      <CursorContextProvider>
        <div className="w-[100dvw] h-[60px] z-[10000] fixed top-0 flex items-center justify-between px-5 sm:px-8 md:px-10">
          <div className="w-fit h-fit">
            <span className="nohemiBlack uppercase text-[14px] md:text-[16px] lg:text-[18px] text-white opacity-0 transition-all">enosintech</span>
          </div>
          <div className="w-fit h-fit flex flex-col md:text-[15px] text-[14px] text-white uppercase nohemiLight">
            <span>lusaka, zm 9:22 am cat</span>
          </div>
        </div>
        <div className="w-[15px] h-[85svh] fixed left-2 lg:left-5 z-[10000] top-20 flex flex-col items-center overflow-visible" ref={scrollBarRef}>
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
          <div className="w-0 h-full border border-white flex flex-col items-start">
              
          </div>
          <div className="w-[15px] h-[15px] border-4 border-white rounded-full"></div>
          <span className="text-white nohemiBlack text-[12px]">Mars</span>
        </div>
        <div className={`fixed top-0 left-0 w-[100dvw] backdrop-blur-2xl z-[11000] transition-all duration-[800ms] ${contactVisible ? "h-[100lvh]" : "h-0"} flex items-center justify-center`}>
          <div className={`w-[85%] h-[85%] relative transition-all duration-300 ${contactVisible ? "block opacity-100" : "hidden opacity-0"}`}>  
            <div className="w-fit h-fit absolute top-0 left-0 flex items-center justify-center">
              <div className="w-[80px] h-[80px] rounded-full bg-[#1DB954] flex items-center justify-center hover:opacity-75 active:opacity-50 cursor-pointer select-none" onClick={() => {
                setContactVisible(false);
              }}>
                <img src={arrow} className="size-8 invert rotate-[-160deg]"/>
              </div>
              <div className="w-[50px] h-[50px] rounded-full bg-slate-100 flex items-center justify-center">
                <FontAwesomeIcon icon={faHouse}/>
              </div>
            </div>
          </div>
        </div>
        <HomeScreen setContact={setContact}/>
      </CursorContextProvider>
    </div>
  )
}

export default App;
