import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import Deliverdmodal from "./Deliverdmodal";

export default function Arrivedorder() {
  const [counter, setCounter] = useState(0);

  const [modalShow, setModalShow] = useState(false);

  const increase = () => {
    setCounter((count) => count + 1);
  };

  const decrease = () => {
    setCounter((count) => count - 1);
  };

  const reset = () => {
    setCounter(0);
  };
  return (
    <section className="track-map">
      <Deliverdmodal show={modalShow} onHide={() => setModalShow(false)} />

      <div className="track-head text-center">
        <h2>Track Your Order </h2>
      </div>
      <div className="track-map-here"></div>

      <div className="bottom-track-details mt-5 ">
        <Container>
          <Row>
            <Col lg={7} md={6} sm={12}>
              <Fade>
                <div className="food-prepared-details">
                  <div className="text-center">
                    <img
                      loading="lazy"
                      src="images/scooter.png"
                      alt=""
                      className="img-fluid"
                    />
                    <h2>Your Food Arrived</h2>
                  </div>

                  <div className="driver-contact-main mt-5">
                    <div className="driver-nmae">
                      <div className="figure-here">
                        <img
                          loading="lazy"
                          src="images/driverprofile.png"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                      <div className="name-here">
                        <p className="driver-name">Alfred Stewart</p>
                        <ul className="ratingstar">
                          <li className="start-checked">★</li>
                          <li className="start-checked">★</li>
                          <li className="start-checked">★</li>
                          <li className="start-checked">★</li>
                          <li className="">★</li>
                        </ul>
                        <p className="code-copy">KL01MVT</p>
                      </div>
                    </div>
                    <div className="driver-contact">
                      <a href="javascript:void(0)">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="35"
                          height="35"
                          viewBox="0 0 35 35"
                          fill="none"
                        >
                          <path
                            d="M19.25 10.4999C20.6424 10.4999 21.9777 11.0531 22.9623 12.0376C23.9469 13.0222 24.5 14.3576 24.5 15.7499C24.5 16.2141 24.6844 16.6592 25.0126 16.9874C25.3407 17.3156 25.7859 17.4999 26.25 17.4999C26.7141 17.4999 27.1592 17.3156 27.4874 16.9874C27.8156 16.6592 28 16.2141 28 15.7499C28 13.4293 27.0781 11.2037 25.4372 9.56275C23.7962 7.92181 21.5706 6.99994 19.25 6.99994C18.7859 6.99994 18.3408 7.18431 18.0126 7.5125C17.6844 7.84069 17.5 8.28581 17.5 8.74994C17.5 9.21407 17.6844 9.65919 18.0126 9.98738C18.3408 10.3156 18.7859 10.4999 19.25 10.4999Z"
                            fill="black"
                          />
                          <path
                            d="M19.25 3.5C22.4989 3.5 25.6147 4.79062 27.9121 7.08794C30.2094 9.38526 31.5 12.5011 31.5 15.75C31.5 16.2141 31.6844 16.6592 32.0126 16.9874C32.3407 17.3156 32.7859 17.5 33.25 17.5C33.7141 17.5 34.1592 17.3156 34.4874 16.9874C34.8156 16.6592 35 16.2141 35 15.75C35 11.5728 33.3406 7.56677 30.3869 4.61307C27.4332 1.65937 23.4272 0 19.25 0C18.7859 0 18.3407 0.184374 18.0126 0.512563C17.6844 0.840752 17.5 1.28587 17.5 1.75C17.5 2.21413 17.6844 2.65925 18.0126 2.98744C18.3407 3.31563 18.7859 3.5 19.25 3.5ZM34.5625 24.3425C34.4662 24.0616 34.3001 23.8097 34.0796 23.6107C33.8592 23.4117 33.5918 23.2721 33.3025 23.205L22.8025 20.8075C22.5175 20.7429 22.2208 20.7507 21.9396 20.8301C21.6584 20.9096 21.4015 21.0583 21.1925 21.2625C20.9475 21.49 20.93 21.5075 19.7925 23.6775C16.0181 21.9383 12.9937 18.9015 11.27 15.12C13.4925 14 13.51 14 13.7375 13.7375C13.9417 13.5285 14.0904 13.2716 14.1699 12.9904C14.2493 12.7092 14.2571 12.4125 14.1925 12.1275L11.795 1.75C11.7279 1.46072 11.5882 1.19327 11.3893 0.972845C11.1903 0.752416 10.9384 0.586254 10.6575 0.49C10.2488 0.344032 9.82679 0.238526 9.3975 0.175C8.95519 0.0724416 8.50383 0.0138239 8.05 0C5.91501 0 3.86746 0.848123 2.35779 2.35779C0.848123 3.86746 0 5.91501 0 8.05C0.00926085 15.1947 2.8516 22.0442 7.9037 27.0963C12.9558 32.1484 19.8053 34.9907 26.95 35C28.0071 35 29.0539 34.7918 30.0306 34.3872C31.0073 33.9827 31.8947 33.3897 32.6422 32.6422C33.3897 31.8947 33.9827 31.0073 34.3872 30.0306C34.7918 29.0539 35 28.0071 35 26.95C35.0005 26.5046 34.9654 26.0598 34.895 25.62C34.8214 25.1853 34.7102 24.7579 34.5625 24.3425Z"
                            fill="black"
                          />
                        </svg>
                      </a>
                      <a href="javascript:void(0)">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="35"
                          height="35"
                          viewBox="0 0 35 35"
                          fill="none"
                        >
                          <path
                            d="M17.5 0C7.83398 0 0 5.87207 0 13.125C0 18.252 3.93066 22.6816 9.64551 24.8418L5.83105 35L16.8027 26.2227C17.0352 26.2295 17.2607 26.25 17.5 26.25C27.166 26.25 35 20.3779 35 13.125C35 5.87207 27.166 0 17.5 0Z"
                            fill="black"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>

                  <div className="location-here mt-4">
                    <h5>Location</h5>

                    <p className="adrees-arrived">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="30"
                        viewBox="0 0 24 30"
                        fill="none"
                      >
                        <path
                          d="M12 0C8.81856 0.00368622 5.76849 1.24658 3.51887 3.45603C1.26925 5.66548 0.003766 8.66108 1.27668e-05 11.7857C-0.00379766 14.3392 0.845445 16.8233 2.41746 18.8571C2.41746 18.8571 2.74474 19.2804 2.79819 19.3414L12 30L21.2062 19.3361C21.2542 19.2793 21.5825 18.8571 21.5825 18.8571L21.5836 18.8539C23.1549 16.821 24.0037 14.338 24 11.7857C23.9962 8.66108 22.7307 5.66548 20.4811 3.45603C18.2315 1.24658 15.1814 0.00368622 12 0ZM12 16.0714C11.137 16.0714 10.2933 15.8201 9.5757 15.3492C8.8581 14.8782 8.2988 14.2089 7.96853 13.4258C7.63826 12.6427 7.55184 11.781 7.72021 10.9496C7.88859 10.1183 8.30418 9.35462 8.91445 8.75526C9.52471 8.15589 10.3022 7.74771 11.1487 7.58235C11.9952 7.41698 12.8725 7.50185 13.6699 7.82623C14.4672 8.15061 15.1487 8.69992 15.6282 9.4047C16.1077 10.1095 16.3636 10.9381 16.3636 11.7857C16.3622 12.9219 15.902 14.0112 15.084 14.8146C14.2659 15.618 13.1569 16.07 12 16.0714Z"
                          fill="#A54A57"
                        />
                      </svg>
                      4955 Steubenville Pike, Suite 160 Pittsburgh
                    </p>
                  </div>

                  <div className="payment-details mt-4">
                    <h4>Payment Details</h4>
                    <div className="payment-main">
                      <p>
                        <img
                          loading="lazy"
                          src="images/money.png"
                          alt=""
                          className="img-fluid"
                        />
                        Payment{" "}
                      </p>
                      <p>
                        <img
                          loading="lazy"
                          src="images/cards.png"
                          alt=""
                          className="img-fluid"
                        />
                        **** 3704
                      </p>
                      <p>$ 168.00</p>
                    </div>
                    <Button className="proces-to-ordern mt-3">
                      Cancel Order
                    </Button>
                  </div>
                </div>
              </Fade>
            </Col>
            <Col lg={5} md={6} sm={12}>
              <Fade>
                <div className="order-details">
                  <h2 className="text-center">Order Details</h2>
                  <ul className="order-listdetails">
                    <li>
                      <div className="list-common position-relative">
                        <div className="list-name">
                          <p>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="15"
                              height="15"
                              viewBox="0 0 15 15"
                              fill="none"
                            >
                              <rect
                                x="0.75"
                                y="0.75"
                                width="13.5"
                                height="13.5"
                                stroke="#A54A57"
                                stroke-width="1.5"
                              />
                              <circle
                                cx="7.875"
                                cy="7.125"
                                r="3.375"
                                fill="#A54A57"
                              />
                            </svg>
                            1 x Cheesy Gordita Crunch
                          </p>
                        </div>
                        <div className="added-more">
                          <div class="plus-minus ">
                            <div class="number">
                              <button class="minus" onClick={decrease}>
                                -
                              </button>

                              <span className="counter__output">{counter}</span>
                              <button class="plus" onClick={increase}>
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="added-price">
                          <p>$ 20.00</p>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div className="list-common position-relative">
                        <div className="list-name">
                          <p>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="15"
                              height="15"
                              viewBox="0 0 15 15"
                              fill="none"
                            >
                              <rect
                                x="0.75"
                                y="0.75"
                                width="13.5"
                                height="13.5"
                                stroke="#1A7D18"
                                stroke-width="1.5"
                              />
                              <circle
                                cx="7.875"
                                cy="7.125"
                                r="3.375"
                                fill="#1A7D18"
                              />
                            </svg>
                            5 x Cheesy Gordita Crunch
                          </p>
                        </div>
                        <div className="added-more">
                          <div class="plus-minus ">
                            <div class="number">
                              <button class="minus" onClick={decrease}>
                                -
                              </button>

                              <span className="counter__output">{counter}</span>
                              <button class="plus" onClick={increase}>
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="added-price">
                          <p>$ 20.00</p>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div className="list-common position-relative">
                        <div className="list-name">
                          <p>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="15"
                              height="15"
                              viewBox="0 0 15 15"
                              fill="none"
                            >
                              <rect
                                x="0.75"
                                y="0.75"
                                width="13.5"
                                height="13.5"
                                stroke="#1A7D18"
                                stroke-width="1.5"
                              />
                              <circle
                                cx="7.875"
                                cy="7.125"
                                r="3.375"
                                fill="#1A7D18"
                              />
                            </svg>
                            5 x Cheesy Gordita Crunch
                          </p>
                        </div>
                        <div className="added-more">
                          <div class="plus-minus ">
                            <div class="number">
                              <button class="minus" onClick={decrease}>
                                -
                              </button>

                              <span className="counter__output">{counter}</span>
                              <button class="plus" onClick={increase}>
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="added-price">
                          <p>$ 20.00</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="list-common position-relative">
                        <div className="list-name">
                          <p>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="15"
                              height="15"
                              viewBox="0 0 15 15"
                              fill="none"
                            >
                              <rect
                                x="0.75"
                                y="0.75"
                                width="13.5"
                                height="13.5"
                                stroke="#1A7D18"
                                stroke-width="1.5"
                              />
                              <circle
                                cx="7.875"
                                cy="7.125"
                                r="3.375"
                                fill="#1A7D18"
                              />
                            </svg>
                            5 x Cheesy Gordita Crunch
                          </p>
                        </div>
                        <div className="added-more">
                          <div class="plus-minus ">
                            <div class="number">
                              <button class="minus" onClick={decrease}>
                                -
                              </button>

                              <span className="counter__output">{counter}</span>
                              <button class="plus" onClick={increase}>
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="added-price">
                          <p>$ 20.00</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="list-common position-relative">
                        <div className="list-name">
                          <p>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="15"
                              height="15"
                              viewBox="0 0 15 15"
                              fill="none"
                            >
                              <rect
                                x="0.75"
                                y="0.75"
                                width="13.5"
                                height="13.5"
                                stroke="#1A7D18"
                                stroke-width="1.5"
                              />
                              <circle
                                cx="7.875"
                                cy="7.125"
                                r="3.375"
                                fill="#1A7D18"
                              />
                            </svg>
                            5 x Cheesy Gordita Crunch
                          </p>
                        </div>
                        <div className="added-more">
                          <div class="plus-minus ">
                            <div class="number">
                              <button class="minus" onClick={decrease}>
                                -
                              </button>

                              <span className="counter__output">{counter}</span>
                              <button class="plus" onClick={increase}>
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="added-price">
                          <p>$ 20.00</p>
                        </div>
                      </div>
                    </li>
                  </ul>

                  <div className="bill-details">
                    <h5>Bill Details</h5>
                    <ul>
                      <li>
                        <div className="bill-list">
                          <p>Item Total</p>
                          <p>$ 145.00</p>
                        </div>
                      </li>
                      <li>
                        <div className="bill-list">
                          <p>Tax and Fees</p>
                          <p>$ 15.00</p>
                        </div>
                      </li>
                      <li>
                        <div className="bill-list">
                          <p>Delivery Fee</p>
                          <p>$ 5.00</p>
                        </div>
                      </li>
                      <li>
                        <div className="bill-list">
                          <p>Tip</p>
                          <p>$ 8.00</p>
                        </div>
                      </li>
                    </ul>
                    <Button
                      className="total-pay"
                      onClick={() => setModalShow(true)}
                    >
                      <p>Total</p>
                      <p>$168.00</p>
                    </Button>
                  </div>
                </div>
              </Fade>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
