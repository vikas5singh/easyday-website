import React, { useEffect, useState, useMemo } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Fade from "react-reveal/Fade";
import { useDispatch, useSelector } from "react-redux";
import { feedBack, userCart, orderDetail } from "../../Redux/actions";
import { style } from "./mapStyle";
import MapLocation from "./MapLocation";
import useSocket from "../../Common/Socket";
import Demo from "./demo";
import Deliverdmodal from "../Arrivedorder/Deliverdmodal";

export default function Trackorderpage(props) {
  const [socket, connectSocket] = useSocket();
  const [socketConnect, setsocketConnect] = useState(false);
  const { success, io } = socket;

  useEffect(() => { }, [socket]);

  useEffect(() => {
    if (success) {
      io.on("order_customer_socket", (socket) => { });
    }
  }, [io]);

  // ------------------------------------- //

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(0);
  const [state, setState] = useState();
  const [state1, setState1] = useState({ loading: false, details: {} });
  const [Location, setLocation] = useState([]);
  const [DLoc, setDLoc] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [Rating, setRating] = useState({
    _id: "",
    driverRating: 0,
    driverReview: "",
    restrating: 0,
    restReview: "",
  });
  const cartKey = useMemo(() => {
    return localStorage?.getItem("cartKey") || null;
  }, []);
  useEffect(() => {
    dispatch(userCart({ cart_key: localStorage?.getItem("cartKey") || cartKey, promocode: "none", tip: "no", tipAmount: 0 }));
  }, [cartKey])
  const list = useSelector((s) => s.address.orderDetail);
  useEffect(() => {
    setState((pre) => ({
      ...pre,
      ...list,
    }));
    setRating((pre) => ({
      ...pre,
      _id: list?._id,
    }));

    if (list?.billingDetails?.addressLocation) {
      setLocation((prev) => [
        ...prev,
        {
          lat: list?.billingDetails?.addressLocation?.coordinates[1],
          lng: list?.billingDetails?.addressLocation?.coordinates[0],
        },
      ]);
    }
  }, [list]);

  useEffect(() => {
    setState((pre) => ({
      ...pre,
      ...list,
    }));

    if (list?.driverRefId?.driverLocation) {
      setDLoc((prev) => [
        ...prev,
        {
          lat: list?.billingDetails?.addressLocation?.coordinates[1],
          lng: list?.billingDetails?.addressLocation?.coordinates[0],
        },
      ]);
    }
    if (list?.driverRefId?.driverLocation) {
      setDLoc((prev) => [
        ...prev,
        {
          lat: list?.driverRefId?.driverLocation?.coordinates[1],
          lng: list?.driverRefId?.driverLocation?.coordinates[0],
        },
      ]);
    }
  }, [list?.driverRefId?.driverLocation]);

  // const increase = () => {
  //   setCounter((count) => count + 1);
  // };

  // const decrease = () => {
  //   setCounter((count) => count - 1);
  // };

  // const reset = () => {
  //   setCounter(0);
  // };

  useEffect(() => {
    dispatch(orderDetail(props.Id));
  }, [dispatch]);

  const options = {
    styles: style,
  };

  useEffect(() => {
    if (state?.orderStatus == "completed") {
      setModalShow(true);
    }
  }, [state?.orderStatus]);

  const DriverRating = (value) => {
    setRating((pre) => ({
      ...pre,
      driverRating: value,
    }));
  };
  const handleTipDelete = (e) => {
    e.preventDefault();
  };

  const RestRating = (value) => {
    setRating((pre) => ({
      ...pre,
      restrating: value,
    }));
  };
  const handleDriverChange = (e) => {
    const { value } = e.target;
    setRating((prev) => ({
      ...prev,
      driverReview: value,
    }));
  };
  const handleRestChange = (e) => {
    const { value } = e.target;
    setRating((prev) => ({
      ...prev,
      restReview: value,
    }));
  };
  const ratingSubmit = (e) => {
    e.preventDefault();
    const callBack = (status) => {
      if (status == "success") {
        navigate("/");
        setModalShow(false);
      }
    };
    dispatch(feedBack(Rating, callBack));
  };

  const position = { lat: 30.6976, lng: 76.69228 };
  return (
    <section className="track-map">
      <Deliverdmodal
        show={modalShow}
        onHide={() => setModalShow(false)}
        driverChange={DriverRating}
        restChange={RestRating}
        handleSubmit={ratingSubmit}
        handleDriverChange={handleDriverChange}
        handleRestChange={handleRestChange}
      />
      <div className="track-head text-center">
        <h2>Track Your Order </h2>
      </div>
      <div className="track-map-here">
        {/* {!DLoc ? ( */}
        {state?.orderStatus == "picked" ? (
          <MapLocation
            loading={state1.loading}
            details={state1.details}
            places={DLoc}
          />
        ) : (
          <Demo places={Location} />
        )}
        {/* )} */}
      </div>

      <div className="bottom-track-details mt-5 ">
        <Container>
          <Row>
            <Col lg={7} md={6} sm={12} className="order-one">
              <Fade>
                <div className="food-prepared-details">
                  <h2
                    className={
                      state?.orderStatus == "completed" ? "d-none" : ""
                    }
                  >
                    Your Order is {state?.orderStatus}...
                  </h2>
                  <div className="track-progress mt-4">
                    {/* <div className="track-contnent">
                      <p className="track-timing">28:30</p>
                      <p className="title-track">Estimated Time</p>
                    </div> */}

                    {/* ========== order pending ============== */}
                    <div
                      className={
                        state?.orderStatus == "pending" ? "four-tack" : "d-none"
                      }
                    >
                      <div className="line">
                        <div
                          className="fill-div"
                          style={{ width: "50%" }}
                        ></div>
                      </div>
                      <div className="line"></div>
                      <div className="line"></div>
                      <div className="line"></div>
                    </div>

                    {/* ========== order confirmed ============== */}
                    <div
                      className={
                        state?.orderStatus == "confirmed"
                          ? "four-tack"
                          : "d-none"
                      }
                    >
                      <div className="line">
                        <div
                          className="fill-div"
                          style={{ width: "100%" }}
                        ></div>
                      </div>
                      <div className="line">
                        <div
                          className="fill-div"
                          style={{ width: "80%" }}
                        ></div>
                      </div>
                      <div className="line"></div>
                      <div className="line"></div>
                    </div>

                    {/* ========== order picked ============== */}
                    <div
                      className={
                        state?.orderStatus == "picked" ? "four-tack" : "d-none"
                      }
                    >
                      <div className="line">
                        <div
                          className="fill-div"
                          style={{ width: "100%" }}
                        ></div>
                      </div>
                      <div className="line">
                        <div
                          className="fill-div"
                          style={{ width: "100%" }}
                        ></div>
                      </div>
                      <div className="line">
                        <div
                          className="fill-div"
                          style={{ width: "80%" }}
                        ></div>
                      </div>
                      <div className="line"></div>
                    </div>
                    <div
                      className={
                        state?.orderStatus == "completed"
                          ? "text-center"
                          : "d-none"
                      }
                    >
                      <img
                        src="../images/scooter.png"
                        alt=""
                        className="img-fluid"
                      />
                      <h2>Your Food Arrived</h2>
                    </div>
                  </div>

                  <div className="location-here mt-5">
                    <h5>Location</h5>

                    <ul className="location-addrees position-relative">
                      <li>
                        <div className="pickup-location">
                          <p className="pickup">Pick up location</p>
                          <p className="pickupaddress">
                            {state?.vendor?.name +
                              " , " +
                              state?.vendor?.address}
                          </p>
                          {/* <p className="pickupaddress">
                            {state.restaurantMobile}
                          </p> */}
                        </div>
                      </li>

                      <li>
                        <div className="pickup-location">
                          <p className="pickup">Drop Off location</p>
                          <p className="pickupaddress">
                            {state?.billingDetails?.area +
                              " , " +
                              state?.billingDetails?.address}
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="payment-details mt-4">
                    <h4>Payment Details</h4>
                    <div className="payment-main">
                      <p>
                        <img
                          src="/images/money.png"
                          alt=""
                          className="img-fluid"
                        />
                        Payment{" "}
                      </p>
                      <p>
                        {/* <img
                          src="../images/cards.png"
                          alt=""
                          className="img-fluid"
                        /> */}
                        {state?.paymentMethod}
                      </p>
                      <p> Rs {state?.orderTotal}</p>
                    </div>
                    {/* <Button className="proces-to-order">Cancel Order</Button> */}
                  </div>
                </div>
              </Fade>
            </Col>
            <Col lg={5} md={6} sm={12}>
              <Fade>
                <div className="order-details">
                  <h2 className="text-center">Order Details</h2>
                  <ul className="order-listdetails">
                    {state?.items &&
                      state.items?.length > 0 &&
                      state.items?.map((item, index) => {
                        return (
                          <li key={index}>
                            <div className="list-common position-relative">
                              <div className="list-name">
                                <p>
                                  {/* <svg
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
                                  </svg> */}
                                  {item.quantity + " x " + item.itemName}
                                </p>
                              </div>
                              {/* <div className="added-more">
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
                        </div> */}
                              <div className="added-price">
                                <p>${item.itemPrice}</p>
                              </div>
                            </div>
                          </li>
                        );
                      })}

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
                    </li> */}
                  </ul>
                  <div className="bill-details ">
                    <h5>Bill Details</h5>
                    <ul>
                      {state?.line_items &&
                        state.line_items?.length > 0 &&
                        state.line_items?.map((item, index) => {
                          return (
                            <li key={index}>
                              <div className="bill-list">
                                <p>Item Total</p>
                                <p>Rs {item.lineTotal}</p>
                              </div>
                            </li>
                          );
                        })}
                      <li>
                        <div className="bill-list">
                          <p>Tax and Fees</p>
                          <p>Rs {state?.tax}</p>
                        </div>
                      </li>
                      <li>
                        <div className="bill-list">
                          <p>Delivery Fee</p>
                          <p>Rs {state?.deliveryFee}</p>
                        </div>
                      </li>
                      <li>
                        <li>
                          <div className="bill-list">
                            <p>Discount - Applied Coupon</p>
                            <p>Rs {state?.couponAmount || 0}</p>
                          </div>
                        </li>
                        <div className="bill-list">
                          <p>Tip</p>
                          <p>Rs {state?.tipAmount}</p>
                        </div>
                      </li>
                    </ul>
                    {/* <Button
                      className="total-pay"
                      // onClick={() => navigate("/picked-order")}
                    >
                      <p>Total</p>
                      <p>${state?.orderTotal}</p>
                    </Button> */}
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
