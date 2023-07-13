import React from "react";
import purplepanda from "../assets/img/webp/hero_panda.webp";

const Preloader = () => {
  setTimeout(() => {
    document.querySelector(".none").style.display = "none";
    document.body.classList.remove("overflow_hidden");
  }, 2500);
  return (
    <>
      <section className="bg-black">
        <div className="none">
          <div className="bg-black text-center d-flex flex-column align-items-center justify-content-center start-0 top-0  w-100 z_1111111 min-vh-100 position-fixed ">
            <img
              src={purplepanda}
              alt="main page logo"
              className="d-flex align-items-center justify-content-center animation_preloader "
            />
            <div className="animation_preloader d-flex justify-content-center">
              <p className="ff_Philosopher fw_700 fs_4xl fs_48xl  clr_white mb-0 lh_normal">
                Purple <span className="color_purple">Panda</span>
              </p>
            </div>
            <div className="w-50 border_preloader rounded-pill overflow-hidden mt-4">
              <div className="w_60 h_30 bg_gradient animation_preloader_2"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Preloader;
