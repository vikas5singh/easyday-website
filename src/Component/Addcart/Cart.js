import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const navigate = useNavigate();

  const [counter, setCounter] = useState(0);

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
    <section className="cart-main">
      <div className="cart-here">
        <h2>Cart</h2>
        <p>8 Item</p>

        <div className="item-added-lsit">
          <ul>
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
                      <circle cx="7.875" cy="7.125" r="3.375" fill="#A54A57" />
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
                      <circle cx="7.875" cy="7.125" r="3.375" fill="#1A7D18" />
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
                      <circle cx="7.875" cy="7.125" r="3.375" fill="#1A7D18" />
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
        </div>

        <div className="subtotal-here">
          <div className="subttoal-head">
            <h4>Subtotal</h4>
            <p>Extra charges may apply</p>
          </div>
          <div className="subttoal-price">
            <h5>$ 145.25</h5>
          </div>
        </div>
        <Button
          className="checkout-btn"
          onClick={() => navigate("/secure-checkout")}
        >
          Checkout
        </Button>
      </div>
    </section>
  );
}
