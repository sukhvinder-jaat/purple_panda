import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import About from "./components/About";
import Toronto from "./components/Toronto";
import Cannabis from "./components/Cannabis";
import OurRange from "./components/OurRange";
import ExpressDeliver from "./components/ExpressDeliver";
import MyFooter from "./components/MyFooter";
function App() {
  return (
    <div className="App bg_backblack">
      <MyNav />
      <About />
      <Toronto />
      <Cannabis />
      <OurRange />
      <ExpressDeliver />
      <MyFooter />
    </div>
  );
}

export default App;
