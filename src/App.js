import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import OurRange from "./components/OurRange";
import ExpressDeliver from "./components/ExpressDeliver";
import MyFooter from "./components/MyFooter";
import StoreHours from "./components/StoreHours";
function App() {
  return (
    <div className="App bg_backblack overflow-hidden">
      <OurRange />
      <ExpressDeliver />
      <StoreHours/>
      <MyFooter/>
    </div>
  );
}

export default App;
