import React from "react";
import MyNav from "./MyNav";
import { Col, Container, Row } from "react-bootstrap";
import Button from "./Button";
import panda from "../assets/img/webp/hero_panda.webp";
export const Hero = () => {
  return (
    <div>
      <div className="d-flex flex-column vh_100_between bg_hero min_vh_100">
        <MyNav />
        <div className="flex-grow-1 d-flex align-items-center">
          <Container className="container_1140">
            <Row className="flex-column-reverse flex-lg-row">
              <Col lg={6} xs={12} className="d-flex align-items-center">
                <div>
                  <p className="text-white ff_Philosopher fs_4xl fw_700 lh_normal">
                    <span className="d-xl-block">
                      Setting a <span className="color_purple">‘High’</span>
                    </span>
                    Standard
                  </p>
                  <p className="text-white ff_Montserrat fs_md fw_400 pe-lg-4 mb-lg-5 mb-3">
                    We at Purple Panda are passionate about becoming the best
                    online weed dispensary Canada has ever seen. We believe in
                    good products, fair pricing, and top-notch customer service
                  </p>
                  <Button textbtn="SIGN IN" />
                </div>
              </Col>
              <Col
                lg={6}
                xs={12}
                className="d-flex justify-content-center align-items-center pb-5 flex-column pe-none"
              >
                <span className="pb-lg-5 position-relative panda_smoke panda_bottom_liner overflow-visible">
                  <img
                    src={panda}
                    alt="panda"
                    className="w-100 position-relative z-1"
                  />
                </span>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};
