import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Container } from "react-bootstrap";
import mushroom1 from "../assets/img/png/mushroom1.png";
import mushroom2 from "../assets/img/png/mushroom2.png";
import mushroom3 from "../assets/img/png/mushroom3.png";
import mushroom4 from "../assets/img/png/mushroom4.png";
import mushroom5 from "../assets/img/png/mushroom5.png";
import mushroom6 from "../assets/img/png/mushroom6.png";
import mushroom7 from "../assets/img/png/mushroom7.png";
export const Mushrooms = () => {
  return (
    <div>
      <Container className=" container_1140 py-5">
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
                  speed: 0.1,
                  pauseOnHover: false,
                },
              },
            },
          }}
        >
          {/* box_1 */}
          <SplideSlide className=" d-flex justify-content-center px-2">
            <div className="h-100">
              <span>
                <img src={mushroom1} alt="mushroom1" className="w-100" />
              </span>
              <p className=" ff_Philosopher mt-1 text-white fs_xl fw_700 text-center">
                Mushrooms
              </p>
            </div>
          </SplideSlide>
          {/* box_2 */}
          <SplideSlide className=" d-flex justify-content-center px-2">
            <div className="h-100">
              <span>
                <img src={mushroom2} alt="mushroom2" className="w-100" />
              </span>
              <p className=" ff_Philosopher mt-1 text-white fs_xl fw_700 text-center">
                Extracts
              </p>
            </div>
          </SplideSlide>
          {/* box_3 */}
          <SplideSlide className=" d-flex justify-content-center px-2">
            <div className="h-100 d-flex flex-column justify-content-start align-items-center">
              <span>
                <img src={mushroom3} alt="mushroom2" className="w-100" />
              </span>
              <p className=" ff_Philosopher mt-1 text-white fs_xl fw_700 text-center">
                Vapes & Accessories
              </p>
            </div>
          </SplideSlide>
          {/* box_4 */}
          <SplideSlide className=" d-flex justify-content-center px-2">
            <div className="h-100">
              <span>
                <img src={mushroom4} alt="mushroom2" className="w-100" />
              </span>
              <p className=" ff_Philosopher mt-1 text-white fs_xl fw_700 text-center">
                CBD
              </p>
            </div>
          </SplideSlide>
          {/* box_5 */}
          <SplideSlide className=" d-flex justify-content-center px-2">
            <div className="h-100">
              <span>
                <img src={mushroom5} alt="mushroom2" className="w-100" />
              </span>
              <p className=" ff_Philosopher mt-1 text-white fs_xl fw_700 text-center">
                Edibles
              </p>
            </div>
          </SplideSlide>
          {/* box_6 */}
          <SplideSlide className=" d-flex justify-content-center px-2">
            <div className="h-100">
              <span>
                <img src={mushroom6} alt="mushroom2" className="w-100" />
              </span>
              <p className=" ff_Philosopher mt-1 text-white fs_xl fw_700 text-center">
                Cannabis
              </p>
            </div>
          </SplideSlide>
          {/* box_7 */}
          <SplideSlide className=" d-flex justify-content-center px-2">
            <div className="h-100">
              <span>
                <img src={mushroom7} alt="mushroom2" className="w-100" />
              </span>
              <p className=" ff_Philosopher mt-1 text-white fs_xl fw_700 text-center text-nowrap">
                Bulk Orders
              </p>
            </div>
          </SplideSlide>
        </Splide>
      </Container>
    </div>
  );
};
