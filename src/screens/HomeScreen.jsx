import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import LandingPage from "../components/LandingPage";
import SpacerPage from "../components/SpacerPage";
import AboutmePage from "../components/AboutmePage";
import WorkPage from "../components/WorkPage";
import SpacePage from "../components/SpacePage";
import MarsPage from "../components/MarsPage";

gsap.registerPlugin(ScrollTrigger);

function HomeScreen() {
  return (
    <>
      <LandingPage />
      <SpacerPage />
      <AboutmePage />
      <WorkPage />
      <SpacePage />
      <MarsPage />
    </>
  )
}

export default HomeScreen;
