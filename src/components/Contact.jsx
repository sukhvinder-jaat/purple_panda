import React from "react";
import MyNav from "./MyNav";

const Contact = () => {
  return (
    <section className="contact_bg pb-5">
      <MyNav />
      <div className="container_1140 pb-5">
        <div
          className=" text-center pt-5"
          data-aos="fade-down"
          data-aos-duration="3000"
          data-aos-delay="300"
        >
          <p className="fw_400 fs_3xl ff_Philosopher clr_white mb-0">Contact</p>
          <p className="fw_400 fs_md ff_Montserrat clr_white">
            Home <span>&#62;</span> Contact
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
