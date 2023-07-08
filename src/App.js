import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import About from "./components/About";
import Button from "./components/Button";
function App() {
  return (
    <div className="App bg_backblack">
      <MyNav />
      <Button/>
      <About />
    </div>
  );
}

export default App;
