import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Fade from "react-reveal/Fade";
import { useSelector, useDispatch } from "react-redux";
import { SearchSelectInput } from "../../../Common/inputFields";
import { PHONECODES } from "../../../Common/countries";

import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Row,
  Col,
} from "reactstrap";
import {
  editProfile,
  getProfile,
  updateProfileImage,
} from "../../../Redux/actions";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { GoogleAutocomplete } from "../../../Common/addressInput/addressInput";
import { Link } from "react-router-dom";

export default function Profileedit() {
  const [state, setState] = useState(0);
  const [profileImage, setProfileImage] = useState(null);
  const [profileImageId, setProfileImageId] = useState(null);
  const [detail, setDetail] = useState({
    name: "",
    countryCode: "",
    mobileNumber: "",
    email: "",
    address: "",
  });
  const dispatch = useDispatch();
  // console.log(detail?.address, "addressssss");
  const profileList = useSelector((s) => s.profile.profile);
  useEffect(() => {
    setDetail((pre) => ({
      ...pre,
      // ...profileList,
      name: profileList.name,
      countryCode: profileList.countryCode,
      mobileNumber: profileList.mobileNumber,
      email: profileList.email,
      address: profileList.address,
      profileImage: profileList?.profileImage?._id,
    }));
  }, [profileList]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetail((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const callBack = () => {
      dispatch(getProfile({}));
    };
    dispatch(editProfile(detail, callBack));
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setProfileImage(URL.createObjectURL(event.target.files[0]));
      var body = new FormData();
      body.append("profileImage", event.target.files[0]);

      const callback = (response) => {
        console.log("response===>", response?.data?.data?._id);
        if (response?.data?.status == "success") {
          setDetail((pre) => ({
            ...pre,
            profileImage: response?.data?.data?._id,
          }));
          setProfileImageId(response?.data?.data?._id);
        } else {
          setProfileImage(null);
        }
      };
      dispatch(updateProfileImage(body, callback));
    }
  };

  useEffect(() => {
    dispatch(getProfile({}));
  }, [dispatch]);

  const handleAddress = (address, event) => {
    // console.log(address, "address");
    setDetail((prevState) => ({
      ...prevState,
      address: address.address,
      userLocation: {
        "type": "Point",
        "coordinates": [address?.lat,
        address?.lng]
      },
    }));
  };

  return (
    <section className="FAQ-main">
      <Fade>
        <div className="profile-main">
          <h4 className="text-center FAQ-col">Your Profile</h4>
          <div className="user-profile-inner text-center">
            <div className="user0image position-relative">
              <img
                src={
                  profileImage ||
                  profileList?.profileImage?.link ||
                  "/images/dashuser.png"
                }
                alt=""
                className="img-fluid dashuser"
              />
              <a href="javascript:void(0)">
                <label htmlFor="profile-image-file">
                  <div className="camera">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      viewBox="0 0 23 23"
                      fill="none"
                    >
                      <path
                        d="M19.2891 6.05957H16.3672L15.6711 4.10879C15.623 3.9753 15.5349 3.85992 15.4187 3.7784C15.3026 3.69688 15.1642 3.6532 15.0223 3.65332H8.43086C8.14082 3.65332 7.88086 3.83594 7.78418 4.10879L7.08594 6.05957H4.16406C3.21445 6.05957 2.44531 6.82871 2.44531 7.77832V17.5752C2.44531 18.5248 3.21445 19.2939 4.16406 19.2939H19.2891C20.2387 19.2939 21.0078 18.5248 21.0078 17.5752V7.77832C21.0078 6.82871 20.2387 6.05957 19.2891 6.05957ZM11.7266 15.8564C9.82734 15.8564 8.28906 14.3182 8.28906 12.4189C8.28906 10.5197 9.82734 8.98145 11.7266 8.98145C13.6258 8.98145 15.1641 10.5197 15.1641 12.4189C15.1641 14.3182 13.6258 15.8564 11.7266 15.8564ZM9.66406 12.4189C9.66406 12.966 9.88136 13.4906 10.2682 13.8774C10.6549 14.2641 11.1796 14.4814 11.7266 14.4814C12.2736 14.4814 12.7982 14.2641 13.185 13.8774C13.5718 13.4906 13.7891 12.966 13.7891 12.4189C13.7891 11.8719 13.5718 11.3473 13.185 10.9605C12.7982 10.5737 12.2736 10.3564 11.7266 10.3564C11.1796 10.3564 10.6549 10.5737 10.2682 10.9605C9.88136 11.3473 9.66406 11.8719 9.66406 12.4189Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                </label>
              </a>
              <input
                type="file"
                onChange={onImageChange}
                className="d-none"
                id="profile-image-file"
                value=""
              />
            </div>
            <div className="user-content">
              <h5 className="text-capitalize">{profileList?.name}</h5>
            </div>
          </div>

          <div className="edit-form mt-5">
            <Form>
              <Row>
                <Col lg={6} md={6} sm={12} xs={12}>
                  <div className="edit-form-col">
                    <FormGroup className="position-relative">
                      <Label for="exampleEmail">Full Name</Label>
                      <Input
                        type="text"
                        name="name"
                        id="exampleEmail"
                        value={detail?.name}
                        onChange={handleChange}
                      />
                      <div className="icon-left">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M3.87891 17.8969C4.32103 16.8496 4.96263 15.8984 5.76797 15.0961C6.57086 14.2915 7.52196 13.65 8.56875 13.207C8.57813 13.2023 8.5875 13.2 8.59688 13.1953C7.13672 12.1406 6.1875 10.4227 6.1875 8.48438C6.1875 5.27344 8.78906 2.67188 12 2.67188C15.2109 2.67188 17.8125 5.27344 17.8125 8.48438C17.8125 10.4227 16.8633 12.1406 15.4031 13.1977C15.4125 13.2023 15.4219 13.2047 15.4313 13.2094C16.4813 13.6523 17.4234 14.2875 18.232 15.0984C19.0366 15.9013 19.6781 16.8524 20.1211 17.8992C20.5563 18.924 20.791 20.0228 20.8125 21.1359C20.8131 21.161 20.8087 21.1858 20.7996 21.2091C20.7905 21.2324 20.7767 21.2537 20.7593 21.2716C20.7418 21.2895 20.7209 21.3037 20.6979 21.3134C20.6748 21.3231 20.65 21.3281 20.625 21.3281H19.2188C19.1156 21.3281 19.0336 21.2461 19.0313 21.1453C18.9844 19.3359 18.2578 17.6414 16.9734 16.357C15.6445 15.0281 13.8797 14.2969 12 14.2969C10.1203 14.2969 8.35547 15.0281 7.02656 16.357C5.74219 17.6414 5.01563 19.3359 4.96875 21.1453C4.96641 21.2484 4.88438 21.3281 4.78125 21.3281H3.375C3.34998 21.3281 3.32521 21.3231 3.30215 21.3134C3.27909 21.3037 3.25821 21.2895 3.24073 21.2716C3.22326 21.2537 3.20955 21.2324 3.20041 21.2091C3.19126 21.1858 3.18688 21.161 3.1875 21.1359C3.21094 20.0156 3.44297 18.9258 3.87891 17.8969ZM12 12.5156C13.0758 12.5156 14.0883 12.0961 14.85 11.3344C15.6117 10.5727 16.0313 9.56016 16.0313 8.48438C16.0313 7.40859 15.6117 6.39609 14.85 5.63437C14.0883 4.87266 13.0758 4.45312 12 4.45312C10.9242 4.45312 9.91172 4.87266 9.15 5.63437C8.38828 6.39609 7.96875 7.40859 7.96875 8.48438C7.96875 9.56016 8.38828 10.5727 9.15 11.3344C9.91172 12.0961 10.9242 12.5156 12 12.5156Z"
                            fill="#F16114"
                          />
                        </svg>
                      </div>
                    </FormGroup>

                    <FormGroup className="position-relative">
                      <Label for="exampleEmail">Mobile Number</Label>
                      <div className="wrap-div">
                        <SearchSelectInput
                          placeholder="CC"
                          name="countryCode"
                          value={detail?.countryCode}
                          // onChange={loginChange}
                          // errors={fields.errors}
                          data={PHONECODES}
                          type="number"
                          className="under-wrap"
                          onChange={handleChange}
                          required
                        />

                        <Input
                          type="tel"
                          name="mobileNumber"
                          id="exampleEmail"
                          placeholder=""
                          value={detail?.mobileNumber}
                          onChange={handleChange}
                          className="flag-input12 p-2 w-60"
                        />
                      </div>
                    </FormGroup>
                  </div>
                </Col>
                <Col lg={6} md={6} sm={12} xs={12}>
                  <div className="edit-form-col">
                    {/* <FormGroup className="position-relative">
                      <Label for="exampleEmail">Last Name</Label>
                      <Input type="email" name="email" id="exampleEmail" />
                      <div className="icon-left">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M3.87891 17.8969C4.32103 16.8496 4.96263 15.8984 5.76797 15.0961C6.57086 14.2915 7.52196 13.65 8.56875 13.207C8.57813 13.2023 8.5875 13.2 8.59688 13.1953C7.13672 12.1406 6.1875 10.4227 6.1875 8.48438C6.1875 5.27344 8.78906 2.67188 12 2.67188C15.2109 2.67188 17.8125 5.27344 17.8125 8.48438C17.8125 10.4227 16.8633 12.1406 15.4031 13.1977C15.4125 13.2023 15.4219 13.2047 15.4313 13.2094C16.4813 13.6523 17.4234 14.2875 18.232 15.0984C19.0366 15.9013 19.6781 16.8524 20.1211 17.8992C20.5563 18.924 20.791 20.0228 20.8125 21.1359C20.8131 21.161 20.8087 21.1858 20.7996 21.2091C20.7905 21.2324 20.7767 21.2537 20.7593 21.2716C20.7418 21.2895 20.7209 21.3037 20.6979 21.3134C20.6748 21.3231 20.65 21.3281 20.625 21.3281H19.2188C19.1156 21.3281 19.0336 21.2461 19.0313 21.1453C18.9844 19.3359 18.2578 17.6414 16.9734 16.357C15.6445 15.0281 13.8797 14.2969 12 14.2969C10.1203 14.2969 8.35547 15.0281 7.02656 16.357C5.74219 17.6414 5.01563 19.3359 4.96875 21.1453C4.96641 21.2484 4.88438 21.3281 4.78125 21.3281H3.375C3.34998 21.3281 3.32521 21.3231 3.30215 21.3134C3.27909 21.3037 3.25821 21.2895 3.24073 21.2716C3.22326 21.2537 3.20955 21.2324 3.20041 21.2091C3.19126 21.1858 3.18688 21.161 3.1875 21.1359C3.21094 20.0156 3.44297 18.9258 3.87891 17.8969ZM12 12.5156C13.0758 12.5156 14.0883 12.0961 14.85 11.3344C15.6117 10.5727 16.0313 9.56016 16.0313 8.48438C16.0313 7.40859 15.6117 6.39609 14.85 5.63437C14.0883 4.87266 13.0758 4.45312 12 4.45312C10.9242 4.45312 9.91172 4.87266 9.15 5.63437C8.38828 6.39609 7.96875 7.40859 7.96875 8.48438C7.96875 9.56016 8.38828 10.5727 9.15 11.3344C9.91172 12.0961 10.9242 12.5156 12 12.5156Z"
                            fill="#F16114"
                          />
                        </svg>
                      </div>
                    </FormGroup> */}
                    <FormGroup className="position-relative">
                      <Label for="exampleEmail">Email</Label>
                      <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        value={detail?.email}
                        onChange={handleChange}
                      />
                      <div className="icon-left">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="21"
                          height="21"
                          viewBox="0 0 21 21"
                          fill="none"
                        >
                          <path
                            d="M16 5.31812L11.8528 10.0602C11.068 10.9343 9.96772 10.9343 9.18289 10.0602L5 5.31812"
                            stroke="#F16114"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M5.82927 1H15.1441C16.4872 1.01608 17.7655 1.6326 18.6813 2.7048C19.5972 3.777 20.0707 5.21269 19.9914 6.67624V13.6756C20.0707 15.1391 19.5972 16.5748 18.6813 17.647C17.7655 18.7192 16.4872 19.3357 15.1441 19.3518H5.82927C2.9444 19.3518 1 16.8053 1 13.6756V6.67624C1 3.54649 2.9444 1 5.82927 1Z"
                            stroke="#F16114"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </FormGroup>
                    {/* <FormGroup className="position-relative">
                      <Label for="exampleEmail">Password</Label>
                      <Input
                        type="password"
                        name="email"
                        id="exampleEmail"
                        value={detail?.password}
                      />
                      <div className="icon-left">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="22"
                          viewBox="0 0 18 22"
                          fill="none"
                        >
                          <path
                            d="M14 8.55664V6.13442C14 3.29929 11.7656 1.00005 9.01042 1.00005C6.25524 0.98764 4.01206 3.27561 4 6.11187V6.13442V8.55664"
                            stroke="#F16114"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M13.015 20.4313H4.98502C2.78443 20.4313 1 18.7341 1 16.6388V12.3492C1 10.2539 2.78443 8.55664 4.98502 8.55664H13.015C15.2156 8.55664 17 10.2539 17 12.3492V16.6388C17 18.7341 15.2156 20.4313 13.015 20.4313Z"
                            stroke="#F16114"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M9 12.8748V15.0338"
                            stroke="#F16114"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="eye-profile">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="14"
                          viewBox="0 0 16 14"
                          fill="none"
                        >
                          <path
                            d="M15.8787 6.94692C14.7204 3.48018 11.6079 0.992409 7.93936 0.992409C6.62614 0.992409 5.38762 1.31654 4.28205 1.88626L2.39576 0L0.992432 1.40333L13.4829 13.8938L14.8862 12.4905L13.2692 10.8735C14.4467 9.85063 15.36 8.49904 15.8786 6.94686L15.8787 6.94692ZM7.93936 2.97726C10.1318 2.97726 11.909 4.75452 11.909 6.94692C11.909 7.68299 11.7002 8.36491 11.3483 8.95253L9.85626 7.4605C9.90049 7.29689 9.92417 7.12482 9.92417 6.94689C9.92417 5.85066 9.03553 4.96207 7.93936 4.96207C7.76201 4.96207 7.59185 4.98884 7.42861 5.03282L5.94591 3.55012C6.53267 3.19895 7.20443 2.97726 7.93936 2.97726Z"
                            fill="#97ADB6"
                          />
                          <path
                            d="M7.93933 10.9165C5.74693 10.9165 3.96967 9.1392 3.96967 6.94683C3.96967 6.59356 4.03056 6.25733 4.11716 5.93135L1.8987 3.71289C1.06476 4.62611 0.408735 5.72352 0 6.94683C1.15832 10.4136 4.27079 12.9013 7.93933 12.9013C8.87796 12.9013 9.77927 12.7363 10.6217 12.4359L8.95484 10.769C8.62883 10.8556 8.29257 10.9165 7.93933 10.9165Z"
                            fill="#97ADB6"
                          />
                        </svg>
                      </div>
                    </FormGroup> */}

                    <FormGroup className="position-relative">
                      <Label for="exampleEmail">Location</Label>
                      {/* <Input
                        type="text"
                        name="address"
                        id="exampleEmail"
                        value={detail?.address}
                        onChange={handleChange}
                      /> */}

                      <GoogleAutocomplete
                        address={detail?.address}
                        lat={detail?.lat}
                        lng={detail?.lng}
                        name={"location"}
                        onChange={handleAddress}
                      />
                      {/* <GooglePlacesAutocomplete
                        apiKey={"AIzaSyAe8v7VVTeBjtYVf6vmd04P1kGaYKyzt2k"}
                        selectProps={{
                          id: "formGroupExampleInput",
                          classNamePrefix: "select2-selection",
                          // placeholder: detail?.address,
                          value: detail?.address,

                          // onChange: (e) => handleLocation(e),
                          noOptionsMessage: () => "No address found",
                          // value: detail?.address,
                        }}
                      /> */}
                      <div className="icon-left">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_85_3302)">
                            <path
                              d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                              fill="#F16114"
                            />
                            <path
                              d="M13 4.069V2H11V4.069C9.2403 4.29368 7.60497 5.09617 6.35057 6.35057C5.09617 7.60497 4.29368 9.2403 4.069 11H2V13H4.069C4.29335 14.7598 5.09574 16.3953 6.3502 17.6498C7.60466 18.9043 9.24017 19.7066 11 19.931V22H13V19.931C14.7599 19.7068 16.3955 18.9045 17.65 17.65C18.9045 16.3955 19.7068 14.7599 19.931 13H22V11H19.931C19.7066 9.24017 18.9043 7.60466 17.6498 6.3502C16.3953 5.09574 14.7598 4.29335 13 4.069ZM12 18C8.691 18 6 15.309 6 12C6 8.691 8.691 6 12 6C15.309 6 18 8.691 18 12C18 15.309 15.309 18 12 18Z"
                              fill="#F16114"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_85_3302">
                              <rect width="24" height="24" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </FormGroup>
                  </div>
                </Col>
              </Row>
              <Button className="save-btn" onClick={handleSubmit}>
                Save
              </Button>
            </Form>
          </div>
        </div>
      </Fade>
    </section>
  );
}
