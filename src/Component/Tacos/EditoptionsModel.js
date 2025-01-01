import React, { Fragment, useEffect, useMemo, useState } from "react";
import { Row, Col, FormCheck, FormControl } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { MdTrendingUp } from "react-icons/md";
import { useDispatch } from "react-redux";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { set, times, cloneDeep } from "lodash";
import "./css/options-modal.scss";

import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
  MdRemove, MdAdd
} from "react-icons/md";
import FormCheckLabel from "react-bootstrap/esm/FormCheckLabel";
import { toast } from "react-toastify";

export default function EditoptionsModel({ show, onAddToCart, cartItem }) {
  const [open, setOpen] = show;
  const { item, quantity, addonsItems, customizeItems, cartId } = open || {};
  const { customise, addons } = item || {};
  const [data, setData] = useState({
    item,
    quantity: quantity || 1,
    addons: addonsItems || [],
    variations: customizeItems || [],
    instructions: "",
    cartId: cartId,
  });
  console.log("item========>", addonsItems, customizeItems)

  function onSubmit() {
    var error = "";
    //find unfilled required Item for validation
    item.addons
      ?.filter((item) => item.required)
      ?.forEach((item) => {
        if (
          !(
            data.addons?.find((itm) => itm._id === item._id)?.options
              ?.length > 0
          )
        ) {
          toast.error(item.name);
          error = item.name;
        }
      });

    console.log("Validated");

    if (!error) {
      // setOpen(null);
      onAddToCart(data);
    }
  }

  function handleChange(name, value) {
    set(data, name, value);
    setData({ ...data });
  }

  function handleQuantity(op) {
    var val = 0;
    if (op === "+") {
      val = data.quantity < 10 ? data.quantity + 1 : 10;
    } else {
      val = data.quantity > 1 ? data.quantity - 1 : 1;
    }
    setData((prev) => ({ ...prev, quantity: val }));
  }

  function toggleCustom(customItem, optionItem) {
    const custom = cloneDeep(customItem);
    const option = cloneDeep(optionItem);

    setData((prev) => {
      const customIdx = prev.addons?.findIndex(
        (item) => item._id === custom._id
      );

      const optionIdx = prev.addons?.[customIdx]?.options?.findIndex(
        (item) => item._id === option._id
      );

      if (customIdx > -1) {
        if (optionIdx > -1) {
          if (custom?.type !== "single") {
            prev.addons[customIdx].options.splice(optionIdx, 1);
          }
          if (prev.addons[customIdx].options.length === 0) {
            prev.addons.splice(customIdx, 1);
          }
        } else {
          if (custom?.type === "single") {
            prev.addons[customIdx].options = [{ ...option }];
          } else {
            prev.addons[customIdx].options.push({ ...option });
          }
        }
      } else {
        prev.addons.push({ ...custom, options: [option] });
      }
      return { ...prev };
    });
  }

  // function toggleAddon(addon) {
  //   console.log("received ", addon);
  //   setData((prev) => {
  //     const idx = (prev.variations || [])?.findIndex((item) => item._id === addon._id);
  //     if (idx > -1) {
  //       (prev.variations || []).splice(idx, 1);
  //     } else {
  //       (prev.variations || []).push(addon);
  //     }
  //     return { ...prev };
  //   });
  // }
  function toggleAddon(addon) {
    console.log("received ", addon);
    setData((prev) => ({
      ...prev,
      variations: [addon], // Replace the entire variations array with the selected addon
    }));
  }

  // useEffect(() => {
  //   //setting default values
  //   item.addons.forEach((custom) => {
  //     if (typeof custom.defaultOptionValue === "string") {
  //       const option = custom.options.find(
  //         (itm) => itm.name === custom.defaultOptionValue
  //       );
  //       if (option) {
  //         toggleCustom(custom, option);
  //       }
  //     }
  //   });
  // }, []);


  useEffect(() => {




  }, [cartItem]);


  const sortedGroupAddons = useMemo(() => {
    const groupedAddons = {};
    (item?.variations || [])?.forEach((item) => {
      if (!groupedAddons[item.category]) {
        groupedAddons[item.category] = [];
      }
      groupedAddons[item.category].push(item);
    });

    return groupedAddons;
  }, [item?.variations]);

  const totalPrice =
    ((data?.variations || [])?.length > 0 ? 0 : (data.quantity * (item.price || 0))) +
    data?.quantity *
    (data?.addons || [])?.reduce((accumulator, custom) => {
      return (
        accumulator +
        (custom?.options || [])?.reduce((accumulator, option) => {
          return accumulator + option.price;
        }, 0)
      );
    }, 0) +
    data.quantity *
    (data?.variations || [])?.reduce((accumulator, addon) => {
      return accumulator + addon?.price;
    }, 0);


  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-common modal-coupon CustomizeAddOn"
      scrollable="true"
      show={open}
    >
      <Modal.Body className="x-options-modal-body">
        <div className="d-flex align-items-start justify-content-between x-options-modal-body-content">
          <div className="d-flex flex-column">
            <h4 className="mb-0">{item?.name}</h4>
            <h5>${item?.price}</h5>
          </div>
          <Button
            className="close-btn position-static"
            onClick={() => setOpen(null)}
          >
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
        </div>
        <section className="cart-main">
          <div className="cart-here p-0">
            {(item?.addons || [])?.length > 0 &&
              (item?.addons || [])?.find((itm) => !!itm.name) &&
              (item?.addons || [])?.map((custom, index) => (
                <div
                  key={index}
                  className="shadow-sm rounded x-item-option-card p-2 mt-3"
                >
                  <h6 className="mb-0">{custom?.name}</h6>
                  <div>
                    <small>
                      {custom?.required ? "Required" : "Optional"} -{" "}
                      {custom?.type === "single"
                        ? "Choose 1"
                        : "Choose as many as you like"}
                    </small>
                  </div>

                  <Row className="py-1 mt-1">
                    {(custom?.options || [])?.map((option, index) => (
                      <Col xs={12} sm={6} key={index}>
                        <FormCheck>
                          <FormCheck.Input
                            type={
                              custom?.type === "single"
                                ? "radio"
                                : "checkbox"
                            }
                            id={`addons-${custom?._id}-${option?._id}`}
                            checked={data.addons?.some((item) =>
                              item?.options?.some(
                                (itm) => itm._id === option._id
                              )
                            )}
                            onChange={() => toggleCustom(custom, option)}
                          />
                          <FormCheck.Label
                            htmlFor={`addons-${custom?._id}-${option?._id}`}
                            className="w-100"
                          >
                            <div className="d-flex justify-content-between w-100">
                              {option?.name}{" "}
                              <span>
                                + Rs
                                {(
                                  data.quantity * (option?.price || 0)
                                )?.toFixed(2)}
                              </span>
                            </div>
                          </FormCheck.Label>
                        </FormCheck>
                      </Col>
                    ))}
                  </Row>
                </div>
              ))}

            {(item?.variations || [])?.length > 0 && (
              <div className="shadow-sm rounded x-item-option-card p-2 mt-3">
                <h6 className="mb-0">Addons</h6>
                <div>
                  <small>Optional - Choose as many as you like</small>
                </div>

                {(item?.variations || [])?.map((group, index) => (
                  <Row className="py-1 mt-1" key={index}>
                    {/* <Col xs="12">
                        <small className="text-muted">{group}</small>
                      </Col>
                      {sortedGroupAddons[group]?.map((addon, idx) => ( */}
                    <Col xs={12} sm={6} key={index}>
                      <FormCheck>
                        <FormCheck.Input
                          type={"radio"}
                          id={`addon-${group._id}`}
                          checked={data.variations.some(
                            (item) => item._id === group._id
                          )}
                          onChange={() => toggleAddon(group)}
                        />
                        <FormCheck.Label
                          htmlFor={`addon-${group._id}`}
                          className="w-100"
                        >
                          <div className="d-flex justify-content-between w-100">
                            {group?.attributes?.[0]?.name}{" "}
                            <span>
                              + Rs {(data.quantity * (group?.price || 0))?.toFixed(2)}
                            </span>
                          </div>
                        </FormCheck.Label>
                      </FormCheck>
                    </Col>
                    {/* ))} */}
                  </Row>
                ))}
              </div>
            )}

            <div className="mt-4">
              <h6>
                Special Instructions
                <small className="text-muted"> (Optional)</small>
              </h6>
              <FormControl
                as="textarea"
                rows={3}
                onChange={(e) => handleChange("instructions", e.target.value)}
              />
            </div>

            <div className="price-part x-modal-body-content-foot d-flex flex-column flex-md-row justify-content-between w-100 align-items-center mt-3">
              <div className="d-flex align-items-center justify-content-center w-50">
                <span className="me-2">Quantity</span>
                <div className={"food-item-quantity-input"}>
                  <MdRemove
                    className="food-item-quantity-icon"
                    onClick={() => handleQuantity("-")}
                  />
                  <span>{data?.quantity}</span>
                  <MdAdd
                    className="food-item-quantity-icon"
                    onClick={() => handleQuantity("+")}
                  />
                </div>
              </div>
              <Button
                className="checkout-btn m-0 mt-4 mt-md-0  justify-content-center"
                onClick={onSubmit}
              >
                Add To Cart | Rs {totalPrice?.toFixed(2)}
              </Button>
            </div>
          </div>
        </section>
      </Modal.Body>
    </Modal>
  );
}
