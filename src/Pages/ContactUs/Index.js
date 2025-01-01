import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../Component/Footer/Footer";
import Header from "../../Component/Header/Header";
import { contactUs } from "../../Redux/actions";
import { Col, Container, Row } from "react-bootstrap";
import GetInTouchForm from "../../Component/GetInTouchForm/Index";
const Index = () => {
  const dispatch = useDispatch();

  const content = useSelector((s) => s.contact?.data);
  const Tab = useSelector((s) => s.restaurant.tabData?.data)
  console.log("content")

  useEffect(() => {
    dispatch(contactUs());
  }, [dispatch]);
  return (
    <>
      <Header />
      <section className="privacy-page section-height py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12 my-2 pb-5">
              <div className="section-header">
                <div className="section-header text-center pb-2">
                  <h2 className="pb-2">Contact Us</h2>
                  <p
                    className="about-style"
                    dangerouslySetInnerHTML={{
                      __html: content?.content,
                    }}
                  ></p>
                </div>
              </div>
            </div>
            <div className="col-md-12 my-2 pb-2">
              <p
                className="about-style"
                dangerouslySetInnerHTML={{
                  __html: content?.customContent,
                }}
              ></p>
            </div>
          </div>
          <Row className="justify-content-around d-flex">
            <Col lg={6} md={6} sm={12}>
              <GetInTouchForm />
            </Col>
            <Col lg={6} md={6} sm={12}>
              <div>
                <h4 className="d-flex align-items-start mx-5">Help & Contact</h4>
                <div
                  className="d-flex flex-column align-items-start mx-5"
                >
                  {[
                    {
                      svg: (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M20 4H4C3.44772 4 3 4.44772 3 5V19C3 19.5523 3.44772 20 4 20H20C20.5523 20 21 19.5523 21 19V5C21 4.44772 20.5523 4 20 4ZM12 13L4 8V6L12 11L20 6V8L12 13Z"
                            fill="black"
                          />
                        </svg>
                      ),
                      text: `Email: ${Tab?.email}`,
                    },
                    {
                      svg: (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 32 32"
                          fill="none"
                        >
                          <path
                            d="M16 26C14.5565 24.8032 13.2185 23.4911 12 22.0774C10.1714 19.9545 8 16.7929 8 13.7802C7.99921 12.2415 8.46801 10.7372 9.34708 9.4577C10.2261 8.17815 11.476 7.18085 12.9384 6.592C14.4007 6.00316 16.01 5.84925 17.5624 6.14975C19.1148 6.45025 20.5406 7.19165 21.6594 8.28012C22.4043 9.00094 22.9946 9.85819 23.3964 10.8023C23.7982 11.7463 24.0033 12.7585 24 13.7802C24 16.7929 21.8285 19.9545 20 22.0774C18.7815 23.4911 17.4435 24.8032 16 26ZM16 10.4475C15.0907 10.4475 14.2186 10.7986 13.5756 11.4236C12.9326 12.0486 12.5714 12.8963 12.5714 13.7802C12.5714 14.664 12.9326 15.5117 13.5756 16.1367C14.2186 16.7617 15.0907 17.1128 16 17.1128C16.9093 17.1128 17.7814 16.7617 18.4243 16.1367C19.0673 15.5117 19.4285 14.664 19.4285 13.7802C19.4285 12.8963 19.0673 12.0486 18.4243 11.4236C17.7814 10.7986 16.9093 10.4475 16 10.4475Z"
                            fill="black"
                          />
                        </svg>
                      ),
                      text: `Corporate Office: ${Tab?.address}`,
                    },
                    {
                      svg: (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 32 32"
                          fill="none"
                        >
                          <path
                            d="M16 26C14.5565 24.8032 13.2185 23.4911 12 22.0774C10.1714 19.9545 8 16.7929 8 13.7802C7.99921 12.2415 8.46801 10.7372 9.34708 9.4577C10.2261 8.17815 11.476 7.18085 12.9384 6.592C14.4007 6.00316 16.01 5.84925 17.5624 6.14975C19.1148 6.45025 20.5406 7.19165 21.6594 8.28012C22.4043 9.00094 22.9946 9.85819 23.3964 10.8023C23.7982 11.7463 24.0033 12.7585 24 13.7802C24 16.7929 21.8285 19.9545 20 22.0774C18.7815 23.4911 17.4435 24.8032 16 26ZM16 10.4475C15.0907 10.4475 14.2186 10.7986 13.5756 11.4236C12.9326 12.0486 12.5714 12.8963 12.5714 13.7802C12.5714 14.664 12.9326 15.5117 13.5756 16.1367C14.2186 16.7617 15.0907 17.1128 16 17.1128C16.9093 17.1128 17.7814 16.7617 18.4243 16.1367C19.0673 15.5117 19.4285 14.664 19.4285 13.7802C19.4285 12.8963 19.0673 12.0486 18.4243 11.4236C17.7814 10.7986 16.9093 10.4475 16 10.4475Z"
                            fill="black"
                          />
                        </svg>
                      ),
                      text: `Branch Office: ${Tab?.branchOffice}`,
                    },
                    {
                      svg: (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M8.3844 2.47925C8.90949 2.32093 9.47298 2.34723 9.98104 2.55377C10.4891 2.76032 10.9111 3.13465 11.1768 3.61445L11.2656 3.79325L12.06 5.55845C12.3011 6.09423 12.3793 6.68906 12.285 7.26897C12.1907 7.84888 11.928 8.38826 11.5296 8.82005L11.37 8.97845L10.1184 10.146C9.8928 10.3596 10.062 11.1864 10.878 12.6C11.6124 13.872 12.21 14.466 12.504 14.4984H12.5556L12.6192 14.4864L15.0792 13.734C15.4098 13.6327 15.7626 13.6286 16.0955 13.7225C16.4283 13.8163 16.7271 14.0041 16.956 14.2632L17.0652 14.4012L18.6936 16.6572C19.0127 17.0994 19.1718 17.6371 19.1445 18.1818C19.1172 18.7264 18.9053 19.2455 18.5436 19.6536L18.3972 19.8048L17.7468 20.4216C17.1628 20.9748 16.4322 21.3485 15.6419 21.4985C14.8516 21.6485 14.0349 21.5683 13.2888 21.2676C10.9668 20.3316 8.85719 18.1932 6.94079 14.874C5.02079 11.5464 4.2228 8.64605 4.5792 6.16205C4.68704 5.41117 4.99624 4.70351 5.47396 4.11424C5.95167 3.52497 6.58006 3.07608 7.2924 2.81525L7.524 2.73845L8.3844 2.47925Z"
                            fill="black"
                          />
                        </svg>
                      ),
                      text: `Mobile: ${Tab?.countryCode + Tab?.mobileNumber}, WhatsApp: ${Tab?.countryCode + Tab?.whatsapp_number
                        }`,
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="d-flex align-items-center my-2"
                      style={{ gap: "10px" }}
                    >
                      {item.svg}
                      <a className="text-success" href="javascript:void(0)">
                        {item.text}
                      </a>
                    </div>
                  ))}
                </div>

              </div>
              <div className="scanqr-head">
                <p className="d-flex align-items-start mx-5 py-3" style={{ gap: "10px" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M4 4H10V10H4V4ZM20 4V10H14V4H20ZM14 15H16V13H14V11H16V13H18V11H20V13H18V15H20V18H18V20H16V18H13V20H11V16H14V15ZM16 15V18H18V15H16ZM4 20V14H10V20H4ZM6 6V8H8V6H6ZM16 6V8H18V6H16ZM6 16V18H8V16H6ZM4 11H6V13H4V11ZM9 11H13V15H11V13H9V11ZM11 6H13V10H11V6ZM2 2V6H0V2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0L6 0V2H2ZM22 0C22.5304 0 23.0391 0.210714 23.4142 0.585786C23.7893 0.960859 24 1.46957 24 2V6H22V2H18V0H22ZM2 18V22H6V24H2C1.46957 24 0.960859 23.7893 0.585786 23.4142C0.210714 23.0391 0 22.5304 0 22V18H2ZM22 22V18H24V22C24 22.5304 23.7893 23.0391 23.4142 23.4142C23.0391 23.7893 22.5304 24 22 24H18V22H22Z"
                      fill="black"
                    />
                  </svg>
                  Scanning will start automatically chatting for WhatsApp</p>
                <img src="/images/scanqr.png" alt="" style={{ height: "400px", width: "100%", marginTop: "-58px" }} />
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Index;
