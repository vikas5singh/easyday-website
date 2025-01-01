import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  Collapse,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { Form, FormGroup, Label, Input, FormText } from "reactstrap";
import CoupanModal from "./CoupanModal";
import AddressModal from "./AddressModal";
import PaymentModal from "./PaymentModal";
import { useNavigate } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Select from "react-select"; // Import Bootstrap styles
import { useDispatch, useSelector } from "react-redux";
import moment from "moment"
import "bootstrap/dist/css/bootstrap.min.css";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import {
  userCart,
  userCartRemove,
  savedata,
  getAddress,
  driverList,
  addOrder,
  cartDetail,
} from "../../Redux/actions";
import DriverModal from "./DriverModal";
import { HiOutlineTrash } from "react-icons/hi";
import { toast } from "react-toastify";

export default function Securecheckout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(0);
  const [modalShow, setModalShow] = useState(false);
  const [modalShow2, setModalShow2] = useState(false);
  const [modalShow3, setModalShow3] = useState(false);
  const [modalShow4, setModalShow4] = useState(false);
  const [data, setData] = useState({ itemId: [], restaurantId: "" });
  const [state, setState] = useState({ cartData: {}, cartItem: [] });
  const [pay, setpay] = useState({
    paymentMethod: "",
    promocode: "none",
    addressId: "",
    driverId: "",
    driverName: "",
    serviceType: "DELIVERY",
    orderType: "store",
    cartItemsIds: [],
    paymentSourceRefNo: "",
    tip: "no",
    tipAmount: "0",
    timezone: "",
    restaurantId: "",
    deliveryFee: 0,
    scheduledDate: "",
    scheduledTime: "",
    tipType: "flat",
  });
  const [cartKey, setCartKey] = useState(() => {
    return localStorage.getItem('cartKey') || null;
  });
  const [cartInfo, setCartInfo] = useState(() => {
    const storedData = localStorage.getItem('cartInfo');
    return storedData ? JSON.parse(storedData) : {};
  });
  console.log("Pay", pay);

  const handleTipDelete = () => {
    setpay((pre) => ({
      ...pre,
      tipAmount: "0",
    }));
  };
  const increase = () => {
    setCounter((count) => count + 1);
  };

  const decrease = () => {
    setCounter((count) => count - 1);
  };

  const reset = () => {
    setCounter(0);
  };
  const options = [
    { value: "11:00-11:30", label: "11:00 AM To 11:30 AM" },
    { value: "11:30-12:00", label: "11:30 AM To 12:00 PM" },
    { value: "12:00-12:30", label: "12:00 PM To 12:30 PM" },
    { value: "12:30-13:00", label: "01:00 PM To 01:30 PM" },
    { value: "13:30-14:00", label: "01:30 PM To 02:00 PM" },
    { value: "14:00-14:30", label: "02:00 PM To 02:30 PM" },
    { value: "14:30-15:00", label: "02:30 PM To 03:00 PM" },
    { value: "15:00-15:30", label: "03:00 PM To 03:30 PM" },
    { value: "15:30-16:00", label: "03:30 PM To 04:00 PM" },
    { value: "16:00-16:30", label: "04:00 PM To 04:30 PM" },
    { value: "16:30-17:00", label: "04:30 AM To 05:00 PM" },
    { value: "17:00-17:30", label: "05:00 PM To 05:30 PM" },
    { value: "17:30-18:00", label: "05:30 PM To 06:00 PM" },
    { value: "18:30-18:30", label: "06:00 PM To 06:30 PM" },
    { value: "18:30-19:00", label: "06:30 PM To 07:00 PM" },
    { value: "19:00-19:30", label: "07:00 PM To 07:30 PM" },
    { value: "19:30-20:00", label: "07:30 PM To 08:00 PM" },
    { value: "20:00-20:30", label: "08:00 PM To 08:30 PM" },
    { value: "20:30-21:00", label: "08:30 PM To 09:00 PM" },
    { value: "21:00-21:30", label: "09:00 PM To 09:30 PM" },
    { value: "21:30-22:00", label: "09:30 PM To 10:00 PM" },
    { value: "22:00-22:30", label: "10:00 PM To 10:30 PM" },
    { value: "22:30-23:00", label: "10:30 PM To 11:00 PM" },
    { value: "23:00-23:30", label: "11:00 PM To 11:30 PM" },
    { value: "23:30-12:00", label: "11:30 PM To 12:00 AM" },
  ];
  const ItemID = useSelector((s) => s.address?.savedData);
  useEffect(() => {
    localStorage.setItem("userCart", ItemID ? ItemID.length : 0);
  }, [ItemID]);


  const RestID = useSelector((s) => s.address?.usercart?.data[0]?.restaurantId);
  const cartList = useSelector((s) => s.address.usercart);
  const driverlist = useSelector((s) => s.address.drivers);
  const delAddress = useSelector((s) => s.address.address);
  const payList = useSelector((s) => s.address.paymentList);
  const savedData = useSelector((s) => s.address.savedData);
  const cartDetailData = useSelector((s) => s.address.cartDetail)
  const timeZone = Intl.DateTimeFormat().resolvedOptions();

  useEffect(() => {
    setpay((pre) => ({ ...pre, timezone: timeZone.timeZone }));
  }, []);

  const handleChange = (e) => {
    // e.preventDefault();
    const { name, value } = e.target;
    setpay((pre) => ({
      ...pre,
      [name]: value,
    }));
    // {
    //   name.tipAmount === "0"
    //     ? setpay((pre) => ({ ...pre, tip: "no" }))
    //     : setpay((pre) => ({ ...pre, tip: "yes" }));
    // }
  };

  const feeChange = (e, driver) => {
    // const { name, value } = e.target;
    setpay((pre) => ({
      ...pre,
      deliveryFee: driver?.deliveryFee,
      // driverId: driver._id,
      // driverName: driver.name,
    }));
  };

  const handlePay = (e, type, Id, payid) => {
    const { name, value } = e.target;
    {
      type == "stripe"
        ? setpay((pre) => ({ ...pre, paymentMethod: "stripe" }))
        : setpay((pre) => ({ ...pre, paymentMethod: type }));
    }
    {
      type == "stripe"
        ? setpay((pre) => ({ ...pre, paymentSourceRefNo: payid }))
        : setpay((pre) => ({ ...pre, paymentSourceRefNo: type }));
    }
  };
  let cartDetails = {};
  if ((state?.cartData?.data?.[0]?.addons || [])?.length > 0) {
    cartDetails = {
      "storeTypeId": cartInfo?.storeTypeId,
      "items": (state?.cartData?.data || [])?.map((ele) => {
        return {
          "itemId": ele?.product,
          "quantity": ele?.quantity,
          "addons": ele?.addons?.[0]?.options,
        }
      }),
      "addressId": pay?.addressId,
      "coupon": pay?.promocode?.code,
      "vendor": cartInfo?.vendorId,
      "tip": pay?.tipAmount,
      "deliveryType": pay?.serviceType,
      "pointsToRedeem": "",
      "isLoyaltyPointsUsed": false
    }
  } else {
    cartDetails = {
      "storeTypeId": cartInfo?.storeTypeId,
      "items": (state?.cartData?.data || [])?.map((ele) => {
        return {
          "itemId": ele?.product,
          "quantity": ele?.quantity,
          "variation_id": ele?.variations?.[0]?._id,
          "variation_title": "1",
          "attributes": ele?.variations?.[0]?.attributes
        }
      }),
      "addressId": pay?.addressId,
      "coupon": pay?.promocode?.code,
      "vendor": cartInfo?.vendorId,
      "tip": pay?.tipAmount,
      "deliveryType": pay?.serviceType,
      "pointsToRedeem": "",
      "isLoyaltyPointsUsed": false
    }
  }
  const totalcartPrice = (state?.cartData?.data || [])?.length > 0 && (state?.cartData?.data || [])?.reduce(
    (acc, item) => acc + (Number(item?.lineTotal || 0)),
    0 // Initial value for the accumulator
  );
  useEffect(() => {
    dispatch(cartDetail(cartDetails))
  }, [pay.serviceType, pay?.addressId, pay?.promocode?.code, pay?.tipAmount, totalcartPrice]);

  console.log("cartDetailData", state?.cartData?.data, cartDetailData,);
  const handleSubmit = (e, type) => {
    e.preventDefault();
    const callBack = (ID) => {
      localStorage.removeItem('cartKey');
      navigate(`/track-order/${ID}`);
    };
    const orderdata = {
      ...cartDetails,
      payment_method: pay.paymentMethod.toLowerCase(),
      scheduledType: 'now',
      paymentSourceRef: pay.paymentSourceRefNo.toLowerCase(),
      deliveryType: pay?.serviceType,
      isDriectPayment: false,
      isLoyaltyPointsUsed: false,
    };
    const scheduledata = {
      ...cartDetails,
      scheduledType: "scheduled",
      scheduledDate: pay?.scheduledDate,
      scheduledTime: pay.scheduledTime,
      payment_method: pay.paymentMethod.toLowerCase(),
      paymentSourceRef: pay.paymentSourceRefNo.toLowerCase(),
      deliveryType: pay?.serviceType,
      isDriectPayment: false,
      isLoyaltyPointsUsed: false,
    };

    dispatch(
      addOrder(type == "scheduled" ? scheduledata : orderdata, callBack)
    );
  };

  function removeCartItem({ itemId }, type) {
    console.log("type", type);
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

  useEffect(() => {
    setState((pre) => ({
      ...pre,
      cartData: cartList,
      cartItem: cartList?.data,
    }));
    setpay((pre) => ({
      ...pre,
      cartItemsIds: Array.isArray(cartList?.data)
        ? cartList?.data?.map((item) => item._id)
        : [],
    }));
  }, [cartList]);

  useEffect(() => {
    setData((pre) => ({
      //...pre,
      itemId: ItemID,
      restaurantId: RestID,
    }));
    setpay((pre) => ({
      ...pre,
      restaurantId: RestID,
    }));
  }, [ItemID]);

  useEffect(() => {
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
    dispatch(getAddress());
  }, []);

  // useEffect(() => {
  //   dispatch(
  //     driverList({ restaurantId: data?.restaurantId, addressId: pay.addressId })
  //   );
  // }, [pay.addressId]);

  const [showSchedule, setSchedule] = useState(false);

  const handleSchedule = () => setSchedule(!showSchedule);
  const [optionsValue, SetoptionsValue] = useState({});

  const handleOptions = (e) => {
    console.log("e?.value?", e.target?.value)
    const momentObj = moment(e.target?.value);

    // Extract date and time in desired format
    const scheduledDate = momentObj.format('YYYY-MM-DD'); // Extracted date
    const scheduledTime = momentObj.format('HH:mm');
    // SetoptionsValue(data);
    setpay((pre) => ({
      ...pre,
      scheduledDate: scheduledDate,
      scheduledTime: scheduledTime,
    }));
  };

  console.log("state.cartItem", state.cartData);

  const renderTooltipContent = (item) => (
    <>
      <div className="addOnList ">
        <p className="m-0 fw-bold text-muted">Add on :</p>
        {(item?.variations || [])?.length > 0 &&
          (item?.variations || [])?.map((itm, idx) => (
            <ul
              key={idx}
              className="list-unstyled ps-0 mb-0 d-flex align-items-center flex-wrap"
            >
              <li className="pe-1">
                <span className="text-dark">
                  <span className="fw-bold">{itm?.name}</span> $ {itm?.price}
                </span>
              </li>
            </ul>
          ))}
      </div>

      <div className="addOnList ">
        {item?.addons &&
          (item?.addons || [])?.map((itm, idx) => {
            return (
              <div>
                <p className="m-0 fw-bold text-muted">{itm?.name}</p>
                {(itm?.options || [])?.map((cus, index) => {
                  return (
                    <ul
                      key={idx + "" + index}
                      className="list-unstyled ps-0 mb-0 d-flex align-items-center flex-wrap"
                    >
                      <li className="pe-1">
                        <span className="text-dark">
                          <span className="fw-bold">{cus?.name}</span> ${" "}
                          {cus?.price}
                        </span>
                      </li>
                    </ul>
                  );
                })}
              </div>
            );
          })}
        {/* {item.customise &&
          item?.customise?.options?.map((itm, idx) => (
            <ul
              key={idx}
              className="list-unstyled ps-0 mb-0 d-flex align-items-center flex-wrap"
            >
              <li className="pe-1">
                <span className="text-dark">
                  <span className="fw-bold">{itm?.name}</span> $ {itm?.price}
                </span>
              </li>
            </ul>
          ))} */}
      </div>
    </>
  );
  return (
    <>
      <section
        className="bannerSec position-relative py-"
        style={{
          backgroundImage: `url("../images/banner.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container className="">
          <Row>
            <Col lg="12" className="my-2">
              <div className="secure-head text-center">
                <h2 className="text-white m-0 py-2 text-uppercase fw-bold">
                  Secure Checkout
                </h2>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="secure-checkout pt-5">
        <CoupanModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          state={pay}
          change={handleChange}
        />

        <DriverModal
          show={modalShow4}
          onHide={() => setModalShow4(false)}
          state={pay}
          list={driverlist}
          change={feeChange}
        />

        <AddressModal show={modalShow2} onHide={() => setModalShow2(false)} />

        <PaymentModal
          show={modalShow3}
          onHide={() => setModalShow3(false)}
          change={handlePay}
          state={pay}
        />

        <Container>
          {/* <div className="secure-head text-center">
            <h2>Secure Checkout</h2>
          </div> */}

          <div className="main-checkout-box">
            <Row>
              <Col lg={6} md={6} sm={12}>
                <Fade>
                  <table className="table w-100 orderDetailwrp">
                    <thead>
                      <tr>
                        <th>Order Details</th>
                        <th>QTY</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {(state.cartItem &&
                        state.cartItem?.length > 0 &&
                        state.cartItem?.map((item, index) => {
                          return (
                            <tr>
                              <td>
                                <div className="orderDetail d-flex align-items-start justify-content-between gap-10">
                                  <div className="d-flex align-items-start gap-10">
                                    <div className="imgWrp">
                                      <img
                                        src={
                                          item?.productImage ||
                                          item?.productImage
                                        }
                                        alt=""
                                        className="img-fluid"
                                      />
                                    </div>
                                    <div className="content">
                                      <h6 className="m-0 fw-sbold text-capitalize">
                                        {item.name}
                                      </h6>
                                      <div>
                                        <OverlayTrigger
                                          className="cstmToolTip"
                                          placement="bottom"
                                          overlay={
                                            <Tooltip className="custom-tooltip in">
                                              {renderTooltipContent(item)}
                                            </Tooltip>
                                          }
                                        >
                                          <Button
                                            variant="transparent"
                                            className="border-0 p-0"
                                            style={{ fontSize: "10px" }}
                                          >
                                            Addons{" "}
                                            <span className="icn">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="15"
                                                height="15"
                                                viewBox="0 0 15 15"
                                                fill="none"
                                              >
                                                <path
                                                  d="M7.5 1.40625C6.29477 1.40625 5.11661 1.76364 4.1145 2.43323C3.11238 3.10282 2.33133 4.05454 1.87011 5.16802C1.40889 6.28151 1.28821 7.50676 1.52334 8.68883C1.75847 9.8709 2.33884 10.9567 3.19107 11.8089C4.0433 12.6612 5.1291 13.2415 6.31117 13.4767C7.49324 13.7118 8.71849 13.5911 9.83198 13.1299C10.9455 12.6687 11.8972 11.8876 12.5668 10.8855C13.2364 9.88339 13.5938 8.70523 13.5938 7.5C13.592 5.88436 12.9495 4.33538 11.8071 3.19295C10.6646 2.05052 9.11564 1.40796 7.5 1.40625ZM7.5 12.6562C6.48019 12.6562 5.48328 12.3538 4.63534 11.7873C3.7874 11.2207 3.12651 10.4154 2.73625 9.47321C2.34598 8.53103 2.24387 7.49428 2.44283 6.49407C2.64178 5.49385 3.13287 4.5751 3.85398 3.85398C4.5751 3.13287 5.49385 2.64178 6.49407 2.44283C7.49428 2.24387 8.53103 2.34598 9.47321 2.73625C10.4154 3.12651 11.2207 3.7874 11.7873 4.63534C12.3538 5.48328 12.6563 6.48019 12.6563 7.5C12.6547 8.86705 12.111 10.1777 11.1443 11.1443C10.1777 12.111 8.86705 12.6547 7.5 12.6562ZM8.4375 10.3125C8.4375 10.4368 8.38812 10.556 8.30021 10.644C8.2123 10.7319 8.09307 10.7812 7.96875 10.7812C7.72011 10.7812 7.48166 10.6825 7.30584 10.5067C7.13002 10.3308 7.03125 10.0924 7.03125 9.84375V7.5C6.90693 7.5 6.7877 7.45061 6.6998 7.36271C6.61189 7.2748 6.5625 7.15557 6.5625 7.03125C6.5625 6.90693 6.61189 6.7877 6.6998 6.69979C6.7877 6.61189 6.90693 6.5625 7.03125 6.5625C7.27989 6.5625 7.51835 6.66127 7.69417 6.83709C7.86998 7.0129 7.96875 7.25136 7.96875 7.5V9.84375C8.09307 9.84375 8.2123 9.89314 8.30021 9.98104C8.38812 10.069 8.4375 10.1882 8.4375 10.3125ZM6.5625 4.92188C6.5625 4.78281 6.60374 4.64687 6.681 4.53124C6.75826 4.41561 6.86807 4.32549 6.99655 4.27227C7.12503 4.21905 7.26641 4.20513 7.4028 4.23226C7.53919 4.25939 7.66448 4.32636 7.76281 4.42469C7.86115 4.52302 7.92811 4.64831 7.95524 4.7847C7.98237 4.92109 7.96845 5.06247 7.91523 5.19095C7.86201 5.31943 7.77189 5.42924 7.65626 5.5065C7.54063 5.58376 7.40469 5.625 7.26563 5.625C7.07915 5.625 6.9003 5.55092 6.76844 5.41906C6.63658 5.2872 6.5625 5.10836 6.5625 4.92188Z"
                                                  fill="currentColor"
                                                />
                                              </svg>
                                            </span>
                                          </Button>
                                        </OverlayTrigger>
                                      </div>
                                      {/* {item?.addons?.[0]?.name !==
                                        undefined && (
                                        <div className="addOnList mt-2">
                                          <p className="m-0 fw-bold text-muted">
                                            Add on :
                                          </p>
                                          {item.addons &&
                                            item?.addons?.map((itm, idx) => {
                                              return (
                                                <ul className="list-unstyled ps-0 mb-0 d-flex align-items-center flex-wrap">
                                                  <li className="pe-1">
                                                    <span className="text-dark">
                                                      <span className="fw-bold">
                                                        {itm?.name}
                                                      </span>{" "}
                                                      $ {itm?.price}
                                                    </span>
                                                  </li>
                                                </ul>
                                              );
                                            })}
                                        </div>
                                      )} */}
                                    </div>
                                  </div>
                                  <div className="right">
                                    <button className="border-0 p-0 bg-transparent">
                                      <HiOutlineTrash
                                        className="cart-item-trash-icon text-danger"
                                        onClick={() =>
                                          removeCartItem({ itemId: item._id })
                                        }
                                      />
                                    </button>
                                  </div>
                                </div>
                              </td>
                              <td>{item.quantity}</td>
                              <td>Rs {item.lineTotal}</td>
                            </tr>
                          );
                        })) ||
                        "No items Found"}
                    </tbody>
                  </table>
                  <div className="left-order-details">
                    {/* <h5>Order Details</h5>
                    <div className="item-added-lsit">
                      <ul>
                        {(state.cartItem &&
                          state.cartItem?.length > 0 &&
                          state.cartItem?.map((item, index) => {
                            return (
                              <li key={index}>
                                <div className="list-common">
                                  <div className="list-name">
                                    <p className="text-capitalize">
                                      {item.itemName}
                                    </p>
                                    {item.addons &&
                                      item?.addons?.map((itm, idx) => {
                                        return (
                                          <p className="text-capitalize">
                                            {itm.name}
                                          </p>
                                        );
                                      })}
                                  </div>
                                  <div className="d-flex">
                                    <HiOutlineTrash
                                      className="cart-item-trash-icon text-danger"
                                      onClick={() =>
                                        removeCartItem({ itemId: item._id })
                                      }
                                    />
                                  </div>
                                  <div>{item.quantity} X </div>
                                  <div className="added-price">
                                    <p>${item.itemPrice}</p>
                                    {item.addons &&
                                      item?.addons?.map((itm, idx) => {
                                        return <p>${itm.price}</p>;
                                      })}
                                  </div>
                                </div>
                              </li>
                            );
                          })) ||
                          "No items Found"}
                      </ul>
                    </div> */}
                    {/* <a onClick={() => setModalShow4(true)}>
                      <div
                        className={
                          state.cartItem?.length > 0 ? "apply-coupon" : "d-none"
                        }
                      >
                        <p>Choose Delivery Person</p>
                      </div>
                    </a> */}
                    {pay?.driverName ?
                      <div className="bill-list mt-2">
                        <p>Driver Name</p>
                        <p>{pay?.driverName}</p>
                      </div> : ""
                    }
                    <div
                      className={
                        state.cartItem?.length > 0 ? "m-2" : "d-none"
                      }
                    >   <Form>
                        <a
                          href="javascript:void(0)"
                          onClick={() => setModalShow(true)}
                        >
                          <div
                            className={
                              state.cartItem?.length > 0
                                ? "apply-coupon"
                                : "d-none"
                            }
                          >
                            <p className="justify-content-between">
                              <img
                                src="images/discount.png"
                                alt=""
                              />
                              Apply Coupon
                            </p>
                          </div>
                        </a>
                        <FormGroup>
                          {/* <Input
                        type="textarea"
                        name="text"
                        id="textarea"
                        placeholder="Add Special Cooking Instructions"
                      /> */}
                          {/* <div class="user-login new-drop">
                        <UncontrolledDropdown>
                          <DropdownToggle className="text-dark">
                            Select Order Type
                          </DropdownToggle>
                          <DropdownMenu>
                            <DropdownItem
                              onClick={() =>
                                setpay((pre) => ({
                                  ...pre,
                                  serviceType: "delivery",
                                }))
                              }
                            >
                              Delivery
                            </DropdownItem>
                            <DropdownItem
                              onClick={() =>
                                setpay((pre) => ({
                                  ...pre,
                                  serviceType: "pickup",
                                }))
                              }
                            >
                              Pickup
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </div> */}

                          <FormGroup className="new-drop mt-3">
                            <h5>Select Order Type</h5>
                            <Input
                              type="select"
                              name="serviceType"
                              id="exampleSelect"
                              onChange={handleChange}
                            >
                              <option
                                value={"DELIVERY"}
                              // onClick={() =>
                              //   setpay((pre) => ({
                              //     ...pre,
                              //     serviceType: "delivery",
                              //   }))
                              // }
                              >
                                Delivery
                              </option>
                              <option
                                value={"TAKEAWAY"}
                              // onClick={() =>
                              //   setpay((pre) => ({
                              //     ...pre,
                              //     serviceType: "pickup",
                              //   }))
                              // }
                              >
                                Takeway
                              </option>
                            </Input>
                          </FormGroup>
                        </FormGroup>
                      </Form>
                      <div className="add-tip mt-2">
                        <h5>Add Tips</h5>
                        <FormGroup check>
                          {/* <Label check>
                          <Input type="checkbox" /> 20% is Applied on Item Total
                          , or Choose Manually
                        </Label> */}
                        </FormGroup>
                      </div>
                      <div className="input-slect">
                        <div class="radio-toolbar">
                          <input
                            type="radio"
                            id="radioone"
                            name="tipAmount"
                            value={"1"}
                            checked={pay.tipAmount === "1"}
                            onChange={handleChange}
                          />
                          <label for="radioone">Rs 1</label>

                          <input
                            type="radio"
                            id="radiotwo"
                            name="tipAmount"
                            value={"2"}
                            checked={pay.tipAmount === "2"}
                            onChange={handleChange}
                          />
                          <label for="radiotwo">Rs 2</label>

                          <input
                            type="radio"
                            id="radiothree"
                            name="tipAmount"
                            value={"5"}
                            checked={pay.tipAmount === "5"}
                            onChange={handleChange}
                          />
                          <label for="radiothree">Rs 5</label>

                          <input
                            type="radio"
                            id="radiofour"
                            name="tipAmount"
                            value={"10"}
                            checked={pay.tipAmount === "10"}
                            onChange={handleChange}
                          />
                          <label for="radiofour">Rs 10</label>
                        </div>
                      </div>
                    </div>
                    <div
                      className={state.cartItem?.length > 0 ? "" : "d-none"}
                    >
                      <div
                        className={
                          pay.serviceType == "DELIVERY"
                            ? "deleivery-addresses"
                            : "d-none"
                        }
                      >
                        <div className="address-head">
                          <h4>Delivery Address</h4>
                          <a
                            href="javascript:void(0)"
                            onClick={() => setModalShow2(true)}
                          >
                            + Add Address
                          </a>
                        </div>

                        <ul className="mt-3">
                          {delAddress &&
                            delAddress.length > 0 &&
                            delAddress.map((item, index) => {
                              return (
                                <div class="inputGroup" key={index}>
                                  <input
                                    id={`option1${item._id}`}
                                    name="addressId"
                                    type="checkbox"
                                    value={item._id}
                                    checked={pay.addressId.includes(item._id)}
                                    onChange={handleChange}
                                  />
                                  <label for={`option1${item._id}`}>
                                    {/* <img
                                    src="images/discount.png"
                                    alt=""
                                    className="img-fluid"
                                  /> */}
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="21"
                                      height="21"
                                      viewBox="0 0 21 21"
                                      fill="none"
                                    >
                                      <path
                                        d="M7.55 0.529535C7.95577 0.187557 8.46935 0 9 0C9.53065 0 10.0442 0.187557 10.45 0.529535L17.2 6.22354C17.708 6.65154 18 7.28053 18 7.94353V10.7625C17.4287 10.2514 16.6834 9.97828 15.9171 9.99936C15.1508 10.0204 14.4216 10.3341 13.8793 10.8759C13.3369 11.4177 13.0226 12.1466 13.0008 12.9129C12.979 13.6792 13.2514 14.4248 13.762 14.9965H13.248C12.542 14.9965 11.912 15.3215 11.5 15.8295V12.7465C11.5 12.5476 11.421 12.3569 11.2803 12.2162C11.1397 12.0756 10.9489 11.9965 10.75 11.9965H7.25C7.05109 11.9965 6.86032 12.0756 6.71967 12.2162C6.57902 12.3569 6.5 12.5476 6.5 12.7465V17.7465C6.5 18.2107 6.31563 18.6558 5.98744 18.984C5.65925 19.3122 5.21413 19.4965 4.75 19.4965H1.75C1.52019 19.4965 1.29262 19.4513 1.0803 19.3633C0.867984 19.2754 0.675066 19.1465 0.512563 18.984C0.350061 18.8215 0.221157 18.6286 0.133211 18.4162C0.0452652 18.2039 0 17.9763 0 17.7465V7.94353C0 7.28053 0.292 6.65154 0.8 6.22354L7.55 0.529535ZM14 12.9965C14 12.4661 14.2107 11.9574 14.5858 11.5823C14.9609 11.2072 15.4696 10.9965 16 10.9965C16.5304 10.9965 17.0391 11.2072 17.4142 11.5823C17.7893 11.9574 18 12.4661 18 12.9965C18 13.527 17.7893 14.0357 17.4142 14.4107C17.0391 14.7858 16.5304 14.9965 16 14.9965C15.4696 14.9965 14.9609 14.7858 14.5858 14.4107C14.2107 14.0357 14 13.527 14 12.9965ZM13.25 15.9965C12.56 15.9965 12 16.5565 12 17.2465V17.2495L12.001 17.5475L12.009 17.6535C12.0641 18.1496 12.2425 18.6241 12.528 19.0335C13.074 19.8135 14.114 20.4965 16 20.4965C17.886 20.4965 18.926 19.8135 19.472 19.0335C19.7575 18.6241 19.9359 18.1496 19.991 17.6535L19.999 17.5475C20.002 17.4775 20.001 17.4055 20.001 17.3345L20 17.2465C20 16.5565 19.44 15.9965 18.75 15.9965H13.25Z"
                                        fill="#C4C4C4"
                                      />
                                    </svg>
                                    <div className="coupon-cont">
                                      <h5>{item.addressType}</h5>
                                      <p>
                                        {item.area && item.area}{",  "}{" "}
                                        {item.address}
                                      </p>
                                    </div>
                                  </label>
                                </div>
                              );
                            })}
                        </ul>
                      </div>
                    </div>

                  </div>
                </Fade>
              </Col>

              <Col className="order-one" lg={6} md={6} sm={12}>
                <Fade>
                  <div className="rigth-order-details">
                    <Form>
                      {state.cartData && (
                        <div
                          className={
                            state.cartItem?.length > 0 ? "bill-details" : "d-none"
                          }
                        >
                          <h5>Bill Details</h5>
                          <ul>
                            <li>
                              <div className="bill-list">
                                <p>Item Price</p>
                                <p>Rs {totalcartPrice}</p>
                              </div>
                            </li>
                            <li>
                              <div className="bill-list">
                                <p>Tax and Fees</p>
                                <p>Rs {cartDetailData?.tax || 0}</p>
                              </div>
                            </li>
                            <li>
                              <div className="bill-list">
                                <p>Delivery Fee</p>
                                <p>Rs {cartDetailData?.deliveryFee || 0}</p>
                              </div>
                            </li>

                            {pay.promocode?.amount && (
                              <li>
                                <div className="bill-list">
                                  <p>Discount - Applied Coupon</p>
                                  <p>Rs {pay.promocode?.amount || 0}</p>
                                </div>
                              </li>
                            )}

                            <li>
                              <div className="bill-list">
                                <p>Tip</p>
                                <p className="d-flex align-items-center">
                                  {pay.tipAmount !== "0" && (
                                    <button
                                      className="btn btn-transparent border-0 p-0 me-3 pb-1"
                                      onClick={handleTipDelete}
                                    >
                                      <svg
                                        stroke="currentColor"
                                        fill="none"
                                        stroke-width="2"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        class="cart-item-trash-icon text-danger"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                        ></path>
                                      </svg>
                                    </button>
                                  )}
                                  Rs {pay.tipAmount}
                                </p>
                              </div>
                            </li>

                            {/* <li>
                          <div className="bill-list">
                            <p>Sub Total</p>
                            <p>${state.cartData?.itemSubTotal}</p>
                          </div>
                        </li> */}
                          </ul>
                          <Button
                            className={
                              state.cartItem?.length > 0 ? "total-pay" : "d-none"
                            }
                          >
                            <p>Total</p>
                            <p>

                              Rs {Number(
                                (Number(totalcartPrice || 0) -
                                  Number(pay?.promocode?.amount || 0)) +
                                Number(cartDetailData?.deliveryFee || 0) +
                                Number(cartDetailData?.tax || 0) +
                                Number(pay?.tipAmount || 0)
                              ).toFixed(2)}
                            </p>
                          </Button>

                          <a
                            href="javascript:void(0)"
                            onClick={() => setModalShow3(true)}
                          >
                            <div
                              className={
                                state.cartItem?.length > 0
                                  ? "payment-main"
                                  : "d-none"
                              }
                            >
                              <p className="text-center">
                                Click to Choose Payment Method
                              </p>
                              <p>
                                {/* <img
                              src="images/cards.png"
                              alt=""
                              className="img-fluid"
                            /> */}
                                {/* **** 3704 */}
                              </p>
                              {/* <p>${state.cartData?.finalTotal}</p> */}
                            </div>
                          </a>
                          {pay?.paymentMethod ?
                            <div className="bill-list mt-2">
                              <p>Payment Method</p>
                              <p>{pay?.paymentMethod}</p>
                            </div> : ""
                          }
                        </div>
                      )}
                      <div
                        className={
                          state.cartItem?.length > 0
                            ? "checkout-btnn d-flex align-items-center justify-content-center gap-10"
                            : "d-none"
                        }
                      >
                        <div className="py-2 w-100">
                          <Button
                            className="proces-to-order"
                            onClick={(e) => handleSubmit(e, "order")}
                          >
                            Process To Order
                          </Button>
                        </div>
                        <div className="py-2 w-100">
                          <Button
                            className="proces-to-order"
                            onClick={handleSchedule}
                          >
                            Schedule Order
                          </Button>
                        </div>
                      </div>
                      {/* <FormGroup>
                      <div
                        class={
                          pay.serviceType == "delivery"
                            ? "user-login"
                            : "d-none"
                        }
                      >
                        <div className="header-dropdoen">
                          <UncontrolledDropdown>
                            <DropdownToggle caret>
                              Choose Delivery Person
                            </DropdownToggle>
                            <DropdownMenu>
                              {driverlist &&
                                driverlist.length > 0 &&
                                driverlist.map((item, index) => {
                                  return (
                                    <DropdownItem
                                      onClick={() =>
                                        setpay((pre) => ({
                                          ...pre,
                                          driverId: item._id,
                                        }))
                                      }
                                    >
                                      {item.name}
                                    </DropdownItem>
                                  );
                                })}
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </div>
                      </div>
                    </FormGroup> */}
                    </Form>
                  </div>
                </Fade>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <Modal
        className="Scheduled"
        show={showSchedule}
        onHide={handleSchedule}
        centered
      >
        <Modal.Header className="border-0 text-centered" closeButton>
          <Modal.Title className="text-centered fw-bold justify-content-center">
            Scheduled <span className="theme-clr">Order</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {/* <div className="py-2">
              <label htmlFor="" className="form-label m-0 fw-sbold">
                Scheduled<span className="theme-clr"> Date</span>{" "}
              </label>
              <input
                type="date"
                name="scheduledDate"
                value={pay.scheduledDate}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="py-2">
              <label htmlFor="" className="form-label m-0 fw-sbold">
                Scheduled <span className="theme-clr">Time</span>
              </label>
              <input
                type="time"
                name="scheduledTime"
                value={pay.scheduledTime}
                onChange={handleChange}
                className="form-control"
              />
            </div> */}
            <div className="py-2">
              <label htmlFor="" className="form-label m-0 fw-sbold">
                Scheduled For <span className="theme-clr">Later</span>{" "}
              </label>
              {/* <Form.Select aria-label="Default select example">
                <option>Pick your Delivery Time</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select> */}
              <div className="icon-with-text position-relative">
                {/* <span className="icn position-absolute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96452 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7473 9.41498 20.7192 6.93661 18.8913 5.10872C17.0634 3.28084 14.585 2.25273 12 2.25ZM12 20.25C10.3683 20.25 8.77326 19.7661 7.41655 18.8596C6.05984 17.9531 5.00242 16.6646 4.378 15.1571C3.75358 13.6496 3.5902 11.9908 3.90853 10.3905C4.22685 8.79016 5.01259 7.32015 6.16637 6.16637C7.32016 5.01259 8.79017 4.22685 10.3905 3.90852C11.9909 3.59019 13.6497 3.75357 15.1571 4.37799C16.6646 5.00242 17.9531 6.05984 18.8596 7.41655C19.7662 8.77325 20.25 10.3683 20.25 12C20.2475 14.1873 19.3775 16.2843 17.8309 17.8309C16.2843 19.3775 14.1873 20.2475 12 20.25ZM18 12C18 12.1989 17.921 12.3897 17.7803 12.5303C17.6397 12.671 17.4489 12.75 17.25 12.75H12C11.8011 12.75 11.6103 12.671 11.4697 12.5303C11.329 12.3897 11.25 12.1989 11.25 12V6.75C11.25 6.55109 11.329 6.36032 11.4697 6.21967C11.6103 6.07902 11.8011 6 12 6C12.1989 6 12.3897 6.07902 12.5303 6.21967C12.671 6.36032 12.75 6.55109 12.75 6.75V11.25H17.25C17.4489 11.25 17.6397 11.329 17.7803 11.4697C17.921 11.6103 18 11.8011 18 12Z"
                      fill="black"
                    />
                  </svg>
                </span> */}
                <Input
                  value={moment(new Date()).format(
                    "YYYY-MM-DD HH:mm"
                  )}
                  name="scheduledDate"
                  type="datetime-local"
                  onChange={handleOptions}
                  required
                />
              </div>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer className="border-0">
          <Button className="cancel" onClick={handleSchedule}>
            Cancel
          </Button>
          <Button
            className="submitBtn"
            disabled={!pay?.scheduledTime}
            onClick={(e) => handleSubmit(e, "scheduled")}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
