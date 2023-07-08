import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import About from "./components/About";
<<<<<<< HEAD
import Button from "./components/Button";
function App() {
  return (
    <div className="App bg_backblack">
      <MyNav />
      <Button/>
      <About />
=======
import OurRange from "./components/OurRange";
function App() {
  return (
    <div className="App bg_backblack">
      {/* <MyNav />
      <About /> */}
      <OurRange/>
>>>>>>> 30ba2989a7b2e9f16e02daae9ef8094a3ed8ed17
    </div>
  );
}

export default App;
