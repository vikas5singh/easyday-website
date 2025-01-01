import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
} from "react";
import { countries, COUNTRIES, PHONECODES } from "../../Common/countries";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { isEmail, isEmpty } from "validator";
import { PASS_REGEX } from "../../services/URLS";
import { getFirebase } from "../../firebase";
import { COUNTRY_OPTIONS } from "../../Common/worldCountries";

import {
  signupUser,
  loginUser,
  verifyOtp,
  forgotPass,
  resetPass,
  logout,
  logoutSuccess,
  latLng,
  getProfile,
  addcartquanitity,
  userCart,
  userCartRemove,
  savedata,
  addCart,
  updateAddCart
} from "../../Redux/actions";
import { Button, Container } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Offcanvas from "react-bootstrap/Offcanvas";
import "react-phone-input-2/lib/style.css";
import GooglePlacesAutocomplete, {
  geocodeByPlaceId,
  geocodeByLatLng,
} from "react-google-places-autocomplete";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Form, FormGroup, Label, Input, FormText, Row, Col } from "reactstrap";
import { Navigate } from "react-router-dom";
import { SearchSelectInput } from "../../Common/inputFields";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
  MdRemove, MdAdd, MdEdit
} from "react-icons/md";
import { HiOutlineTrash } from "react-icons/hi";
import { toast } from "react-toastify";
import OptionsModal from "../Tacos/OptionsModal";
import EditoptionsModel from "../Tacos/EditoptionsModel";

//const google = window.google;

export default function Header() {
  const dispatch = useDispatch();

  const [state, setState] = useState({ tab: "tab1" });
  const [numstate, setnumState] = useState(0);
  const [LogModal, setLoginModal] = useState(false);
  const [FPModal, setFPModal] = useState(false);
  const [OTPModal, setOTPModal] = useState(false);
  const [PCModal, setPCModal] = useState(false);
  const [signupModal, setsignupModal] = useState(false);
  const [showw, setShoww] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [uquantity, setUquantity] = useState("")
  // console.log("params",searchParams.get("showLogin"));
  const openModal = searchParams.get("showLogin");

  const [errors, setError] = useState({
    email: "",
    password: "",
    disabled: true,
  });

  const cartKey = useMemo(() => {
    return localStorage?.getItem("cartKey") || null;
  }, [uquantity]);
  console.log("checkcart", localStorage?.getItem("cartKey"), cartKey);
  const navigate = useNavigate();
  const isAutH = useSelector((s) => s.login?.token);
  const [_isAuth, setIsAuth] = useState(false);
  const [locationFound, setLocationFound] = useState(null);
  console.log(locationFound, "locationFound");
  const altitude = useSelector((s) => s.restaurant?.latLng);
  const Tab = useSelector((s) => s.restaurant.tabData?.data)
  const isAuth = useMemo(() => isAutH, [isAutH]);
  useEffect(() => {
    if (openModal) {
      setLoginModal(true);
    }
  }, []);

  useEffect(() => {
    setIsAuth(!!isAuth);
  }, [isAuth]);

  const [addressvalue, setAddressValue] = useState({
    label: "",
    value: "",
  });
  console.log(addressvalue, "addressvalue");
  const [signUser, setSignUser] = useState({
    name: "",
    email: "",
    countryCode: "🇺🇸 +1",
    mobileNumber: "",
    address: "",
    password: "",
  });

  const [logUser, setLogUser] = useState({
    mobileNumber: "",
    countryCode: "🇺🇸 +1",
    email: "",
    password: "",
    firebaseToken: "",
  });

  // ============= firebase token ============= //
  const [isTokenFound, setTokenFound] = useState(false);

  useEffect(() => {
    let data;

    async function tokenFunc() {
      const status = await Notification.requestPermission();

      try {
        if (status && status === "granted") {
          const firebase = getFirebase();
          firebase
            .getToken()
            .then((token) => {
              setLogUser((prevState) => ({
                ...prevState,
                firebaseToken: token,
              }));
              data = token;
              localStorage.setItem("firebaseToken", data);
            })
            .catch((e) => { });
        }
      } catch (error) { }
    }
    tokenFunc();
  }, [setTokenFound]);

  const [repass, setRepass] = useState({
    password: "",
    confirmPassword: "",
    mobileNumber: "",
    countryCode: "🇺🇸 +1",
    OTP: "",
  });

  const [otp, setOtp] = useState({
    mobileNumber: "",
    countryCode: "🇺🇸 +1",
    OTP: "",
  });

  const handleLocation = (data) => {
    geocodeByPlaceId(data?.value?.place_id)
      .then((results) => {
        const result = results[0];
        if (!result) return;
        setSignUser((prev) => ({
          ...prev,
          address: result.formatted_address,
        }));
      })
      .catch((error) => console.error(error));
  };

  const handleLatLng = (data) => {
    geocodeByPlaceId(data?.value?.place_id)
      .then((results) => {
        const result = results[0];
        if (!result) return;
        setAddressValue((prev) => ({
          ...prev,
          label: result.formatted_address,
        }));
        dispatch(
          latLng({
            customerLocation: {
              lat: result.geometry.location.lat(),
              lng: result.geometry.location.lng(),
            },
            address: result.formatted_address,
          })
        );
      })
      .catch((error) => console.error(error));
  };
  // const handleClearLocation = (e) => {
  //   e.preventDefault();
  //   setAddressValue((pre) => ({
  //     ...pre,
  //     label: "",
  //     value: "",
  //   }));
  // };
  const signupChange = (e) => {
    const { name, value } = e.target;

    const Error = { ...errors };

    switch (name) {
      case "email": {
        if (isEmpty(value)) {
          Error[name] = "Required";
        } else if (!isEmail(value)) {
          Error[name] = "Invalid Email";
        } else {
          Error[name] = "";
        }
        break;
      }
      case "password": {
        if (value.length < 1) {
          Error[name] = "Required";
        } else if (!PASS_REGEX.test(value)) {
          Error[name] =
            "password should be at least 8 characters, one uppercase, lowercase, special character (@,-,~,_), numeric value.";
        } else {
          Error[name] = "";
        }

        break;
      }

      default:
        break;
    }
    setSignUser((pre) => ({
      ...pre,
      [name]: value,
    }));
    setError((pre) => ({ ...pre, ...Error }));
  };

  const resetChange = (e) => {
    const { name, value } = e.target;
    setRepass((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  const resetSubmit = (e) => {
    e.preventDefault();
    const callBack = () => {
      setPCModal(!PCModal);
      setFPModal(FPModal);
      setLoginModal(!LogModal);
    };
    dispatch(resetPass(repass, callBack));
  };

  const fun = useCallback((data) => { }, []);

  const otpChange = useCallback((e) => {
    const { name, value } = e.target;
    setOtp((pre) => ({
      ...pre,
      [name]: value,
    }));
  }, []);

  const loginChange = (e) => {
    const { name, value } = e.target;

    const Error = { ...errors };

    switch (name) {
      case "email": {
        if (isEmpty(value)) {
          Error[name] = "Required";
        } else if (!isEmail(value)) {
          Error[name] = "Invalid Email";
        } else {
          Error[name] = "";
        }
        break;
      }
      case "password": {
        if (value.length < 1) {
          Error[name] = "Required";
        } else if (!PASS_REGEX.test(value)) {
          Error[name] =
            "password should be at least 8 characters, one uppercase, lowercase, special character (@,-,~,_), numeric value.";
        } else {
          Error[name] = "";
        }

        break;
      }

      default:
        break;
    }

    setLogUser((pre) => ({
      ...pre,
      [name]: value,
    }));
    setError((pre) => ({ ...pre, ...Error }));
  };

  const signupSubmit = (e) => {
    e.preventDefault();

    const callBack = (data) => {
      // setLoginModal(!LogModal);
      setTimeout(() => {
        setOTPModal(!OTPModal);
        setsignupModal(!signupModal);
      }, 400);
      setOtp((pre) => ({
        ...pre,
        countryCode: data.countryCode,
        mobileNumber: data.mobileNumber,
      }));
    };
    if (signUser.countryCode) {
      signUser.countryCode = signUser.countryCode.replace(
        /[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]\s*/,
        ""
      );
    }
    dispatch(signupUser(signUser, callBack));
  };

  const otpSubmit = (e) => {
    e.preventDefault();

    const callBack = () => {
      setTimeout(() => {
        setFPModal(false);
      }, 400);
    };
    dispatch(verifyOtp(otp, callBack));
  };

  const sendOtpSubmit = (e) => {
    e.preventDefault();

    const callBack = (data) => {
      setPCModal(!PCModal);
      setFPModal(!FPModal);
      setRepass((pre) => ({
        ...pre,
        OTP: data.OTP,
      }));
    };

    dispatch(verifyOtp(otp, callBack));
  };

  const loginSubmit = (e) => {
    e.preventDefault();

    const callBack = () => {
      setTimeout(() => {
        setLoginModal(!LogModal);
        navigate("/");
        // window.location.reload();
      }, 500);
    };
    if (logUser.countryCode) {
      logUser.countryCode = logUser.countryCode.replace(
        /[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]\s*/,
        ""
      );
    }
    dispatch(loginUser(logUser, callBack));
  };

  const forgotSubmit = (e) => {
    e.preventDefault();
    const callBack = (data) => {
      setOtp((pre) => ({
        ...pre,
        countryCode: data.countryCode.replace(
          /[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]\s*/,
          ""
        ),
        mobileNumber: data.mobileNumber,
      }));
      setRepass((pre) => ({
        ...pre,
        countryCode: data.countryCode.replace(
          /[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]\s*/,
          ""
        ),
        mobileNumber: data.mobileNumber,
      }));
    };
    dispatch(forgotPass(otp, callBack));
  };

  useEffect(() => {
    try {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          function (position) {
            setLocationFound(true);
            geocodeByLatLng({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            })
              .then((results) => {
                console.log(results, "gdfdtg");
                if (results?.length > 0) {
                  setAddressValue({
                    label: results[0].formatted_address,
                    value: results[0],
                  });
                }
              })
              .catch((error) => { });
          },
          (err) => {
            setLocationFound(false);
          }
        );
      }
    } catch (error) { }

    return () => { };
  }, []);

  const logoutSubmit = () => {
    dispatch(logoutSuccess());
    localStorage.clear();
    setTimeout(() => {
      navigate("/");
    }, 400);
  };
  const cartcount = useSelector((s) => s.address?.savedData?.length);
  const cartdata = useSelector((s) => s.address?.usercart?.data);

  console.log(cartdata, "cartdatassssss");
  // const totalcartPrice = useSelector((s) => s.address?.usercart?.itemSubTotal);
  const totalcartPrice = (cartdata || [])?.length > 0 && (cartdata || [])?.reduce(
    (acc, item) => acc + (Number(item?.lineTotal || 0)),
    0 // Initial value for the accumulator
  );

  const savedData = useSelector((s) => s);
  // console.log("ddd ", docp);

  useEffect(() => {
    dispatch(getProfile({}));
  }, [dispatch]);

  // useEffect(() => {

  // }, [cartdata]);

  const walletBal = useSelector((s) => s.profile?.profile?.wallet);

  const reduxState = useSelector((s) => s);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // function handleQuantity(index, value) {
  //   console.log(index, value, "value");
  //   if (isNaN(value)) {
  //     setItemQuantity((prev) => ({
  //       ...prev,
  //       [index]: 1,
  //     }));
  //   } else {
  //     setItemQuantity((prev) => ({
  //       ...prev,
  //       [index]: value % 0.5 === 0 ? value : parseInt(value),
  //     }));
  //   }
  // }

  useEffect(() => {
    global.showCart = handleShow;
    global.hideCart = handleClose;
  }, [handleShow, handleClose]);

  const handleQuantity = (id, value) => {
    const callBack = (response) => {
      if (response.status == "success") {
        dispatch(userCart({ cart_key: localStorage?.getItem("cartKey") || cartKey, promocode: "none", tip: "no", tipAmount: 0 }));
      }
    };
    setUquantity(value);
    dispatch(addcartquanitity({ cartId: id, quantity: value }, callBack));
  };
  const RestID = useSelector((s) => s.address?.usercart?.data?.[0]?.restaurantId);

  function removeCartItem(itemId, type) {
    const callBack = (data) => {
      if (data?.data?.status === "success") {
        toast.success("Item Removed Successfully");
      } else {
        toast.error(data?.data?.message || "Error Occured");
      }
      const cartCallback = (response) => {
        if (response.data.status === "success") {
          const data = {
            allItem: response.data.data,
            restId: RestID,
          };
          dispatch(savedata(data));
        } else {
          const data = {
            allItem: [],
            restId: "",
          };
          dispatch(savedata(data));
        }
      };
      dispatch(
        userCart(
          {
            cart_key: cartKey,
            promocode: "none",
            tip: "no",
            tipAmount: 0,
            //items: data?.itemId,
            //restaurantId: data?.restaurantId,
          },
          cartCallback
        )
      );
    };

    if (type == "addons") {
      dispatch(
        userCartRemove(
          {
            cartId: itemId,
            customerId: state?.cartItem?.[0]?.customerId,
          },
          callBack
        )
      );
    } else {
      dispatch(
        userCartRemove(
          {
            cartId: itemId,
            customerId: localStorage.getItem("userId"),
          },
          callBack
        )
      );
    }
  }
  const restId = useSelector((s) => s.restaurant.data?._id);
  const customerId = useSelector((s) => s.profile?.profile?._id);
  function refreshCart(showCart = false) {
    console.log("showCart=======>", showCart);
    const cartCallback = (response) => {
      if (response.data.status === "success") {
        const data = {
          allItem: response.data.data,
          restId: restId,
        };
        dispatch(savedata(data));
      } else {
        const data = {
          allItem: [],
          restId: "",
        };
        dispatch(savedata(data));
      }
      if (showCart) {
        global.showCart?.();
      }
    };
    dispatch(
      userCart(
        {
          cart_key: cartKey,
          promocode: "none",
          tip: "no",
          tipAmount: 0,
          //items: data?.itemId,
          //restaurantId: data?.restaurantId,
        },
        cartCallback
      )
    );
  }

  function onAddToCart({
    item,
    quantity = 1,
    addons = [],
    variations = [],
    instructions = "",
    cartId = ""
  }) {
    console.log("item ************>", item)
    const callBack = (Data) => {
      if (Data.status == "success") {
        // toast.success(Data.message);
        setShowOptions(null);
      } else {
        toast.error(Data.data.message);
      }
      refreshCart(true);
    };

    dispatch(
      updateAddCart(
        {
          cart_key: cartKey || null,
          product: item._id,
          quantity,
          addons: addons,
          variations: variations,
          instructions: instructions,
          user: customerId,
          cartId: cartId
        },
        callBack
      )
    );
  }
  const [showOptions, setShowOptions] = useState(null);
  return (
    <section className="header-main position-relative">
      {/* modal one */}
      {showOptions && (
        <EditoptionsModel
          show={[showOptions, setShowOptions]}
          onAddToCart={onAddToCart}
        />
      )}
      <Modal
        show={LogModal}
        onHide={() => setLoginModal(false)}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal-common modal-login"
      >
        <Modal.Body>
          <div className="loginmodal-cont position-relative">
            <Button className="close-btn" onClick={() => setLoginModal(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M18.3699 0.0663185C13.7044 0.442104 9.21418 2.52146 5.88406 5.83673C-0.676038 12.3754 -1.89458 22.5885 2.95455 30.4883C5.61698 34.8308 9.93195 38.0458 14.8312 39.3485C16.6005 39.8162 18.0194 39.9999 19.914 39.9999C23.2107 40.0083 25.8314 39.4154 28.8027 37.9707C36.7733 34.1126 41.2468 25.2774 39.6944 16.5091C37.8917 6.37118 28.6274 -0.768764 18.3699 0.0663185ZM23.3359 14.7972L26.6744 11.4568L27.6425 12.4255L28.6024 13.3859L25.2472 16.7095L21.892 20.0331L25.2222 23.3651L28.5523 26.6971L27.6092 27.6324L26.6744 28.576L23.3359 25.2357L19.9974 21.8953L16.684 25.2106L13.3622 28.5342L12.4191 27.599L11.476 26.6637L14.7978 23.34L18.1196 20.0164L14.7978 16.6928L11.4843 13.3775L12.4191 12.4339L13.3622 11.4986L16.6757 14.8139L19.9974 18.1375L23.3359 14.7972Z"
                  fill="#F16724"
                />
              </svg>
            </Button>
            <Row>
              <Col lg={6} md={12} sm={12} className="order-one">
                <div className="login-right-cont">
                  <div className="login-head text-center">
                    <h4>Enter your login details</h4>
                    <p className="text-uppercase">
                      Penatibus feugiat at tempor pulvinar amet, nunc eu in sed.
                      At habitant vulputate neque volutpat laoreet{" "}
                    </p>
                  </div>
                  <div className="login-tabbing">
                    <div className="login-tab">
                      {/* <div className="clearfix">
                        <input
                          type="radio"
                          id="phoneinput"
                          checked={state?.tab === "tab1"}
                          onChange={() => setState({ tab: "tab1" })}
                        />
                        <label htmlFor="phoneinput">BY PHONE</label>
                        <input
                          type="radio"
                          id="emailinput"
                          checked={state?.tab === "tab2"}
                          onChange={() => setState({ tab: "tab2" })}
                        />
                        <label htmlFor="emailinput">BY EMAIL</label>
                      </div> */}

                      {/* {state.tab === "tab1" && ( */}
                      <div className="byphone common-login">
                        <Form className="form-common">
                          <FormGroup className="position-relative">
                            <Label for="exampleEmail">
                              Enter Your Mobile NUmber
                            </Label>

                            <div className="wrap-div">
                              <SearchSelectInput
                                placeholder="CC"
                                name={"countryCode"}
                                value={logUser.countryCode}
                                onChange={loginChange}
                                // errors={fields.errors}
                                data={COUNTRY_OPTIONS}
                                type="number"
                                className="under-wrap"
                                required
                              />

                              <Input
                                type="tel"
                                name="mobileNumber"
                                id="exampleEmail"
                                placeholder=""
                                onChange={loginChange}
                                className="flag-input ps-4"
                              />
                            </div>
                            {/* <div className="name-icon">
                        <img
                          src="images/flag.png"
                          alt=""
                          className="flag img-fluid"
                        />
                        +1
                      </div> */}
                          </FormGroup>
                          {/* <FormGroup className="position-relative">
                              <Input
                                type="tel"
                                name="number"
                                id="exampleEmail"
                                placeholder=""
                                className="flag-input"
                              />
                              <PhoneInput
                                country={"us"}
                                value={numstate.phone}
                                onChange={(phone) => setnumState({ phone })}
                              />
                            </FormGroup> */}
                          <FormGroup className="position-relative">
                            <Input
                              type={showw == false ? "password" : "text"}
                              name="password"
                              id="exampleEmail"
                              onChange={loginChange}
                              placeholder="password"
                              className="password-input"
                            />
                            {/* <span className="note error_note py-2 m-0 text-danger">
                                {errors.password}
                              </span> */}
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
                              <a onClick={() => setShoww(!showw)}>
                                <img
                                  src={
                                    showw == false
                                      ? "/svg/eye-close.svg"
                                      : "/svg/eye-open.svg"
                                  }
                                  alt=""
                                  className="img-fluid"
                                />
                              </a>
                            </div>
                            {/* <div className="eye-open d-none">
                                <img
                                  src="svg/eye-open.svg"
                                  alt=""
                                  className="img-fluid"
                                />
                              </div> */}
                          </FormGroup>
                          <div className="checkout-check">
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox" /> Remember me
                              </Label>
                            </FormGroup>
                            <a
                              href="javascript:void(0)"
                              onClick={() => {
                                setLoginModal(!LogModal);
                                setTimeout(() => {
                                  setFPModal(!FPModal);
                                }, 400);
                              }}
                            >
                              Forgot Password?
                            </a>
                          </div>
                          <Button className="btn-login" onClick={loginSubmit}>
                            Login
                          </Button>
                          <div className="or-loginwith">
                            <div className="inside-border position-relative">
                              <p>Or Sign IN WIth</p>
                              <div className="under-border"></div>
                            </div>
                            <div className="social-iconlogin">
                              <a href="javascript:void(0)">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="50"
                                  height="50"
                                  viewBox="0 0 50 50"
                                  fill="none"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M28.8639 49.7032C40.8363 47.8457 50 37.493 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 37.3687 8.98228 47.6395 20.7797 49.6453V34.9827H15.7816C15.3501 34.9827 15 34.6329 15 34.2011V27.8989C15 27.467 15.3497 27.1169 15.7816 27.1169H20.7797V22.7672C20.7797 17.0361 24.3887 13.3333 29.9734 13.3333L34.9443 13.3413C35.3754 13.3421 35.7247 13.6919 35.7247 14.1229V19.9749C35.7247 20.4064 35.375 20.7565 34.9435 20.7565L31.5949 20.7577C29.2863 20.7577 28.8639 21.6574 28.8639 23.4296V27.1169H34.7098C34.9172 27.1169 35.1166 27.1994 35.2629 27.3462C35.4093 27.4929 35.4918 27.6915 35.4918 27.8989L35.4894 34.2011C35.4894 34.6329 35.1397 34.9827 34.7078 34.9827H28.8639V49.7032Z"
                                    fill="#D5DDE0"
                                  />
                                </svg>
                              </a>
                              <a href="javascript:void(0)">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="50"
                                  height="50"
                                  viewBox="0 0 50 50"
                                  fill="none"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50ZM33.0155 27.8333H25V22.1667H39.1667V25C39.1667 32.8115 32.8115 39.1667 25 39.1667C17.1885 39.1667 10.8333 32.8115 10.8333 25C10.8333 17.1885 17.1885 10.8333 25 10.8333C28.4028 10.8333 31.6782 12.0573 34.2282 14.2787L30.5052 18.5513C28.9865 17.2282 27.0315 16.5 25 16.5C20.3137 16.5 16.5 20.3137 16.5 25C16.5 29.6863 20.3137 33.5 25 33.5C28.6947 33.5 31.8453 31.1313 33.0155 27.8333Z"
                                    fill="#D5DDE0"
                                  />
                                </svg>
                              </a>
                            </div>
                          </div>

                          <p className="have-account">
                            Don’t have an account?{" "}
                            <a
                              href="javascript:void(0)"
                              onClick={() => {
                                setLoginModal(!LogModal);
                                setTimeout(() => {
                                  setsignupModal(!signupModal);
                                }, 400);
                              }}
                            >
                              Sign up
                            </a>
                          </p>
                        </Form>
                      </div>
                      {/* )} */}

                      {/* {state.tab === "tab2" && (
                        <div className="byemail common-login">
                          <Form className="form-common">
                            <FormGroup className="position-relative">
                              <Input
                                type="email"
                                name="email"
                                id="exampleEmail"
                                placeholder="Enter email..."
                                onChange={loginChange}
                                className="email-col"
                              />
                              <span className="note error_note py-2 m-0 text-danger">
                                {errors.email}
                              </span>
                              <div className="email-icon">
                                <svg
                                  role="img"
                                  class="iconify iconify--ic"
                                  width="24"
                                  height="24"
                                  preserveAspectRatio="xMidYMid meet"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    fill="#2E3E5C"
                                    d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5l-8-5h16zm0 12H4V8l8 5l8-5v10z"
                                  />
                                </svg>
                              </div>
                            </FormGroup>
                            <FormGroup className="position-relative">
                              <Input
                                type={showw == false ? "password" : "text"}
                                name="password"
                                id="exampleEmail"
                                onChange={loginChange}
                                placeholder=""
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
                                <a onClick={() => setShoww(!showw)}>
                                  <img
                                    src={
                                      showw == false
                                        ? "svg/eye-close.svg"
                                        : "svg/eye-open.svg"
                                    }
                                    alt=""
                                    className="img-fluid"
                                  />
                                </a>
                              </div>
                            </FormGroup>
                            <div className="checkout-check">
                              <FormGroup check>
                                <Label check>
                                  <Input type="checkbox" /> Remember me
                                </Label>
                              </FormGroup>
                              <a
                                href="javascript:void(0)"
                                onClick={() => {
                                  setLoginModal(!LogModal);
                                  setTimeout(() => {
                                    setFPModal(!FPModal);
                                  }, 400);
                                }}
                              >
                                Forgot Password?
                              </a>
                            </div>
                            <Button className="btn-login" onClick={loginSubmit}>
                              Login
                            </Button>
                            <div className="or-loginwith">
                              <div className="inside-border position-relative">
                                <p>Or Sign IN WIth</p>
                                <div className="under-border"></div>
                              </div>
                              <div className="social-iconlogin">
                                <a href="javascript:void(0)">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="50"
                                    height="50"
                                    viewBox="0 0 50 50"
                                    fill="none"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M28.8639 49.7032C40.8363 47.8457 50 37.493 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 37.3687 8.98228 47.6395 20.7797 49.6453V34.9827H15.7816C15.3501 34.9827 15 34.6329 15 34.2011V27.8989C15 27.467 15.3497 27.1169 15.7816 27.1169H20.7797V22.7672C20.7797 17.0361 24.3887 13.3333 29.9734 13.3333L34.9443 13.3413C35.3754 13.3421 35.7247 13.6919 35.7247 14.1229V19.9749C35.7247 20.4064 35.375 20.7565 34.9435 20.7565L31.5949 20.7577C29.2863 20.7577 28.8639 21.6574 28.8639 23.4296V27.1169H34.7098C34.9172 27.1169 35.1166 27.1994 35.2629 27.3462C35.4093 27.4929 35.4918 27.6915 35.4918 27.8989L35.4894 34.2011C35.4894 34.6329 35.1397 34.9827 34.7078 34.9827H28.8639V49.7032Z"
                                      fill="#D5DDE0"
                                    />
                                  </svg>
                                </a>
                                <a href="javascript:void(0)">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="50"
                                    height="50"
                                    viewBox="0 0 50 50"
                                    fill="none"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50ZM33.0155 27.8333H25V22.1667H39.1667V25C39.1667 32.8115 32.8115 39.1667 25 39.1667C17.1885 39.1667 10.8333 32.8115 10.8333 25C10.8333 17.1885 17.1885 10.8333 25 10.8333C28.4028 10.8333 31.6782 12.0573 34.2282 14.2787L30.5052 18.5513C28.9865 17.2282 27.0315 16.5 25 16.5C20.3137 16.5 16.5 20.3137 16.5 25C16.5 29.6863 20.3137 33.5 25 33.5C28.6947 33.5 31.8453 31.1313 33.0155 27.8333Z"
                                      fill="#D5DDE0"
                                    />
                                  </svg>
                                </a>
                              </div>
                            </div>

                            <p className="have-account">
                              Don’t have an account?{" "}
                              <a
                                href="javascript:void(0)"
                                onClick={() => {
                                  setLoginModal(!LogModal);
                                  setTimeout(() => {
                                    setsignupModal(!signupModal);
                                  }, 400);
                                }}
                              >
                                Sign up
                              </a>
                            </p>
                          </Form>
                        </div>
                      )} */}
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={6} md={12} sm={12} className="order-two">
                <div className="login-left-img">
                  <img
                    src="/images/loginright.png"
                    alt=""
                    className="loginright"
                  />
                </div>
              </Col>
            </Row>
          </div>
        </Modal.Body>
      </Modal>
      {/* modal one */}

      {/* modal forgotpass */}
      <Modal
        show={FPModal}
        onHide={() => setFPModal(false)}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal-common modal-login"
      >
        <Modal.Body>
          <div className="loginmodal-cont position-relative">
            <Button className="close-btn" onClick={() => setFPModal(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M18.3699 0.0663185C13.7044 0.442104 9.21418 2.52146 5.88406 5.83673C-0.676038 12.3754 -1.89458 22.5885 2.95455 30.4883C5.61698 34.8308 9.93195 38.0458 14.8312 39.3485C16.6005 39.8162 18.0194 39.9999 19.914 39.9999C23.2107 40.0083 25.8314 39.4154 28.8027 37.9707C36.7733 34.1126 41.2468 25.2774 39.6944 16.5091C37.8917 6.37118 28.6274 -0.768764 18.3699 0.0663185ZM23.3359 14.7972L26.6744 11.4568L27.6425 12.4255L28.6024 13.3859L25.2472 16.7095L21.892 20.0331L25.2222 23.3651L28.5523 26.6971L27.6092 27.6324L26.6744 28.576L23.3359 25.2357L19.9974 21.8953L16.684 25.2106L13.3622 28.5342L12.4191 27.599L11.476 26.6637L14.7978 23.34L18.1196 20.0164L14.7978 16.6928L11.4843 13.3775L12.4191 12.4339L13.3622 11.4986L16.6757 14.8139L19.9974 18.1375L23.3359 14.7972Z"
                  fill="#F16724"
                />
              </svg>
            </Button>
            <Row>
              <Col lg={6} md={12} sm={12} className="order-one">
                <div className="login-right-cont">
                  <div className="login-head text-center">
                    <h4>Forgot Password</h4>
                  </div>

                  <div className="forgot-cont text-left">
                    <h4>Enter Register mobile Number</h4>
                    <p>
                      We Send a verification code to your Registerted email id
                    </p>
                  </div>

                  <Form className="form-common">
                    <FormGroup className="position-relative">
                      <Label for="exampleEmail">
                        Enter Your Register Mobile NUmber
                      </Label>
                      <div className="wrap-div">
                        <SearchSelectInput
                          placeholder="CC"
                          name={"countryCode"}
                          value={otp.countryCode}
                          onChange={otpChange}
                          // errors={fields.errors}
                          data={COUNTRY_OPTIONS}
                          type="number"
                          className="under-wrap"
                          required
                        />
                        <Input
                          type="tel"
                          name="mobileNumber"
                          id="exampleEmail"
                          placeholder=""
                          onChange={otpChange}
                          className="flag-input"
                        />
                      </div>
                    </FormGroup>
                    <Button
                      className="btn-login1"
                      onClick={forgotSubmit}
                    // onClick={() => {
                    //   setFPModal(!FPModal);
                    //   setTimeout(() => {
                    //     setPCModal(!PCModal);
                    //   }, 400);
                    // }}
                    >
                      Send Verification Code
                    </Button>

                    <p className="enter-digit">
                      Enter the 4-digit code sent on your Mobile Number{" "}
                      {/* <strong>+1 234 5678 90</strong> */}
                    </p>

                    <FormGroup className="otp-center">
                      <Input
                        type="number"
                        name="OTP"
                        id="number"
                        onChange={otpChange}
                        placeholder="0000"
                      />
                    </FormGroup>

                    <a onClick={forgotSubmit} className="resend-code">
                      Resend code
                    </a>

                    <Button
                      className="btn-login"
                      onClick={sendOtpSubmit}
                    // onClick={() => {
                    //   setFPModal(!FPModal);
                    //   setTimeout(() => {
                    //     setPCModal(!PCModal);
                    //   }, 400);
                    // }}
                    >
                      Verify
                    </Button>
                  </Form>
                </div>
              </Col>
              <Col lg={6} md={12} sm={12} className="order-rwo">
                <div className="login-left-img">
                  <img
                    src="images/loginright.png"
                    alt=""
                    className="loginright"
                  />
                </div>
              </Col>
            </Row>
          </div>
        </Modal.Body>
      </Modal>
      {/* modal forgotpass */}

      {/* OTP verification */}
      <Modal
        show={OTPModal}
        onHide={() => setOTPModal(false)}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal-common modal-login"
      >
        <Modal.Body>
          <div className="loginmodal-cont position-relative">
            <Button className="close-btn" onClick={() => setOTPModal(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M18.3699 0.0663185C13.7044 0.442104 9.21418 2.52146 5.88406 5.83673C-0.676038 12.3754 -1.89458 22.5885 2.95455 30.4883C5.61698 34.8308 9.93195 38.0458 14.8312 39.3485C16.6005 39.8162 18.0194 39.9999 19.914 39.9999C23.2107 40.0083 25.8314 39.4154 28.8027 37.9707C36.7733 34.1126 41.2468 25.2774 39.6944 16.5091C37.8917 6.37118 28.6274 -0.768764 18.3699 0.0663185ZM23.3359 14.7972L26.6744 11.4568L27.6425 12.4255L28.6024 13.3859L25.2472 16.7095L21.892 20.0331L25.2222 23.3651L28.5523 26.6971L27.6092 27.6324L26.6744 28.576L23.3359 25.2357L19.9974 21.8953L16.684 25.2106L13.3622 28.5342L12.4191 27.599L11.476 26.6637L14.7978 23.34L18.1196 20.0164L14.7978 16.6928L11.4843 13.3775L12.4191 12.4339L13.3622 11.4986L16.6757 14.8139L19.9974 18.1375L23.3359 14.7972Z"
                  fill="#F16724"
                />
              </svg>
            </Button>
            <Row>
              <Col lg={6} md={12} sm={12} className="order-one">
                <div className="login-right-cont">
                  <div className="login-head text-center">
                    <h4>OTP verification</h4>
                  </div>

                  {/* <div className="forgot-cont text-left">
                    <h4>Registered mobile Number</h4>
                    <p>
                      We Send a verification code to your Registerted email id
                    </p>
                  </div> */}

                  <Form className="form-common">
                    <Label for="exampleEmail">REGISTERED MOBILE NUMBER</Label>
                    <FormGroup className="position-relative">
                      <div className="wrap-div">
                        <Input
                          type="tel"
                          name="mobileNumber"
                          id="exampleEmail"
                          placeholder=""
                          value={
                            signUser.countryCode + " " + signUser.mobileNumber
                          }
                          // onChange={loginChange}
                          className="flag-input"
                          disabled={true}
                        />
                      </div>
                      {/* <div className="name-icon">
                        <img
                          src="images/flag.png"
                          alt=""
                          className="flag img-fluid"
                        />
                        +1
                      </div> */}
                    </FormGroup>
                    {/* <FormGroup className="position-relative">
                      <Input
                        type="tel"
                        name="number"
                        id="exampleEmail"
                        placeholder=""
                        value={signUser.mobileNumber}
                        className="flag-input"
                      />
                      <div className="flag-div">
                        <img
                          src="images/flag.png"
                          alt=""
                          className="flag img-fluid"
                        />
                        +1
                      </div>
                    </FormGroup> */}

                    <p className="enter-digit">
                      Enter the 4-digit code sent on your Mobile Number{" "}
                    </p>

                    <FormGroup className="otp-center">
                      <Input
                        type="number"
                        name="OTP"
                        id="number"
                        onChange={otpChange}
                        placeholder="0000"
                      />
                      {/* <Input
                        type="number"
                        name="number"
                        id="number"
                        placeholder="0"
                      />
                      <Input
                        type="number"
                        name="number"
                        id="number"
                        placeholder="0"
                      />
                      <Input
                        type="number"
                        name="number"
                        id="number"
                        placeholder="0"
                      /> */}
                    </FormGroup>

                    <a href="javascript:void(0)" className="resend-code">
                      Resend code
                    </a>

                    <Button
                      className="btn-login"
                      onClick={otpSubmit}
                    // onClick={() => {
                    //   setOTPModal(!FPModal);
                    //   setTimeout(() => {
                    //     setPCModal(!PCModal);
                    //   }, 400);
                    // }}
                    >
                      Verify
                    </Button>
                  </Form>
                </div>
              </Col>
              <Col lg={6} md={12} sm={12} className="order-rwo">
                <div className="login-left-img">
                  <img
                    src="images/loginright.png"
                    alt=""
                    className="loginright"
                  />
                </div>
              </Col>
            </Row>
          </div>
        </Modal.Body>
      </Modal>

      {/* OTP verifiacation */}

      {/* modal password change */}
      <Modal
        show={PCModal}
        onHide={() => setPCModal(false)}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal-common modal-login"
      >
        <Modal.Body>
          <div className="loginmodal-cont position-relative">
            <Button className="close-btn" onClick={() => setPCModal(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M18.3699 0.0663185C13.7044 0.442104 9.21418 2.52146 5.88406 5.83673C-0.676038 12.3754 -1.89458 22.5885 2.95455 30.4883C5.61698 34.8308 9.93195 38.0458 14.8312 39.3485C16.6005 39.8162 18.0194 39.9999 19.914 39.9999C23.2107 40.0083 25.8314 39.4154 28.8027 37.9707C36.7733 34.1126 41.2468 25.2774 39.6944 16.5091C37.8917 6.37118 28.6274 -0.768764 18.3699 0.0663185ZM23.3359 14.7972L26.6744 11.4568L27.6425 12.4255L28.6024 13.3859L25.2472 16.7095L21.892 20.0331L25.2222 23.3651L28.5523 26.6971L27.6092 27.6324L26.6744 28.576L23.3359 25.2357L19.9974 21.8953L16.684 25.2106L13.3622 28.5342L12.4191 27.599L11.476 26.6637L14.7978 23.34L18.1196 20.0164L14.7978 16.6928L11.4843 13.3775L12.4191 12.4339L13.3622 11.4986L16.6757 14.8139L19.9974 18.1375L23.3359 14.7972Z"
                  fill="#F16724"
                />
              </svg>
            </Button>
            <Row>
              <Col lg={6} md={12} sm={12} className="order-one">
                <div className="login-right-cont">
                  <div className="login-head text-center">
                    <h4>Reset your password</h4>
                    <p>Please enter your new password</p>
                  </div>

                  <Form className="form-common">
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
                        <a onClick={() => setShoww(!showw)}>
                          <img
                            src={
                              showw == false
                                ? "svg/eye-close.svg"
                                : "svg/eye-open.svg"
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
                        <a onClick={() => setShoww(!showw)}>
                          <img
                            src={
                              showw == false
                                ? "svg/eye-close.svg"
                                : "svg/eye-open.svg"
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
                    src="images/loginright.png"
                    alt=""
                    className="loginright"
                  />
                </div>
              </Col>
            </Row>
          </div>
        </Modal.Body>
      </Modal>
      {/* modal password change */}

      {/* sign up modal */}
      <Modal
        show={signupModal}
        onHide={() => setsignupModal(false)}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal-common modal-login"
      >
        <Modal.Body>
          <div className="loginmodal-cont position-relative">
            <Button className="close-btn" onClick={() => setsignupModal(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M18.3699 0.0663185C13.7044 0.442104 9.21418 2.52146 5.88406 5.83673C-0.676038 12.3754 -1.89458 22.5885 2.95455 30.4883C5.61698 34.8308 9.93195 38.0458 14.8312 39.3485C16.6005 39.8162 18.0194 39.9999 19.914 39.9999C23.2107 40.0083 25.8314 39.4154 28.8027 37.9707C36.7733 34.1126 41.2468 25.2774 39.6944 16.5091C37.8917 6.37118 28.6274 -0.768764 18.3699 0.0663185ZM23.3359 14.7972L26.6744 11.4568L27.6425 12.4255L28.6024 13.3859L25.2472 16.7095L21.892 20.0331L25.2222 23.3651L28.5523 26.6971L27.6092 27.6324L26.6744 28.576L23.3359 25.2357L19.9974 21.8953L16.684 25.2106L13.3622 28.5342L12.4191 27.599L11.476 26.6637L14.7978 23.34L18.1196 20.0164L14.7978 16.6928L11.4843 13.3775L12.4191 12.4339L13.3622 11.4986L16.6757 14.8139L19.9974 18.1375L23.3359 14.7972Z"
                  fill="#F16724"
                />
              </svg>
            </Button>
            <Row>
              <Col lg={6} md={12} sm={12} className="order-one">
                <div className="login-right-cont sign-up-left">
                  <div className="login-head text-center">
                    <img src={Tab?.logo?.link} alt="" style={{ width: "25%" }} className="img-fluid" />
                  </div>

                  <Form className="form-common sign-up" onSubmit={signupSubmit}>
                    <FormGroup className="position-relative">
                      <Label for="exampleEmail">Name</Label>
                      <Input
                        type="text"
                        name="name"
                        id="exampleEmail"
                        onChange={signupChange}
                      />
                      <div className="name-icon">
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
                      </div>
                    </FormGroup>

                    <FormGroup className="position-relative">
                      <Label for="exampleEmail">Email</Label>
                      <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        onChange={signupChange}
                      />
                      <span className="note error_note py-2 m-0 text-danger">
                        {errors.email}
                      </span>
                      <div className="name-icon">
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
                      </div>
                    </FormGroup>
                    <FormGroup className="position-relative">
                      <Label for="exampleEmail">Password</Label>

                      <Input
                        type={showw == false ? "password" : "text"}
                        name="password"
                        id="exampleEmail"
                        placeholder="Set New Password"
                        onChange={signupChange}
                        className="password-input"
                      />
                      <span className="note error_note py-2 m-0 text-danger">
                        {errors.password}
                      </span>
                      <div className="name-icon">
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
                      <div className="eye-sig">
                        <a onClick={() => setShoww(!showw)}>
                          <img
                            src={
                              showw == false
                                ? "svg/eye-close.svg"
                                : "svg/eye-open.svg"
                            }
                            alt=""
                            className="img-fluid"
                          />
                        </a>
                      </div>
                    </FormGroup>

                    <FormGroup className="position-relative">
                      <Label for="exampleEmail">Enter Your Mobile NUmber</Label>
                      <div className="wrap-div">
                        <SearchSelectInput
                          placeholder="CC"
                          name={"countryCode"}
                          value={signUser.countryCode}
                          onChange={signupChange}
                          // errors={fields.errors}
                          data={COUNTRY_OPTIONS}
                          type="number"
                          className="under-wrap"
                          required
                        />
                        {/* <Input
                          type="select"
                          name="countryCode"
                          id="exampleSelect"
                          onChange={signupChange}
                          data={COUNTRIES}
                          required
                        >
                          {countries.map((coun) => {
                            return (
                              <option value={coun?.dial_code} defaultValue={+1}>
                                {coun?.dial_code}
                                {coun?.code}
                              </option>
                            );
                          })}
                        </Input> */}
                        <Input
                          type="tel"
                          name="mobileNumber"
                          id="exampleEmail"
                          placeholder=""
                          onChange={signupChange}
                          className="flag-input"
                        />
                      </div>
                      {/* <div className="name-icon">
                        <img
                          src="images/flag.png"
                          alt=""
                          className="flag img-fluid"
                        />
                        +1
                      </div> */}
                    </FormGroup>

                    <FormGroup className="position-relative">
                      <Label for="exampleEmail">ADDRESS</Label>
                      <GooglePlacesAutocomplete
                        apiKey={"AIzaSyCxT0bWYVtnIjEp6H1HKhKxMbNfFtwJJGI"}
                        selectProps={{
                          id: "formGroupExampleInput",
                          classNamePrefix: "select2-selection",
                          placeholder: "Address",
                          onChange: (e) => handleLocation(e),
                          noOptionsMessage: () => "No address found",
                        }}
                      />
                      {/* <Input
                        type="text"
                        name="address"
                        id="exampleEmail"
                        onChange={signupChange}
                      /> */}
                      {/* <div className="name-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="28"
                          height="28"
                          viewBox="0 0 28 28"
                          fill="none"
                        >
                          <path
                            d="M14 15.75C13.1347 15.75 12.2888 15.4934 11.5694 15.0127C10.8499 14.532 10.2892 13.8487 9.95803 13.0492C9.6269 12.2498 9.54026 11.3701 9.70907 10.5215C9.87788 9.67282 10.2946 8.89327 10.9064 8.28141C11.5183 7.66956 12.2978 7.25288 13.1465 7.08407C13.9951 6.91526 14.8748 7.0019 15.6742 7.33303C16.4737 7.66416 17.157 8.22492 17.6377 8.94438C18.1184 9.66385 18.375 10.5097 18.375 11.375C18.3736 12.5349 17.9122 13.6469 17.0921 14.4671C16.2719 15.2872 15.1599 15.7486 14 15.75ZM14 8.75C13.4808 8.75 12.9733 8.90396 12.5416 9.19239C12.11 9.48083 11.7735 9.8908 11.5748 10.3705C11.3761 10.8501 11.3242 11.3779 11.4254 11.8871C11.5267 12.3963 11.7767 12.864 12.1438 13.2312C12.511 13.5983 12.9787 13.8483 13.4879 13.9496C13.9971 14.0509 14.5249 13.9989 15.0045 13.8002C15.4842 13.6015 15.8942 13.2651 16.1826 12.8334C16.4711 12.4017 16.625 11.8942 16.625 11.375C16.6243 10.679 16.3475 10.0117 15.8554 9.51961C15.3633 9.02748 14.696 8.7507 14 8.75Z"
                            fill="#2E3E5C"
                          />
                          <path
                            d="M14 26.25L6.61851 17.5446C6.51594 17.4139 6.41444 17.2824 6.31401 17.15C5.05312 15.4891 4.37195 13.4603 4.37501 11.375C4.37501 8.82229 5.38907 6.37414 7.19411 4.5691C8.99915 2.76406 11.4473 1.75 14 1.75C16.5527 1.75 19.0009 2.76406 20.8059 4.5691C22.611 6.37414 23.625 8.82229 23.625 11.375C23.6281 13.4594 22.9472 15.4872 21.6869 17.1474L21.686 17.15C21.686 17.15 21.4235 17.4948 21.3841 17.5411L14 26.25ZM7.71051 16.0956C7.71226 16.0956 7.91526 16.3651 7.96164 16.4229L14 23.5445L20.0463 16.4132C20.0848 16.3651 20.2895 16.0939 20.2904 16.093C21.3204 14.736 21.877 13.0787 21.875 11.375C21.875 9.28642 21.0453 7.28338 19.5685 5.80653C18.0916 4.32968 16.0886 3.5 14 3.5C11.9114 3.5 9.90839 4.32968 8.43154 5.80653C6.9547 7.28338 6.12501 9.28642 6.12501 11.375C6.12317 13.0797 6.68044 14.738 7.71138 16.0956H7.71051Z"
                            fill="#2E3E5C"
                          />
                        </svg>
                      </div> */}
                    </FormGroup>

                    <Button className="btn-login" type="submit">
                      Sign Up
                    </Button>

                    <p className="have-account">
                      Already have an account?
                      <a
                        href="javascript:void(0)"
                        onClick={() => {
                          setLoginModal(!LogModal);
                          setTimeout(() => {
                            setsignupModal(!signupModal);
                          }, 400);
                        }}
                      >
                        Login
                      </a>
                    </p>
                  </Form>
                </div>
              </Col>
              <Col lg={6} md={12} sm={12} className="order-two">
                <div className="login-left-img">
                  <img
                    src="images/loginright.png"
                    alt=""
                    className="loginright"
                  />
                </div>
              </Col>
            </Row>
          </div>
        </Modal.Body>
      </Modal>
      {/* sign up modal */}

      <div className="mx-3 mx-md-4">
        <div className="header-section">
          <div className="logo-here">
            <img
              src={Tab?.logo?.link}
              alt="logo"
              className="logo"
              style={{ width: "10%" }}
              onClick={() => navigate("/")}
            />
            <div
              className="user-login"
              style={{
                gap: _isAuth === true ? "60px" : "5px",
              }}
            >
              {_isAuth == true && (
                <div className="wallet-button position-relative">
                  <a href="/dashboard/wallet">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#F16724"
                        d="M19 7h-1V6a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3ZM5 5h10a1 1 0 0 1 1 1v1H5a1 1 0 0 1 0-2Zm15 10h-1a1 1 0 0 1 0-2h1Zm0-4h-1a3 3 0 0 0 0 6h1v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8.83A3 3 0 0 0 5 9h14a1 1 0 0 1 1 1Z"
                      ></path>
                    </svg>
                  </a>
                  <div className="wallet-balance">
                    Rs {walletBal ? walletBal : 0}
                  </div>
                </div>
              )}

              {_isAuth == true && (
                <div
                  // onClick={handleCreateDiv}
                  className="cartsvg position-relative"
                >
                  <a style={{ "cursor": "pointer" }} onClick={handleShow}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#F16724"
                        d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0 0 20.01 4H5.21l-.94-2H1v2h2l3.6 7.59l-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2z"
                      ></path>
                    </svg>
                  </a>
                  <Offcanvas
                    className="CartSidebar"
                    show={show}
                    backdrop={false}
                    onHide={handleClose}
                    placement={"end"}
                    scroll
                  >
                    <Offcanvas.Header closeButton>
                      <Offcanvas.Title>
                        Your Cart
                        <p className="text-muted m-0">{cartcount || 0} items</p>
                      </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className="d-flex flex-column justify-content-between">
                      <ul className="list-unstyled ps-0 mb-0 OrderList w-100">
                        {cartdata?.length > 0 &&
                          cartdata?.map((data, index) => {
                            console.log(data, "cartdata11111111111");
                            return (
                              <>
                                <li
                                  key={index}
                                  className="py-2 d-flex align-items-center justify-content-between gap-10 "
                                >
                                  <div className="d-flex align-items-start left">
                                    <span className="icn me-1">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                      >
                                        <path
                                          d="M18 2V18H2V2H18ZM20 0H0V20H20V0ZM10 4C6.69 4 4 6.69 4 10C4 13.31 6.69 16 10 16C13.31 16 16 13.31 16 10C16 6.69 13.31 4 10 4Z"
                                          fill="#4C8A0D"
                                        />
                                      </svg>
                                    </span>
                                    <div className="content">
                                      <p className="m-0 fw-sbold">
                                        {data?.name}
                                      </p>
                                      <p className="m-0">Rs {data?.price} </p>
                                    </div>
                                  </div>
                                  <div className="right">
                                    <button className="border-0 p-0 bg-transparent"
                                      onClick={(e) =>
                                        setShowOptions({ item: data, quantity: data?.quantity, addonsItems: data?.addons || [], customizeItems: data?.variations || [], cartId: data._id })}
                                    >
                                      <MdEdit
                                        className="cart-item-trash-icon text-danger"
                                      />
                                    </button>
                                  </div>
                                  <div className="right">
                                    <button className="border-0 p-0 bg-transparent">
                                      <HiOutlineTrash
                                        className="cart-item-trash-icon text-danger"
                                        onClick={() =>
                                          removeCartItem(data?._id)
                                        }
                                      />
                                    </button>
                                  </div>
                                  <div className="right price-part">
                                    <div
                                      className={
                                        "food-item-quantity-input gap-10"
                                      }
                                    >
                                      <MdRemove
                                        className="food-item-quantity-icon"
                                        onClick={() => {
                                          handleQuantity(
                                            data?._id,
                                            data?.quantity > 1
                                              ? data?.quantity - 1
                                              : 1
                                          )
                                        }
                                        }
                                      />
                                      {data?.quantity}
                                      <MdAdd
                                        className="food-item-quantity-icon"
                                        onClick={() => {
                                          handleQuantity(
                                            data?._id,
                                            data?.quantity < 10
                                              ? data?.quantity + 1
                                              : data?.quantity
                                          )
                                        }
                                        }
                                      />
                                    </div>
                                  </div>
                                </li>
                              </>
                            );
                          })}
                        {!cartdata?.length && (
                          <p className="text-center">
                            <span className="d-flex align-items-center justify-content-center mb-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                              >
                                <path
                                  d="M6 7C6.55228 7 7 6.55228 7 6C7 5.44772 6.55228 5 6 5C5.44772 5 5 5.44772 5 6C5 6.55228 5.44772 7 6 7Z"
                                  fill="black"
                                />
                                <path
                                  d="M10 7C10.5523 7 11 6.55228 11 6C11 5.44772 10.5523 5 10 5C9.44772 5 9 5.44772 9 6C9 6.55228 9.44772 7 10 7Z"
                                  fill="black"
                                />
                                <path
                                  d="M8 15C4.14 15 1 11.86 1 8C1 4.14 4.14 1 8 1C11.86 1 15 4.14 15 8C15 11.86 11.86 15 8 15ZM8 2C4.69 2 2 4.69 2 8C2 11.31 4.69 14 8 14C11.31 14 14 11.31 14 8C14 4.69 11.31 2 8 2Z"
                                  fill="black"
                                />
                                <path
                                  d="M10.83 11.5C10.62 11.5 10.43 11.37 10.36 11.17C10.188 10.6814 9.8686 10.2583 9.44588 9.95898C9.02317 9.65966 8.51797 9.49891 8.00001 9.49891C7.48205 9.49891 6.97686 9.65966 6.55414 9.95898C6.13143 10.2583 5.81202 10.6814 5.64001 11.17C5.55001 11.43 5.26001 11.57 5.00001 11.47C4.93774 11.4485 4.88042 11.4146 4.83144 11.3706C4.78246 11.3265 4.74282 11.273 4.71485 11.2134C4.68688 11.1537 4.67116 11.089 4.66861 11.0232C4.66606 10.9573 4.67674 10.8916 4.70001 10.83C5.19001 9.43 6.52001 8.5 8.00001 8.5C9.48001 8.5 10.81 9.44 11.3 10.83C11.3271 10.9055 11.3356 10.9864 11.3249 11.0658C11.3142 11.1453 11.2846 11.2211 11.2385 11.2867C11.1925 11.3524 11.1313 11.406 11.0602 11.4431C10.9892 11.4802 10.9102 11.4997 10.83 11.5Z"
                                  fill="black"
                                />
                              </svg>
                            </span>
                            Your cart is Empty. Please add item into cart to
                            proceed on checkout.
                          </p>
                        )}
                      </ul>

                      <div className="btn-wrp w-100 mt-3 custom-vk">
                        <button
                          onClick={() => {
                            navigate("/secure-checkout")
                            setShow(false);
                          }
                          }
                          className="btn w-100 d-flex align-items-center justify-content-center rounded-pill theme-btn gap-10 common-btn"
                        >
                          Place Order . Rs {totalcartPrice || 0}
                        </button>
                      </div>
                    </Offcanvas.Body>
                  </Offcanvas>
                  <div className="countdiv">
                    <p>{cartcount == null ? 0 : cartcount}</p>
                  </div>
                </div>
              )}
              {/* <div className="search-col">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="31"
                  viewBox="0 0 33 31"
                  fill="none"
                >
                  <path
                    d="M22.7901 23.0664L23.0932 23.3512L30.5056 30.314L32.2697 28.6569L24.9029 21.737L24.5596 21.4145L24.8611 21.0526C26.7181 18.8229 27.724 16.0783 27.7247 13.2564L22.7901 23.0664ZM22.7901 23.0664L22.4549 23.3127M22.7901 23.0664L22.4549 23.3127M22.4549 23.3127C20.0763 25.0599 17.1397 26.0121 14.1124 26.0127L22.4549 23.3127ZM14.1123 26.0127C6.57732 26.0127 0.5 20.2604 0.5 13.2564C0.5 6.25229 6.57737 0.5 14.1124 0.5C21.6473 0.5 27.7247 6.25222 27.7247 13.2562L14.1123 26.0127ZM25.1966 13.2564C25.1966 7.46804 20.1958 2.81409 14.1124 2.81409C8.02893 2.81409 3.02809 7.46804 3.02809 13.2564C3.02809 19.0447 8.02893 23.6986 14.1124 23.6986C20.1958 23.6986 25.1966 19.0447 25.1966 13.2564Z"
                    stroke="#F16724"
                  />
                </svg>
              </div> */}
              {_isAuth == false && (
                <div className="">
                  <Button className="d-flex align-items-center dddd justify-content-center rounded-pill border-0" style={{ padding: "6px 16px 6px 16px", fontSize: "16px", color: "white", backgroundColor: "rgb(241, 103, 36)" }} onClick={() => setLoginModal(true)}>
                    User Login
                  </Button>
                </div>
              )}

              {_isAuth == false && (
                <div className="">
                  <Link className="d-flex align-items-center dddd justify-content-center rounded-pill border-0" style={{ padding: "6px 16px 6px 16px", fontSize: "16px", color: "white", backgroundColor: "rgb(241, 103, 36)" }}
                    to="http://localhost:3001/login">
                    Vendor Login
                  </Link>
                </div>
              )}
              {_isAuth == false && (
                <div className="">
                  <Link className="d-flex align-items-center dddd justify-content-center rounded-pill border-0" style={{ padding: "6px 16px 6px 16px", fontSize: "16px", color: "white", backgroundColor: "rgb(241, 103, 36)" }}
                    to="http://localhost:3001/login">
                    Restaurant Login
                  </Link>
                </div>
              )}

              {/* {_isAuth == false && (
                <div className="">
                  <Button onClick={() => setLoginModal(true)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#F16724"
                        d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2M7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.5.88 4.93 1.78A7.893 7.893 0 0 1 12 20c-1.86 0-3.57-.64-4.93-1.72m11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33A7.928 7.928 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.5-1.64 4.83M12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6m0 5a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 12 8a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 12 11Z"
                      ></path>
                    </svg>
                  </Button>
                </div>
              )} */}
              {_isAuth == true && (
                <div class="">
                  <UncontrolledDropdown>
                    <DropdownToggle>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="35"
                        height="35"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#F16724"
                          d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2M7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.5.88 4.93 1.78A7.893 7.893 0 0 1 12 20c-1.86 0-3.57-.64-4.93-1.72m11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33A7.928 7.928 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.5-1.64 4.83M12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6m0 5a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 12 8a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 12 11Z"
                        ></path>
                      </svg>
                    </DropdownToggle>
                    <DropdownMenu>
                      <a href="/dashboard">Dashboard</a>
                      {/* <DropdownItem></DropdownItem> */}
                      <DropdownItem onClick={logoutSubmit}>Logout</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </div>
              )}
            </div>
          </div>
          <div className="header-center">
            <Form>
              {/* <div className="header-dropdoen">
                <UncontrolledDropdown>
                  <DropdownToggle caret>Home Delivery</DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>Home Delivery</DropdownItem>
                    <DropdownItem>Home Delivery</DropdownItem>
                    <DropdownItem>Home Delivery</DropdownItem>
                    <DropdownItem>Home Delivery</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div> */}
              <div className="location-here">
                <FormGroup className="position-relative">
                  {/* <Input
                    type="text"
                    name="text"
                    id="adreess"
                    placeholder=""
                    value={addressvalue.label}
                  /> */}
                  <GooglePlacesAutocomplete
                    apiKey={"AIzaSyAe8v7VVTeBjtYVf6vmd04P1kGaYKyzt2k"}
                    selectProps={{
                      // isClearable: true,
                      id: "formGroupExampleInput",
                      classNamePrefix: "select2-selection",
                      placeholder:
                        locationFound === null
                          ? "Locating..."
                          : altitude?.address !== ""
                            ? altitude?.address
                            : "Kindly enable location access...",
                      onChange: (e) => handleLatLng(e),

                      noOptionsMessage: () => "No address found",
                    }}
                  />
                  {/* <button onClick={handleClearLocation}>clear</button> */}
                  <div className="adress-icon-here">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 21 21"
                      fill="none"
                    >
                      <path
                        d="M10.5359 14.7513C12.8636 14.7513 14.7506 12.8643 14.7506 10.5367C14.7506 8.20898 12.8636 6.32202 10.5359 6.32202C8.20824 6.32202 6.32129 8.20898 6.32129 10.5367C6.32129 12.8643 8.20824 14.7513 10.5359 14.7513Z"
                        fill="#F16724"
                      />
                      <path
                        d="M11.5902 2.18002V0H9.48292V2.18002C7.6288 2.41676 5.90572 3.26231 4.58401 4.58401C3.26231 5.90572 2.41676 7.6288 2.18002 9.48292H0V11.5902H2.18002C2.41641 13.4445 3.26185 15.1678 4.58362 16.4895C5.90539 17.8113 7.62866 18.6567 9.48292 18.8931V21.0732H11.5902V18.8931C13.4446 18.6569 15.1679 17.8115 16.4897 16.4897C17.8115 15.1679 18.6569 13.4446 18.8931 11.5902H21.0732V9.48292H18.8931C18.6567 7.62866 17.8113 5.90539 16.4895 4.58362C15.1678 3.26185 13.4445 2.41641 11.5902 2.18002ZM10.5366 16.8585C7.05002 16.8585 4.21463 14.0231 4.21463 10.5366C4.21463 7.05002 7.05002 4.21463 10.5366 4.21463C14.0231 4.21463 16.8585 7.05002 16.8585 10.5366C16.8585 14.0231 14.0231 16.8585 10.5366 16.8585Z"
                        fill="#F16724"
                      />
                    </svg>
                  </div>
                </FormGroup>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </section >
  );
}
