import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import canada_1 from "../assets/img/svg/canada_1.svg";

const Canada = () => {
  return (
    <section className="py-5 mt_-1 canada_bg position-relative z-3">
      <div className="canada_gradient position-absolute"></div>
      <div className="container_1140 position-relative z-3 py-5">
        <div className="text-center d-flex flex-column align-items-center pt-5">
          <p className="fw_700 fs_3xl ff_Philosopher clr_white mb-0 lh_normal pb-1">
            Canada Wide <span className="color_purple">Mail Orders</span>
          </p>
          <p className="fw_400 fs_md ff_Montserrat clr_white opacity_08 max_w_980 pt-2 mb-0">
            Purple Panda offers discreet mail orders to all provinces in Canada,
            we have new list of products everyday to serve your needs whether
            its recreational or medinical use. We ship the next business day
            from Monday-Thursdays, EMT payment is required for all mail orders
          </p>
        </div>
        <Splide
          className="visible_slider"
          options={{
            perPage: 3,
            perMove: 0,
            breakpoints: {
              1200: {
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
              992: {
                rewind: "true",
                perPage: 3,
                type: "loop",
                perMove: 1,
              },
              768: {
                rewind: "true",
                perPage: 2,
                type: "loop",
                perMove: 1,
              },
              576: {
                rewind: "true",
                perPage: 1,
                type: "loop",
                perMove: 1,
              },
            },
          }}
        >
          {/* box_1 */}
          <SplideSlide className="pt-5 mt-5 p-3">
            <div className="h-100 back_shadow canada_border ">
              <div className="position-relative d-flex justify-content-center ">
                <span className="position-relative">
                  <img
                    className="canada_1 w-100"
                    src={canada_1}
                    alt="canada_1"
                  />
                  <p className="color_purple position-absolute text_circle ff_Montserrat fw_600 fs_2xl">
                    01
                  </p>
                </span>
              </div>
              <div className="canada_m px-3 px-xl-4 pb-2 pb-xl-5 canada_hover">
                <svg
                  width="77"
                  height="77"
                  viewBox="0 0 77 77"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M24.5528 0.343867C22.874 0.879797 20.2883 3.42193 19.7395 5.07573L19.3556 6.23242L16.5622 6.30593C13.2649 6.39281 12.8497 6.61541 12.8497 8.29877V9.38579L9.44737 9.49761C6.52601 9.59374 5.86352 9.69656 4.76117 10.2261C2.90724 11.1164 1.22329 12.9039 0.555667 14.6898L0 16.1766L0.0695868 38.9648L0.139174 61.7532L0.90129 63.1307C1.76509 64.6917 3.11266 65.9476 4.85464 66.8151L6.04506 67.4081H18.6803C31.0149 67.4081 31.3246 67.3958 31.7036 66.8941C32.232 66.1941 32.2053 65.1341 31.6466 64.628C31.2365 64.2563 29.827 64.2018 19.0003 64.1383C5.2434 64.0574 5.51045 64.0949 4.16057 62.0532L3.47728 61.0199L3.40898 38.7926L3.34042 16.5652L3.88941 15.4304C4.22143 14.7436 4.8495 14.0228 5.47938 13.6054C6.44024 12.9687 6.76198 12.9085 9.65356 12.8258L12.7865 12.7358L12.8926 14.4022C13.0266 16.5097 13.8647 17.8843 15.4981 18.6758C16.6202 19.2194 16.8292 19.2276 27.6883 19.1567L38.737 19.0845L39.7235 18.2861C41.0832 17.186 41.6337 16.1349 41.7972 14.3277L41.9369 12.787L44.4048 12.7885C45.7622 12.7893 47.3324 12.9175 47.8939 13.0736C49.203 13.4375 50.7164 14.9525 51.08 16.2629C51.2441 16.8551 51.364 19.5075 51.3648 22.5697C51.3663 28.2552 51.4303 28.5559 52.7016 28.8625C53.2423 28.9931 53.543 28.8813 54.0702 28.3536L54.7455 27.6776L54.6608 21.7101C54.5781 15.8943 54.5591 15.7072 53.9051 14.3292C53.0485 12.524 51.6157 11.0938 49.8257 10.2569C48.6006 9.68422 47.983 9.58269 45.1695 9.49144L41.9256 9.38656L41.7972 8.2453C41.6095 6.57865 41.2059 6.37867 38.007 6.36916L35.3036 6.36094L34.5797 4.69762C33.7935 2.89063 32.574 1.6026 30.7715 0.674679C29.3297 -0.0676555 26.3397 -0.226507 24.5528 0.343867ZM29.9904 4.1036C31.1048 4.84182 31.7452 5.96715 32.0841 7.78211C32.2066 8.43885 32.4408 9.11076 32.6049 9.27501C32.7831 9.45391 34.0333 9.60891 35.715 9.66083L38.5274 9.74796V12.2384C38.5274 14.0765 38.4227 14.8785 38.1276 15.3L37.7281 15.8714H27.4275C18.203 15.8714 17.0778 15.827 16.6574 15.446C16.2602 15.0862 16.1878 14.6112 16.1878 12.3616V9.70247H18.7271C21.8585 9.70247 22.3065 9.43746 22.6293 7.39398C22.8784 5.81755 23.7964 4.50227 25.1814 3.73758C26.4478 3.03868 28.6338 3.20499 29.9904 4.1036ZM10.2167 25.9603C9.98557 26.1371 9.72135 26.5939 9.62942 26.9756C9.49975 27.5146 9.60965 27.8169 10.1227 28.3305L10.7831 28.9916L27.4688 28.9217C43.8122 28.8536 44.1627 28.8415 44.5425 28.3379C45.0737 27.6342 45.0434 26.5772 44.4772 26.0644C44.0505 25.6778 42.488 25.639 27.3222 25.639C14.3693 25.639 10.5428 25.711 10.2167 25.9603ZM10.1173 35.805C9.60939 36.3134 9.5 36.6164 9.62942 37.1544C9.9563 38.5121 9.75524 38.4913 22.4637 38.4872C28.9686 38.4849 34.4177 38.3983 34.5731 38.2944C34.9143 38.0664 35.4461 37.093 35.4461 36.6969C35.4461 36.5398 35.1624 36.1276 34.8157 35.7805L34.1856 35.1495H22.4788H10.7721L10.1173 35.805ZM53.4205 35.4148C48.8877 36.0396 44.8375 38.0734 41.4737 41.4141C35.1146 47.7291 33.5036 56.9725 37.346 65.0948C41.0066 72.833 48.6114 77.3983 57.1305 76.9726C60.4013 76.8089 62.2943 76.3593 64.9098 75.1245C69.5649 72.9271 72.9205 69.5755 75.1031 64.9434C76.3572 62.282 76.8055 60.4012 76.9696 57.1131C77.2467 51.5564 75.6346 46.8842 71.8613 42.3071C69.6384 39.611 64.7167 36.6409 61.0961 35.8109C58.9061 35.3089 55.4737 35.1318 53.4205 35.4148ZM60.6411 39.1416C66.2918 40.6073 71.0352 45.1165 72.9357 50.829C73.7247 53.2005 73.9122 57.3309 73.3462 59.8766C71.2278 69.4087 61.8454 75.3967 52.3156 73.2987C46.162 71.9441 40.8443 66.8172 39.1417 60.5966C38.4201 57.9609 38.531 53.5883 39.3864 50.9575C40.3126 48.1087 41.6789 45.8823 43.8001 43.7642C46.504 41.0645 49.8611 39.312 53.4128 38.7463C55.321 38.4422 58.6465 38.6242 60.6411 39.1416ZM10.2167 45.2384C9.98557 45.4152 9.72135 45.872 9.62942 46.2537C9.5 46.7917 9.60939 47.0947 10.1173 47.6031L10.7721 48.2586H19.2691H27.7661L28.4209 47.6031C29.1491 46.8739 29.0988 45.8676 28.3036 45.2625C27.6853 44.7919 10.8299 44.7695 10.2167 45.2384ZM62.9537 48.7084C62.5433 49.0971 60.5587 51.3238 58.5433 53.6565C56.5278 55.9891 54.423 58.3999 53.8661 59.0134L52.8531 60.1295L49.9361 57.2483C47.2967 54.6414 46.9523 54.3841 46.3199 54.543C45.4633 54.7581 44.9659 55.3732 44.9551 56.2302C44.9487 56.7237 45.8102 57.7388 48.6093 60.5356C52.8628 64.7861 53.0924 64.883 54.6842 63.1027C56.1979 61.4098 60.0685 57.0186 61.6649 55.1833C62.4566 54.2728 63.6988 52.8447 64.4253 52.0099C65.9439 50.2645 66.1839 49.1091 65.1751 48.4018C64.3565 47.8278 63.8026 47.9041 62.9537 48.7084Z"
                    fill="#A020F0"
                  />
                </svg>
                <p className="fw_400 fs_md ff_Montserrat clr_white opacity_06 pt_37 mb-0">
                  Register for an account first, then head on other to our shop
                  selection
                </p>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide className="pt-5 mt-5 p-3">
            <div className="h-100 back_shadow canada_border">
              <div className="position-relative d-flex justify-content-center">
                <span className="position-relative">
                  <img
                    className="canada_1 w-100"
                    src={canada_1}
                    alt="canada_1"
                  />
                  <p className="color_purple position-absolute text_circle ff_Montserrat fw_600 fs_2xl">
                    02
                  </p>
                </span>
              </div>
              <div className="canada_m px-3 px-xl-4 pb-2 pb-xl-5 canada_hover">
                <svg
                  width="71"
                  height="73"
                  viewBox="0 0 71 73"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M36.0519 1.41004C30.7466 2.61708 25.9838 6.44915 23.882 11.2016L23.1769 12.7956L17.9747 12.8605L12.7725 12.9252L12.4758 11.9039C11.8162 9.63471 10.648 8.28018 8.61442 7.42751C7.64417 7.0207 6.91558 6.93953 4.22065 6.93809C2.44376 6.93737 0.86201 7.01567 0.705643 7.11241C-0.289933 7.72826 -0.217574 9.26788 0.831244 9.78796C1.11322 9.92779 2.57816 10.042 4.08729 10.042C7.14483 10.042 8.10526 10.3291 8.70773 11.4229C8.90596 11.7828 9.5384 13.5858 10.1135 15.4295C10.6883 17.2732 11.5833 20.1286 12.1025 21.7748C17.6994 39.5228 18.9527 43.5627 18.9527 43.858C18.9527 44.0471 17.8605 45.4544 16.5258 46.9849C13.1907 50.809 12.9219 51.2489 12.9234 52.8757C12.9255 54.9148 13.843 56.3651 15.722 57.2977C16.7537 57.8102 16.8021 57.8113 39.7887 57.8772C54.8126 57.9203 63.0599 57.8592 63.5068 57.7019C64.7161 57.276 64.903 55.6707 63.8208 55.0012C63.6644 54.9045 53.2781 54.8238 40.7398 54.8216C24.5909 54.819 17.7597 54.7405 17.3133 54.5523C16.5439 54.2273 16.0337 53.2662 16.2647 52.5757C16.3586 52.2946 17.5948 50.7176 19.0116 49.0714L21.5877 46.0783L38.2974 45.9586L55.0074 45.8389L56.2997 45.2266C57.0671 44.8629 57.9378 44.1822 58.4436 43.5505C58.9119 42.9653 61.0411 39.0387 63.1752 34.8245C65.3093 30.6103 67.5258 26.2464 68.1006 25.127C70.764 19.9413 71.01 19.3217 70.9997 17.8239C70.994 16.9737 70.8167 16.0796 70.5652 15.633C69.9922 14.6154 68.2182 13.2441 67.2405 13.0628C66.8024 12.9817 64.4375 12.9153 61.985 12.9153H57.5258L56.95 11.4887C56.1149 9.42017 54.0796 6.68452 52.2259 5.13987C50.2632 3.50398 46.6425 1.78262 44.1522 1.3011C41.7414 0.835139 38.3804 0.880394 36.0519 1.41004ZM43.2771 4.29391C45.4991 4.67367 48.6765 6.25711 50.4343 7.86043C53.3148 10.4879 54.7177 13.6301 54.7223 17.4648C54.7254 20.0893 54.1434 22.0188 52.6547 24.3189C48.6719 30.4726 40.0929 32.5749 33.2733 29.0682C28.8769 26.8076 25.931 22.167 25.931 17.5019C25.931 13.7323 27.2771 10.7096 30.1547 8.01727C33.6338 4.76226 38.2891 3.44125 43.2771 4.29391ZM42.2916 16.3207L37.0424 21.1627L35.0349 19.3138C33.3689 17.7796 32.8861 17.4648 32.1989 17.4648C31.2126 17.4648 30.4411 18.3445 30.674 19.2036C30.7551 19.5034 32.0882 20.9049 33.6361 22.3181C35.8811 24.3677 36.5988 24.8875 37.1837 24.8875C37.795 24.8875 38.9169 23.9633 43.9421 19.319C49.2749 14.3908 49.9675 13.6634 49.9675 12.991C49.9675 12.0275 49.3798 11.4787 48.348 11.4787C47.644 11.4787 46.8717 12.0962 42.2916 16.3207ZM22.5755 17.6444C22.5858 21.2901 24.3712 25.6111 26.9871 28.319C35.4823 37.1136 50.7917 35.1341 56.3031 24.5284C57.5589 22.1119 58.0117 20.3848 58.0696 17.7931L58.1089 16.0286L62.4192 16.0283L66.7297 16.0281L67.2653 16.659C67.5599 17.006 67.801 17.5383 67.801 17.8421C67.801 18.3186 66.2818 21.436 60.6335 32.5498C59.9975 33.8008 59.0404 35.6865 58.5062 36.74C56.3157 41.0608 55.8782 41.7897 55.2 42.2472C54.5083 42.7139 54.0816 42.7261 38.337 42.7261H22.1834L21.6285 40.9303C20.9565 38.7547 14.0942 17.0383 13.8921 16.4471C13.7593 16.0592 14.0764 16.0281 18.16 16.0281H22.5711L22.5755 17.6444ZM17.2727 61.0865C14.0945 62.1917 12.2796 65.2624 13.0932 68.1573C13.9634 71.253 16.6062 72.9926 20.0093 72.7096C21.6856 72.57 22.6207 72.1687 23.8194 71.0737C25.1869 69.8247 25.7486 68.5777 25.7486 66.7903C25.7486 64.3934 24.4237 62.4127 22.1369 61.3915C20.9679 60.8693 18.3663 60.706 17.2727 61.0865ZM56.0413 61.0865C52.863 62.1917 51.0481 65.2624 51.8617 68.1573C52.732 71.253 55.3747 72.9926 58.7778 72.7096C60.4542 72.57 61.3892 72.1687 62.588 71.0737C63.9555 69.8247 64.5171 68.5777 64.5171 66.7903C64.5171 64.3934 63.1922 62.4127 60.9054 61.3915C59.7364 60.8693 57.1348 60.706 56.0413 61.0865ZM21.2418 64.5234C23.5367 66.3126 22.2971 69.6636 19.3404 69.6636C17.9768 69.6636 16.807 68.8603 16.3653 67.6204C15.7253 65.8239 17.2572 63.9169 19.3404 63.9169C20.1654 63.9169 20.6704 64.0781 21.2418 64.5234ZM60.0104 64.5234C62.3052 66.3126 61.0657 69.6636 58.1089 69.6636C56.7453 69.6636 55.5755 68.8603 55.1338 67.6204C54.4939 65.8239 56.0257 63.9169 58.1089 63.9169C58.9339 63.9169 59.4389 64.0781 60.0104 64.5234Z"
                    fill="#A020F0"
                  />
                </svg>

                <p className="fw_400 fs_md ff_Montserrat clr_white opacity_06 pt_37 mb-0">
                  Register for an account first, then head on other to our shop
                  selection
                </p>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide className="pt-5 mt-5 p-3">
            <div className="h-100 back_shadow canada_border">
              <div className="position-relative d-flex justify-content-center">
                <span className="position-relative">
                  <img
                    className="canada_1 w-100"
                    src={canada_1}
                    alt="canada_1"
                  />
                  <p className="color_purple position-absolute text_circle ff_Montserrat fw_600 fs_2xl">
                    03
                  </p>
                </span>
              </div>
              <div className="canada_m px-3 px-xl-4 pb-2 pb-xl-5 canada_hover">
                <svg
                  width="70"
                  height="73"
                  viewBox="0 0 70 73"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.10883 1.20347C3.82606 1.5691 2.84781 2.18358 1.83764 3.25845C0.265416 4.93128 -9.42839e-06 5.94992 0.00458921 10.2948C0.00688853 12.3443 0.0929853 14.1411 0.196199 14.2878C0.545952 14.7848 1.45904 14.8941 1.89003 14.4907C2.22982 14.1722 2.30109 13.485 2.30569 10.4745C2.31029 7.46913 2.3923 6.67567 2.78038 5.8755C3.34857 4.70348 4.5478 3.715 5.82443 3.36612C6.4731 3.18881 12.124 3.13043 23.7793 3.18044L40.7876 3.25318L41.8236 3.89542C43.4819 4.92339 43.9433 6.10258 43.9433 9.3109V11.9871H43.1769H42.4105L42.4066 9.41475C42.4025 6.52779 42.1933 5.93125 40.9001 5.11481C40.0981 4.60873 39.7655 4.56925 36.2981 4.56925C31.9544 4.56925 31.6857 4.66711 31.0416 6.48376L30.6172 7.67994H23.1345H15.6515L15.3268 6.59407C14.7754 4.7499 14.311 4.56925 10.1178 4.56925C6.01092 4.56925 5.11905 4.82815 4.29972 6.25907C3.85493 7.03603 3.83296 8.4703 3.83296 36.8726C3.83296 65.275 3.85493 66.7092 4.29972 67.4862C4.55648 67.9346 5.15839 68.4984 5.63716 68.7388C6.45469 69.1495 7.52363 69.176 23.2717 69.176H40.0355L40.9001 68.6304C42.1642 67.8324 42.4025 67.1981 42.4066 64.6176C42.4107 62.2131 42.2283 61.7582 41.2608 61.7582C40.314 61.7582 40.1111 62.2226 40.1111 64.3903C40.1111 65.6719 39.9954 66.5566 39.8046 66.7353C39.5726 66.9526 35.5393 67.0225 23.2165 67.0225C8.75605 67.0225 6.8903 66.9803 6.53365 66.6465C6.17316 66.3087 6.13228 63.2789 6.13228 36.8726C6.13228 10.4664 6.17316 7.43659 6.53365 7.09872C6.85325 6.79937 7.54995 6.7228 9.94941 6.7228H12.9638L13.2806 7.78283C13.6763 9.10655 14.3214 9.77009 15.3924 9.95506C15.8497 10.0338 19.6975 10.0658 23.9433 10.0259C32.6726 9.94357 32.2367 10.0426 32.9794 7.97163L33.3841 6.84245L36.3921 6.77473C38.391 6.72974 39.5192 6.79985 39.7555 6.98362C40.0153 7.18534 40.1111 7.89506 40.1111 9.61551V11.971L26.6346 12.0387C11.6826 12.1141 12.2071 12.0579 10.9427 13.7183L10.3477 14.4995L10.2785 29.8307L10.2092 45.1617L10.7956 45.9767C11.118 46.4249 11.7697 47.0365 12.2439 47.3356L13.1059 47.8797H26.6036H40.1014L40.1701 53.1748C40.2355 58.2072 40.2649 58.486 40.7616 58.7949C41.2074 59.0718 41.3676 59.0653 41.8474 58.7504C42.3987 58.3888 42.4105 58.2716 42.4105 53.1303V47.8797H43.1769H43.9433V57.4951C43.9433 66.8047 43.926 67.144 43.4015 68.1591C43.075 68.7905 42.4475 69.4632 41.8236 69.8498L40.7876 70.4921L23.7793 70.5648C12.124 70.6148 6.4731 70.5564 5.82443 70.3791C4.5478 70.0303 3.34857 69.0418 2.78038 67.8698C2.33508 66.9521 2.31105 65.6561 2.30569 42.4444C2.30007 18.5109 2.28935 17.9807 1.80599 17.7383C1.13458 17.4018 0.872974 17.4258 0.402124 17.8665C0.042408 18.2037 0.000753269 20.786 0.000753269 42.7095C0.000753269 69.8556 -0.0891912 68.3924 1.69661 70.3461C2.19276 70.8888 3.13498 71.6282 3.79054 71.9893L4.98262 72.6456L22.8141 72.7117C40.0598 72.7756 40.6832 72.7624 41.7794 72.3082C43.5175 71.5882 44.5557 70.7347 45.3712 69.3564L46.1149 68.0992L46.2427 58.0493L46.3704 47.9993L56.8905 47.8797C67.0127 47.7646 67.4373 47.7414 68.1158 47.2667C68.5037 46.9953 69.058 46.4761 69.3478 46.1126C69.8654 45.4637 69.8756 45.1844 69.9374 30.215L70 14.9781L69.4262 14.0344C68.4467 12.4233 67.577 12.1194 63.6728 12.0232C60.8696 11.9543 60.1717 12.0072 59.649 12.3278C58.8639 12.8097 58.8368 13.517 59.5846 14.0073C60.0243 14.2959 60.8743 14.3806 63.3529 14.3835C65.1132 14.3856 66.6798 14.4663 66.8343 14.563C67.6641 15.082 67.703 15.779 67.703 30.1679V44.5515L67.0758 45.1387L66.4488 45.7261H40.0135H13.5782L13.0489 45.0956C12.7229 44.7078 12.5193 44.1136 12.5193 43.5511V42.637L19.5015 42.5664L26.4838 42.4958L27.4432 41.81C29.3508 40.4466 30.0077 38.5215 29.2727 36.4491C29.0437 35.8033 28.5433 34.994 28.1605 34.6509C26.7398 33.3762 26.1208 33.2834 19.0422 33.2834H12.5193V24.3102C12.5193 15.656 12.5374 15.3201 13.0302 14.8585C13.5328 14.3878 13.8818 14.3799 34.252 14.3799C48.0397 14.3799 55.1277 14.2971 55.4568 14.1322C55.7726 13.9738 55.9509 13.6317 55.9509 13.1835C55.9509 12.7353 55.7726 12.3931 55.4568 12.2347C55.1714 12.0919 53.1194 11.9871 50.6027 11.9871H46.2427V9.0252C46.2427 5.81257 46.0666 5.15573 44.7512 3.46064C44.2417 2.80452 43.4474 2.22091 42.3897 1.72583L40.7961 0.97998L23.2724 1.00056C13.6347 1.01181 5.46088 1.10321 5.10883 1.20347ZM17.6092 18.19L16.8624 18.8895V22.2763V25.6631L17.6092 26.3625L18.356 27.062H23.6327H28.9094L29.6561 26.3625L30.4029 25.6631V22.2763V18.8895L29.6561 18.19L28.9094 17.4906H23.6327H18.356L17.6092 18.19ZM27.9758 22.2763V24.7888H23.6327H19.2895L19.2154 22.5335C19.1748 21.2931 19.2008 20.133 19.2737 19.9555C19.3789 19.6985 20.2813 19.6458 23.6909 19.6982L27.9758 19.7638V22.2763ZM37.8208 20.5855C37.412 21.301 37.4966 23.1432 37.9577 23.5754C38.9068 24.4641 40.1111 23.6036 40.1111 22.037C40.1111 21.5692 39.932 20.9471 39.7133 20.6547C39.2208 19.9957 38.1795 19.9576 37.8208 20.5855ZM43.7389 20.4099C43.3631 20.7619 43.3345 22.8542 43.6968 23.4885C43.9924 24.0058 44.9558 24.1037 45.4251 23.6641C45.5937 23.5062 45.7317 22.774 45.7317 22.037C45.7317 20.6058 45.4415 20.1227 44.582 20.1227C44.287 20.1227 43.9076 20.2519 43.7389 20.4099ZM48.0821 20.4099C47.9135 20.5678 47.7755 21.3 47.7755 22.037C47.7755 22.774 47.9135 23.5062 48.0821 23.6641C48.5064 24.0616 49.1952 24.0231 49.6735 23.5754C50.1346 23.1432 50.2192 21.301 49.8104 20.5855C49.5148 20.0682 48.5514 19.9703 48.0821 20.4099ZM56.5129 20.4099C56.3443 20.5678 56.2064 21.3 56.2064 22.037C56.2064 23.4213 56.4984 23.9513 57.2613 23.9513C58.0803 23.9513 58.5057 23.2667 58.5057 21.9482C58.5057 20.6018 58.204 20.1227 57.356 20.1227C57.061 20.1227 56.6816 20.2519 56.5129 20.4099ZM60.4364 20.6547C59.6206 21.7453 60.1924 23.9513 61.2909 23.9513C62.0679 23.9513 62.5934 23.1621 62.5934 21.9954C62.5934 20.3182 61.2925 19.5097 60.4364 20.6547ZM41.9506 33.0919C41.7334 33.2953 41.644 34.7138 41.644 37.9494C41.644 42.7456 41.7219 43.094 42.7937 43.094C43.6766 43.094 43.9433 42.6111 43.9433 41.0122V39.5048H45.1058C46.5745 39.5048 47.5791 39.0216 48.2617 37.9867C49.3567 36.3273 48.6559 34.1216 46.7485 33.224C45.6964 32.7287 42.4342 32.639 41.9506 33.0919ZM51.5526 33.2235C50.9545 33.866 47.82 41.8852 47.9646 42.4032C48.2809 43.5362 50.0899 43.0665 50.4399 41.7602C50.5868 41.2123 50.6995 41.18 52.4429 41.1821L54.2903 41.1845L54.7185 42.1393C55.047 42.872 55.2874 43.094 55.7531 43.094C56.4856 43.094 56.9728 42.682 56.9728 42.0627C56.9728 41.5133 54.0212 34.1087 53.4975 33.3432C53.0558 32.6981 52.0967 32.639 51.5526 33.2235ZM56.5129 33.0919C55.9529 33.6164 56.1936 34.4003 57.4838 36.2512L58.7612 38.0839V40.2128C58.7612 42.5212 59.0828 43.1883 60.128 43.0469C60.9435 42.9366 61.3081 41.9711 61.3121 39.9103C61.316 38.0796 61.3413 38.0056 62.5934 36.1775C63.9819 34.1501 64.1528 33.4415 63.3501 33.0393C62.5441 32.6351 62.0303 32.9311 61.0605 34.358C60.5687 35.0816 60.0909 35.6743 59.999 35.675C59.907 35.6757 59.5332 35.1993 59.1684 34.6164C58.0619 32.8479 57.263 32.3894 56.5129 33.0919ZM45.9302 35.3309C47.0635 36.0744 46.3614 37.3512 44.8194 37.3512H43.9433V36.1548C43.9433 35.0062 43.9717 34.9584 44.6528 34.9584C45.0432 34.9584 45.618 35.1261 45.9302 35.3309ZM26.4654 36.228C27.3885 37.2337 27.3295 38.8307 26.3349 39.7625L25.5881 40.4619H19.0537H12.5193V37.9382V35.4142L19.1842 35.4855L25.8492 35.5566L26.4654 36.228ZM53.3772 38.8467C53.3877 38.9453 52.9937 39.0262 52.5019 39.0262C52.0101 39.0262 51.6077 38.9745 51.6077 38.9113C51.6077 38.8482 51.8014 38.343 52.0385 37.7886L52.469 36.7805L52.9135 37.724C53.1582 38.2428 53.3667 38.7481 53.3772 38.8467ZM15.9683 52.2979C15.4062 52.489 14.5797 53.0181 14.1314 53.4737C12.2952 55.3399 12.9028 58.4451 15.3316 59.6056C16.3275 60.0815 16.7033 60.1012 23.4988 60.0339C30.2634 59.9672 30.6584 59.9384 31.3428 59.463C32.5885 58.598 33.2132 57.5066 33.2132 56.1956C33.2132 54.6314 32.5974 53.4835 31.3402 52.7039L30.3137 52.0672L23.6521 52.0088C18.347 51.9624 16.782 52.0212 15.9683 52.2979ZM30.4029 54.819C31.1131 55.4842 31.061 56.6172 30.2867 57.3422L29.6597 57.9296H23.1616C17.3484 57.9296 16.6067 57.8856 16.1251 57.5109C15.3035 56.872 15.1793 55.7802 15.839 54.9946L16.3885 54.3404H23.1404C29.5514 54.3404 29.9177 54.3646 30.4029 54.819Z"
                    fill="#A020F0"
                  />
                </svg>

                <p className="fw_400 fs_md ff_Montserrat clr_white opacity_06 pt_37 mb-0">
                  Register for an account first, then head on other to our shop
                  selection
                </p>
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </section>
  );
};

export default Canada;
