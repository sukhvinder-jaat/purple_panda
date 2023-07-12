import React from "react";
import { Row, Col } from "react-bootstrap";
import feel from "../assets/img/webp/feel.webp";
import call from "../assets/img/svg/call.svg";
import msg from "../assets/img/svg/msg.svg";
import Button from "./Button";

const Feel = () => {
  const [myData, setData] = React.useState({
    Name: "",
    Last: "",
    Email: "",
    number: "",
  });
  const userInput = (e) => {
    const myName = e.target.name;
    const value = e.target.value;
    setData({ ...myData, [myName]: value });
  };
  const Formsubmission = (i) => {
    i.preventDefault();
    setData({ Name: "", Email: "", number: "", Last: "" });
    console.log(myData);
  };
  return (
    <section className="py-5">
      <div className="container_1140">
        <Row className="align-items-center">
          <Col
            lg={5}
            data-aos="fade-right"
            data-aos-duration="3000"
            data-aos-delay="300"
          >
            <img className="w-100" src={feel} alt="feel" />
          </Col>
          <Col lg={7}>
            <div
              className="back_shadow feel_back p-3 p-sm-0 py-sm-5 ps-sm-4 pe-sm-5 card_hover overflow-hidden position-relative"
              data-aos="fade-right"
              data-aos-duration="3000"
              data-aos-delay="300"
            >
              <p
                className="fw_700 fs_2xl ff_Philosopher clr_white lh_105"
                data-aos="fade-down"
                data-aos-duration="3000"
                data-aos-delay="300"
              >
                Feel free to <span className="color_purple">contact us</span>
                anytime you need our help.
              </p>
              <p
                className="fw_400 fs_md ff_Montserrat clr_white"
                data-aos="fade-down"
                data-aos-duration="3000"
                data-aos-delay="600"
              >
                We usually reply in 24 hours, if there is an urgent need to
                reach us. please give us a call at the number below
              </p>
              <Row
                data-aos="fade-down"
                data-aos-duration="3000"
                data-aos-delay="900"
              >
                <Col sm={4}>
                  <div className="text-nowrap">
                    <img
                      className="pointer input_hover"
                      src={call}
                      alt="call"
                    />
                    <a
                      className="ps-2 fw_600 fs_md ff_Montserrat clr_white"
                      href="tel:1-888-726-3219"
                    >
                      1-888-726-3219
                    </a>
                  </div>
                </Col>
                <Col sm={8} className="d-flex justify-content-center">
                  <div className="text-nowrap mt-2 mt-sm-0 input_hover">
                    <img className="pointer" src={msg} alt="msg" />
                    <a
                      className="ps-2 fw_600 fs_md ff_Montserrat clr_white"
                      href="mailto:purplepandagta.info@proton.me"
                    >
                      purplepandagta.info@proton.me
                    </a>
                  </div>
                </Col>
              </Row>
              <div className="d-flex align-items-center justify-content-between pt-3"></div>
              <form onSubmit={Formsubmission}>
                <Row
                  className="pt-sm-5 pt-3"
                  data-aos="fade-down"
                  data-aos-duration="3000"
                  data-aos-delay="1200"
                >
                  <Col sm={6}>
                    <input
                      required
                      className="back_shadow input_border p-1 ps-4 fw_400 fs_md ff_Montserrat clr_white opacity_04 w-100"
                      placeholder="First name"
                      onChange={userInput}
                      type="text"
                      name="Name"
                      value={myData.Name}
                    />
                  </Col>
                  <Col sm={6}>
                    <input
                      required
                      className="back_shadow input_border p-1 ps-4 fw_400 fs_md ff_Montserrat clr_white opacity_04 w-100 mt-3 mt-sm-0"
                      type="text"
                      id="name"
                      onChange={userInput}
                      placeholder="Last name"
                      name="Last"
                      value={myData.Last}
                    />
                  </Col>
                  <Col sm={6} className="pt-3">
                    <input
                      required
                      className="back_shadow input_border p-1 ps-4 fw_400 fs_md ff_Montserrat clr_white opacity_04 w-100"
                      type="email"
                      id="email"
                      onChange={userInput}
                      placeholder="Email address"
                      name="Email"
                      value={myData.Email}
                    />
                  </Col>
                  <Col sm={6} className="pt-3">
                    <input
                      required
                      className="back_shadow input_border p-1 ps-4 fw_400 fs_md ff_Montserrat clr_white opacity_04 w-100"
                      type="number"
                      id="phone"
                      name="number"
                      onChange={userInput}
                      placeholder="Phone number"
                      value={myData.number}
                    />
                  </Col>
                </Row>
                <textarea
                  className="back_shadow input_border p-1 ps-4 fw_400 fs_md ff_Montserrat clr_white opacity_04 w-100 mt-3 h_100"
                  data-aos="fade-down"
                  data-aos-duration="3000"
                  data-aos-delay="1500"
                  cols="30"
                  rows="10"
                  placeholder="Message..."
                ></textarea>
                <div
                  className="mt-4"
                  data-aos="fade-down"
                  data-aos-duration="3000"
                  data-aos-delay="1800"
                >
                  <Button textbtn="SUBMIT" />
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Feel;
