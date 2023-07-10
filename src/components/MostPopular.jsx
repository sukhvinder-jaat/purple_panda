import React from "react";
import { Container } from "react-bootstrap";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import most_1 from "../assets/img/png/most_1.png";
import most_2 from "../assets/img/png/most_2.png";
import most_3 from "../assets/img/png/most_3.png";
export const MostPopular = () => {
  return (
    <div className="bg_mostpopular">
      <Container className="container_1140 py-5">
        <p className="text-center text-white ff_Philosopher fw_700 fs_3xl mb-0">
          Most <span className="color_purple">Popular</span> Items
        </p>
        <p className="text-white ff_Montserrat text-center fs_md fw_400">
          <span className="d-block">
            Pellentesque tincidunt fermentum mauris dignissim quam
          </span>
          arcu. A netus natoque urna vivamus faucibus. Sollicitudin et nisl.
        </p>
        <Splide
          options={{
            perPage: 4,
            dots: "true",
            perMove: 0,
            breakpoints: {
              1200: {
                rewind: "true",
                perPage: 3,
                autoplay: true,
                autoScroll: {
                  drag: "free",
                  speed: 5000,
                  pauseOnHover: true,
                },
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
          <SplideSlide className="d-flex justify-content-center">
            <div className="h-100 most_box px-1 pt-1 pb-4">
              <span>
                <img src={most_1} alt="most_1" className="w-100" />
              </span>
              <div className="pt-2">
                <p className="text-white ff_Montserrat fw_400 fs_xl mb-0 text-nowrap">
                  Stoner Patch(500mg)
                </p>
                <p className="mb-0 ff_Montserrat mb-2 fs_xl fw_700 color_purple lh_normal">
                  $20.00
                </p>
                <button className="fw_700 mt-4 fs_md ff_Montserrat btn_all rounded-pill clr_white border-0 lh_normal">
                  ADD TO CART
                </button>
              </div>
            </div>
          </SplideSlide>
          {/* box_2 */}
          <SplideSlide className="d-flex justify-content-center">
            <div className="h-100 most_box px-1 pt-1 pb-4">
              <span>
                <img src={most_2} alt="most_1" className="w-100" />
              </span>
              <div className="pt-2">
                <p className="text-white ff_Montserrat fw_400 fs_xl mb-0 text-nowrap">
                  Stoner Patch(500mg)
                </p>
                <p className="mb-0 ff_Montserrat mb-2 fs_xl fw_700 color_purple lh_normal">
                  $20.00
                </p>
                <button className="fw_700 mt-4 fs_md ff_Montserrat btn_all rounded-pill clr_white border-0 lh_normal">
                  ADD TO CART
                </button>
              </div>
            </div>
          </SplideSlide>
          {/* box_3 */}
          <SplideSlide className="d-flex justify-content-center">
            <div className="h-100 most_box px-1 pt-1 pb-4">
              <span>
                <img src={most_3} alt="most_1" className="w-100" />
              </span>
              <div className="pt-2">
                <p className="text-white ff_Montserrat fw_400 fs_xl mb-0 text-nowrap">
                  Stoner Patch(500mg)
                </p>
                <p className="mb-0 ff_Montserrat mb-2 fs_xl fw_700 color_purple lh_normal">
                  $20.00
                </p>
                <button className="fw_700 mt-4 fs_md ff_Montserrat btn_all rounded-pill clr_white border-0 lh_normal">
                  ADD TO CART
                </button>
              </div>
            </div>
          </SplideSlide>
          {/* box_3 */}
          <SplideSlide className="d-flex justify-content-center">
            <div className="h-100 most_box px-1 pt-1 pb-4">
              <span>
                <img src={most_3} alt="most_1" className="w-100" />
              </span>
              <div className="pt-2">
                <p className="text-white ff_Montserrat fw_400 fs_xl mb-0 text-nowrap">
                  Stoner Patch(500mg)
                </p>
                <p className="mb-0 ff_Montserrat mb-2 fs_xl fw_700 color_purple lh_normal">
                  $20.00
                </p>
                <button className="fw_700 mt-4 fs_md ff_Montserrat btn_all rounded-pill clr_white border-0 lh_normal">
                  ADD TO CART
                </button>
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </Container>
    </div>
  );
};
