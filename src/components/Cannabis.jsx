import React from "react";
import { Row, Col } from "react-bootstrap";
import cannabis_1 from "../assets/img/webp/cannabis_1.webp";
import cannabis_2 from "../assets/img/webp/cannabis_2.webp";
import cannabis_3 from "../assets/img/webp/cannabis_3.webp";
import cannabis_4 from "../assets/img/webp/cannabis_4.webp";
import cannabis_5 from "../assets/img/webp/cannabis_5.webp";
const Cannabis = () => {
  return (
    <section className="about_back py-xl-5 pb-5">
      <div className="container_1140">
        <div className="text-center d-flex flex-column align-items-center">
          <p className="fw_700 fs_3xl ff_Philosopher clr_white mb-0 lh_normal">
            Cannabis
          </p>
          <p className="fw_400 fs_md ff_Montserrat clr_white max_w_800 pt_14">
            While we stock all sorts of products to make you feel great, we’re
            experts and lovers of cannabis at heart. We offer a wide range of
            buds each with different highs, flavors, and aromas, so you can find
            the perfect joint-filler, bowl-packer, or pipe clearer to suit your
            tastes
          </p>
        </div>
        <Row className="pt-5">
          <Col xl={7}>
            <div
              className="back_shadow back_card ps-md-5 ps-3 py-5 pe-md-4 pe-2 border_about position-relative card_hover overflow-hidden"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <p
                className="fw_400 fs_3xl ff_Montserrat clr_white mb-0"
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                Strain <span className="color_purple">Families</span>
              </p>
              <p
                className="fw_400 fs_md ff_Montserrat clr_white mb-2"
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                We stock the three main families of cannabis at Purple Panda,
                each of which has its own qualities.
              </p>
              <span
                className="d-flex align-items-start pt-5"
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-delay="600"
              >
                <p className="fw_600 fs_xl ff_Montserrat clr_white">Indica:</p>
                <p className="fw_400 fs_md ff_Montserrat clr_white pt-1 ps-4 mb-2">
                  These are your bedtime buds, great for relaxing at the end of
                  the day and for treating stress and anxiety.
                </p>
              </span>
              <span
                className="d-flex align-items-start pt-4"
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-delay="900"
              >
                <p className="fw_600 fs_xl ff_Montserrat clr_white">Sativa:</p>
                <p className="fw_400 fs_md ff_Montserrat clr_white pt-1 ps-4 mb-2">
                  Smoke up some Sativa for a boost of energy and creativity,
                  perfect for a sunny summer’s day with friends!
                </p>
              </span>
              <span
                className="d-flex align-items-start pt-4"
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-delay="1200"
              >
                <p className="fw_600 fs_xl ff_Montserrat clr_white">Hybrid:</p>
                <p className="fw_400 fs_md ff_Montserrat clr_white pt-1 ps-4 mb-2">
                  These Get the best of both worlds with our Hybrid range,
                  bringing together the sensations and flavors of Indica and
                  Sativa for something totally unique.
                </p>
              </span>
            </div>
          </Col>
          <Col xl={5}>
            <div
              className="d-grid grid_gap"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <img
                className="about_1 w-100 us_img_hover"
                src={cannabis_1}
                alt="cannabis_1"
              />
              <img
                className="about_2 w-100 us_img_hover"
                src={cannabis_2}
                alt="cannabis_2"
              />
              <img
                className="about_3 w-100 us_img_hover"
                src={cannabis_3}
                alt="cannabis_3"
              />
              <img
                className="about_4 w-100 us_img_hover"
                src={cannabis_4}
                alt="cannabis_4"
              />
              <img
                className="about_5 w-100 us_img_hover"
                src={cannabis_5}
                alt="cannabis_5"
              />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Cannabis;
