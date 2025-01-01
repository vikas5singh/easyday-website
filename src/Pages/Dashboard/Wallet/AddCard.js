import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

import {
  Elements,
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  CardElement,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { addPayment, paymentList } from "../../../Redux/actions";

const stripePromise = loadStripe(
  "pk_test_51MROZAEYe0sdvS9pSSKhmlZeXDN4DwMd0j4Te95RVrmauAllZYl8uibMPFRFUJQNSwWLPs0yl8oU2jVC1bj4htox003OZTJ2yu"
);
const AddCardModal = (props) => {
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [card, setCard] = useState({});
  const stripe = useStripe();
  const elements = useElements();

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setAddr((pre) => ({
  //     ...pre,
  //     [name]: value,
  //   }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const callBack = () => {
  //     dispatch(getAddress());
  //     setTimeout(() => {
  //       props.onHide();
  //     }, 100);
  //   };
  //   dispatch(addAddress(addr, callBack));
  // };

  const handleSubmit = async (e, stripe, elements) => {
    // return;
    const cardElement = elements.getElement(
      // CardElement,
      CardNumberElement,
      CardExpiryElement,
      CardCvcElement
    );
    const cardNumberElement = elements.getElement(CardNumberElement);
    let token = await stripe.createToken(cardNumberElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
    } else {
    }
    let data = {
      customerId: localStorage.getItem("userId"),
      // type: "Card",
      type: paymentMethod.card?.brand,
      last4digit: paymentMethod.card?.last4,
      token: token.token?.id,
      detials: "Payment Details",
      payment_method: "stripe",
    };

    const callBack = () => {
      dispatch(paymentList({}));
      setTimeout(() => {
        props.hide();
      }, 200);
    };
    dispatch(addPayment(data, callBack));
  };

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
          Add Payment Details
        </Modal.Title>
        <Button onClick={props.hide} className="close-btn">
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
              <Col lg={12} md={12} sm={12}>
                <Label>Card Number</Label>
                <CardNumberElement />
              </Col>
            </Row>
            <Row>
              <Col lg={12} md={12} sm={12}>
                <Label>Expiry Date</Label>
                <CardExpiryElement />
              </Col>
            </Row>
            <Row>
              <Col lg={12} md={12} sm={12}>
                <Label>Expiry Date</Label>
                <CardCvcElement />
              </Col>
            </Row>
            <Row>
              <Col lg={12} md={12} sm={12}>
                <Button
                  className="btn-done"
                  onClick={(e) => handleSubmit(e, stripe, elements)}
                >
                  Add Card
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </Modal.Body>
    </Modal>
  );
};

const StripePaymentForm = (props) => (
  <Elements stripe={stripePromise}>
    <AddCardModal show={props.show} hide={props.onHide} {...props} />
  </Elements>
);
export default StripePaymentForm;
