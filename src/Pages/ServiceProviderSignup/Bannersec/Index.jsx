import React, { useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import SignUpForm from "./SignUpForm";
import { useDispatch, useSelector } from "react-redux";
export const BannerSec = (props) => {
  const [showSignUp, setShowSignUp] = useState("");
  const handleSignUp = () => {
    setShowSignUp(!showSignUp);
  };
  const Tab = useSelector((s) => s.restaurant.tabData?.data)
  return (
    <>
      <section
        className="signup-sec py-5"
        style={{ backgroundImage: 'url("../images/loginbg.png")' }}
      >
        <Container>
          <Row className="align-items-center">
            <Col lg="6" className="my-2">
              <div className="bannerContent text-start pe-lg-5">
                <h2 className="text-dark fw-bold">
                  {props?.title} with <span className="theme-clr">{Tab?.storeName}</span>
                </h2>
                <p className="m-0 py-2">
                  <span className="fw-sbold d-block">
                    No boss. Flexible schedule. Quick pay.
                  </span>
                  Now you can make money by {props?.title} orders that people
                  crave using the {Tab?.storeName} app—all while exploring your city.
                </p>

                <div className="btn-wrp mt-4 d-flex align-items-center flex-wrap gap-10">
                  <Button
                    to=""
                    className="btn common-btn rounded-pill d-flex align-items-center justify-content-center border-0"
                    onClick={handleSignUp}
                  >
                    Sign up to {props?.title}
                  </Button>
                  {props?.isApp ?
                    <p className="m-0">
                      Get our {props?.title} App{" "}
                      <a
                        href="https://apps.apple.com/us/app/deliver-usa/id6444758314"
                        className="theme-clr"
                      >
                        Download
                      </a>
                    </p>
                    : <p className="m-0">Get our  <a
                      href="http://localhost:3000/login"
                      className="theme-clr"
                    >Login</a> platform</p>
                  }
                </div>
              </div>
            </Col>
            <Col lg="6" className="my-2 text-center img-wrpper">
              <img src={`../images/${props?.image}`} alt="" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>
      <SignUpForm showSignUp={showSignUp} setShowSignUp={setShowSignUp} />
    </>
  );
};
export default BannerSec;
