import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import About from "./components/About";
import OurRange from "./components/OurRange";
import { Hero } from "./components/Hero";
function App() {
  return (
    <div className="App bg_backblack">
      {/* <MyNav /> */}
      <Hero/>
      {/* <About />
      <OurRange />
      <OurRange /> */}
    </div>
  );
}

export default App;
