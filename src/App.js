import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@splidejs/react-splide/css/sea-green";
import OurRange from "./components/OurRange";
import { Hero } from "./components/Hero";
import { Mushrooms } from "./components/Mushrooms";
import ExpressDelivery from "./components/ExpressDeliver"
import MyFooter from "./components/MyFooter"
function App() {
  return (
    <div className="App bg_backblack overflow-hidden">
      <Hero />
      <Mushrooms />
      <OurRange />
      <ExpressDelivery />
      <MyFooter/>
    </div>
  );
}

export default App;
