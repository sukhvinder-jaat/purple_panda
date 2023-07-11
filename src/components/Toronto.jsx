import React from "react";
import { Row, Col } from "react-bootstrap";
import toronto_l from "../assets/img/svg/toronto_l.svg";
import toronto_r from "../assets/img/svg/toronto_r.svg";

const Toronto = () => {
  return (
    <section className="py-5 position-relative">
      <span className="position-absolute toronto_l transisation animation_stem">
        <img src={toronto_l} alt="toronto_l" />
      </span>
      <span className="position-absolute toronto_r transisation animation_stem">
        <img src={toronto_r} alt="toronto_r" />
      </span>
      <div className="container_1140">
        <div
          className="text-center d-flex flex-column align-items-center"
          data-aos="flip-down"
          data-aos-duration="3000"
          data-aos-delay="300"
        >
          <p className=" fw_600 fs_xl ff_Montserrat clr_white max_w_630">
            We’re based in both the
            <span className="color_purple"> Greater Toronto Area</span>, with
            our delivery service covering:
          </p>
          <p className="fw_400 fs_md ff_Montserrat clr_white opacity_06">
            If you’re in any of these cities and need a little pick me up, you
            know where to go!
          </p>
        </div>
        <Row className="pt-5">
          <Col sm={6}>
            <div className="back_shadow card_hover overflow-hidden position-relative">
              <div className="d-flex flex-column align-items-center justify-content-center toronto_card py-3 py-sm-5">
                <ul>
                  <li
                    className="list_style fw_400 fs_2xl ff_Montserrat clr_white pt-2 pointer"
                    data-aos="fade-right"
                    data-aos-duration="3000"
                    data-aos-delay="300"
                  >
                    Mississauga
                  </li>
                  <li
                    className="list_style fw_400 fs_2xl ff_Montserrat clr_white pt-2 pointer"
                    data-aos="fade-right"
                    data-aos-duration="3000"
                    data-aos-delay="600"
                  >
                    Oakville
                  </li>
                  <li
                    className="list_style fw_400 fs_2xl ff_Montserrat clr_white pt-2 pointer"
                    data-aos="fade-right"
                    data-aos-duration="3000"
                    data-aos-delay="1200"
                  >
                    Brampton
                  </li>
                  <li
                    className="list_style fw_400 fs_2xl ff_Montserrat clr_white pt-2 pointer"
                    data-aos="fade-right"
                    data-aos-duration="3000"
                    data-aos-delay="1500"
                  >
                    Brampton
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col sm={6} className="pt-3 pt-sm-0">
            <div className="back_shadow card_hover overflow-hidden position-relative">
              <div className="d-flex flex-column align-items-center justify-content-center toronto_card py-3 py-sm-5">
                <ul>
                  <li
                    className="list_style fw_400 fs_2xl ff_Montserrat clr_white pt-2 pointer"
                    data-aos="fade-right"
                    data-aos-duration="3000"
                    data-aos-delay="300"
                  >
                    Toronto
                  </li>
                  <li
                    className="list_style fw_400 fs_2xl ff_Montserrat clr_white pt-2 pointer"
                    data-aos="fade-right"
                    data-aos-duration="3000"
                    data-aos-delay="600"
                  >
                    Vaughan
                  </li>
                  <li
                    className="list_style fw_400 fs_2xl ff_Montserrat clr_white pt-2 pointer"
                    data-aos="fade-right"
                    data-aos-duration="3000"
                    data-aos-delay="900"
                  >
                    Markham
                  </li>
                  <li
                    className="list_style fw_400 fs_2xl ff_Montserrat clr_white pt-2 pointer"
                    data-aos="fade-right"
                    data-aos-duration="3000"
                    data-aos-delay="1200"
                  >
                    Richmond
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Toronto;
