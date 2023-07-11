import React from "react";
import { Row, Col } from "react-bootstrap";
import star from "../assets/img/svg/star.svg";
import Button from "./Button";

export const Classifications = () => {
  return (
    <div className="py-5 our_bg">
      <div className="container_1140">
        <Row>
          <Col lg={6} className="position-relative our_back_leaf">
            <div
              className="back_shadow our_card p-sm-5 p-3 position-relative z-3 card_hover overflow-hidden"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <p
                className="fw_700 fs_3xl ff_Philosopher clr_white lh_normal"
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                Our <span className="color_purple">Classifications</span>
              </p>
              <p
                className="fw_400 fs_md ff_Montserrat clr_white"
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                We’re proud of all our weed, but we still classify it based on
                quality and price, with our levels classed at
              </p>
              <div
                className="pt-2"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="600"
              >
                <span className="d-flex align-items-center">
                  <img src={star} alt="star" />
                  <img className="ps-2" src={star} alt="star" />
                </span>
                <p className="fw_600 fs_xl ff_Montserrat clr_white mb-0">
                  2- Star
                </p>
                <p className="fw_400 fs_md ff_Montserrat clr_white">
                  Very affordable , entry level quality
                </p>
              </div>
              <div
                className="pt-4"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="900"
              >
                <span className="d-flex align-items-center">
                  <img src={star} alt="star" />
                  <img className="ps-2" src={star} alt="star" />
                  <img className="ps-2" src={star} alt="star" />
                  <img className="ps-2" src={star} alt="star" />
                </span>
                <p className="fw_600 fs_xl ff_Montserrat clr_white mb-0">
                  3- Star
                </p>
                <p className="fw_400 fs_md ff_Montserrat clr_white">
                  Tried, tested, and affordable.
                </p>
              </div>
              <div
                className="pt-4"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="1200"
              >
                <span className="d-flex align-items-center">
                  <img src={star} alt="star" />
                  <img className="ps-2" src={star} alt="star" />
                  <img className="ps-2" src={star} alt="star" />
                  <img className="ps-2" src={star} alt="star" />
                </span>
                <p className="fw_600 fs_xl ff_Montserrat clr_white mb-0">
                  4- Star
                </p>
                <p className="fw_400 fs_md ff_Montserrat clr_white">
                  A step up in terms of taste, high, and quality.
                </p>
              </div>
              <div
                className="pt-4"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="1500"
              >
                <span className="d-flex align-items-center">
                  <img src={star} alt="star" />
                  <img className="ps-2" src={star} alt="star" />
                  <img className="ps-2" src={star} alt="star" />
                  <img className="ps-2" src={star} alt="star" />
                  <img className="ps-2" src={star} alt="star" />
                </span>
                <p className="fw_600 fs_xl ff_Montserrat clr_white mb-0">
                  5- Star
                </p>
                <p className="fw_400 fs_md ff_Montserrat clr_white pb-5">
                  Top-shelf buds for those special occasions.
                </p>
              </div>
              <Button textbtn="TRY PURPLE PANDA TODAY" />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
