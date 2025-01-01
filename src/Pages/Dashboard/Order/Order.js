import React, { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Fade from "react-reveal/Fade";

import Modal from "react-bootstrap/Modal";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { orderDetail, ordersList, orderUpcommingDetail } from "../../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Order() {
  const dispatch = useDispatch();
  const [PastShow, setPastShow] = useState(false);
  const [DisputeShow, setDisputeShow] = useState(false);
  const [DisputeProcessShow, setDisputeProcessShow] = useState(false);

  const [counter, setCounter] = useState(0);
  const navigate = useNavigate();
  const increase = () => {
    setCounter((count) => count + 1);
  };

  const decrease = () => {
    setCounter((count) => count - 1);
  };

  const reset = () => {
    setCounter(0);
  };

  const trackPage = (ID) => {
    navigate(`/track-order/${ID}`);
  };

  const handleOpen = (Data) => {
    setPastShow(true);

    dispatch(orderDetail(Data._id));
  };

  const pastOrders = useSelector((s) => s.address.ordersList);
  const upcomingOrders = useSelector(
    (s) => s.address?.ordersUpcomingList
  );
  const orderData = useSelector((s) => s.address?.orderDetail);
  console.log("upcomingOrders", upcomingOrders);
  useEffect(() => {
    dispatch(ordersList());
    dispatch(orderUpcommingDetail())
  }, [dispatch]);
  return (
    <section className="FAQ-main Dispute-main">
      {/* past order modal */}
      <Modal
        show={PastShow}
        onHide={setPastShow}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal-common modal-coupon"
      >
        <Modal.Body>
          <Button onClick={() => setPastShow(false)} className="close-btn">
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
          <div className="past-order-modal">
            <div className="modal-structure">
              <h4 className="text-center">Your Orders Past Details</h4>
              <div className="order-info">
                <p>Order Number - {orderData?.customOrderId?.toUpperCase()}</p>
                <p>
                  {orderData?.date_created} | {orderData?.time_created}
                </p>
              </div>

              <div className="past-order-wrap mt-4">
                <div className="upcoming-left">
                  <div className="upcoming-img">
                    <img
                      src={orderData?.line_items?.[0]?.productImage}
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="for-list">
                    <div className="upcoming-cont">
                      <div className="upcomimg-div">
                        <h5>{orderData?.line_items?.[0]?.name}</h5>
                        <p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="10"
                            height="13"
                            viewBox="0 0 10 13"
                            fill="none"
                          >
                            <path
                              d="M5 0C3.6744 0.00159736 2.40354 0.540183 1.4662 1.49761C0.528855 2.45504 0.00156917 3.75313 5.31949e-06 5.10714C-0.00158236 6.21364 0.352269 7.29011 1.00728 8.17143C1.00728 8.17143 1.14364 8.35482 1.16591 8.38129L5 13L8.83591 8.37896C8.8559 8.35436 8.99272 8.17143 8.99272 8.17143L8.99318 8.17004C9.64786 7.28911 10.0015 6.21313 10 5.10714C9.99843 3.75313 9.47114 2.45504 8.5338 1.49761C7.59646 0.540183 6.3256 0.00159736 5 0ZM5 6.96429C4.6404 6.96429 4.28887 6.85537 3.98987 6.6513C3.69088 6.44724 3.45783 6.15719 3.32022 5.81784C3.18261 5.47849 3.1466 5.10508 3.21676 4.74483C3.28691 4.38458 3.46008 4.05367 3.71435 3.79394C3.96863 3.53422 4.2926 3.35734 4.64529 3.28568C4.99798 3.21403 5.36356 3.2508 5.69579 3.39137C6.02802 3.53193 6.31198 3.76996 6.51176 4.07537C6.71155 4.38078 6.81818 4.73983 6.81818 5.10714C6.81758 5.5995 6.62583 6.07151 6.28498 6.41966C5.94414 6.76781 5.48203 6.96367 5 6.96429Z"
                              fill="#3F3D56"
                            />
                          </svg>
                          {orderData?.billingDetails?.address}
                        </p>
                        <ul class="ratingstar-dash">
                          <li class="start-checked">★</li>
                          <li class="start-checked">★</li>
                          <li class="start-checked">★</li>
                          <li class="start-checked">★</li>
                          <li class="">★</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="past-right">
                  <div className="pastdriver-img">
                    <img
                      src={orderData?.vendor?.profileImage?.link}
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="pastdriver-cont">
                    <h4 className="pastdriver-name">
                      {orderData?.vendor?.name}
                    </h4>
                    <div className="pastcode-star">
                      {/* <h4>KL01MVT</h4> */}
                      <p className="rate-col">
                        ★{orderData?.vendor?.avgRating}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="location-here mt-4">
                <h5>Location</h5>

                <ul className="location-addrees position-relative">
                  <li>
                    <div className="pickup-location">
                      <p className="pickup">Pick up location</p>
                      <p className="pickupaddress">
                        {orderData?.vendor?.address}
                      </p>
                    </div>
                  </li>

                  <li>
                    <div className="pickup-location">
                      <p className="pickup">Drop up location</p>
                      <p className="pickupaddress">
                        {orderData?.billingDetails?.address}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <ul className="order-listdetails">
                <h5 className="headnd-h5">Orders Details</h5>
                {orderData?.line_items &&
                  orderData?.line_items?.length > 0 &&
                  orderData?.line_items?.map((itm, idx) => {
                    return (
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
                              {itm?.name}
                            </p>
                          </div>
                          <div className="added-price">
                            <p>{itm?.quantity}</p>
                          </div>
                          <div className="added-price">
                            <p>Rs {itm?.price}</p>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                {orderData?.line_items &&
                  orderData?.line_items?.length > 0 &&
                  orderData?.line_items?.map((itm, idx) => {
                    return (
                      <>
                        {itm?.addons &&
                          (itm?.addons || [])?.length > 0 &&
                          (itm?.addons || [])?.map((item, index) => {
                            return (
                              <li>
                                <div
                                  className="list-common position-relative"
                                  key={index}
                                >
                                  <div className="list-name">
                                    <p>{item.name}</p>
                                  </div>
                                  <div className="added-price">
                                    <p>Rs {item.price}</p>
                                  </div>
                                </div>
                              </li>
                            );
                          })}
                      </>
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
                </li> */}
              </ul>

              {orderData && (
                <div className="bill-details">
                  <h5>Bill Details</h5>
                  <ul>
                    <li>
                      <div className="bill-list">
                        <p>Item Total</p>
                        <p>Rs {orderData?.subTotal || 0}</p>
                      </div>
                    </li>
                    <li>
                      <div className="bill-list">
                        <p>Tax and Fees</p>
                        <p>Rs {orderData?.tax || 0}</p>
                      </div>
                    </li>
                    <li>
                      <div className="bill-list">
                        <p className="redeem-col">Discount & Coupon</p>
                        <p className="redeem-col">Rs {orderData?.couponAmount || 0}</p>
                      </div>
                    </li>
                    <li>
                      <div className="bill-list">
                        <p>Delivery Fee</p>
                        <p>Rs {orderData?.deliveryFee || 0}</p>
                      </div>
                    </li>
                    <li>
                      <div className="bill-list">
                        <p className="">Tips</p>
                        <p className="">Rs {orderData?.tipAmount || 0}</p>
                      </div>
                    </li>
                  </ul>
                  <Button className="total-pay">
                    <p>Total</p>
                    <p>Rs {orderData?.orderTotal || 0}</p>
                  </Button>
                </div>
              )}
              {orderData && (
                <div className="payment-detailss mt-4">
                  <h5>Payment Details</h5>

                  <div className="poop-dispute">
                    <div className="payment-main">
                      <p>
                        <img
                          src="/images/money.png"
                          alt=""
                          className="img-fluid"
                        />
                        Payment{" "}
                      </p>
                      <p className="text-capitalize">
                        {/* <img
                          src="images/cards.png"
                          alt=""
                          className="img-fluid"
                        /> */}
                        {orderData?.paymentMethod}
                      </p>
                      <p>Rs {orderData?.orderTotal}</p>
                    </div>
                    {/* <a
                      href="javascript:void(0)"
                      onClick={() => {
                        setPastShow(!PastShow);
                        setTimeout(() => {
                          setDisputeShow(!DisputeShow);
                        }, 400);
                      }}
                    >
                      <div className="dipute-img">
                        <img
                          src="images/dispute.png"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </a> */}
                  </div>
                </div>
              )}
            </div>
          </div>
        </Modal.Body>
      </Modal>
      {/* past order modal */}

      {/* modal dispute */}
      <Modal
        show={DisputeShow}
        onHide={setDisputeShow}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal-common modal-coupon"
      >
        <Modal.Body>
          <Button onClick={() => setDisputeShow(false)} className="close-btn">
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
          <div className="disputemodal-order-modal">
            <h4 className="text-center">Dispute</h4>

            <div className="dispute-about-main">
              <div className="dispute-person">
                <div className="dispute-person-img">
                  <img
                    src="images/driverprofile.png"
                    alt=""
                    className="img-fluid dispute-profile"
                  />
                </div>
                <div className="dispute-person-name">
                  <h5>Hadrien Trudeau</h5>
                  <p>24/08/2022, 18:39</p>
                </div>
              </div>
              <div className="dispute-person-dollor">
                <p>$ 25.35</p>
              </div>
            </div>

            <div className="from-dispute">
              <Form>
                <FormGroup className="position-relative">
                  <Input type="select" name="select" id="exampleSelect">
                    <option>Reason for Dispute</option>
                    <option>Service Was Not Good</option>
                    <option>Food Was not Hygienic</option>
                    <option>Poor Packaging</option>
                    <option>Wrong Food Deliverd</option>
                  </Input>
                  <div className="arrow-down">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="12"
                      viewBox="0 0 22 14"
                      fill="none"
                    >
                      <path
                        d="M9.44343 12.8665L0.8009 2.98776C-0.219048 1.82545 0.609885 6.62616e-07 2.15783 6.62616e-07H19.4429C19.7893 -0.00029636 20.1285 0.0992698 20.4198 0.286776C20.7111 0.474283 20.9422 0.741781 21.0853 1.05724C21.2285 1.37269 21.2777 1.72274 21.2271 2.06544C21.1765 2.40815 21.0281 2.729 20.7998 2.98956L12.1573 12.8647C11.9881 13.0582 11.7795 13.2134 11.5455 13.3197C11.3115 13.4259 11.0574 13.4809 10.8004 13.4809C10.5433 13.4809 10.2892 13.4259 10.0552 13.3197C9.82116 13.2134 9.61257 13.0582 9.44343 12.8647V12.8665Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </FormGroup>
                <FormGroup>
                  <Input
                    type="textarea"
                    name="text"
                    id="exampleText"
                    placeholder="Message"
                  />
                </FormGroup>
                <Button
                  className="btn-submit"
                  onClick={() => {
                    setDisputeShow(!DisputeShow);
                    setTimeout(() => {
                      setDisputeProcessShow(!DisputeProcessShow);
                    }, 400);
                  }}
                >
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      {/* modal dispute */}

      {/* modal dispute process*/}
      <Modal
        show={DisputeProcessShow}
        onHide={setDisputeProcessShow}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal-common modal-coupon"
      >
        <Modal.Body>
          <Button
            onClick={() => setDisputeProcessShow(false)}
            className="close-btn"
          >
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
          <div className="disputemodal-order-modal">
            <h4 className="text-center col-red">Dispute In Process....... </h4>

            <div className="dispute-about-main">
              <div className="dispute-person">
                <div className="dispute-person-img">
                  <img
                    src="images/driverprofile.png"
                    alt=""
                    className="img-fluid dispute-profile"
                  />
                </div>
                <div className="dispute-person-name">
                  <h5 className="col-black">Hadrien Trudeau</h5>
                  <p className="col-black">24/08/2022, 18:39</p>
                </div>
              </div>
              <div className="dispute-person-dollor">
                <p className="col-black">$ 25.35</p>
              </div>
            </div>

            <div className="from-dispute-decription">
              <div className="item-content">
                <div className="item-img">
                  <img src="images/item-img.png" alt="" className="img-fluid" />
                </div>
                <div className="item-cont">
                  <h5>Faasos </h5>
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="13"
                      viewBox="0 0 10 13"
                      fill="none"
                    >
                      <path
                        d="M5 0C3.6744 0.00159736 2.40354 0.540183 1.4662 1.49761C0.528855 2.45504 0.00156917 3.75313 5.31949e-06 5.10714C-0.00158236 6.21364 0.352269 7.29011 1.00728 8.17143C1.00728 8.17143 1.14364 8.35482 1.16591 8.38129L5 13L8.83591 8.37896C8.8559 8.35436 8.99272 8.17143 8.99272 8.17143L8.99318 8.17004C9.64786 7.28911 10.0015 6.21313 10 5.10714C9.99843 3.75313 9.47114 2.45504 8.5338 1.49761C7.59646 0.540183 6.3256 0.00159736 5 0ZM5 6.96429C4.6404 6.96429 4.28887 6.85537 3.98987 6.6513C3.69088 6.44724 3.45783 6.15719 3.32022 5.81784C3.18261 5.47849 3.1466 5.10508 3.21676 4.74483C3.28691 4.38458 3.46008 4.05367 3.71435 3.79394C3.96863 3.53422 4.2926 3.35734 4.64529 3.28568C4.99798 3.21403 5.36356 3.2508 5.69579 3.39137C6.02802 3.53193 6.31198 3.76996 6.51176 4.07537C6.71155 4.38078 6.81818 4.73983 6.81818 5.10714C6.81758 5.5995 6.62583 6.07151 6.28498 6.41966C5.94414 6.76781 5.48203 6.96367 5 6.96429Z"
                        fill="#3F3D56"
                      />
                    </svg>
                    8502 Preston Rd. Maine 98380
                  </p>
                  <div className="time-date">
                    <p>Dispute Date / Time</p>
                    <p>24/08/2022, 18:39</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="dispute-items-main">
              <ul>
                <li>
                  <div className="itmems-main">
                    <div className="left-green">
                      <div className="green-box"></div>
                      <div className="green-box-cont">
                        <h5> Paneer KingMelt-Combo</h5>
                        <p>Medium Fries & a Large Pepsi</p>
                      </div>
                    </div>

                    <div className="right-green">
                      <p>$60</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="itmems-main">
                    <div className="left-green">
                      <div className="green-box"></div>
                      <div className="green-box-cont">
                        <h5> Paneer KingMelt-Combo</h5>
                        <p>Medium Fries & a Large Pepsi</p>
                      </div>
                    </div>

                    <div className="right-green">
                      <p>$60</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="total-dispute">
              <p>Total Pay</p>
              <p>$25.35</p>
            </div>

            <div className="reason-here">
              <h5>Reason for Dispute</h5>

              <div className="dispute-reason">
                <h4> Wrong Food Deliverd</h4>
                <div className="check-reason">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="11"
                    viewBox="0 0 14 11"
                    fill="none"
                  >
                    <path d="M1 5.5L6.4 10L13.6 1" stroke="#00B102" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="issue-description">
              <h6>Issue Description:</h6>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,{" "}
              </p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      {/* modal dispute process*/}

      <Fade>
        <div className="Dispute-part">
          <h5 className="text-center dispute-head">Your Orders Details</h5>

          <div className="Current-dipute">
            <h5 className="col-green">Upcoming Order</h5>

            {upcomingOrders &&
              upcomingOrders?.length > 0 &&
              upcomingOrders?.map((item, index) => {
                return (
                  <div className="Upcoming-item mb-3">
                    <div className="upcoming-itemsdiv">
                      <div className="upcoming-left">
                        <div className="upcoming-img">
                          <img
                            src={item?.line_items?.[0].productImage}
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                        <div className="for-list">
                          <div className="upcoming-cont">
                            <div className="upcomimg-div">
                              <h5>{item?.line_items?.[0].name}</h5>
                              <p>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="36"
                                  height="36"
                                  viewBox="0 0 10 13"
                                  fill="none"
                                >
                                  <path
                                    d="M5 0C3.6744 0.00159736 2.40354 0.540183 1.4662 1.49761C0.528855 2.45504 0.00156917 3.75313 5.31949e-06 5.10714C-0.00158236 6.21364 0.352269 7.29011 1.00728 8.17143C1.00728 8.17143 1.14364 8.35482 1.16591 8.38129L5 13L8.83591 8.37896C8.8559 8.35436 8.99272 8.17143 8.99272 8.17143L8.99318 8.17004C9.64786 7.28911 10.0015 6.21313 10 5.10714C9.99843 3.75313 9.47114 2.45504 8.5338 1.49761C7.59646 0.540183 6.3256 0.00159736 5 0ZM5 6.96429C4.6404 6.96429 4.28887 6.85537 3.98987 6.6513C3.69088 6.44724 3.45783 6.15719 3.32022 5.81784C3.18261 5.47849 3.1466 5.10508 3.21676 4.74483C3.28691 4.38458 3.46008 4.05367 3.71435 3.79394C3.96863 3.53422 4.2926 3.35734 4.64529 3.28568C4.99798 3.21403 5.36356 3.2508 5.69579 3.39137C6.02802 3.53193 6.31198 3.76996 6.51176 4.07537C6.71155 4.38078 6.81818 4.73983 6.81818 5.10714C6.81758 5.5995 6.62583 6.07151 6.28498 6.41966C5.94414 6.76781 5.48203 6.96367 5 6.96429Z"
                                    fill="#3F3D56"
                                  />
                                </svg>
                                {item?.billingDetails?.address}
                              </p>
                            </div>
                            <div className="upcoming-time">
                              <p>{item.date_created}</p>
                            </div>
                          </div>
                          <ul className="item-lists">
                            <h6 className="red-col"> ITEMS</h6>
                            <li>
                              <div className="list">
                                {item.line_items &&
                                  item.line_items?.length > 0 &&
                                  item.line_items?.map((data, index) => {
                                    return (
                                      <>
                                        <h6>{data.name}</h6>
                                        {data.addons &&
                                          (data.addons || [])?.length > 0 &&
                                          (data.addons || [])?.map((itm, idx) => {
                                            return <p>{itm.name}</p>;
                                          })}
                                      </>
                                    );
                                  })}
                              </div>
                            </li>
                            {/* <li>
                              <div className="list">
                                <h6>Sweet Corn Pizza</h6>
                                <p>Medium Fries & a Large Pepsi</p>
                              </div>
                            </li> */}
                          </ul>
                        </div>
                      </div>
                      <div className="upcoming-right">
                        <h4>Total Price: ${item.orderTotal}</h4>
                        <Button
                          className="track-order"
                          onClick={() => trackPage(item._id)}
                        >
                          Track Order
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>

          <div className="Current-dipute past-order">
            <h5 className="col-red">Past Order</h5>

            {/* {[1, 2, 3].map(() => { */}
            {/* return ( */}
            {pastOrders &&
              pastOrders.length > 0 &&
              pastOrders?.map((item, index) => {
                return (
                  <div className="Upcoming-item mb-3">
                    <div className="upcoming-itemsdiv">
                      <div className="upcoming-left">
                        <div className="upcoming-img">
                          <img
                            src={item?.line_items?.[0]?.productImage}
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                        <div className="for-list">
                          <div className="upcoming-cont">
                            <div className="upcomimg-div">
                              <h5>{item?.line_items?.[0]?.name}</h5>
                              <p>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="10"
                                  height="13"
                                  viewBox="0 0 10 13"
                                  fill="none"
                                >
                                  <path
                                    d="M5 0C3.6744 0.00159736 2.40354 0.540183 1.4662 1.49761C0.528855 2.45504 0.00156917 3.75313 5.31949e-06 5.10714C-0.00158236 6.21364 0.352269 7.29011 1.00728 8.17143C1.00728 8.17143 1.14364 8.35482 1.16591 8.38129L5 13L8.83591 8.37896C8.8559 8.35436 8.99272 8.17143 8.99272 8.17143L8.99318 8.17004C9.64786 7.28911 10.0015 6.21313 10 5.10714C9.99843 3.75313 9.47114 2.45504 8.5338 1.49761C7.59646 0.540183 6.3256 0.00159736 5 0ZM5 6.96429C4.6404 6.96429 4.28887 6.85537 3.98987 6.6513C3.69088 6.44724 3.45783 6.15719 3.32022 5.81784C3.18261 5.47849 3.1466 5.10508 3.21676 4.74483C3.28691 4.38458 3.46008 4.05367 3.71435 3.79394C3.96863 3.53422 4.2926 3.35734 4.64529 3.28568C4.99798 3.21403 5.36356 3.2508 5.69579 3.39137C6.02802 3.53193 6.31198 3.76996 6.51176 4.07537C6.71155 4.38078 6.81818 4.73983 6.81818 5.10714C6.81758 5.5995 6.62583 6.07151 6.28498 6.41966C5.94414 6.76781 5.48203 6.96367 5 6.96429Z"
                                    fill="#3F3D56"
                                  />
                                </svg>
                                {item?.vendorDetails?.address}
                              </p>
                              <ul class="ratingstar-dash">
                                <li class="start-checked">★</li>
                                <li class="start-checked">★</li>
                                <li class="start-checked">★</li>
                                <li class="start-checked">★</li>
                                <li class="">★</li>
                              </ul>
                            </div>
                            <div className="upcoming-time">
                              <p>{item?.date_created_utc}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="upcoming-right">
                        <p>Order Number - {item.customOrderId}</p>
                        <h4>Total Price : Rs {item.orderTotal}</h4>
                        <h4>Order Status : {item.orderStatus == "completed" ?
                          <span style={{ color: "green" }}>{item.orderStatus}</span> :
                          <span style={{ color: "red" }}>{item.orderStatus}</span>
                        }</h4>
                      </div>
                    </div>
                    <div className="past-oder-details">
                      <ul className="item-lists">
                        <h6 className="col-black"> ITEMS</h6>
                        <li>
                          <div className="list">
                            {item?.line_items &&
                              (item?.line_items || [])?.length > 0 &&
                              (item?.line_items || [])?.map((data, index) => {
                                return (
                                  <>
                                    <h6>{data?.name}</h6>
                                    {(data || [])?.addons &&
                                      (data.addons || [])?.length > 0 &&
                                      (data.addons || [])?.map((addon, index) => {
                                        return <p>{addon?.name}</p>;
                                      })}
                                  </>
                                );
                              })}
                          </div>
                        </li>

                        {/* <li>
                          <div className="list">
                            <h6>Sweet Corn Pizza</h6>
                            <p>Medium Fries & a Large Pepsi</p>
                          </div>
                        </li> */}
                      </ul>
                      <Button
                        className="track-order view-order"
                        // checked={}
                        onClick={() => handleOpen(item)}
                      >
                        View Order
                      </Button>
                    </div>
                  </div>
                );
              })}
            {/* );
            })} */}
          </div>
        </div>
      </Fade>
    </section>
  );
}
