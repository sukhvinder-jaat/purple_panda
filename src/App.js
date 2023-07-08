import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
import MyNav from "./components/MyNav";
import About from "./components/About";
import OurRange from "./components/OurRange";
import { Hero } from "./components/Hero";
import { Mushrooms } from "./components/Mushrooms";
function App() {
  return (
    <div className="App bg_backblack overflow-hidden">
      {/* <MyNav /> */}
      <Hero />
      <Mushrooms />
      {/* <About />
      <OurRange />
      <OurRange /> */}
    </div>
  );
}

export default App;
