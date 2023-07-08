import React from "react";
import footerlogo from "../assets/img/png/footer-page-logo.png";

const MyFooter = () => {
  return (
    <>
      <section className="bg_footer position-relative">
        <div className="container_1140">
          <div className="d-flex justify-content-center pt_35">
            <a href="#">
              <img
                src={footerlogo}
                alt="footer page logo"
                className="w-100 mw_197 h_148"
              />
            </a>
          </div>
          <div className="d-flex justify-content-center">
            <p className="ff_montserrat fw_400 fs_md clr_white m-0 pt-4 mw_600 text-center">
              Tempor cras et scelerisque bibendum. Sapien proin pharetra iaculis
              cras massa auctor turpis. Eget massa imperdiet sit massa. Hac sit
              nec.
            </p>
          </div>
          <div className="d-flex justify-content-center pt-4">
            <div className="d-flex justify-content-center align-items-center">
              <a href="#" className="clr_white">
                <p className="pe-3 ff_montserrat fw_600 fs_md mb-0 ">SHOP</p>
              </a>
              <a href="#1" className="clr_white">
                <p className="ps-4 pe-3 ff_montserrat fw_600 fs_md mb-0 ">
                  ABOUT
                </p>
              </a>
              <a href="#" className="clr_white">
                <p className="ps-4 ff_montserrat fw_600 fs_md mb-0 ">CONTACT</p>
              </a>
            </div>
          </div>
        </div>
        <div className="footer_line"></div>
        <div className="d-flex align-items-center justify-content-center pt_14 pb_30">
          <svg
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.5625 4.5C0.5625 5.54429 0.977343 6.54581 1.71577 7.28423C2.45419 8.02266 3.45571 8.4375 4.5 8.4375C5.54429 8.4375 6.54581 8.02266 7.28423 7.28423C8.02266 6.54581 8.4375 5.54429 8.4375 4.5C8.4375 3.45571 8.02266 2.45419 7.28423 1.71577C6.54581 0.977343 5.54429 0.5625 4.5 0.5625C3.45571 0.5625 2.45419 0.977343 1.71577 1.71577C0.977343 2.45419 0.5625 3.45571 0.5625 4.5V4.5ZM9 4.5C9 5.69347 8.52589 6.83807 7.68198 7.68198C6.83807 8.52589 5.69347 9 4.5 9C3.30653 9 2.16193 8.52589 1.31802 7.68198C0.474106 6.83807 0 5.69347 0 4.5C0 3.30653 0.474106 2.16193 1.31802 1.31802C2.16193 0.474106 3.30653 0 4.5 0C5.69347 0 6.83807 0.474106 7.68198 1.31802C8.52589 2.16193 9 3.30653 9 4.5V4.5ZM4.58212 2.808C3.90037 2.808 3.49819 3.3255 3.49819 4.21537V4.81162C3.49819 5.69531 3.89362 6.1965 4.58212 6.1965C5.13281 6.1965 5.50519 5.86687 5.55469 5.39887H6.28313V5.45119C6.22688 6.26569 5.5215 6.83887 4.57875 6.83887C3.40256 6.83887 2.73994 6.08738 2.73994 4.81219V4.20862C2.73994 2.93681 3.4155 2.16225 4.57931 2.16225C5.52487 2.16225 6.23025 2.75512 6.28313 3.609V3.6585H5.55469C5.50519 3.16406 5.12269 2.808 4.58212 2.808V2.808Z"
              fill="white"
            />
          </svg>
          <p className="ff_montserrat clr_white mb-0 fw_400 fs_xsm">
            copyright2022purplepanda
          </p>
        </div>
        <span className="right_-105 top_-50 position-absolute express_cir_ani">
          <div className="circle_shadow"></div>
        </span>
      </section>
    </>
  );
};

export default MyFooter;
