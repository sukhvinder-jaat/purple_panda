import React from "react";
import { Col, Row } from "react-bootstrap";
import Button from "./Button";
import mushroom from "../assets/img/webp/prices_mushroom.webp";

const Prices = () => {
  return (
    <>
      <section className="py-lg-5 position-relative">
        <div className="container_1140 py-5">
          <div className="prices_box">
            <Row className="justify-content-between align-items-center flex-column-reverse flex-lg-row">
              <Col lg={7}>
                <p className="ff_Philosopher fw_700 fs_3xl clr_white mb-0 lh_normal pb-1 pt-4 pt-lg-0">
                  High<span className="color_purple"> Thoughts</span>, Low
                  <span className="color_purple">Prices</span>
                </p>
                <p className="ff_Montserrat fw_400 fs_md clr_white pt-2 pb-5 mb-lg-2 mb-0">
                  We pride ourselves on supplying premium, top-shelf weed
                  without the top-shelf markups. Some dispensaries will charge
                  an arm and a leg for the newest “flavors”, but we believe in
                  fair, affordable prices for good products at every level of
                  quality and breed.
                </p>
                <Button textbtn="GIVE PURPLE PANDA A GO" />
              </Col>
              <Col lg={5}>
                <div className="position_absolute z-1 top_-50 right_10">
                  <img
                    src={mushroom}
                    alt="prices section mushroom image"
                    className="w-100 mw_412 h_445"
                  />
                </div>
                <div className="h_278 w-100 d-lg-block d-none"></div>
                <span className="position-absolute top_80 right_130 express_cir_ani">
                  <div className="shadow_circle_prices"></div>
                </span>
                <span className="position-absolute left_-300 top_-200 express_cir_ani">
                  <div className="circle_shadow"></div>
                </span>
              </Col>
            </Row>
          </div>
        </div>
      </section>
    </>
  );
};

export default Prices;
