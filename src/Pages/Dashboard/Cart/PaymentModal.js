import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { paymentList } from "../../../Redux/actions";

export default function PaymentModal(props) {
  const dispatch = useDispatch();
  const [Tabs, setTabs] = useState({
    tab1: true,
    tab2: false,
    tab3: false,
    tab4: false,
  });

  const handleClick = (type) => {
    switch (type) {
      case "tab1": {
        setTabs({
          tab1: true,
          tab2: false,
          tab3: false,
          tab4: false,
        });
        break;
      }
      case "tab2": {
        setTabs({
          tab1: false,
          tab2: true,
          tab3: false,
          tab4: false,
        });
        break;
      }
      case "tab3": {
        setTabs({
          tab1: false,
          tab2: false,
          tab3: true,
          tab4: false,
        });
        break;
      }
      case "tab4": {
        setTabs({
          tab1: false,
          tab2: false,
          tab3: false,
          tab4: true,
        });
        break;
      }
    }
  };

  const listOther = useSelector((s) => s.address?.paymentList?.otherList);
  const listCard = useSelector((s) => s.address?.paymentList?.cardsList);
  const list = [...listOther, ...listCard]
  console.log("list======>", list);

  useEffect(() => {
    dispatch(paymentList({}));
  }, [dispatch]);

  const handleChange = props.change;
  const state = props.state;

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
          Payment Method
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
        <div className="address-modal">
          <Form>
            <Row>
              <Col lg={12} md={12} sm={12} className="order-one">
                <div className="paymentleft-address">
                  <h5 className="text-center">Select Method</h5>
                  {list &&
                    list?.length > 0 &&
                    list?.map((item, index) => {
                      return (
                        <div class="inputGroup" key={index}>
                          {/* <a> */}
                          <input
                            id={`option1${index}`}
                            name="paymentMethod"
                            type="checkbox"
                            value={item?.payment_method == "stripe" ? item?._id : item?.payment_method}
                            checked={state.paymentMethod.includes(
                              item.label == "Card" ? "stripe" : item.payment_method
                            )}
                            onChange={(e) =>
                              handleChange(e, item?.payment_method, index, item?.payment_method == "stripe" ? item?._id : item?.payment_method,)
                            }
                          />
                          <label for={`option1${index}`}>
                            {/* {item.lable == "Wallet" && ( */}
                            {item?.payment_method == "stripe" ?
                              <><img
                                src={item?.logo}
                                alt=""
                                className="img-fluid"
                                style={{ maxWidth: "12%" }}
                              />**** {item.last4digit}</> :
                              <img
                                src={item?.logo}
                                alt=""
                                className="img-fluid"
                                style={{ maxWidth: "12%" }}
                              />
                            }
                            {/* )} */}
                            {/* {item.label == "Cash" && ( */}
                            {/* <img
                              src={item?.logo}
                              alt=""
                              className="img-fluid"
                            /> */}
                            {/* )} */}

                            {/* {item.lable == "Debit/credit cards" && ( */}
                            {/* <img
                              src={item?.logo}
                              alt=""
                              className="img-fluid"
                            /> */}
                            {/* )} */}
                            {item.label}
                          </label>
                          {/* </a> */}
                        </div>
                      );
                    })}

                  {/* <div class="inputGroup">
                    <a onClick={() => handleClick("tab2")}>
                      <input
                        id="option2"
                        name="tab2"
                        type="checkbox"
                        // value={Tabs.tab2}
                        checked={Tabs.tab2 == true ? true : false}
                      />
                      <label for="option2">
                        <img
                          src="images/pay.png"
                          alt=""
                          className="img-fluid"
                        />
                        Cash
                      </label>
                    </a>
                  </div>

                  <div class="inputGroup">
                    <a onClick={() => handleClick("tab3")}>
                      <input
                        id="option3"
                        name="option3"
                        type="checkbox"
                        // value={Tabs.tab3}
                        checked={Tabs.tab3 == true ? true : false}
                      />
                      <label for="option3">
                        <img
                          src="images/visa.png"
                          alt=""
                          className="img-fluid"
                        />
                        **** 8295
                      </label>
                    </a>
                  </div>

                  <div class="inputGroup">
                    <a onClick={() => handleClick("tab4")}>
                      <input
                        id="option4"
                        name="option4"
                        type="checkbox"
                        // value={Tabs.tab4}
                        checked={Tabs.tab4 == true ? true : false}
                      />
                      <label for="option4">
                        <img
                          src="images/mastrocards.png"
                          alt=""
                          className="img-fluid"
                        />
                        **** 3704
                      </label>
                    </a>
                  </div> */}
                  <Button className="btn-done" onClick={props.onHide}>
                    Done
                  </Button>
                </div>
              </Col>
              {/* <Col lg={6} md={6} sm={12}>
                <div className="paymentright-address">
                  <h5 className="text-center">Add Card</h5>
                  <FormGroup>
                    <Label for="exampleEmail">Card holder name</Label>
                    <Input type="email" name="email" id="exampleEmail" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmail">Card Number</Label>
                    <Input type="number" name="email" id="exampleEmail" />
                  </FormGroup>

                  <Row>
                    <Col>
                      <FormGroup>
                        <Label for="exampleEmail">exp. date</Label>
                        <Input type="email" name="email" id="exampleEmail" />
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        <Label for="exampleEmail">Security Code</Label>
                        <Input type="email" name="email" id="exampleEmail" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <div className="testt-mode">
                    <p>Save Card For Furture Payment</p>
                    <div className="switch-col">
                      <label class="switch">
                        <input type="checkbox" />
                        <span class="slider round"></span>
                      </label>
                    </div>
                  </div>
                  <Button className="btn-done">Add Card </Button>
                </div>
              </Col> */}
            </Row>
          </Form>
        </div>
      </Modal.Body>
    </Modal>
  );
}
