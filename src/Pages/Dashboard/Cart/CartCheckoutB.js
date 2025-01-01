import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Form, FormGroup, Label, Input, FormText } from "reactstrap";
import CoupanModal from "./CoupanModal";
import AddressModal from "./AddressModalB";
import PaymentModal from "./PaymentModal";
import { useNavigate } from "react-router-dom";
import Fade from "react-reveal/Fade";

export default function Cartcheckout() {
  const navigate = useNavigate();
  const [counter, setCounter] = useState(0);

  const [modalShow, setModalShow] = useState(false);
  const [modalShow2, setModalShow2] = useState(false);
  const [modalShow3, setModalShow3] = useState(false);

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
    <section className="secure-checkout">
      <CoupanModal show={modalShow} onHide={() => setModalShow(false)} />

      <AddressModal show={modalShow2} onHide={() => setModalShow2(false)} />

      <PaymentModal show={modalShow3} onHide={() => setModalShow3(false)} />

      <Container>
        <div className="secure-head1 text-center">
          <h2>Cart</h2>
        </div>

        <div className="main-checkout-box1">
          <Row>
            <Col lg={6} md={6} sm={12} className="order-one">
              <Fade>
                <div className="left-order-details">
                  <h5>Order Details</h5>

                  <div className="item-added-lsit">
                    <ul>
                      <li>
                        <div className="list-common">
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

                                <span className="counter__output">
                                  {counter}
                                </span>
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
                        <div className="list-common">
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

                                <span className="counter__output">
                                  {counter}
                                </span>
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
                        <div className="list-common">
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

                                <span className="counter__output">
                                  {counter}
                                </span>
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
                        <div className="list-common">
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

                                <span className="counter__output">
                                  {counter}
                                </span>
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
                        <div className="list-common">
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

                                <span className="counter__output">
                                  {counter}
                                </span>
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
                  </div>

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
                    <Button className="total-pay">
                      <p>Total</p>
                      <p>$168.00</p>
                    </Button>

                    <a
                      href="javascript:void(0)"
                      onClick={() => setModalShow3(true)}
                    >
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
                    </a>

                    <Button
                      className="proces-to-order"
                      onClick={() => navigate("/track-order")}
                    >
                      Process To Order
                    </Button>
                  </div>
                </div>
              </Fade>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <Fade>
                <div className="rigth-order-details">
                  <Form>
                    <a
                      href="javascript:void(0)"
                      onClick={() => setModalShow(true)}
                    >
                      <div className="apply-coupon">
                        <p>
                          <img
                            loading="lazy"
                            src="images/discount.png"
                            alt=""
                            className="img-fluid"
                          />
                          Apply Coupon
                        </p>
                      </div>
                    </a>
                    <FormGroup>
                      <Input
                        type="textarea"
                        name="text"
                        id="textarea"
                        placeholder="Add Special Cooking Instructions"
                      />
                    </FormGroup>

                    <div className="deleivery-addresses">
                      <div className="address-head">
                        <h4>Delivery Address</h4>
                        <a
                          href="javascript:void(0)"
                          onClick={() => setModalShow2(true)}
                        >
                          + Add Address
                        </a>
                      </div>

                      <ul className="mt-3">
                        <li>
                          <div className="addresses-col position-relative">
                            <div className="iconc-col">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="21"
                                height="21"
                                viewBox="0 0 21 21"
                                fill="none"
                              >
                                <path
                                  d="M7.55 0.529535C7.95577 0.187557 8.46935 0 9 0C9.53065 0 10.0442 0.187557 10.45 0.529535L17.2 6.22354C17.708 6.65154 18 7.28053 18 7.94353V10.7625C17.4287 10.2514 16.6834 9.97828 15.9171 9.99936C15.1508 10.0204 14.4216 10.3341 13.8793 10.8759C13.3369 11.4177 13.0226 12.1466 13.0008 12.9129C12.979 13.6792 13.2514 14.4248 13.762 14.9965H13.248C12.542 14.9965 11.912 15.3215 11.5 15.8295V12.7465C11.5 12.5476 11.421 12.3569 11.2803 12.2162C11.1397 12.0756 10.9489 11.9965 10.75 11.9965H7.25C7.05109 11.9965 6.86032 12.0756 6.71967 12.2162C6.57902 12.3569 6.5 12.5476 6.5 12.7465V17.7465C6.5 18.2107 6.31563 18.6558 5.98744 18.984C5.65925 19.3122 5.21413 19.4965 4.75 19.4965H1.75C1.52019 19.4965 1.29262 19.4513 1.0803 19.3633C0.867984 19.2754 0.675066 19.1465 0.512563 18.984C0.350061 18.8215 0.221157 18.6286 0.133211 18.4162C0.0452652 18.2039 0 17.9763 0 17.7465V7.94353C0 7.28053 0.292 6.65154 0.8 6.22354L7.55 0.529535ZM14 12.9965C14 12.4661 14.2107 11.9574 14.5858 11.5823C14.9609 11.2072 15.4696 10.9965 16 10.9965C16.5304 10.9965 17.0391 11.2072 17.4142 11.5823C17.7893 11.9574 18 12.4661 18 12.9965C18 13.527 17.7893 14.0357 17.4142 14.4107C17.0391 14.7858 16.5304 14.9965 16 14.9965C15.4696 14.9965 14.9609 14.7858 14.5858 14.4107C14.2107 14.0357 14 13.527 14 12.9965ZM13.25 15.9965C12.56 15.9965 12 16.5565 12 17.2465V17.2495L12.001 17.5475L12.009 17.6535C12.0641 18.1496 12.2425 18.6241 12.528 19.0335C13.074 19.8135 14.114 20.4965 16 20.4965C17.886 20.4965 18.926 19.8135 19.472 19.0335C19.7575 18.6241 19.9359 18.1496 19.991 17.6535L19.999 17.5475C20.002 17.4775 20.001 17.4055 20.001 17.3345L20 17.2465C20 16.5565 19.44 15.9965 18.75 15.9965H13.25Z"
                                  fill="#C4C4C4"
                                />
                              </svg>
                            </div>
                            <div className="adrees-cont">
                              <h5>Home </h5>
                              <p>4955 Steubenville Pi Suite</p>
                            </div>
                            <div className="green-tik">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0C12.6522 0 15.1957 1.05357 17.0711 2.92893C18.9464 4.8043 20 7.34784 20 10C20 12.6522 18.9464 15.1957 17.0711 17.0711C15.1957 18.9464 12.6522 20 10 20C7.34784 20 4.8043 18.9464 2.92893 17.0711C1.05357 15.1957 0 12.6522 0 10H0ZM9.42933 14.28L15.1867 7.08267L14.1467 6.25067L9.23733 12.3853L5.76 9.488L4.90667 10.512L9.42933 14.2813V14.28Z"
                                  fill="#1A7D18"
                                />
                              </svg>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="addresses-col">
                            <div className="iconc-col">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="17"
                                height="12"
                                viewBox="0 0 17 12"
                                fill="none"
                              >
                                <path
                                  d="M7.80009 11.6544C7.87808 11.761 7.98243 11.8481 8.10415 11.9083C8.22588 11.9685 8.36133 12 8.49885 12C8.63636 12 8.77182 11.9685 8.89354 11.9083C9.01527 11.8481 9.11962 11.761 9.1976 11.6544L16.8482 1.25511C16.9368 1.13517 16.9887 0.994677 16.9984 0.848906C17.008 0.703136 16.975 0.55766 16.903 0.428286C16.831 0.298911 16.7227 0.190586 16.5898 0.115079C16.457 0.0395717 16.3047 -0.000229059 16.1494 9.91654e-07L0.848249 9.91654e-07C0.693404 0.000602878 0.541662 0.0409155 0.409343 0.116603C0.277024 0.192291 0.169133 0.300491 0.0972733 0.429566C0.0254137 0.558641 -0.00769579 0.703709 0.0015053 0.849167C0.0107064 0.994626 0.06187 1.13497 0.149494 1.25511L7.80009 11.6544Z"
                                  fill="#3F3D56"
                                />
                              </svg>
                            </div>
                            <div className="adrees-cont">
                              <h5>Previous Delivery Addresses </h5>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="addresses-col">
                            <div className="iconc-col">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="22"
                                height="20"
                                viewBox="0 0 22 20"
                                fill="none"
                              >
                                <path
                                  d="M18.7 3.33333H15.4V2.22222C15.4 1 14.41 0 13.2 0H8.8C7.59 0 6.6 1 6.6 2.22222V3.33333H3.3C1.43 3.33333 0 4.77778 0 6.66667V16.6667C0 18.5556 1.43 20 3.3 20H18.7C20.57 20 22 18.5556 22 16.6667V6.66667C22 4.77778 20.57 3.33333 18.7 3.33333ZM8.8 2.22222H13.2V3.33333H8.8V2.22222ZM19.8 16.6667C19.8 17.3333 19.36 17.7778 18.7 17.7778H3.3C2.64 17.7778 2.2 17.3333 2.2 16.6667V10.4444L7.37 12.2222H14.3C14.41 12.2222 14.52 12.2222 14.63 12.1111L19.8 10.3333V16.6667Z"
                                  fill="#C4C4C4"
                                />
                              </svg>
                            </div>
                            <div className="adrees-cont">
                              <h5>Office </h5>
                              <p>4489 Kerry Way, Sector 33, Canada </p>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div className="addresses-col">
                            <div className="iconc-col">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                              >
                                <path
                                  d="M0.36625 7.8477L9.11625 0.315065C9.35066 0.113329 9.66854 0 10 0C10.3315 0 10.6493 0.113329 10.8837 0.315065L19.6338 7.8477C19.8682 8.04946 19.9999 8.32312 20 8.6085V18.9239C20 19.2093 19.8683 19.483 19.6339 19.6848C19.3995 19.8866 19.0815 20 18.75 20H12.5V12.4674H7.5V20H1.25C0.918479 20 0.600537 19.8866 0.366117 19.6848C0.131696 19.483 0 19.2093 0 18.9239V8.6085C7.07968e-05 8.32312 0.131814 8.04946 0.36625 7.8477Z"
                                  fill="#C4C4C4"
                                />
                              </svg>
                            </div>
                            <div className="adrees-cont">
                              <h5>Home </h5>
                              <p>18 Davidson St, Miles End, QLD 4596</p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="add-tip mt-4">
                      <h5>Add Tips</h5>
                      <FormGroup check>
                        <Label check>
                          <Input type="checkbox" /> 20% is Applied on Item Total
                          , or Choose Manually
                        </Label>
                      </FormGroup>
                    </div>
                    <div className="input-slect">
                      <div class="radio-toolbar">
                        <input
                          type="radio"
                          id="radioone"
                          name="radioone"
                          value="dollor"
                          checked
                        />
                        <label for="radioone">$1</label>

                        <input
                          type="radio"
                          id="radiotwo"
                          name="radiotwo"
                          value="dollor"
                        />
                        <label for="radiotwo">$2</label>

                        <input
                          type="radio"
                          id="radiothree"
                          name="radiothree"
                          value="dollor"
                        />
                        <label for="radiothree">$5</label>

                        <input
                          type="radio"
                          id="radiofour"
                          name="radiofour"
                          value="dollor"
                        />
                        <label for="radiofour">$10</label>
                      </div>
                    </div>
                  </Form>
                </div>
              </Fade>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}
