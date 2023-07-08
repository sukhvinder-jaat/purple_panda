import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import OurRange from "./components/OurRange";
import ExpressDeliver from "./components/ExpressDeliver";
import MyFooter from "./components/MyFooter";
function App() {
  return (
    <div className="App bg_backblack overflow-hidden">
      <OurRange />
      <ExpressDeliver />
      <MyFooter/>
    </div>
  );
}

export default App;
