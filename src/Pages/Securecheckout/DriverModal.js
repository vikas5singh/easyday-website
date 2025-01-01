import React, { useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { promoList } from "../../Redux/actions";

export default function DriverModal(props) {
  const { state, change, list } = props;
  console.log("change", change);
  console.log("list", list);
  console.log(state, "state");
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-common modal-coupon"
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Choose Delivery Person
        </Modal.Title>
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
      </Modal.Header>
      <Modal.Body>
        <div className="counpon-form">
          <Form>
            <div className="voupon-add driveradd-img">
              {(list &&
                list?.length > 0 &&
                list?.map((item, index) => {
                  return (
                    <div class="inputGroup">
                      <input
                        id={`option1${item._id}`}
                        name="driverId"
                        type="checkbox"
                        value={item._id}
                        checked={state.driverId.includes(item._id)}
                        onChange={(e) => change(e, item)}
                      />
                       <input
                        id={`option1${item._id}`}
                        name="driverName"
                        type="checkbox"
                        value={item.name}
                        checked={state.driverName.includes(item.name)}
                        onChange={(e) => change(e, item)}
                      />
                      <label for={`option1${item._id}`} className="label-flex">
                        <div className="laeblwrap">
                          <img
                            src={
                              item.profileImage
                                ? item.profileImage
                                : "images/discount.png"
                            }
                            alt=""
                            className="img-fluid"
                          />
                          <div className="coupon-cont">
                            <h5>{item.name}</h5>
                            <p className="text-capitalize fiat-price">
                              ${item.deliveryFee + " " + item.chargeType}
                            </p>{" "}
                            {/* <p className="complte-dil">lorem</p> */}
                          </div>
                        </div>

                        <div className="rating-col">
                          <div class="driver-star">
                            <p class="rate-colstar">
                              <svg
                                role="img"
                                class="iconify iconify--ic"
                                width="17"
                                height="17"
                                preserveAspectRatio="xMidYMid meet"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="#ffa534"
                                  d="M14.43 10L12 2l-2.43 8H2l6.18 4.41L5.83 22L12 17.31L18.18 22l-2.35-7.59L22 10z"
                                />
                              </svg>
                              {item.avgRating ? item.avgRating : "0"}
                            </p>
                            <p class="rate-colprice">
                              <svg
                                role="img"
                                class="iconify iconify--ion"
                                width="17"
                                height="17"
                                preserveAspectRatio="xMidYMid meet"
                                viewBox="0 0 512 512"
                              >
                                <path
                                  d="M416 64H257.6L76.5 251.6c-8 8-12.3 18.5-12.5 29-.3 11.3 3.9 22.6 12.5 31.2l123.7 123.6c8 8 20.8 12.5 28.8 12.5s22.8-3.9 31.4-12.5L448 256V96l-32-32zm-30.7 102.7c-21.7 6.1-41.3-10-41.3-30.7 0-17.7 14.3-32 32-32 20.7 0 36.8 19.6 30.7 41.3-2.9 10.3-11.1 18.5-21.4 21.4z"
                                  fill="#ffa534"
                                />
                              </svg>
                              ${item.deliveryFee}
                            </p>
                          </div>
                        </div>
                      </label>
                    </div>
                  );
                })) || (
                <p className="text-center">Select Delivery Address First!</p>
              )}
            </div>

            <Button className="btn-done" onClick={props.onHide}>
              Done
            </Button>
          </Form>
        </div>
      </Modal.Body>
    </Modal>
  );
}
