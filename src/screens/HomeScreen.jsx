import LandingPage from "../components/LandingPage";
import AboutmePage from "../components/AboutmePage";
import WorkPage from "../components/WorkPage";
import MarsPage from "../components/MarsPage";

function HomeScreen() {
  return (
    <div className="overflow-x-hidden">
      <LandingPage />
      <AboutmePage />
      <WorkPage />
      <MarsPage />
    </div>
  )
}

export default HomeScreen;
