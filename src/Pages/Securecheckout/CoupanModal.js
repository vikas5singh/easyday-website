import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { promoList } from "../../Redux/actions";

export default function CoupanModal(props) {
  const dispatch = useDispatch();
  const promo = useSelector((s) => s.address.promocodes);
  const [cartInfo, setCartInfo] = useState(() => {
    const storedData = localStorage.getItem('cartInfo');
    return storedData ? JSON.parse(storedData) : {};
  });
  useEffect(() => {
    dispatch(promoList({ storeTypeId: cartInfo?.storeTypeId, vendor: cartInfo?.vendorId }));
  }, [dispatch]);

  const handleChange = props.change;
  const state = props.state;
  console.log(cartInfo, "cartInfo");
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
          Apply Coupon
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
            {/* <FormGroup className="position-relative">
              <Input
                type="number"
                name="number"
                id="number"
                placeholder="Enter Promo Code"
              />
              <Button className="apply-btn">Apply</Button>
            </FormGroup> */}

            <div className="voupon-add">
              {(promo &&
                promo.length > 0 &&
                promo.map((item, index) => {
                  return (
                    <div class="inputGroup">
                      <input
                        id={`option1${item._id}`}
                        name="promocode"
                        type="checkbox"
                        value={item._id}
                        checked={state.promocode?._id === item._id}
                        onChange={() => {
                          handleChange({
                            target: {
                              name: "promocode",
                              value:
                                state.promocode?._id === item._id ? "" : item,
                            },
                          });
                        }}
                      />

                      <label for={`option1${item._id}`}>
                        <img
                          src="images/discount.png"
                          alt=""
                          className="img-fluid"
                        />
                        <div className="coupon-cont">
                          <h5>{item.price}</h5>
                          {/* <h6>{item.amount}</h6> */}
                          <p>Use Code - {item.code}</p>{" "}
                        </div>
                      </label>
                    </div>
                  );
                })) || <p className="text-center">No Coupons Available!</p>}

              {/* <div className="coupon-add">
                <div className="discount-icon">
                  <img src="images/discount.png" alt="" className="img-fluid" />
                </div>
                <div className="coupon-cont">
                  <h5>20% discount</h5>
                  <p>Use Code - TMALU52</p>
                </div>
              </div> */}
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
