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
    </div>
  );
}

export default App;
