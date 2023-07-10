import React from "react";
import { Row, Col } from "react-bootstrap";
import star from "../assets/img/svg/star.svg";

export const Classifications = () => {
  return (
    <div className="py-5 our_bg">
      <div className="container_1140">
        <Row>
          <Col lg={6} className="position-relative our_back_leaf">
            <div className="back_shadow our_card p-sm-5 p-3 position-relative z-3">
              <p className="fw_700 fs_3xl ff_Philosopher clr_white lh_normal">
                Our <span className="color_purple">Classifications</span>
              </p>
              <p className="fw_400 fs_md ff_Montserrat clr_white">
                We’re proud of all our weed, but we still classify it based on
                quality and price, with our levels classed at
              </p>
              <div className="pt-2">
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
              <div className="pt-4">
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
              <div className="pt-4">
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
              <div className="pt-4">
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
                <p className="fw_400 fs_md ff_Montserrat clr_white">
                  Top-shelf buds for those special occasions.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
