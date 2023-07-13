import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Container } from "react-bootstrap";
import mushroom1 from "../assets/img/webp/mushroom1.webp";
import mushroom2 from "../assets/img/webp/mushroom2.webp";
import mushroom3 from "../assets/img/webp/mushroom3.webp";
import mushroom4 from "../assets/img/webp/mushroom4.webp";
import mushroom5 from "../assets/img/webp/mushroom5.webp";
import mushroom6 from "../assets/img/webp/mushroom6.webp";
import mushroom7 from "../assets/img/webp/mushroom7.webp";
export const Mushrooms = () => {
  return (
    <section className="position-relative">
      <div className="all_shadow mushrooms_shadow express_cir_ani"></div>
      <Container className="container_1140 pt-sm-5 pt-3 pb-5">
        <Splide
          options={{
            perPage: 7,
            perMove: 0,
            interval: 1000,
            drag: "free",
            type: "loop",
            breakpoints: {
              1200: {
                rewind: "true",
                perPage: 5,
                type: "loop",
                perMove: 1,
                autoplay: true,
                autoScroll: {
                  drag: "free",
                  speed: 1,
                  pauseOnHover: false,
                },
              },
              992: {
                rewind: "true",
                perPage: 4,
                type: "loop",
                perMove: 1,
                autoplay: true,
                autoScroll: {
                  drag: "free",
                  speed: 0.1,
                  pauseOnHover: false,
                },
              },
              768: {
                rewind: "true",
                perPage: 3,
                type: "loop",
                perMove: 1,
                autoplay: true,
                autoScroll: {
                  drag: "free",
                  speed: 0.1,
                  pauseOnHover: false,
                },
              },
              576: {
                rewind: "true",
                perPage: 2,
                type: "loop",
                perMove: 1,
                autoplay: true,
                autoScroll: {
                  drag: "free",
                  speed: 1,
                  pauseOnHover: false,
                },
              },
            },
          }}
        >
          {/* box_1 */}
          <SplideSlide className="d-flex justify-content-center px-2">
            <div
              className="h-100 us_img_hover_1 px-1"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              <span>
                <img
                  src={mushroom1}
                  alt="mushroom1"
                  className="w-100 us_img_hover"
                />
              </span>
              <p className="ff_Philosopher mt-1 text-white fs_xl fw_700 text-center">
                Mushrooms
              </p>
            </div>
          </SplideSlide>
          {/* box_2 */}
          <SplideSlide className="d-flex justify-content-center px-2">
            <div
              className="h-100 us_img_hover_1 px-1"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="600"
            >
              <span>
                <img
                  src={mushroom2}
                  alt="mushroom2"
                  className="w-100 us_img_hover"
                />
              </span>
              <p className="ff_Philosopher mt-1 text-white fs_xl fw_700 text-center">
                Extracts
              </p>
            </div>
          </SplideSlide>
          {/* box_3 */}
          <SplideSlide className="d-flex justify-content-center px-2">
            <div
              className="h-100 d-flex flex-column justify-content-start align-items-center us_img_hover_1 px-1"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="900"
            >
              <span>
                <img
                  src={mushroom3}
                  alt="mushroom2"
                  className="w-100 us_img_hover"
                />
              </span>
              <p className="ff_Philosopher mt-1 text-white fs_xl fw_700 text-center">
                Vapes & Accessories
              </p>
            </div>
          </SplideSlide>
          {/* box_4 */}
          <SplideSlide className="d-flex justify-content-center px-2">
            <div
              className="h-100 us_img_hover_1 px-1"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="1200"
            >
              <span>
                <img
                  src={mushroom4}
                  alt="mushroom2"
                  className="w-100 us_img_hover"
                />
              </span>
              <p className="ff_Philosopher mt-1 text-white fs_xl fw_700 text-center">
                CBD
              </p>
            </div>
          </SplideSlide>
          {/* box_5 */}
          <SplideSlide className="d-flex justify-content-center px-2">
            <div
              className="h-100 us_img_hover_1 px-1"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="1500"
            >
              <span>
                <img
                  src={mushroom5}
                  alt="mushroom2"
                  className="w-100 us_img_hover"
                />
              </span>
              <p className="ff_Philosopher mt-1 text-white fs_xl fw_700 text-center">
                Edibles
              </p>
            </div>
          </SplideSlide>
          {/* box_6 */}
          <SplideSlide className="d-flex justify-content-center px-2">
            <div
              className="h-100 us_img_hover_1 px-1"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="1800"
            >
              <span>
                <img
                  src={mushroom6}
                  alt="mushroom2"
                  className="w-100 us_img_hover"
                />
              </span>
              <p className="ff_Philosopher mt-1 text-white fs_xl fw_700 text-center">
                Cannabis
              </p>
            </div>
          </SplideSlide>
          {/* box_7 */}
          <SplideSlide className="d-flex justify-content-center px-2">
            <div
              className="h-100 us_img_hover_1 px-1"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="2100"
            >
              <span>
                <img
                  src={mushroom7}
                  alt="mushroom2"
                  className="w-100 us_img_hover"
                />
              </span>
              <p className="ff_Philosopher mt-1 text-white fs_xl fw_700 text-center text-nowrap">
                Bulk Orders
              </p>
            </div>
          </SplideSlide>
        </Splide>
      </Container>
    </section>
  );
};
