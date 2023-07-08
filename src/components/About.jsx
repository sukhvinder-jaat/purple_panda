import React from "react";
import { Row, Col } from "react-bootstrap";
import Button from "./Button";
const About = () => {
  return (
    <section className="about_back">
      <div className="container_1140">
        <Row>
          <Col lg={7}>
            <div className="back_shadow back_card p-5 botder position-relative">
              <p className="fw_400 fs_3xl ff_Philosopher clr_white">
                About <span className="color_purple">Us</span>
              </p>
              <p className="fw_400 fs_md ff_Montserrat clr_white">
                Purple Panda is a Canadian online cannabis dispensary with a
                passion for good weed and even better customer service. We all
                remember the days of waiting for scary strangers on street
                corners, but thankfully those days are over. Now, we’re proud of
                how we provide an easy, convenient, and user-friendly experience
                to our clients.
              </p>
              <p className="fw_400 fs_md ff_Montserrat clr_white">
                We specialize in high-quality cannabis for both recreational and
                medical purposes, while also making sure that you’re getting the
                best bud for your buck! Along with all the different strains of
                cannabis that we stock, you can also get your fill of edibles,
                vapes, CBD, extracts, and even buy magic mushrooms online from
                our store.
              </p>
              <Button textbtn="READ MORE" />
            </div>
          </Col>
          <Col lg={5}>
            <div className="d-grid grid_gap"></div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default About;
