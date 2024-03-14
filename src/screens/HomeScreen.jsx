import LandingPage from "../components/LandingPage";
import SpacerPage from "../components/SpacerPage";
import AboutmePage from "../components/AboutmePage";
import WorkPage from "../components/WorkPage";
import SpacePage from "../components/SpacePage";
import MarsPage from "../components/MarsPage";

function HomeScreen(props) {
  return (
    <>
      <LandingPage setContact={props.setContact}/>
      <AboutmePage />
      <WorkPage />
      <MarsPage />
    </>
  )
}

export default HomeScreen;
