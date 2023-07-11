import React from "react";
import potentimg from "../assets/img/webp/potent-img.webp";
import numbergif from "../assets/img/gif/number_gif.gif";
import Button from "./Button";
const Potent = () => {
  return (
    <>
      <section className="py-xl-5">
        <div className="py-xl-5 pt-sm-5">
          <div className="py-lg-5 pt-5">
            <p
              className="ff_Philosopher text-center fw_700 fs_3xl clr_white lh_normal"
              data-aos="fade-down"
              data-aos-duration="3000"
              data-aos-delay="300"
            >
              Potent Cannabis<span className="color_purple"> Alert</span>
            </p>
            <p
              className="ff_Montserrat text-center fw_400 fs_md clr_white pt-1 m-0 px-sm-0 px-2"
              data-aos="fade-down"
              data-aos-duration="3000"
              data-aos-delay="600"
            >
              click here to try our most potent hand picked craft cannabis
            </p>
            <div
              className="mt_43 mt_xl_0 bg_potent"
              data-aos="flip-down"
              data-aos-duration="3000"
              data-aos-delay="1200"
            >
              <div className="d-flex justify-content-center position-relative">
                <div className="pt_67 pt_xl_0 pb-lg-4 text-center">
                  <div className="gif_after position-relative">
                    <img
                      src={potentimg}
                      alt="potent section image"
                      className="w-100 mw_543 min_w_320 h_473 h_320"
                    />
                  </div>
                  <div className="trans_-70y">
                    <Button textbtn="Take me to space cannabis" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Potent;
