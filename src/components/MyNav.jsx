import React from "react";
import nav_btn from "../assets/img/svg/nav_panda.svg";
import shopping from "../assets/img/svg/nav_shoping.svg";
// import search from "../assets/images/svg/search_icon.svg";
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
        <Container className="container_1140">
          {/* btn */}
          <div className=" d-flex justify-content-between d-xl-none align-items-center px-md-4 py-3">
            <span>
              <a href="#">
                <img
                  src={nav_btn}
                  alt="nav_btn"
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
                  <div className=" d-flex align-items-center flex-xl-row flex-column justify-content-center justify-content-xl-between  vh_100_992">
                    <span className=" d-xl-block d-none me-3">
                      <img
                        src={nav_btn}
                        alt="nav_logo"
                        className="w-100 me-3"
                      />
                    </span>
                    {/* option */}
                    <div className=" d-flex align-items-center">
                      <ul className="d-flex align-items-center mb-xl-0 flex-xl-row flex-column ps-0 gap-xl-0 gap-2 mb-4">
                        <li>
                          <a
                            href="#"
                            className="me-xl-4 opacity_06 ff_way clr_white fw_400 fs_sm"
                            onClick={clickshow}
                          >
                            HOME
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="me-xl-4 opacity_06 ff_way clr_white fw_400 fs_sm"
                            onClick={clickshow}
                          >
                            SHOP
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="me-xl-4 opacity_06 ff_way clr_white fw_400 fs_sm"
                            onClick={clickshow}
                          >
                            ABOUT
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="me-xl-4 opacity_06 ff_way clr_white fw_400 fs_sm"
                            onClick={clickshow}
                          >
                            CONTACT
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="me-xl-4 opacity_06 ff_way clr_white fw_400 fs_sm"
                            onClick={clickshow}
                          >
                            FAQ
                          </a>
                        </li>
                      </ul>
                      <div className=" d-flex flex-xl-row flex-column">
                        <div className="nav_input"></div>
                        <span>
                          <img
                            src={shopping}
                            alt="shopping"
                            className="w-100"
                          />
                        </span>
                        <button className="ff_way clr_white fw_400 fs_sm sign_btn ms-xl-3 mt-xl-0 mt-4 bg_orange border-0 position-relative button_hover overflow-hidden">
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
