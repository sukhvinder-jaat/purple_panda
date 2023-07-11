import React from "react";
import { Container } from "react-bootstrap";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import first_1 from "../assets/img/webp/first_1.webp";
import first_2 from "../assets/img/webp/first_2.webp";
import first_3 from "../assets/img/webp/first_3.webp";
export const First = () => {
  return (
    <div className="first_bg py-xl-5">
      <Container className=" container_1140 py-sm-5 pb-5">
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
                perPage: 3,
                padding: "10px",
              },
              576: {
                perPage: 2,
                padding: "10px",
              },
              425: {
                perPage: 1,
                padding: "10px",
              },
            },
          }}
        >
          {/* box_1 */}
          <SplideSlide className="d-flex justify-content-center px-2">
            <div
              data-aos="flip-left"
              data-aos-duration="3000"
              data-aos-delay="300"
            >
              <span>
                <img
                  src={first_1}
                  alt="first_1"
                  className="w-100 us_img_hover"
                />
              </span>
              <p className="text-center ff_Philosopher fw_700 fs_2xl text-white lh_normal pt-3">
                <span className="color_purple">20% Off</span> For First Time
                Customers
              </p>
            </div>
          </SplideSlide>
          {/* box_2 */}
          <SplideSlide className="d-flex justify-content-center px-2">
            <div
              data-aos="flip-left"
              data-aos-duration="3000"
              data-aos-delay="300"
            >
              <span>
                <img
                  src={first_2}
                  alt="first_1"
                  className="w-100 us_img_hover"
                />
              </span>
              <p className="text-center ff_Philosopher fw_700 fs_2xl text-white lh_normal pt-3">
                Purple Panda’s
                <span className="color_purple"> Picks Of The week</span>
              </p>
            </div>
          </SplideSlide>
          {/* box_3 */}
          <SplideSlide className="d-flex justify-content-center px-2">
            <div
              data-aos="flip-left"
              data-aos-duration="3000"
              data-aos-delay="300"
            >
              <span>
                <img
                  src={first_3}
                  alt="first_1"
                  className="w-100 us_img_hover"
                />
              </span>
              <p className="text-center ff_Philosopher fw_700 fs_2xl text-white lh_normal pt-3 px-2">
                <span className="color_purple">Collect rewards</span> points
                every time you purchase
              </p>
            </div>
          </SplideSlide>
        </Splide>
      </Container>
    </div>
  );
};
