import "./App.css";
import App from "./App";
import AboutPage from "./AboutPage";
import { Route, Routes } from "react-router-dom";
import Preloader from "./components/Preloader";
import BackToTop from "./components/BackToTop";
import AOS from "aos";
import "aos/dist/aos.css";
function Main() {
  AOS.init({ once: true, disable: "mobile" });
  return (
    <div className="overflow-hidden bg_black">
      <Preloader />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/New" element={<AboutPage />} />
      </Routes>
      <BackToTop />
    </div>
  );
}

export default Main;
