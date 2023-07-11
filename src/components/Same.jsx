import React from "react";
import { Row, Col } from "react-bootstrap";
import same_img from "../assets/img/webp/same_img.webp";
import same_1 from "../assets/img/svg/same_1.svg";
import same_2 from "../assets/img/svg/same_2.svg";
import same_3 from "../assets/img/svg/same_3.svg";
import same_4 from "../assets/img/svg/same_4.svg";
import same_5 from "../assets/img/svg/same_5.svg";
import same_6 from "../assets/img/svg/same_6.svg";
import same_7 from "../assets/img/svg/same_7.svg";

const Same = () => {
  return (
    <section>
      <div className="container_1140 py-5 position-relative">
        <span className="position-absolute same_back_effect z-0"></span>
        <Row className="align-items-center">
          <Col lg={5}>
            <img
              className="w-100 p-4 z-3 position-relative"
              src={same_img}
              alt="same_img"
              data-aos="fade-right"
              data-aos-duration="3000"
            />
          </Col>
          <Col lg={7}>
            <Row className=" position-relative z-3">
              <Col sm={6}>
                <div className="d-flex align-items-end input_hover pointer">
                  <img src={same_2} alt="same_2" />
                  <p
                    className="fw_600 fs_md ff_Montserrat clr_white ps-2"
                    data-aos="fade-right"
                    data-aos-duration="3000"
                    data-aos-delay="300"
                  >
                    Same Day Delivery
                  </p>
                </div>
              </Col>
              <Col sm={6}>
                <div className="d-flex align-items-end pt-3 pt-sm-0 input_hover pointer">
                  <img src={same_1} alt="same_1" />
                  <p
                    className="fw_600 fs_md ff_Montserrat clr_white ps-2"
                    data-aos="fade-right"
                    data-aos-duration="3000"
                    data-aos-delay="1500"
                  >
                    Canada Wide Mail Orders
                  </p>
                </div>
              </Col>
              <Col sm={6}>
                <div className="d-flex align-items-end pt-sm-4 pt-3 input_hover pointer">
                  <img src={same_3} alt="same_3" />
                  <p
                    className="fw_600 fs_md ff_Montserrat clr_white ps-2"
                    data-aos="fade-right"
                    data-aos-duration="3000"
                    data-aos-delay="600"
                  >
                    Discreet packaging
                  </p>
                </div>
              </Col>
              <Col sm={6}>
                <div className="d-flex align-items-end pt-sm-4 pt-3 input_hover pointer">
                  <img src={same_4} alt="same_4" />
                  <p
                    className="fw_600 fs_md ff_Montserrat clr_white ps-2"
                    data-aos="fade-right"
                    data-aos-duration="3000"
                    data-aos-delay="1800"
                  >
                    19+
                  </p>
                </div>
              </Col>
              <Col sm={6}>
                <div className="d-flex align-items-end pt-sm-4 pt-3 input_hover pointer">
                  <img src={same_5} alt="same_5" />
                  <p
                    className="fw_600 fs_md ff_Montserrat clr_white ps-2"
                    data-aos="fade-right"
                    data-aos-duration="3000"
                    data-aos-delay="900"
                  >
                    Premium Marijuana Buds
                  </p>
                </div>
              </Col>
              <Col sm={6}>
                <div className="d-flex align-items-end pt-sm-4 pt-3 input_hover pointer">
                  <img src={same_6} alt="same_6" />
                  <p
                    className="fw_600 fs_md ff_Montserrat clr_white ps-2"
                    data-aos="fade-right"
                    data-aos-duration="3000"
                    data-aos-delay="2100"
                  >
                    Secure Transactions
                  </p>
                </div>
              </Col>
              <Col sm={6}>
                <div className="d-flex align-items-end pt-sm-4 pt-3 input_hover pointer">
                  <img src={same_7} alt="same_7" />
                  <p
                    className="fw_600 fs_md ff_Montserrat clr_white ps-2"
                    data-aos="fade-right"
                    data-aos-duration="3000"
                    data-aos-delay="1200"
                  >
                    Collect Rewards
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Same;
