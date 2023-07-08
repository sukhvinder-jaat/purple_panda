import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import OurRange from "./components/OurRange";
import { Hero } from "./components/Hero";
import { Mushrooms } from "./components/Mushrooms";
function App() {
  return (
    <div className="App bg_backblack overflow-hidden">
      <Hero />
      <Mushrooms />
      <OurRange />
      <ExpressDeliver/>
    </div>
  );
}

export default App;
