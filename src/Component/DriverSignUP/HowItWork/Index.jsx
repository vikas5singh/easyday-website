import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const HowItWork = (props) => {
  return (
    <>
      <section
        className="py-5 howItWork text-start"
        style={{ backgroundColor: "#fffcfc" }}
      >
        <Container>
          <Row>
            <Col lg="12" className="my-2">
              <div className="section-header mb-3">
                <h2 className="fw-bold">
                  How It <span className="theme-clr">Works</span>
                </h2>
              </div>
            </Col>
            <Col lg="12" className="my-2">
              <ul className="list-unstyled ps-4 mb-0 position-relative ProcessOfWork">
                <li className="my-2 position-relative">
                  <div className="inner pb-3">
                    <h4 className="m-0 pb-1">1.Login in</h4>
                    <p className="m-0 py-1">
                      Get on the road and log in to the {props?.title} {props?.isApp && "app"} to begin
                      receiving {props.title} requests.
                    </p>
                  </div>
                </li>
                <li className="my-2 position-relative">
                  <div className="inner pb-3">
                    <h4 className="m-0 pb-1">1.Deliver Orders</h4>
                    <p className="m-0 py-1">
                      Suggested navigation and information from {props?.title} and
                      your customers is provided in the app to help orders
                      run smoothly.
                    </p>
                  </div>
                </li>
                <li className="my-2 position-relative">
                  <div className="inner pb-3">
                    <h4 className="m-0 pb-1">3. Earn money</h4>
                    <p className="m-0 py-1">
                      You can track your earnings and cash out daily or weekly.
                    </p>
                  </div>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default HowItWork;
