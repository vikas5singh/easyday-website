import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

export default function CustomizeMOdal(props) {
  const [counter, setCounter] = useState(0);

  const [addonsState, setAddonsState] = useState([]);

  console.log("addonsState", addonsState);
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
  // console.log(lastData.customise, "lastData");
  const idData = props.valChange;
  const state = props.state;
  console.log(state, "duggu");
  const submit = props.submit;
  const quantity = props.quantity;
  const addonsButton = props.addonsButton;
  const customiseData = props.customiseData;
  const onHide = props.onHide;

  console.log("quantity", quantity);

  console.log("lastData", lastData);

  useEffect(() => {
    let arres = lastData?.addons?.map((item) => item?.name);

    console.log("arres", arres);

    setAddonsState(arres);
  }, [lastData?.addons]);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-common modal-coupon CustomizeAddOn"
      scrollable="true"
    >
      <Modal.Body>
        <Button onClick={onHide} className="close-btn">
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
            <div className="topHead d-flex align-items-center justify-content-between mb-4">
              <div className="left">
                <h2>Customize Food Items</h2>
                <p className="m-0 pt-1 theme-clr fw-bold">
                  Select any one from the given below :-
                </p>
              </div>
              <div className="right">
                <p>{lastData && lastData.customise?.length} Item</p>
              </div>
            </div>
            <div className="item-added-lsit">
              <ul className="list-unstyled ps-0 mb-0 cstmizeList">
                {lastData?.customise && lastData?.customise?.length > 0
                  ? lastData.customise?.map((item, index) => (
                      <li key={index}>
                        {item?.name && (
                          <div className="cstmCard position-relative">
                            {console.log("item33333333444444444333", item)}
                            <input
                              className="position-absolute"
                              type="checkbox"
                              name="itemId"
                              value={item._id}
                              // checked={state.itemId?._id === item._id}
                              checked={state.itemId?.includes(item._id)}
                              onChange={(e) => idData(e, item)}
                            />
                            <div className="d-flex profileWrp align-items-center gap-10">
                              <div className="imgWrp">
                                <img
                                  src={item?.image}
                                  // "https://content3.jdmagicbox.com/comp/kolkata/h5/033pxx33.xx33.181017170052.v7h5/catalogue/pizza-factory-park-circus-area-kolkata-restaurants-1wkimn5igt.jpg?clr="
                                  alt=""
                                  className="img-fluid"
                                />
                              </div>
                              <div className="content">
                                <h6 className="m-0 theme-clr">{item.name}</h6>
                                <p className="m-0">{item?.description}</p>
                              </div>
                              <span className="check d-inline-flex align-items-center justify-content-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  fill="none"
                                >
                                  <path
                                    d="M2.75 8.75L6.25 12.25L13.25 4.75"
                                    stroke="white"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                              </span>
                            </div>
                          </div>
                        )}
                      </li>
                    ))
                  : ""}
              </ul>
            </div>
            {addonsState == "" ? (
              <Button className="checkout-btn" onClick={submit}>
                Checkout
              </Button>
            ) : (
              <Button
                className="checkout-btn"
                disabled={!state?.itemId ? true : false}
                onClick={() => {
                  addonsButton();
                  onHide();
                }}
              >
                Next
              </Button>
            )}{" "}
          </div>
        </section>
      </Modal.Body>
      {/* <Modal.Body>
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
            <div className="topHead d-flex align-items-center justify-content-between mb-4">
              <div className="left">
                <h2>Add On</h2>
                <p className="m-0 pt-1 theme-clr fw-bold">
                  You will charge extra price for any add-ons :-
                </p>
              </div>
              <div className="right">
                <p>{lastData && lastData.customise?.length} Item</p>
              </div>
            </div>

            <div className="item-added-lsit">
              <div className="py-2 my-3">
                <label
                  htmlFor=""
                  className="mb-3 pb-1 fw-bold border-bottom d-block "
                >
                  {" "}
                  Soft Drinks
                </label>
                <ul className="list-unstyled ps-0 mb-0 cstmizeList">
                  {lastData?.customise && lastData?.customise?.length > 0
                    ? lastData.customise?.map((item, index) => (
                        <li key={index}>
                          {item?.name && (
                            <div className="cstmCard position-relative">
                              <input
                                className="position-absolute"
                                type="checkbox"
                                name="itemId"
                                value={item._id}
                                checked={state.itemId.includes(item._id)}
                                onChange={(e) => idData(e, item)}
                              />
                              <div className="d-flex profileWrp align-items-center gap-10">
                                <div className="imgWrp">
                                  <img
                                    src="https://content3.jdmagicbox.com/comp/kolkata/h5/033pxx33.xx33.181017170052.v7h5/catalogue/pizza-factory-park-circus-area-kolkata-restaurants-1wkimn5igt.jpg?clr="
                                    alt=""
                                    className="img-fluid"
                                  />
                                </div>
                                <div className="content">
                                  <h6 className="m-0 theme-clr">{item.name}</h6>
                                  <p className="m-0">
                                    Made with fresh tomato and onion
                                  </p>
                                  <p className="price m-0 fw-bold text-dark">
                                    <span className=" ">$</span> 23{" "}
                                  </p>
                                </div>
                                <span className="check d-inline-flex align-items-center justify-content-center">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                  >
                                    <path
                                      d="M2.75 8.75L6.25 12.25L13.25 4.75"
                                      stroke="white"
                                      stroke-width="1.5"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                  </svg>
                                </span>
                              </div>
                            </div>
                          )}
                        </li>
                      ))
                    : ""}
                </ul>
              </div>
              <div className="py-2 my-3">
                <label
                  htmlFor=""
                  className="mb-3 pb-1 fw-bold border-bottom d-block "
                >
                  {" "}
                  Soft Drinks
                </label>
                <ul className="list-unstyled ps-0 mb-0 cstmizeList">
                  {lastData?.customise && lastData?.customise?.length > 0
                    ? lastData.customise?.map((item, index) => (
                        <li key={index}>
                          {item?.name && (
                            <div className="cstmCard position-relative">
                              <input
                                className="position-absolute"
                                type="checkbox"
                                name="itemId"
                                value={item._id}
                                checked={state.itemId.includes(item._id)}
                                onChange={(e) => idData(e, item)}
                              />
                              <div className="d-flex profileWrp align-items-center gap-10">
                                <div className="imgWrp">
                                  <img
                                    src="https://content3.jdmagicbox.com/comp/kolkata/h5/033pxx33.xx33.181017170052.v7h5/catalogue/pizza-factory-park-circus-area-kolkata-restaurants-1wkimn5igt.jpg?clr="
                                    alt=""
                                    className="img-fluid"
                                  />
                                </div>
                                <div className="content">
                                  <h6 className="m-0 theme-clr">{item.name}</h6>
                                  <p className="m-0">
                                    Made with fresh tomato and onion
                                  </p>
                                  <p className="price m-0 fw-bold text-dark">
                                    <span className=" ">$</span> 23{" "}
                                  </p>
                                </div>
                                <span className="check d-inline-flex align-items-center justify-content-center">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                  >
                                    <path
                                      d="M2.75 8.75L6.25 12.25L13.25 4.75"
                                      stroke="white"
                                      stroke-width="1.5"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                  </svg>
                                </span>
                              </div>
                            </div>
                          )}
                        </li>
                      ))
                    : ""}
                </ul>
              </div>
            </div>

            <Button className="checkout-btn" onClick={submit}>
              Checkout
            </Button>
          </div>
        </section>
      </Modal.Body> */}
    </Modal>
  );
}
