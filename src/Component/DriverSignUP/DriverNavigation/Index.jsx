import React, { useState } from "react";
import { Col, Container, Button, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
export const DriverNavigation = ({ title, SignUpForm }) => {
  const navigate = useNavigate()
  const [showSignUp, setShowSignUp] = useState("");
  const Tab = useSelector((s) => s.restaurant.tabData?.data)
  const handleSignUp = () => {
    setShowSignUp(!showSignUp);
  };
  return (
    <>
      <section className="siup-nav bg-white shadow-sm sticky-top py-2">
        <Container>
          <Row>
            <Col lg="12">
              <div className="align-items-center justify-content-between gap-10 flex-wrap">
                <div className="logo-here">
                  <img
                    src={Tab?.logo?.link}
                    alt="logo"
                    className="logo"
                    style={{ width: "10%", top: "0px" }}
                    onClick={() => navigate("/")}
                  />
                  <ul className="list-unstyled ps-0 mb-0 d-flex align-items-center gap-10">
                    <li className="">
                      <Link to="" className='text-muted'>
                        Overview
                      </Link>
                    </li>
                    <li className="">
                      <Link to="" className='text-muted'>
                        Earning
                      </Link>
                    </li>
                    <li className="">
                      <Link to="" className='text-muted'>
                        Safety
                      </Link>
                    </li>
                    <li className="">
                      <Button
                        to=""
                        className="btn common-btn rounded-pill d-flex align-items-center justify-content-center border-0"
                        onClick={handleSignUp}
                      >
                        {title} Signup
                      </Button>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <SignUpForm showSignUp={showSignUp} setShowSignUp={setShowSignUp} />
    </>
  );
};
export default DriverNavigation;
