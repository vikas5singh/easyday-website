import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

export default function CartModal(props) {
  const [counter, setCounter] = useState(0);
  const dispatch = useDispatch();

  const increase = () => {
    setCounter((count) => count + 1);
  };

  const decrease = () => {
    setCounter((count) => count - 1);
  };

  const reset = () => {
    setCounter(0);
  };

  const lastData = props.addData;
  const idData = props.valChange;
  const state = props.state;
  const submit = props.submit;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-common modal-coupon"
    >
      <Modal.Body>
        <Button onClick={props.onHide} className="close-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 40 40"
            fill="none"
          >
            <path
              d="M18.3699 0.0663185C13.7044 0.442104 9.21418 2.52146 5.88406 5.83673C-0.676038 12.3754 -1.89458 22.5885 2.95455 30.4883C5.61698 34.8308 9.93195 38.0458 14.8312 39.3485C16.6005 39.8162 18.0194 39.9999 19.914 39.9999C23.2107 40.0083 25.8314 39.4154 28.8027 37.9707C36.7733 34.1126 41.2468 25.2774 39.6944 16.5091C37.8917 6.37118 28.6274 -0.768764 18.3699 0.0663185ZM23.3359 14.7972L26.6744 11.4568L27.6425 12.4255L28.6024 13.3859L25.2472 16.7095L21.892 20.0331L25.2222 23.3651L28.5523 26.6971L27.6092 27.6324L26.6744 28.576L23.3359 25.2357L19.9974 21.8953L16.684 25.2106L13.3622 28.5342L12.4191 27.599L11.476 26.6637L14.7978 23.34L18.1196 20.0164L14.7978 16.6928L11.4843 13.3775L12.4191 12.4339L13.3622 11.4986L16.6757 14.8139L19.9974 18.1375L23.3359 14.7972Z"
              fill="black"
            />
          </svg>
        </Button>
        <section className="cart-main">
          <div className="cart-here">
            <h2>Add ons</h2>
            <p>{lastData && lastData.addons?.length} Item</p>

            <div className="item-added-lsit">
              <ul>
                {lastData?.addons && lastData?.addons?.length > 0
                  ? lastData.addons?.map((item, index) => (
                      <li key={index}>
                        <div className="list-common position-relative">
                          <div className="wrp-col">
                            <input
                              type="checkbox"
                              name="itemId"
                              value={item._id}
                              checked={state.itemId.includes(item._id)}
                              onChange={(e) => idData(e, item)}
                            />
                            <div className="list-name">
                              <p>{item.name}</p>
                            </div>
                          </div>

                          <div className="added-more">
                            {/* <div class="plus-minus ">
                        <div class="number">
                          <button class="minus" onClick={decrease}>
                            -
                          </button>

                          <span className="counter__output">{counter}</span>
                          <button class="plus" onClick={increase}>
                            +
                          </button>
                        </div>
                      </div> */}
                          </div>
                          <div className="added-price">
                            <p>${item.price}</p>
                          </div>
                        </div>
                      </li>
                    ))
                  : ""}
                {/* <li>
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
                </li> */}
              </ul>
            </div>

            {/* <div className="subtotal-here">
              <div className="subttoal-head">
                <h4>Subtotal</h4>
                <p>Extra charges may apply</p>
              </div>
              <div className="subttoal-price">
                <h5>$ 145.25</h5>
              </div>
            </div> */}
            <Button className="checkout-btn" onClick={submit}>
              Checkout
            </Button>
          </div>
        </section>
      </Modal.Body>
    </Modal>
  );
}
