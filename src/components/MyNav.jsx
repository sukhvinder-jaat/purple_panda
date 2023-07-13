import React from "react";
import nav_btn from "../assets/img/svg/nav_panda.svg";
import shopping from "../assets/img/svg/nav_shoping.svg";
import search from "../assets/img/svg/nav_search.svg";
import gift from "../assets/img/svg/top_gift.svg";
import { ImCross } from "react-icons/im";
import { AiOutlineAlignRight } from "react-icons/ai";
import { Container } from "react-bootstrap";
import Button from "./Button";
import { Link } from "react-router-dom";
const MyNav = () => {
  const [First, setFirst] = React.useState(true);
  function clickshow() {
    setFirst(!First);
  }
  if (!First) {
    document.body.classList.add("overflow_hidden_xl");
  } else {
    document.body.classList.remove("overflow_hidden_xl");
  }
  return (
    <>
      <div className="flex-grow-0 overflow-hidden">
        <div className="bg_nav_top py-3 d-flex align-items-center justify-content-center position-relative z_10">
          <span className="d-flex align-items-center">
            <a href="#">
              <img src={gift} alt="gift" className="w-100" />
            </a>
          </span>
          <p className="d-md-block d-none mb-0 text-white fs_md fw_800 ff_Montserrat ms-3">
            Black Friday
            <span className="fw_400 ps-2">
              savings are here ,save up to 10% off on coupon code
            </span>
          </p>
          <p className="ff_Montserrat fs_md fw_800 mb-0 color_purple pointer ms-3">
            Shop Now
          </p>
        </div>
        <Container className="container_1140">
          {/* btn */}
          <div className="d-flex justify-content-between d-xl-none align-items-center py-3">
            <span>
              <a href="#">
                <img
                  src={nav_btn}
                  alt="nav_1btn"
                  className="w-100 position-relative z_10"
                />
              </a>
            </span>
            <div className="nav_input rounded-pill overflow-hidden pe-3 d-sm-block d-none">
              <input
                type="text"
                placeholder="Search here.."
                className="bg_black21 lh_normal border-0 text-white ff_Montserrat fw_400 fs_xsm"
              />
              <span>
                <img src={search} alt="search" className="pointer" />
              </span>
            </div>
            <h2
              onClick={clickshow}
              className="pointer position-relative z_10 text-white ps-4 mb-0"
            >
              {First ? <AiOutlineAlignRight /> : <ImCross />}
            </h2>
          </div>
          {/* nav */}
          <div className={`nav_show ${First ? " " : "ps-0 showw"}`}>
            <div className="py-4 vh_100_1200 position-relative">
              <div>
                <div className="nav_container">
                  <div className="d-flex align-items-center flex-xl-row flex-column justify-content-center justify-content-xl-between  vh_100_1200">
                    <span className="d-xl-block d-none me-3">
                      <a href="#">
                        <img
                          src={nav_btn}
                          alt="nav_logo"
                          className="w-100 me-3"
                        />
                      </a>
                    </span>
                    {/* option */}
                    <div className="d-flex align-items-center">
                      <ul className="d-flex align-items-center mb-xl-0 flex-xl-row flex-column ps-0 gap-xl-0 gap-2 mb-4">
                        <li>
                          <Link
                            to="/"
                            className="mr_37_xl ff_Montserrat clr_white fw_400 fs_md hover_bold hover_line position-relative"
                            onClick={clickshow}
                          >
                            HOME
                          </Link>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="mr_37_xl ff_Montserrat clr_white fw_400 fs_md hover_bold hover_line position-relative"
                            onClick={clickshow}
                          >
                            SHOP
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="mr_37_xl ff_Montserrat clr_white fw_400 fs_md hover_bold hover_line position-relative"
                            onClick={clickshow}
                          >
                            ABOUT
                          </a>
                        </li>
                        <li>
                          <Link
                            to="/New"
                            className="mr_37_xl ff_Montserrat clr_white fw_400 fs_md hover_bold hover_line position-relative"
                            onClick={clickshow}
                          >
                            CONTACT
                          </Link>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="mr_21_xl ff_Montserrat clr_white fw_400 fs_md hover_bold hover_line position-relative"
                            onClick={clickshow}
                          >
                            FAQ
                          </a>
                        </li>
                        <li>
                          <div className="d-flex flex-xl-row flex-column align-items-center d-xl-none">
                            {/* search */}
                            <div className="nav_input rounded-pill overflow-hidden pe-3 me-3 mb-3">
                              <input
                                type="text"
                                placeholder="Search here.."
                                className="bg_black21 lh_normal border-0 text-white ff_Montserrat fw_400 fs_xsm"
                              />
                              <span>
                                <img
                                  src={search}
                                  alt="search"
                                  className="pointer"
                                />
                              </span>
                            </div>

                            <Button textbtn="SIGN IN" />
                          </div>
                        </li>
                      </ul>
                      <div className="d-xl-flex d-none flex-xl-row flex-column align-items-center">
                        {/* search */}
                        <div className="nav_input rounded-pill overflow-hidden pe-3">
                          <input
                            type="text"
                            placeholder="Search here.."
                            className="bg_black21 border-0 text-white ff_Montserrat fw_400 fs_xsm"
                          />
                          <span>
                            <img
                              src={search}
                              alt="search"
                              className="pointer"
                            />
                          </span>
                        </div>
                        <span className="ms-xl-4 me-xl-3 mx-2">
                          <img
                            src={shopping}
                            alt="shopping"
                            className="w-100 pointer"
                          />
                        </span>
                        <div className="ms-xl-3 ">
                          <Button textbtn="SIGN IN" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default MyNav;
