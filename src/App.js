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
import { MostPopular } from "./components/MostPopular";
import { Latest } from "./components/Latest";
import { First } from "./components/First";
import { Classifications } from "./components/Classifications";
import Prices from "./components/Prices";
import Potent from "./components/Potent";
import Preloader from "./components/Preloader";
import Canada from "./components/Canada";
import Same from "./components/Same";
import Feel from "./components/Feel";
function App() {
  return (
    <div className="App bg_backblack overflow-hidden">
      <Hero />
      <Mushrooms />
      <About />
      <OurRange />
      <ExpressDeliver />
      <Toronto />
      <Prices />
      <Same />
      <Canada />
      <Cannabis />
      <Potent />
      <Classifications />
      <MostPopular />
      <Latest />
      <First />
      <StoreHours />
      <MyFooter />
      <Feel />
    </div>
  );
}

export default App;
