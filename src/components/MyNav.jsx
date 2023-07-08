import React from "react";
import nav_btn from "../assets/img/svg/nav_panda.svg";
import shopping from "../assets/img/svg/nav_shoping.svg";
import search from "../assets/img/svg/nav_search.svg";
import gift from "../assets/img/svg/top_gift.svg";
import { ImCross } from "react-icons/im";
import { AiOutlineAlignRight } from "react-icons/ai";
import { Container } from "react-bootstrap";
const MyNav = () => {
  const [First, setFirst] = React.useState(true);
  function clickshow() {
    setFirst(!First);
  }
  if (!First) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      <div className="bg_backblack">
        <div className="bg_nav_top py-3 d-flex align-items-center justify-content-center">
          <span className=" d-flex align-items-center ">
            <img src={gift} alt="gift" className="w-100" />
          </span>
          <p className=" mb-0 text-white fs_md fw_800 ff_Montserrat ms-3">
            Black Friday{" "}
            <span className="fw_400">
              savings are here ,save up to 10% off on coupon code
            </span>
          </p>
          <p className=" ff_Montserrat fs_md fw_800 mb-0 color_purple pointer ms-3">
            Shop Now
          </p>
        </div>
        <Container className="container_1140">
          {/* btn */}
          <div className=" d-flex justify-content-between d-lg-none align-items-center px-md-4 py-3">
            <span>
              <a href="#">
                <img
                  src={nav_btn}
                  alt="nav_1btn"
                  className="w-100 position-relative z_10"
                />
              </a>
            </span>
            <h2
              onClick={clickshow}
              className="pointer position-relative z_10 text-white ps-4 mb-0"
            >
              {First ? <AiOutlineAlignRight /> : <ImCross />}
            </h2>
          </div>
          {/* nav */}
          <div className={`nav_show ${First ? "" : "ps-0 showw"}`}>
            <div className="py-4 vh_100_1920 position-relative">
              <div className="mx-md-5 mx-sm-3 mx-1">
                <div className="nav_container">
                  <div className=" d-flex align-items-center flex-lg-row flex-column justify-content-center justify-content-lg-between  vh_100_992">
                    <span className=" d-lg-block d-none me-3">
                      <img
                        src={nav_btn}
                        alt="nav_logo"
                        className="w-100 me-3"
                      />
                    </span>
                    {/* option */}
                    <div className=" d-flex align-items-center">
                      <ul className="d-flex align-items-center mb-lg-0 flex-lg-row flex-column ps-0 gap-lg-0 gap-2 mb-4">
                        <li>
                          <a
                            href="#"
                            className="me-lg-4 ff_Montserrat clr_white fw_400 fs_md hover_bold hover_line position-relative"
                            onClick={clickshow}
                          >
                            HOME
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="me-lg-4 ff_Montserrat clr_white fw_400 fs_md hover_bold hover_line position-relative"
                            onClick={clickshow}
                          >
                            SHOP
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="me-lg-4 ff_Montserrat clr_white fw_400 fs_md hover_bold hover_line position-relative"
                            onClick={clickshow}
                          >
                            ABOUT
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="me-lg-4 ff_Montserrat clr_white fw_400 fs_md hover_bold hover_line position-relative"
                            onClick={clickshow}
                          >
                            CONTACT
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="me-lg-4 ff_Montserrat clr_white fw_400 fs_md hover_bold hover_line position-relative"
                            onClick={clickshow}
                          >
                            FAQ
                          </a>
                        </li>
                        <li>
                          <div className=" d-flex flex-lg-row flex-column align-items-center d-lg-none">
                            {/* search */}
                            <div className="nav_input rounded-pill overflow-hidden pe-3 me-3">
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

                            <button className="ff_way clr_white fw_400 fs_sm sign_btn ms-lg-3 mt-lg-0 mt-4 bg_orange border-0 position-relative button_hover overflow-hidden">
                              SignUp
                            </button>
                          </div>
                        </li>
                      </ul>
                      <div className=" d-lg-flex d-none flex-lg-row flex-column">
                        {/* search */}
                        <div className="nav_input rounded-pill overflow-hidden pe-3 me-3">
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
                        <span className="mx-2">
                          <img
                            src={shopping}
                            alt="shopping"
                            className="w-100 pointer"
                          />
                        </span>
                        <button className="ff_way clr_white fw_400 fs_sm sign_btn ms-lg-3 mt-lg-0 mt-4 bg_orange border-0 position-relative button_hover overflow-hidden">
                          SignUp
                        </button>
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
