import React from "react";
import { Col, Row } from "react-bootstrap";
import leftstem from "../assets/img/webp/our-range-left-stem.webp";
import rightstem from "../assets/img/webp/our-range-right-stem.webp";

const OurRange = () => {
  return (
    <>
      <section className="pt-sm-5 pb-4">
        <div className="container_1140 pt-5">
          <Row className="pt-3">
            <Col lg={12} className="position-relative">
              <div
                className="our_range_box back_shadow position-relative z-1 card_hover overflow-hidden"
                data-aos="fade-left"
                data-aos-duration="3000"
              >
                <p
                  className="ff_Philosopher fw_700 fs_3xl text-center clr_white m-0 lh_normal"
                  data-aos="fade-down"
                  data-aos-duration="3000"
                  data-aos-delay="300"
                >
                  Our <span className="color_purple">Range</span>
                </p>
                <div
                  className="d-flex justify-content-center pt-5"
                  data-aos="fade-down"
                  data-aos-duration="3000"
                  data-aos-delay="600"
                >
                  <p className="text-center mw_703 m-0 clr_white ff_Montserrat fw_400 fs_md lh_normal">
                    We have a variety of different recreational and medicinal
                    items in our range, including cannabis, vapes, edibles,
                    magic mushrooms, extracts, and CBD products, to help you
                    unwind, have fun, and even do some valuable soul searching.
                  </p>
                </div>
                <div
                  className="d-flex justify-content-center pt-4"
                  data-aos="fade-down"
                  data-aos-duration="3000"
                  data-aos-delay="900"
                >
                  <p className="text-center mw_703 m-0 clr_white ff_Montserrat fw_400 fs_md lh_normal">
                    Whether you’re looking to order edibles online or browse for
                    your new favorite strain, Purple Panda has got you covered.
                  </p>
                </div>
              </div>
              <div className="position-absolute bottom_0 left_20 animation_stem transisation">
                <img
                  src={leftstem}
                  alt="left side steam bg image"
                  className=" mw_177 W-100 h_291"
                />
              </div>
              <div className="position-absolute top_0 right_30 animation_stem transisation">
                <img
                  src={rightstem}
                  alt="right side stem bg image"
                  className="mw_177 w-100 h_291 object-fit-cover"
                />
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default OurRange;
