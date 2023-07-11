import React from "react";
import { Row, Col } from "react-bootstrap";
import Button from "./Button";
import about_1 from "../assets/img/webp/about_1.webp";
import about_2 from "../assets/img/webp/about_2.webp";
import about_3 from "../assets/img/webp/about_3.webp";
import about_4 from "../assets/img/webp/about_4.webp";
import about_5 from "../assets/img/webp/about_5.webp";

const About = () => {
  return (
    <section className="about_back py-5">
      <div className="container_1140">
        <Row className=" align-items-center">
          <Col xl={7}>
            <div className="back_shadow back_card p-4 p-sm-5 border_about position-relative card_hover overflow-hidden">
              <p className="fw_400 fs_3xl ff_Philosopher clr_white mb-0 lh_normal">
                About <span className="color_purple">Us</span>
              </p>
              <p className="fw_400 fs_md ff_Montserrat clr_white mb-0 pt_14">
                Purple Panda is a Canadian online cannabis dispensary with a
                passion for good weed and even better customer service. We all
                remember the days of waiting for scary strangers on street
                corners, but thankfully those days are over. Now, we’re proud of
                how we provide an easy, convenient, and user-friendly experience
                to our clients.
              </p>
              <p className="fw_400 fs_md ff_Montserrat clr_white mb-0 pb-2">
                We specialize in high-quality cannabis for both recreational and
                medical purposes, while also making sure that you’re getting the
                best bud for your buck! Along with all the different strains of
                cannabis that we stock, you can also get your fill of edibles,
                vapes, CBD, extracts, and even buy magic mushrooms online from
                our store.
              </p>
              <div className="mt-5">
                <Button textbtn="READ MORE" />
              </div>
            </div>
          </Col>
          <Col xl={5}>
            <div className="d-grid grid_gap">
              <img
                className="about_1 w-100 us_img_hover"
                src={about_1}
                alt="about_1"
              />
              <img className="about_2 w-100 us_img_hover" src={about_2} alt="about_2" />
              <img className="about_3 w-100 us_img_hover" src={about_3} alt="about_3" />
              <img className="about_4 w-100 us_img_hover" src={about_4} alt="about_4" />
              <img className="about_5 w-100 us_img_hover" src={about_5} alt="about_5" />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default About;
