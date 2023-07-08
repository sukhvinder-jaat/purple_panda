import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import About from "./components/About";
import OurRange from "./components/OurRange";
function App() {
  return (
    <div className="App bg_backblack">
      <MyNav />
      <About />
      <OurRange />
    </div>
  );
}

export default App;
