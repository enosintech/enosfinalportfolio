import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import NavBar from "./components/NavBar.jsx";
import ScrollBar from "./components/ScrollBar.jsx";
import CursorContextProvider from "./utils/CursorContextProvider.jsx";

import HomeScreen from "./screens/HomeScreen.jsx";

gsap.registerPlugin(ScrollTrigger);

function App() {

  const component = useRef(null);
  const scrollBarRef = useRef(null);

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
        trigger: ".scalePin",
        start: "top top",
        end: "bottom top",
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
        end: "bottom -500%",
        pin: true,
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

      gsap.fromTo(".mover", {
        x: 80,
      }, {
        x: -9000,
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

      gsap.fromTo(".imageGrow", {
        width: 400,
        height: 500,
        rotate: 8,
        borderRadius: 12,
      }, {
        width: "100%",
        height: "100%",
        rotate: 0,
        borderRadius: 0,
        scrollTrigger: {
          trigger: ".makeWideTrigger",
          scrub: true,
          end: "top 200px"
        }
      })

      gsap.fromTo(".textlefter", {
        x: 0,
      }, {
        x: -2500,
        scrollTrigger: {
          trigger: ".spacer",
          scrub: true,
        }
      })

      gsap.to(".whiteText", {
        color: "white",
        duration: 0.6,
        scrollTrigger: {
          trigger: ".spacer",
          toggleActions: "play none none reverse",
          start: "top center",
        }
      })

      gsap.to(".whiteBack", {
        backgroundColor: "white",
        color: "black",
        duration: 0.6,
        scrollTrigger: {
          trigger: ".spacer",
          toggleActions: "play none none reverse",
          start: "top center"
        }
      })

      gsap.fromTo(".slideInText", {
        x: 600,
      }, {
        x: 0,
        duration: 0.3,
        scrollTrigger: {
          trigger: ".workTextTrigger",
          toggleActions: "play none none reverse",
          start: "top 200px",
        },
      })

      gsap.to(".appearText", {
        opacity: 1,
        duration: 0.3,
        scrollTrigger: {
          trigger: ".workTextTrigger",
          toggleActions: "play none none reverse",
          start: "top 200px",
        }
      })

      gsap.fromTo(".parallax", {
        y: 1000,
      }, {
        y: 0,
        scrollTrigger: {
          trigger: ".parallaxTrigger",
          scrub: true,
          start: "top bottom",
          end: "bottom bottom",
        }
      })

      gsap.fromTo(".parallax2", {
        y: 1000,
      }, {
        y: 0,
        scrollTrigger: {
          trigger: ".parallaxTrigger2",
          scrub: true,
          start: "top bottom",
          end: "bottom bottom",
        }
      })

      gsap.fromTo(".parallax3", {
        y: 1000,
      }, {
        y: 0,
        scrollTrigger: {
          trigger: ".parallaxTrigger3",
          scrub: true,
          start: "top bottom",
          end: "bottom bottom",
        }
      })

      gsap.fromTo(".parallax4", {
        y: 1000,
      }, {
        y: 0,
        scrollTrigger: {
          trigger: ".parallaxTrigger4",
          scrub: true,
          start: "top bottom",
          end: "bottom bottom",
        }
      })

      gsap.fromTo(".parallax5", {
        y: 1000,
      }, {
        y: 0,
        scrollTrigger: {
          trigger: ".parallaxTrigger5",
          scrub: true,
          start: "top bottom",
          end: "bottom bottom",
        }
      })

      gsap.fromTo(".parallax6", {
        y: 1000,
      }, {
        y: 0,
        scrollTrigger: {
          trigger: ".parallaxTrigger6",
          scrub: true,
          start: "top bottom",
          end: "bottom bottom",
        }
      })

      gsap.fromTo(".ballParallax", {
        y: -200,
      }, {
        y: 0,
        scrollTrigger: {
          trigger: ".parallaxTrigger",
          scrub: true,
          start: "top bottom",
          end: "bottom bottom",
        }
      })

      gsap.fromTo(".ballParallax2", {
        y: -200,
      }, {
        y: 0,
        scrollTrigger: {
          trigger: ".parallaxTrigger2",
          scrub: true,
          start: "top bottom",
          end: "bottom bottom",
        }
      })

      gsap.fromTo(".ballParallax3", {
        y: -200,
      }, {
        y: 0,
        scrollTrigger: {
          trigger: ".parallaxTrigger3",
          scrub: true,
          start: "top bottom",
          end: "bottom bottom",
        }
      })

      gsap.fromTo(".ballParallax4", {
        y: -200,
      }, {
        y: 0,
        scrollTrigger: {
          trigger: ".parallaxTrigger4",
          scrub: true,
          start: "top bottom",
          end: "bottom bottom",
        }
      })

      gsap.fromTo(".ballParallax5", {
        y: -200,
      }, {
        y: 0,
        scrollTrigger: {
          trigger: ".parallaxTrigger5",
          scrub: true,
          start: "top bottom",
          end: "bottom bottom",
        }
      })

      gsap.fromTo(".ballParallax6", {
        y: -200,
      }, {
        y: 0,
        scrollTrigger: {
          trigger: ".parallaxTrigger6",
          scrub: true,
          start: "top bottom",
          end: "bottom bottom",
        }
      })

      gsap.to(".modelPin", {
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: ".parallaxTrigger6",
          toggleActions: "play none none reverse",
          start: "top center"
        }
      })

      gsap.fromTo(".scaleAppear", {
        scale: 0.
      }, {
        scale: 1,
        duration: 0.5,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".scaleAppearTrigger",
          toggleActions: "play none none reverse",
          start: "top 70%",
        }
      })

      gsap.fromTo(".contactVanish", {
        opacity: 1,
      }, {
        opacity: 0,
        duration: 0.3,
        scrollTrigger: {
          trigger: ".opacityTrigger",
          toggleActions: "play none none reverse"
        }
      })
  
      gsap.fromTo(".opacityRotate", {
        rotate: 0,
      }, {
        rotate: 360,
        scrollTrigger: {
          trigger: ".rotateTrigger",
          scrub: true,
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
        <NavBar />
        <ScrollBar ref={scrollBarRef} />
        <HomeScreen />
      </CursorContextProvider>
    </div>
  )
}

export default App;
