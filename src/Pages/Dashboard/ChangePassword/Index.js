import React, {
    useState,
    useEffect,
} from "react";

import { useDispatch, useSelector } from "react-redux";
import { Button, Container } from "react-bootstrap";
import "react-phone-input-2/lib/style.css";
import { Form, FormGroup, Label, Input, FormText, Row, Col } from "reactstrap";
import {
    changePass
} from "../../../Redux/actions";
const ChangePassword = () => {
    const dispatch = useDispatch();
    const [showw, setShoww] = useState(false)
    const [data, setData] = useState({
        currentPassword: "",
        password: "",
        confirmPassword: "",

    })
    const resetChange = (e) => {
        setData((pre) => ({
            ...pre,
            [e.target.name]: e.target.value
        }))
    }
    const resetSubmit = (e) => {
        e.preventDefault();
        const callBack = () => {
        };
        dispatch(changePass(data, callBack));
    };
    return (
        <div className="loginmodal-cont position-relative">
            <Row>
                <Col lg={6} md={12} sm={12} className="order-one">
                    <div className="login-right-cont">
                        <div className="login-head text-center">
                            <h4>Change your password</h4>
                            <p>Please enter your new password</p>
                        </div>

                        <Form className="form-common">
                            <FormGroup className="position-relative">
                                <Input
                                    type={showw == false ? "password" : "text"}
                                    name="currentPassword"
                                    id="exampleEmail"
                                    placeholder="Enter Old Password"
                                    onChange={resetChange}
                                    className="password-input"
                                />
                                <div className="lock">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="20"
                                        viewBox="0 0 18 20"
                                        fill="none"
                                    >
                                        <path
                                            d="M14 8V5.75621C14 3.12992 11.7656 1.00005 9.01042 1.00005C6.25524 0.988551 4.01206 3.10798 4 5.73532V5.75621V8"
                                            stroke="#2E3E5C"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M13.015 19H4.98502C2.78443 19 1 17.4278 1 15.4868V11.5132C1 9.57222 2.78443 8 4.98502 8H13.015C15.2156 8 17 9.57222 17 11.5132V15.4868C17 17.4278 15.2156 19 13.015 19Z"
                                            stroke="#2E3E5C"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M9 12V14"
                                            stroke="#2E3E5C"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </div>
                                <div className="eye">
                                    <a
                                        onClick={() => setShoww(!showw)}
                                    >
                                        <img
                                            src={
                                                showw == false
                                                    ? "/svg/eye-close.svg"
                                                    :
                                                    "/svg/eye-open.svg"
                                            }
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </a>
                                </div>
                            </FormGroup>

                            <FormGroup className="position-relative">
                                <Input
                                    type={showw == false ? "password" : "text"}
                                    name="password"
                                    id="exampleEmail"
                                    placeholder="Enter New Password"
                                    onChange={resetChange}
                                    className="password-input"
                                />
                                <div className="lock">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="20"
                                        viewBox="0 0 18 20"
                                        fill="none"
                                    >
                                        <path
                                            d="M14 8V5.75621C14 3.12992 11.7656 1.00005 9.01042 1.00005C6.25524 0.988551 4.01206 3.10798 4 5.73532V5.75621V8"
                                            stroke="#2E3E5C"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M13.015 19H4.98502C2.78443 19 1 17.4278 1 15.4868V11.5132C1 9.57222 2.78443 8 4.98502 8H13.015C15.2156 8 17 9.57222 17 11.5132V15.4868C17 17.4278 15.2156 19 13.015 19Z"
                                            stroke="#2E3E5C"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M9 12V14"
                                            stroke="#2E3E5C"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </div>
                                <div className="eye">
                                    <a
                                        onClick={() => setShoww(!showw)}
                                    >
                                        <img
                                            src={
                                                showw == false
                                                    ? "/svg/eye-close.svg"
                                                    :
                                                    "/svg/eye-open.svg"
                                            }
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </a>
                                </div>
                            </FormGroup>

                            <FormGroup className="position-relative">
                                <Input
                                    type={showw == false ? "password" : "text"}
                                    name="confirmPassword"
                                    id="exampleEmail"
                                    placeholder="Confirm Password"
                                    onChange={resetChange}
                                    className="password-input"
                                />
                                <div className="lock">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="20"
                                        viewBox="0 0 18 20"
                                        fill="none"
                                    >
                                        <path
                                            d="M14 8V5.75621C14 3.12992 11.7656 1.00005 9.01042 1.00005C6.25524 0.988551 4.01206 3.10798 4 5.73532V5.75621V8"
                                            stroke="#2E3E5C"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M13.015 19H4.98502C2.78443 19 1 17.4278 1 15.4868V11.5132C1 9.57222 2.78443 8 4.98502 8H13.015C15.2156 8 17 9.57222 17 11.5132V15.4868C17 17.4278 15.2156 19 13.015 19Z"
                                            stroke="#2E3E5C"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M9 12V14"
                                            stroke="#2E3E5C"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </div>
                                <div className="eye">
                                    <a
                                        onClick={() => setShoww(!showw)}
                                    >
                                        <img
                                            src={
                                                showw == false
                                                    ? "/svg/eye-close.svg"
                                                    :
                                                    "/svg/eye-open.svg"
                                            }
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </a>
                                </div>
                            </FormGroup>

                            <Button
                                className="btn-login"
                                // onClick={() => setPCModal(false)}
                                onClick={resetSubmit}
                            >
                                Done
                            </Button>

                            <div className="password-containe mt-4">
                                <h5>Your Password must contain:</h5>
                                <p>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="27"
                                        height="26"
                                        viewBox="0 0 27 26"
                                        fill="none"
                                    >
                                        <rect
                                            y="0.923096"
                                            width="26.176"
                                            height="24.5573"
                                            rx="12.2787"
                                            fill="#E3FFF1"
                                        />
                                        <path
                                            d="M17 9.9231L11.5 15.4231L9 12.9231"
                                            stroke="#1FCC79"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                    At least 6 characters
                                </p>
                            </div>
                        </Form>
                    </div>
                </Col>
                <Col lg={6} md={12} sm={12} className="order-two">
                    <div className="login-left-img reset-password-img">
                        <img
                            src="/images/loginright.png"
                            alt=""
                            className="loginright"
                        />
                    </div>
                </Col>
            </Row>
        </div>

    )
}

export default ChangePassword;