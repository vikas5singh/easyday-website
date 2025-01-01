import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const DeliveryRequirement = (props) => {
  return (
    <>
      <section className="py-5 position-relative contentSec text-start">
        <Container>
          <Row>
            <Col lg="12" className="my-2">
              <div className="section-header mb-3">
                <h2 className="fw-bold">
                  {props?.title} <span className="theme-clr">Requirements*</span>
                </h2>
              </div>
            </Col>
            <Col lg="12" className="my-2">
              {props?.title == "Driver" &&
                <div className="content-wrp">
                  <h4 className="fw-sbold">Two Wheeler Delivery:</h4>
                  <ul className="list-unstyled ps-0 mb-0">
                    <li className="py-1">
                      <p className="m-0 text-muted">
                        Any make or model 2-wheel scooter
                      </p>
                    </li>
                    <li className="py-1">
                      <p className="m-0 text-muted">Valid Driving License</p>
                    </li>
                    <li className="py-1">
                      <p className="m-0 text-muted">
                        Registration Certificate of two wheeler
                      </p>
                    </li>
                    <li className="py-1">
                      <p className="m-0 text-muted">
                        Valid insurance for two wheeler
                      </p>
                    </li>
                    <li className="py-1">
                      <p className="m-0 text-muted">PAN Card</p>
                    </li>
                  </ul>
                </div>
              }
              {props?.title === "Service Provider" &&
                < div className="content-wrp">
                  <h4 className="fw-sbold">Two Wheeler Service Provider:</h4>
                  <ul className="list-unstyled ps-0 mb-0">
                    <li className="py-1">
                      <p className="m-0 text-muted">
                        Any make or model 2-wheel scooter
                      </p>
                    </li>
                    <li className="py-1">
                      <p className="m-0 text-muted">Valid Driving License</p>
                    </li>
                    <li className="py-1">
                      <p className="m-0 text-muted">
                        Registration Certificate of two wheeler
                      </p>
                    </li>
                    <li className="py-1">
                      <p className="m-0 text-muted">
                        Valid insurance for two wheeler
                      </p>
                    </li>
                    <li className="py-1">
                      <p className="m-0 text-muted">PAN Card</p>
                    </li>
                  </ul>
                </div>
              }
              {props?.title === "Vendor" &&
                < div className="content-wrp">
                  <h4 className="fw-sbold">Store:</h4>
                  <ul className="list-unstyled ps-0 mb-0">
                    <li className="py-1">
                      <p className="m-0 text-muted">
                        Any make or model 2-wheel scooter
                      </p>
                    </li>
                    <li className="py-1">
                      <p className="m-0 text-muted">Valid Driving License</p>
                    </li>
                    <li className="py-1">
                      <p className="m-0 text-muted">
                        Registration Certificate of two wheeler
                      </p>
                    </li>
                    <li className="py-1">
                      <p className="m-0 text-muted">
                        Valid insurance for two wheeler
                      </p>
                    </li>
                    <li className="py-1">
                      <p className="m-0 text-muted">PAN Card</p>
                    </li>
                  </ul>
                </div>
              }
              {props?.title === "Restaurant" &&
                < div className="content-wrp">
                  <h4 className="fw-sbold">Restaurant:</h4>
                  <ul className="list-unstyled ps-0 mb-0">
                    <li className="py-1">
                      <p className="m-0 text-muted">
                        Any make or model 2-wheel scooter
                      </p>
                    </li>
                    <li className="py-1">
                      <p className="m-0 text-muted">Valid Driving License</p>
                    </li>
                    <li className="py-1">
                      <p className="m-0 text-muted">
                        Registration Certificate of two wheeler
                      </p>
                    </li>
                    <li className="py-1">
                      <p className="m-0 text-muted">
                        Valid insurance for two wheeler
                      </p>
                    </li>
                    <li className="py-1">
                      <p className="m-0 text-muted">PAN Card</p>
                    </li>
                  </ul>
                </div>
              }
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default DeliveryRequirement;
