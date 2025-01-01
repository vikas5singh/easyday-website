import React, { useState, useCallback, useRef, Fragment } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import notifyErrors from "../../../helpers/notify-errors";
import getDynamicImage from "../../../helpers/get-dynamic-image";
import { toast } from "react-toastify";
import { stepOneSchema } from "./validation";
import PhoneInput from "react-phone-input-2";
import { signupDriver, updateProfileImage } from "../../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import createFormData from "../../../helpers/create-form-data";
import { vehicleTypes, documentDriver, driverRegister, getService } from "../../../Redux/Vehicles/action";
import { useEffect } from "react";
import { GoogleAutocomplete } from "../../../Common/addressInput/addressInput";

import {
  Input,
  Label,
  FormGroup,
} from "reactstrap"
import Select from "react-select"
import { template, values } from "lodash";
import DropdownWithImages from "./DropdownWithImages";
const SignUpForm = ({ showSignUp, setShowSignUp }) => {
  const [step, setStep] = useState("0");
  const dispatch = useDispatch();
  const vehicleTypeData = useSelector((s) => s?.Vehicle?.vehicleTypes);
  const services = useSelector((s) => s?.Vehicle?.serviceList)
  const { document } = useSelector((s) => s.Vehicle);
  let storeList = (vehicleTypeData || [])?.filter((s) => s?.status == "active").map(({ _id, name, }) => ({
    label: name,
    value: _id,
  }))
  let serviceList = (services || [])?.map(({ _id, name, featured_image }) => ({
    label: name,
    value: _id,
    image: featured_image?.link
  }))
  console.log("vehicleTypes====>", services);
  const initialValues = {
    name: "",
    email: "",
    password: "",
    mobileNumber: "",
    mobileCountryCode: "",
    address: "",
    profileImage: null,
    vehicle: "",
    profileImageLink: null,
    vehicleImageLink: null,
    vehicleImage: null,
    serviceId: [],
    documents: [],
  };

  const onSubmit = useCallback(
    (values) => {
      const vehicleData = (document?.fields || []).map((vehicle) => {
        let value = values[vehicle?.name?.toLowerCase()] || vehicle?.name;
        if (vehicle?.name === "image-upload") {
          value = values?.vehicleImage;
        }
        return {
          ...vehicle,
          value,
        };
      });


      const updatedVehicleTypes = [
        {
          ...document?.template,
          vehicleType: values?.vehicle,
          isComplete: true,
          fields: vehicleData,
        },
      ];

      const data = {
        name: values.name,
        countryCode: values.mobileCountryCode,
        mobileNumber: values.mobileNumber,
        email: values.email,
        password: values.password,
        address: values.address,
        vehicle: values.vehicle,
        serviceId: (values?.serviceId || [])?.map(ele => ele.value),
        profileImage: values?.profileImage,
        isServiceProvider: true,
        documents: updatedVehicleTypes,
      };
      const callBack = (data) => {
        if (data.status === "success") {
          setShowSignUp(false);
          setStep("0");
        } else {
        }
      };
      dispatch(driverRegister(data, callBack));
    },
    [document]
  );

  const validationSchema = step === "0" && stepOneSchema;

  useEffect(() => {
    const callBack = (data) => {
    };
    dispatch(vehicleTypes({}, callBack));
    dispatch(getService({}, callBack));
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
            password: true,
            mobileNumber: true,
            mobileCountryCode: true,
            address: true,
            profileImage: true,
          });
          if (!(Object.keys(errors).length > 0)) {
            setStep("1");
          }
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
            setFieldValue("vehicleImageLink", e.target.files[0]);
            var body = new FormData();
            body.append("vehicleImage", e.target.files[0]);

            const callback = (response) => {
              if (response?.data?.status == "success") {
                setValues((pre) => ({
                  ...pre,
                  vehicleImage: response?.data?.data?._id,
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
          "/images/profile.png"
        );
        const vehicleImage = getDynamicImage(values.vehicleImageLink, "/images/profile.png");
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
        console.log("values===>", values)
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
                  Sign <span className="theme-clr"> Up </span> To <span className="theme-clr">Service </span> Provider
                </Modal.Title>
              </Modal.Header>
              <p className="px-3">Join our platform and expand your reach.The form below to offer your services to a wider audience!</p>
              <Modal.Body>
                <Form className="px-md-5">
                  {step === "0" ? (
                    <Row>
                      <Col lg="12" className="my-2 text-center pb-5">
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
                              className="img-fluid rounded-circle border"
                            />
                          </div>
                        </div>
                        <p
                          className="m-0 fw-sbold"
                          onClick={handleProfileImage}
                          style={{ cursor: "pointer" }}
                        >
                          Select Profile Picture
                        </p>
                      </Col>
                      <Col md="12" className="my-2" style={{ zIndex: "999" }}>
                        <label htmlFor="" className="form-label m-0">
                          Choose Your Service
                        </label>
                        <div className="icon-with-text position-relative">
                          <DropdownWithImages serviceList={serviceList} setFieldValue={setFieldValue} selectedOptions={values?.serviceId} />
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
                          Password
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
                          </span>
                          <input
                            type={"password"}
                            value={values.password}
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="form-control"
                          />
                        </div>
                        {errors.password && touched.password && (
                          <Form.Control.Feedback
                            type="invalid"
                            className="d-block"
                          >
                            {errors.password}
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
                      <Col lg="12" className="my-2 mt-4 btn-wrp">
                        <Button
                          onClick={handleNext}
                          className="common-btn d-flex align-items-center justify-content-center border-0 w-100"
                        >
                          Next
                        </Button>
                      </Col>
                      <Col xs="12">
                        <div className="mt-3">
                          <p className="m-0">
                            Already have an account?{" "}
                            <Link className="form-link theme-clr fw-sbold">
                              Download App
                            </Link>
                          </p>
                        </div>
                      </Col>
                    </Row>
                  ) : (
                    ""
                  )}
                  {step === "1" ? (
                    <Row>
                      <Col md="12" className="my-2">
                        <label htmlFor="" className="form-label m-0">
                          Vehicle Type
                        </label>
                        <div className="icon-with-text position-relative">
                          <Select
                            options={storeList}
                            styles={customStyles}
                            onChange={(option) => setFieldValue('vehicle', option.value)}
                            value={storeList.find((option) => option.value === values.vehicle)}
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
                      {(document?.fields || [])?.map((vehicle, index) => {
                        console.log(vehicle?.label, vehicle, index, "INDEX")
                        switch (vehicle?.type) {
                          case "text":
                            return (
                              <Col md={6} className="mt-3 my-2">
                                <Label>{vehicle?.label}</Label>
                                <Input
                                  type="text"
                                  name={vehicle?.name} // Make sure names match with the field names in initialValues
                                  value={values[vehicle?.name] || vehicle?.value}
                                  onChange={handleChange}
                                />
                              </Col>
                            )

                          case "file":
                            return (
                              <Col lg="12" className="my-2 text-center pb-5">
                                <div
                                  className="uploadFile position-relative d-inline-flex mb-2"
                                  onClick={handleVehicleImage}
                                >
                                  <input
                                    type="file"
                                    className="position-absolute"
                                    onChange={handleVehicleImage}
                                    hidden
                                    name={vehicle?.name} // Make sure names match with the field names in initialValues
                                    value={values[vehicle?.name] || vehicle?.value}
                                    ref={vehicleImageRef}
                                    accept="image/*"
                                  />
                                  <div className="inner">
                                    <img
                                      alt={
                                        !!vehicle?.value
                                          ? vehicle?.value
                                          : "easYday"
                                      }
                                      src={
                                        !!vehicle?.value
                                          ? vehicle?.value
                                          : vehicleImage
                                      }
                                      className="img-fluid rounded-circle border"
                                    />
                                  </div>
                                </div>
                                <p
                                  className="m-0 fw-sbold"
                                  onClick={handleProfileImage}
                                  style={{ cursor: "pointer" }}
                                >
                                  Select {vehicle?.label} Picture
                                </p>
                              </Col>
                            )
                          default:
                            return
                        }
                      })}
                      <Col lg="6" className="my-2 mt-4 btn-wrp">
                        <Button
                          onClick={handleSubmit}
                          className="common-btn d-flex align-items-center justify-content-center border-0 w-100"
                        >
                          Submit
                        </Button>
                      </Col>
                      <Col lg="6" className="my-2 mt-4 btn-wrp">
                        <Button
                          onClick={() => setStep("0")}
                          className="common-btn d-flex align-items-center justify-content-center border-0 w-100"
                        >
                          Back
                        </Button>
                      </Col>

                      <Col xs="12">
                        <div className="mt-3">
                          <p className="m-0">
                            Already have an account?{" "}
                            <Link className="form-link theme-clr fw-sbold">
                              Download App
                            </Link>
                          </p>
                        </div>
                      </Col>
                    </Row>
                  ) : (
                    ""
                  )}
                </Form>
              </Modal.Body>
            </Modal>
          </Fragment>
        );
      }}
    </Formik>
  );
};
export default SignUpForm;
