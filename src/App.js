import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import About from "./components/About";
import Toronto from "./components/Toronto";
import Cannabis from "./components/Cannabis";
import OurRange from "./components/OurRange";
import { Hero } from "./components/Hero";
import { Mushrooms } from "./components/Mushrooms";
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
      <ExpressDeliver />
    </div>
  );
}

export default App;
