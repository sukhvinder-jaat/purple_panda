import React from "react";

const StoreHours = () => {
  return (
    <>
      <section className="pb-sm-5 pb-3 ">
        <div className="store_container pb_17">
          <p className="ff_Philosopher fw_400 fs_3xl clr_white text-center pb-lg-3 pt-lg-0 pt-3 m-0">
            Store <span className="color_purple">Hours</span>
          </p>
          <div className="pt-sm-5 pt-4">
            <div className="d-flex align-items-center flex-column flex-sm-row justify-content-between">
              <div className="mw_272 bottom_line position-relative">
                <p className="ff_montserrat fw_600 clr_white fs_xl">
                  Mon : 10am-8pm
                </p>
              </div>
              <div className="mw_272 bottom_line pt_0 pt_sm_35 position-relative">
                <p className="ff_montserrat fw_600 clr_white fs_xl">
                  Tue : 10am-8pm
                </p>
              </div>
            </div>
            <div className="d-flex align-items-center flex-column flex-sm-row justify-content-between pt_35">
              <div className="mw_272 bottom_line position-relative">
                <p className="ff_montserrat fw_600 clr_white fs_xl">
                  Wed : 10am-8pm
                </p>
              </div>
              <div className="mw_272 bottom_line pt_0 pt_sm_35 position-relative">
                <p className="ff_montserrat fw_600 clr_white fs_xl">
                  Thu : 10am-8pm
                </p>
              </div>
            </div>
            <div className="d-flex align-items-center flex-column flex-sm-row justify-content-between pt_35">
              <div className="mw_272 bottom_line position-relative">
                <p className="ff_montserrat fw_600 clr_white fs_xl">
                  Fri : 10am-8pm
                </p>
              </div>
              <div className="mw_272 bottom_line pt_0 pt_sm_35 position-relative">
                <p className="ff_montserrat fw_600 clr_white fs_xl">
                  Sat : 10am-8pm
                </p>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-center pt_35">
              <div className="mw_272 bottom_line position-relative">
                <p className="ff_montserrat fw_600 clr_white fs_xl">
                  Sun : 10am-8pm
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StoreHours;
