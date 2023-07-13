import React from "react";
import { Container } from "react-bootstrap";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import most_1 from "../assets/img/webp/most_1.webp";
import most_2 from "../assets/img/webp/most_2.webp";
import most_3 from "../assets/img/webp/most_3.webp";
export const MostPopular = () => {
  return (
    <div className="bg_mostpopular position-relative">
      <div className="circle_shadow most_shadow express_cir_ani"></div>
      <Container className="container_1140 py-lg-5 pt-sm-5 pt-3 pb-4">
        <p
          className="text-center text-white ff_Philosopher fw_700 fs_3xl mb-0 lh_normal"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          Most <span className="color_purple">Popular</span> Items
        </p>
        <p
          className="text-white ff_Montserrat text-center fs_md fw_400 pt_14 mb-0"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <span className="d-block">
            Pellentesque tincidunt fermentum mauris dignissim quam
          </span>
          arcu. A netus natoque urna vivamus faucibus. Sollicitudin et nisl.
        </p>
        <Splide
          className="pt-5"
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
            <div
              className="h-100 most_box px-1 pt-1 pb-4 card_hover overflow-hidden latest_hover"
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
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
            <div
              className="h-100 most_box px-1 pt-1 pb-4 card_hover overflow-hidden latest_hover"
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="600"
            >
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
            <div
              className="h-100 most_box px-1 pt-1 pb-4 card_hover overflow-hidden latest_hover"
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="900"
            >
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
            <div
              className="h-100 most_box px-1 pt-1 pb-4 card_hover overflow-hidden latest_hover"
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="1200"
            >
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
