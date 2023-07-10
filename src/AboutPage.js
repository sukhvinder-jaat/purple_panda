import "./App.css";
import Contact from "./components/Contact";
import Feel from "./components/Feel";
import MyFooter from "./components/MyFooter";
import MyNav from "./components/MyNav";
import StoreHours from "./components/StoreHours";
function AboutPage() {
  return (
    <div className="App bg_backblack overflow-hidden">
      <Contact />
      <Feel />
      <StoreHours />
      <MyFooter />
    </div>
  );
}

export default AboutPage;
