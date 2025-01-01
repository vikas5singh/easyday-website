import React, { useState, useCallback, useRef, Fragment } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import notifyErrors from "../../helpers/notify-errors";
import getDynamicImage from "../../helpers/get-dynamic-image";
import { toast } from "react-toastify";
import { stepOneSchema } from "./validation";
import PhoneInput from "react-phone-input-2";
import { signupDriver, updateProfileImage } from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { vehicleTypes, documentDriver, driverRegister, jobApplication } from "../../Redux/Vehicles/action";
import { useEffect } from "react";
import { GoogleAutocomplete } from "../../Common/addressInput/addressInput";

import {
    Input,
    Label,
    FormGroup,
} from "reactstrap"
import Select from "react-select"
import { template } from "lodash";
const JobModal = ({ showSignUp, setShowSignUp, jobname, positionId, positionName }) => {
    const [step, setStep] = useState("0");
    const dispatch = useDispatch();
    const vehicleTypeData = useSelector((s) => s?.Vehicle?.vehicleTypes);
    const { document } = useSelector((s) => s.Vehicle);
    let storeList = (vehicleTypeData || [])?.filter((s) => s?.status == "active").map(({ _id, name }) => ({
        label: name,
        value: _id,
    }))
    console.log("vehicleTypes====>", document, vehicleTypeData, storeList);
    const initialValues = {
        name: "",
        email: "",
        education: "",
        mobileNumber: "",
        mobileCountryCode: "",
        address: "",
        profileImage: null,
        vehicle: "",
        profileImageLink: null,
        coverLetterLink: null,
        coverLetterImage: null,
        documents: [],
    };

    const onSubmit = useCallback(
        (values) => {
            const data = {
                name: values.name,
                countryCode: values.mobileCountryCode,
                mobileNumber: values.mobileNumber,
                email: values.email,
                education: values.education,
                address: values.address,
                resume: values?.profileImage,
                coverLetter: values?.coverLetterImage,
                positionId: positionId,
                positionName: positionName,
            };
            const callBack = (data) => {
                if (data.status === "success") {
                    setShowSignUp(false);
                    setStep("0");
                } else {
                }
            };
            dispatch(jobApplication(data, callBack));
        },
        [document]
    );
    const validationSchema = step === "0" && stepOneSchema;

    useEffect(() => {
        const callBack = (data) => {
        };
        dispatch(vehicleTypes({}, callBack));
        dispatch(documentDriver({}, callBack));
    }, []);

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            enableReinitialize
        >
            {function FormikForm({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit: formikSubmit,
                isSubmitting,
                validateForm,
                setFieldValue,
                setFieldTouched,
                setValues,
                setTouched,
                resetForm,
            }) {
                const profileImageRef = useRef();
                const vehicleImageRef = useRef();
                const handleSubmit = async (e) => {
                    e.preventDefault();
                    const errors = await validateForm();
                    notifyErrors(errors);
                    formikSubmit(e);
                };

                const handleNext = async (e) => {
                    e.preventDefault();
                    const errors = await validateForm();
                    notifyErrors(errors);
                    setTouched({
                        name: true,
                        email: true,
                        education: true,
                        mobileNumber: true,
                        mobileCountryCode: true,
                        address: true,
                        profileImage: true,
                    });
                };

                const handleMobileNumber = (value, others) => {
                    setFieldValue("mobileNumber", value);
                    setFieldValue("mobileCountryCode", "+" + others.dialCode);
                };

                const handleProfileImage = (e) => {
                    console.log(e.target.files?.[0], "e.target.files[0]");
                    if (e && e.target.files?.length > 0) {
                        if (e.target.files[0].size > 5242880) {
                            toast.error("Max file size limit is 5mb");
                            return;
                        }
                        setFieldValue("profileImageLink", e.target.files[0]);
                        // setFieldValue("profileImage", e.target.files[0]);
                        var body = new FormData();
                        body.append("profileImage", e.target.files[0]);
                        const callback = (response) => {
                            if (response?.data?.status == "success") {
                                setValues((pre) => ({
                                    ...pre,
                                    profileImage: response?.data?.data?._id,

                                }));
                            } else {
                            }
                        };
                        dispatch(updateProfileImage(body, callback));
                    } else if (!e.target.files) {
                        profileImageRef.current.click();
                    }
                };
                const handleVehicleImage = (e) => {
                    console.log("e=====>", e?.target?.name);
                    if (e && e.target.files?.length > 0) {
                        if (e.target.files[0].size > 5242880) {
                            toast.error("Max file size limit is 5mb");
                            return;
                        }
                        setFieldValue("coverLetterLink", e.target.files[0]);
                        // setFieldValue("profileImage", e.target.files[0]);
                        var body = new FormData();
                        body.append("coverLetterImage", e.target.files[0]);
                        const callback = (response) => {
                            if (response?.data?.status == "success") {
                                setValues((pre) => ({
                                    ...pre,
                                    coverLetterImage: response?.data?.data?._id,

                                }));
                            } else {
                            }
                        };
                        dispatch(updateProfileImage(body, callback));
                    }
                    else if (!e.target.files) {
                        vehicleImageRef.current.click();
                    }
                };

                const handleAddress = (address, event) => {
                    setFieldValue("address", address.address);
                };

                const profileImage = getDynamicImage(
                    values.profileImageLink,
                    "/images/resume.png"
                );
                const vehicleImage = getDynamicImage(values.coverLetterLink, "/images/coverletter.png");
                useEffect(() => {
                    if (!showSignUp) {
                        resetForm();
                    }
                }, [showSignUp]);
                const customStyles = {
                    menu: (provided) => ({
                        ...provided,
                        zIndex: 9999, // Ensures the menu is on top
                    }),
                };
                return (
                    <Fragment>
                        <Modal
                            className="account-form signUP"
                            show={showSignUp}
                            onHide={() => setShowSignUp(false)}
                            centered
                            scrollable={true}
                        >
                            <Modal.Header className="border-0" closeButton>
                                <Modal.Title>
                                    Application for <span className="theme-clr"> {jobname}</span>
                                </Modal.Title>
                            </Modal.Header>
                            <p className="px-3">Join our team, complete the form below to kickstart your journey and become a valued member of our growing community!</p>
                            <Modal.Body>
                                <Form className="px-md-5">
                                    <Row>
                                        <Col lg="6" className="my-2 pb-5">
                                            <div
                                                className="uploadFile position-relative d-inline-flex mb-2"
                                                onClick={handleProfileImage}
                                            >
                                                <input
                                                    type="file"
                                                    className="position-absolute"
                                                    onChange={handleProfileImage}
                                                    hidden
                                                    value={""}
                                                    ref={profileImageRef}
                                                    accept="image/*"
                                                />
                                                <div className="inner">
                                                    <img
                                                        src={profileImage}
                                                        alt=""
                                                        className="img-fluid  border"
                                                    />
                                                </div>
                                            </div>
                                            <p
                                                className="m-0 fw-sbold"
                                                onClick={handleProfileImage}
                                                style={{ cursor: "pointer" }}
                                            >
                                                Choose Your Resume
                                            </p>
                                        </Col>
                                        <Col lg="6" className="my-2 pb-5">
                                            <div
                                                className="uploadFile position-relative d-inline-flex mb-2"
                                                onClick={handleVehicleImage}
                                            >
                                                <input
                                                    type="file"
                                                    className="position-absolute"
                                                    onChange={handleVehicleImage}
                                                    hidden
                                                    name={"coverletter"} // Make sure names match with the field names in initialValues
                                                    value={""}
                                                    ref={vehicleImageRef}
                                                    accept="image/*"
                                                />
                                                <div className="inner">
                                                    <img
                                                        src={vehicleImage}
                                                        alt=""
                                                        className="img-fluid  border"
                                                    />
                                                </div>
                                            </div>
                                            <p
                                                className="m-0 fw-sbold"
                                                onClick={handleProfileImage}
                                                style={{ cursor: "pointer" }}
                                            >
                                                Choose Cover Letter
                                            </p>
                                        </Col>
                                        <Col md="6" className="my-2">
                                            <label htmlFor="" className="form-label m-0">
                                                Name
                                            </label>
                                            <div className="icon-with-text position-relative">
                                                <span className="icn position-absolute">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="18"
                                                        height="20"
                                                        viewBox="0 0 18 20"
                                                        fill="none"
                                                    >
                                                        <path
                                                            d="M0.878847 15.8969C1.32097 14.8496 1.96257 13.8984 2.76791 13.0961C3.5708 12.2915 4.5219 11.65 5.56869 11.207C5.57806 11.2023 5.58744 11.2 5.59682 11.1953C4.13666 10.1406 3.18744 8.42266 3.18744 6.48438C3.18744 3.27344 5.789 0.671875 8.99994 0.671875C12.2109 0.671875 14.8124 3.27344 14.8124 6.48438C14.8124 8.42266 13.8632 10.1406 12.4031 11.1977C12.4124 11.2023 12.4218 11.2047 12.4312 11.2094C13.4812 11.6523 14.4234 12.2875 15.232 13.0984C16.0366 13.9013 16.6781 14.8524 17.121 15.8992C17.5562 16.924 17.7909 18.0228 17.8124 19.1359C17.8131 19.161 17.8087 19.1858 17.7995 19.2091C17.7904 19.2324 17.7767 19.2537 17.7592 19.2716C17.7417 19.2895 17.7209 19.3037 17.6978 19.3134C17.6747 19.3231 17.65 19.3281 17.6249 19.3281H16.2187C16.1156 19.3281 16.0335 19.2461 16.0312 19.1453C15.9843 17.3359 15.2578 15.6414 13.9734 14.357C12.6445 13.0281 10.8796 12.2969 8.99994 12.2969C7.12025 12.2969 5.35541 13.0281 4.0265 14.357C2.74213 15.6414 2.01556 17.3359 1.96869 19.1453C1.96635 19.2484 1.88432 19.3281 1.78119 19.3281H0.374941C0.349918 19.3281 0.325146 19.3231 0.302088 19.3134C0.279028 19.3037 0.258146 19.2895 0.240673 19.2716C0.223198 19.2537 0.209486 19.2324 0.200344 19.2091C0.191202 19.1858 0.186815 19.161 0.187441 19.1359C0.210878 18.0156 0.442909 16.9258 0.878847 15.8969ZM8.99994 10.5156C10.0757 10.5156 11.0882 10.0961 11.8499 9.33438C12.6117 8.57266 13.0312 7.56016 13.0312 6.48438C13.0312 5.40859 12.6117 4.39609 11.8499 3.63437C11.0882 2.87266 10.0757 2.45312 8.99994 2.45312C7.92416 2.45312 6.91166 2.87266 6.14994 3.63437C5.38822 4.39609 4.96869 5.40859 4.96869 6.48438C4.96869 7.56016 5.38822 8.57266 6.14994 9.33438C6.91166 10.0961 7.92416 10.5156 8.99994 10.5156Z"
                                                            fill="#2E3E5C"
                                                        />
                                                    </svg>
                                                </span>
                                                <input
                                                    type={"text"}
                                                    value={values.name}
                                                    name="name"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className="form-control"
                                                />
                                            </div>
                                            {errors.name && touched.name && (
                                                <Form.Control.Feedback
                                                    type="invalid"
                                                    className="d-block"
                                                >
                                                    {errors.name}
                                                </Form.Control.Feedback>
                                            )}
                                        </Col>
                                        <Col md="6" className="my-2">
                                            <label htmlFor="" className="form-label m-0">
                                                Email
                                            </label>
                                            <div className="icon-with-text position-relative">
                                                <span className="icn position-absolute">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="21"
                                                        height="19"
                                                        viewBox="0 0 21 19"
                                                        fill="none"
                                                    >
                                                        <path
                                                            d="M16 5L11.8528 9.39271C11.068 10.2024 9.96772 10.2024 9.18289 9.39271L5 5"
                                                            stroke="#2E3E5C"
                                                            stroke-width="2"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        />
                                                        <path
                                                            fill-rule="evenodd"
                                                            clip-rule="evenodd"
                                                            d="M5.82927 1H15.1441C16.4872 1.0149 17.7655 1.586 18.6813 2.57922C19.5972 3.57244 20.0707 4.90238 19.9914 6.25813V12.7419C20.0707 14.0976 19.5972 15.4276 18.6813 16.4208C17.7655 17.414 16.4872 17.9851 15.1441 18H5.82927C2.9444 18 1 15.6411 1 12.7419V6.25813C1 3.35891 2.9444 1 5.82927 1Z"
                                                            stroke="#2E3E5C"
                                                            stroke-width="2"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        />
                                                    </svg>
                                                </span>
                                                <input
                                                    type={"text"}
                                                    value={values.email}
                                                    name="email"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className="form-control"
                                                />
                                            </div>
                                            {errors.email && touched.email && (
                                                <Form.Control.Feedback
                                                    type="invalid"
                                                    className="d-block"
                                                >
                                                    {errors.email}
                                                </Form.Control.Feedback>
                                            )}
                                        </Col>
                                        <Col md="6" className="my-2">
                                            <label htmlFor="" className="form-label m-0">
                                                Education
                                            </label>
                                            <div className="icon-with-text position-relative">
                                                <span className="icn position-absolute">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                    >
                                                        <path
                                                            d="M8 3C7.44772 3 7 3.44772 7 4V5H4C3.44772 5 3 5.44772 3 6V8C3 8.55228 3.44772 9 4 9H20C20.5523 9 21 8.55228 21 8V6C21 5.44772 20.5523 5 20 5H17V4C17 3.44772 16.5523 3 16 3H8ZM9 4H15V5H9V4ZM3 10H21V18C21 18.5523 20.5523 19 20 19H4C3.44772 19 3 18.5523 3 18V10ZM17 12C16.4477 12 16 12.4477 16 13C16 13.5523 16.4477 14 17 14C18.1046 14 19 14.8954 19 16C19 17.1046 18.1046 18 17 18C16.4477 18 16 18.4477 16 19C16 19.5523 16.4477 20 17 20C19.2091 20 21 18.2091 21 16C21 13.7909 19.2091 12 17 12Z"
                                                            fill="#2F2F2F"
                                                        />
                                                    </svg>
                                                </span>
                                                <input
                                                    type={"text"}
                                                    value={values.education}
                                                    name="education"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className="form-control"
                                                />
                                            </div>
                                            {errors.education && touched.education && (
                                                <Form.Control.Feedback
                                                    type="invalid"
                                                    className="d-block"
                                                >
                                                    {errors.education}
                                                </Form.Control.Feedback>
                                            )}
                                        </Col>
                                        <Col md="6" className="my-2">
                                            <label htmlFor="" className="form-label m-0">
                                                Mobile Number
                                            </label>
                                            <div className="icon-with-text position-relative">
                                                <PhoneInput
                                                    type="text"
                                                    name="mobileNumber"
                                                    placeholder="Your Mobile"
                                                    onChange={handleMobileNumber}
                                                    onBlur={() => setFieldTouched("mobileNumber", true)}
                                                    value={values.mobileNumber}
                                                    country={"us"}
                                                    //onlyCountries={["us", "mx"]}
                                                    inputClass="w-100"
                                                />
                                            </div>
                                            {errors.mobileNumber && touched.mobileNumber && (
                                                <Form.Control.Feedback
                                                    type="invalid"
                                                    className="d-block"
                                                >
                                                    {errors.mobileNumber}
                                                </Form.Control.Feedback>
                                            )}
                                        </Col>
                                        <Col md="12" className="my-2">
                                            <label htmlFor="" className="form-label m-0">
                                                Address
                                            </label>
                                            <div className="icon-with-text position-relative">
                                                <GoogleAutocomplete
                                                    address={values.address}
                                                    name={"address"}
                                                    onChange={handleAddress}
                                                    className="w-100"
                                                    onBlur={() => setFieldTouched("address", true)}
                                                />
                                            </div>
                                            {errors.address && touched.address && (
                                                <Form.Control.Feedback
                                                    type="invalid"
                                                    className="d-block"
                                                >
                                                    {errors.address}
                                                </Form.Control.Feedback>
                                            )}
                                        </Col>
                                        <Col lg="12" className="d-flex my-2 mt-4 btn-wrp justify-content-end">
                                            <Button
                                                onClick={handleSubmit}
                                                className="common-btn  border-0"
                                            >
                                                Submit Application
                                            </Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </Modal.Body>
                        </Modal>
                    </Fragment>
                );
            }}
        </Formik>
    );
};
export default JobModal;
