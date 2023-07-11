import React from "react";
import { Col, Row } from "react-bootstrap";
import expressdeliveryimg from "../assets/img/webp/express-col-img.webp";

const ExpressDeliver = () => {
  return (
    <>
      <section className="pt-3 pb-3 position-relative">
        <div className="container_1140  ">
          <Row className="justify-content-between align-items-center">
            <Col lg={7}>
              <div className="position_absolute animation_express_img top_0 left_14">
                <img
                  src={expressdeliveryimg}
                  alt="express delivery section col image"
                  className="mw_900 w-100 min_w_307 h_563"
                />
              </div>
              <div className="w-100 h_563 d-none d-lg-block"></div>
            </Col>
            <Col lg={5} className=" position-relative z-3">
              <div className="express_delivery_box position-relative line card_hover overflow-hidden">
                <div className="express_text_box">
                  <p className="ff_Philosopher fs_3xl fw_700 clr_white m-0 lh_normal pb-1">
                    <span className="color_purple">Express</span> Cannabis
                    Delivery
                  </p>
                  <p className="ff_Montserrat fw_400 fs_md clr_white m-0 pt-2">
                    One of the ways that we set ourselves apart from your
                    average dispensary is through our express delivery service.
                    We’ve all been there – work has finished early and you’ve
                    gotten home, but your jar is empty and the nearest
                    dispensary is miles away. With our service, you could have a
                    box of premium pre-rolls, a bag of bodacious buds, or a
                    package of enticing edibles at your door in just three
                    hours!
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <span className="position-absolute right_-105 top_-35 express_cir_ani">
          <div className="circle_shadow"></div>
        </span>
      </section>
    </>
  );
};

export default ExpressDeliver;
