import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@splidejs/react-splide/css/sea-green";
import MyNav from "./components/MyNav";
import About from "./components/About";
import Toronto from "./components/Toronto";
import Cannabis from "./components/Cannabis";
import OurRange from "./components/OurRange";
import { Hero } from "./components/Hero";
import { Mushrooms } from "./components/Mushrooms";
import ExpressDelivery from "./components/ExpressDeliver"
import MyFooter from "./components/MyFooter"
function App() {
  return (
    <div className="App bg_backblack overflow-hidden">
      <MyNav />
      <About />
      <Toronto />
      <Cannabis />
      <OurRange />
      <ExpressDeliver />
      <MyFooter />
      <Hero />
      <Mushrooms />
      <OurRange />
      <ExpressDelivery />
      <MyFooter/>
      <ExpressDeliver />
    </div>
  );
}

export default App;
