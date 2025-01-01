import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
export const AppLink = (props) => {
  const Tab = useSelector((s) => s.restaurant.tabData?.data)
  return (
    <>
      <section
        className="Applink py-5 text-start"
        style={{ backgroundColor: "#f6f6f6" }}
      >
        <Container>
          <Row>
            <Col lg="4" className="my-2">
              <a
                href="https://apps.apple.com/us/app/deliver-usa/id6444758314"
                className="link text-dark h-100"
              >
                <div className="cardCstm bg-white position-relative d-flex align-items-center gap-10 p-3 rounded justify-content-between flex-wrap">
                  <span className="icn position-absolute">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      width="1em"
                      height="25"
                      fill="currentColor"
                      viewBox="0 0 36 36"
                    //   style="top: calc(50% - 12px); right: 0px; position: absolute;"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M18.2354 2H24.2711L36 18L24.2711 34H18.2354L28.1237 20.56H0V15.44H28.1237L18.2354 2Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                  <div className="img-wrp">
                    <img
                      src={Tab?.logo.link}
                      alt=""
                      className="img-fluid px-4"
                    />
                  </div>
                  <div className="content">
                    <h6 className=" m-0">{props?.isApp ? "Download The Driver App" : <Link className="text-white" to="htts://localhost:3000/login">Get our login platform</Link>}</h6>
                  </div>
                </div>
              </a>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default AppLink;
