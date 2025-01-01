import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addCart,
  freshMarkettDetail,
  restaurantDetail,
  savedata,
  userCart,
} from "../../Redux/actions";
import CartMOdal from "./cartModal";
import { toast } from "react-toastify";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

export default function Tacostabbing(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [counter, setCounter] = useState(0);
  const [state, setState] = useState({ catId: "", catItem: [] });
  const [add, setAdd] = useState({ Id: "", addonData: [] });
  const [openCart, setopenCart] = useState({
    data: {},
    isOpen: false,
    quantity: 1,
  });
  const [newstate, setNewstate] = useState({ allItem: [], restId: "" });
  const [itemQuantity, setItemQuantity] = useState({});
  const [addcart, setaddCart] = useState({
    restaurantId: "",
    addons: [],
    itemId: [],
    quantity: 1,
  });
  const currentCartState = useSelector((s) => s.address?.savedData);

  const isAuth = useSelector((s) => s.login?.token);
  const [_isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    setIsAuth(!!isAuth);
  }, [isAuth]);

  useEffect(() => {
    if (Array.isArray(currentCartState)) {
      setNewstate((prev) => ({ ...prev, allItem: currentCartState }));
    }
  }, [currentCartState]);

  const menu = useSelector((s) => s.restaurant.data.menuItemRef);
  const freshItemData = useSelector((s) => s.restaurant.freshMarketData);

  //  // console.log(menuttt, typeof menuttt, "menuttt")

  const restId = useSelector((s) => s.restaurant.data?._id);

  const increase = () => {
    setCounter((count) => count + 1);
  };

  const decrease = () => {
    setCounter((count) => count - 1);
  };

  const reset = () => {
    setCounter(0);
  };

  useEffect(() => {
    setaddCart((pre) => ({
      ...pre,
      restaurantId: restId,
    }));
  }, [restId]);

  useEffect(() => {
    if (menu && menu?.length > 0) {
      setState((pre) => ({
        ...pre,
        catId: menu[0]._id,
      }));
    }
  }, [menu]);

  useEffect(() => {
    dispatch(freshMarkettDetail(props.editId));
  }, [dispatch]);

  useEffect(() => {
    const { catItem } = state;
    if (catItem && catItem.length > 0) {
      let addonItem = catItem.find((data) => data._id == add.Id);
      addonItem = addonItem.addons;
      setAdd((pre) => ({
        ...pre,
        addonData: addonItem,
      }));
      setTimeout(() => {
        setopenCart(true);
      }, 500);
    }
  }, [add.Id]);

  useEffect(() => {
    if (menu && menu.length > 0) {
      let filterCatitem = menu.find((data) => data._id == state.catId);
      filterCatitem = filterCatitem?.items;
      setState((pre) => ({
        ...pre,
        catItem: filterCatitem,
      }));
    }
  }, [state.catId]);

  const handleChange = (e, cartData) => {
    const { name, value } = e.target;
    if (addcart.itemId.includes(value)) {
      setaddCart((pre) => ({
        ...pre,
        itemId: pre.itemId?.filter((cart) => {
          return cart !== value;
        }),
        addons: pre.addons?.filter((add) => {
          return add !== cartData;
        }),
      }));
    } else
      setaddCart((pre) => ({
        ...pre,
        [name]: [...pre[name], value],
        addons: [...pre.addons, cartData],
      }));
  };

  const handleSubmit = (itemId, index) => {
    // e.preventDefault();
    // console.log("HELLO");
    if (!_isAuth) {
      toast.error("Please Login first to make Order!");
    } else {
      let { allItem } = newstate;

      const abc = allItem.find((obj) => {
        return obj.items == openCart.data?._id;
      });

      if (abc) {
        toast.error("Item already in the cart.");
        setopenCart({ isOpen: false });
        return;
      }

      let data = {
        restaurantId: addcart.restaurantId,
        quantity: openCart.quantity,
      };

      const callBack = (Data) => {
        const cartCallback = (response) => {
          if (response.data.status === "success") {
            const data = {
              allItem: response.data.data,
              restId: addcart.restaurantId,
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
        if (Data.status == "success") {
          // navigate("/secure-checkout");
          toast.success(Data.message);
          setopenCart({ isOpen: false });
          setaddCart((pre) => ({
            ...pre,
            addons: [],
          }));

          localStorage.setItem("dataCart", JSON.stringify(openCart?.data));

          setNewstate((pre) => {
            const data = {
              ...pre,
              allItem: [
                ...allItem,
                {
                  itemId: openCart.data?._id,
                  qty: openCart.quantity,
                },
              ],
              restId: addcart.restaurantId,
            };
            dispatch(savedata(data));
            dispatch(
              userCart(
                {
                  promocode: "none",
                  tip: "no",
                  tipAmount: 0,
                  //items: data?.itemId,
                  //restaurantId: data?.restaurantId,
                },
                cartCallback
              )
            );
            return data;
          });
        } else {
          toast.error("Unable to add to cart item");
          setopenCart({ isOpen: false });
          dispatch(
            userCart(
              {
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
      };

      dispatch(
        addCart(
          {
            quantity: itemQuantity[index] || 1,
            restaurantId: props.editId,
            itemId: itemId,
            orderType: "market",
          },
          callBack
        )
      );
    }
  };

  function handleQuantity(index, value) {
    if (isNaN(value)) {
      setItemQuantity((prev) => ({
        ...prev,
        [index]: 1,
      }));
    } else {
      setItemQuantity((prev) => ({
        ...prev,
        [index]: value % 0.5 === 0 ? value : parseInt(value),
      }));
    }
  }

  useEffect(() => {
    //dispatch(savedata(newstate));
  }, [newstate]);

  const { catId } = state;
  const { Id } = add;

  // console.log(itemQuantity, "console.log(itemQuantity)");

  return (
    <section className="tabbing-tacos">
      {/* <CartMOdal
        show={openCart.isOpen}
        onHide={() => setopenCart({ isOpen: false })}
        addData={openCart.data}
        quantity={openCart.quantity}
        valChange={handleChange}
        state={addcart}
        submit={handleSubmit}
      /> */}
      <Container fluid>
        <div className="tacos-tabbing">
          <div className="tab-frame tacos-frame">
            {/* <div className="clearfix">
              {menu && menu.length > 0
                ? menu.map((data, i) => {
                  return (
                    <>
                      <input
                        type="radio"
                        name="tab"
                        id="tab1"
                        checked={catId.includes(data._id)}
                      />
                      <label
                        for="tab1"
                        onClick={() => {
                          setState((pre) => ({
                            ...pre,
                            catId: data._id,
                          }));
                        }}
                      >
                        {data.menuItemName}
                      </label>
                    </>
                  );
                })
                : ""}
            </div> */}

            <div className="Breakfast-tab tacoscomo-class">
              <Fade>
                <Row>
                  {(freshItemData &&
                    freshItemData.length > 0 &&
                    freshItemData.map((item, index) => {
                      return (
                        <Col lg={2} md={4} sm={6} xs={12}>
                          <div className="tacos-card text-start" key={index}>
                            <div className="tacos-card-image">
                              <img
                                src={item.itemImage}
                                alt="img"
                                className="img-fluid"
                              />
                            </div>
                            {item.itemType == "veg" ? (
                              <>
                                <span className="text-success itemType">
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
                                  Veg{" "}
                                </span>
                              </>
                            ) : (
                              <>
                                <span className="text-danger itemType">
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
                                        fill="#FF2020"
                                      />
                                    </svg>
                                  </span>
                                  Non-Veg{" "}
                                </span>
                              </>
                            )}
                            <div className="tacos-card-content">
                              <h5>{item.itemName}</h5>
                              <p>{item.itemDesc}</p>
                            </div>
                            <div className="price-part">
                              <h5>${item.price}</h5>
                              {/* <h6>
                                <strike>${item.discount}</strike>
                              </h6> */}
                              {/*<input
                                type="number"
                                value={itemQuantity[index] ?? 1}
                                min={0}
                                max={10}
                                onChange={(e) => {
                                  handleQuantity(index, e.target.value);
                                }}
                                className={"food-item-quantity-input"}
                              />*/}
                              <div className={"food-item-quantity-input"}>
                                <MdOutlineKeyboardArrowDown
                                  className="food-item-quantity-icon"
                                  onClick={() =>
                                    handleQuantity(
                                      index,
                                      itemQuantity[index] > 1
                                        ? itemQuantity[index] - 1
                                        : 1
                                    )
                                  }
                                />
                                {itemQuantity[index] ?? 1}
                                <MdOutlineKeyboardArrowUp
                                  className="food-item-quantity-icon"
                                  onClick={() =>
                                    handleQuantity(
                                      index,
                                      itemQuantity[index] < 10
                                        ? itemQuantity[index] + 1
                                        : itemQuantity[index]
                                    )
                                  }
                                />
                              </div>
                              <Button
                                className="btn-add"
                                checked={Id.includes(item._id)}
                                onClick={() => {
                                  if (!_isAuth) {
                                    toast.error(
                                      "Please Login first to make Order!"
                                    );
                                  } else {
                                    if (
                                      itemQuantity[index] > 0 ||
                                      itemQuantity[index] === undefined
                                    ) {
                                      handleSubmit(item._id, index);
                                      // setopenCart({
                                      //   data: item,
                                      //   isOpen: true,
                                      //   quantity: itemQuantity[index] ?? 1,
                                      // });
                                    } else {
                                      toast.error(
                                        "Atleast 1 quantity is required."
                                      );
                                    }
                                  }
                                }}
                              >
                                + ADD
                              </Button>
                            </div>
                          </div>
                        </Col>
                      );
                    })) || <h4>No Items Found!</h4>}
                </Row>
              </Fade>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
