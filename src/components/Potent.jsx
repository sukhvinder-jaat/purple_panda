import React from "react";
import potentimg from "../assets/img/png/potent-img.png";
import numbergif from "../assets/img/gif/number_gif.gif";
import Button from "./Button";
const Potent = () => {
  return (
    <>
      <section className="py-5">
        <div className="py-5">
          <div className="py-4">
            <p className="ff_Philosopher text-center fw_700 fs_3xl clr_white lh_normal">
              Potent Cannabis<span className="color_purple"> Alert</span>
            </p>
            <p className="ff_Montserrat text-center fw_400 fs_md clr_white pt-1 m-0">
              click here to try our most potent hand picked craft cannabis
            </p>
            <div className="mt_43 bg_potent">
              <div className="d-flex justify-content-center position-relative">
                <div className="pt_67 pb-4 text-center">
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
