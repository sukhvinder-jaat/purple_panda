import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import About from "./components/About";
import Toronto from "./components/Toronto";
import Cannabis from "./components/Cannabis";
function App() {
  return (
    <div className="App bg_backblack">
      <MyNav />
      <About />
      <Toronto />
      <Cannabis />
    </div>
  );
}

export default App;
