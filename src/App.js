import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@splidejs/react-splide/css/sea-green";
import About from "./components/About";
import Toronto from "./components/Toronto";
import Cannabis from "./components/Cannabis";
import OurRange from "./components/OurRange";
import ExpressDeliver from "./components/ExpressDeliver";
import MyFooter from "./components/MyFooter";
import StoreHours from "./components/StoreHours";
import { Hero } from "./components/Hero";
import { Mushrooms } from "./components/Mushrooms";
import Canada from "./components/Canada";
import Same from "./components/Same";
import Feel from "./components/Feel";
function App() {
  return (
    <div className="App bg_backblack overflow-hidden">
      <Hero />
      <About />
      <Toronto />
      <Cannabis />
      <Mushrooms />
      <OurRange />
      <ExpressDeliver />
      <StoreHours />
      <MyFooter />
      <Same />
      <Canada />
      <Feel />
    </div>
  );
}

export default App;
