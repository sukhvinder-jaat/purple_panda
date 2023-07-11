import React from "react";
import { Container } from "react-bootstrap";
import blog_1 from "../assets/img/webp/blog_1.webp";
import blog_2 from "../assets/img/webp/blog_2.webp";
import blog_3 from "../assets/img/webp/blog_3.webp";
import { Splide, SplideSlide } from "@splidejs/react-splide";
export const Latest = () => {
  return (
    <div className="latest_bg py-5">
      <Container className="container_1140 pt-5">
        <p
          className="text-center text-white ff_Philosopher fw_700 fs_3xl mb-0 pb-5"
          data-aos="fade-left"
          data-aos-duration="3000"
          data-aos-delay="300"
        >
          Latest <span className="color_purple">Blogs</span> And
          <span className="color_purple">News</span>
        </p>

        <Splide
          options={{
            perPage: 3,
            dots: "true",
            perMove: 0,
            breakpoints: {
              1200: {
                rewind: "true",
                perPage: 3,
                type: "loop",
              },
              992: {
                perPage: 2,
              },
              576: {
                perPage: 1,
              },
            },
          }}
        >
          {/* box_1 */}
          <SplideSlide className="d-flex justify-content-center px-2">
            <div
              className="most_box p-2 card_hover overflow-hidden latest_hover"
              data-aos="fade-down"
              data-aos-duration="3000"
              data-aos-delay="300"
            >
              <span>
                <img src={blog_1} alt="blog_1" className="w-100 z-3" />
              </span>
              <div className="ps-4 pt-3 pe-2 pb-3">
                <p className="text-white ff_Montserrat fw_400 fs_xsm mb-0 pb-2">
                  12 Dec 2022
                </p>
                <p className="text-white ff_Montserrat fw_600 fs_xl mb-0">
                  Integer vulputate
                </p>
                <p className="text-white ff_Montserrat fs_md fw_400">
                  Nulla vitae imperdiet molestie pulvinar neque. Urna senectus
                  pharetra odio sed senectus sed morbi suspendisse convallis.
                </p>
                <a className="ff_Montserrat fw_400 fs_sm color_purple" href="#">
                  READ MORE....
                </a>
              </div>
            </div>
          </SplideSlide>
          {/* box_2 */}
          <SplideSlide className="d-flex justify-content-center px-2">
            <div
              className="most_box p-2 card_hover overflow-hidden latest_hover"
              data-aos="fade-down"
              data-aos-duration="3000"
              data-aos-delay="600"
            >
              <span>
                <img src={blog_2} alt="blog_1" className="w-100 z-3" />
              </span>
              <div className="ps-4 pt-3 pb-3">
                <p className="text-white ff_Montserrat fw_400 fs_xsm mb-0 pb-2">
                  15 Nov 2022
                </p>
                <p className="text-white ff_Montserrat fw_600 fs_xl mb-0">
                  Lectus aenean
                </p>
                <p className="text-white ff_Montserrat fs_md fw_400">
                  Tempor cras et scelerisque bibendum. Sapien proin pharetra
                  iaculis cras massa auctor turpis. Eget massa imperdiet sit
                  massa. Hac sit nec.
                </p>
                <a className="ff_Montserrat fw_400 fs_sm color_purple" href="#">
                  READ MORE....
                </a>
              </div>
            </div>
          </SplideSlide>
          {/* box_3 */}
          <SplideSlide className="d-flex justify-content-center px-2">
            <div
              className="most_box p-2 card_hover overflow-hidden latest_hover"
              data-aos="fade-down"
              data-aos-duration="3000"
              data-aos-delay="900"
            >
              <span>
                <img src={blog_3} alt="blog_1" className="w-100 z-3" />
              </span>
              <div className="ps-4 pt-3 pb-3">
                <p className="text-white ff_Montserrat fw_400 fs_xsm mb-0 pb-2">
                  22 Dec 2022
                </p>
                <p className="text-white ff_Montserrat fw_600 fs_xl mb-0">
                  Egestas odio
                </p>
                <p className="text-white ff_Montserrat fs_md fw_400">
                  Viverra sit volutpat pulvinar vulputate accumsan sapien. Amet
                  urna etiam curabitur ac in viverra tortor proin. Dui viverra
                  eu tristique in eget ut purus.
                </p>
                <a className="ff_Montserrat fw_400 fs_sm color_purple" href="#">
                  READ MORE....
                </a>
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </Container>
    </div>
  );
};
