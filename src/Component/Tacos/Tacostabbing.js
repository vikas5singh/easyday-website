import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import { Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import {
  addCart,
  freshMarkettDetail,
  restaurantDetail,
  savedata,
  userCart,
  getProduct,
  getHomeData,
  getHomePage,
  nearbyRestaurant,
  faqList
} from "../../Redux/actions";
import CartMOdal from "./cartModal";
import { toast } from "react-toastify";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
  MdRemove, MdAdd
} from "react-icons/md";
import CustomizeMOdal from "./customiseModal";
import OptionsModal from "./OptionsModal";
import BestSellert from "./BestProduct";
import WelcomeSection from "../Home/WelcomeSection";
import TestimonialsSection from "../Home/TestimonialsSection";
import TrendingProduct from "./TrendingProduct";
import ContentPage from "../Home/contentPage";
import Faq from "../DriverSignUP/Faq";
import BlogSection from "../Home/BlogSection";
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
  const customerId = useSelector((s) => s.profile?.profile?._id);
  const [openCustomize, setopenCustomize] = useState({
    data: {},
    isOpen: false,
    quantity: 1,
  });
  const [newstate, setNewstate] = useState({ allItem: [], restId: "" });
  const [itemQuantity, setItemQuantity] = useState({ 0: 1, 1: 1 });
  // console.log(itemQuantity[index], "itemQuantity123");
  const [addcart, setaddCart] = useState({
    restaurantId: "",
    addons: [],
    itemId: [],
    quantity: 1,
  });

  const [cusomisecart, setcustomiseCart] = useState({
    restaurantId: "",
    customise: [],
    itemId: "",
    quantity: 1,
  });
  const [cartKey, setCartKey] = useState(() => {
    return localStorage.getItem('cartKey') || null;
  });
  const [cardItem, setCardItem] = useState({})

  const [addonsState, setAddonsState] = useState({ addons: [], customise: [] });

  const currentCartState = useSelector((s) => s.address?.savedData);

  // freshCatetory
  const [addonValue, setAddonValue] = useState([]);
  const isAuth = useSelector((s) => s.login?.token);
  const [_isAuth, setIsAuth] = useState(false);
  const [newAddonData, setNewAddonData] = useState({ add: "", quantity: "" });

  useEffect(() => {
    setIsAuth(!!isAuth);
  }, [isAuth]);

  useEffect(() => {
    if (Array.isArray(currentCartState)) {
      setNewstate((prev) => ({ ...prev, allItem: currentCartState }));
    }
  }, [currentCartState]);
  useEffect(() => {
    if (!currentCartState?.length) {
      setNewstate((prev) => ({ ...prev, allItem: [] }));
    }
  }, [!currentCartState?.length]);

  const menu = useSelector((s) => s.restaurant.dataDetails);
  const datadta = useSelector((s) => s.restaurant.dataDetails);
  const menudataa = useSelector((s) => s.restaurant?.dataDetails?.items);
  const product = useSelector((s) => s.restaurant?.product);
  const [showOptions, setShowOptions] = useState(null);
  const homeData = useSelector((s) => s.restaurant.homeData);
  const homePage = useSelector((s) => s.restaurant.homePage);
  // console.log(menu, datadta[0], "PPPPPPPp")
  const restId = useSelector((s) => s.restaurant.dataDetails?._id);
  const altitude = useSelector((s) => s.restaurant?.latLng);
  const promotionData = useSelector((s) => s.restaurant.data?.promotionData);
  const faqlist = useSelector((s) => s.address.faqs);
  // const [searchParams] = useSearchParams()
  // console.log(searchParams.get('type'), "78")

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
    setcustomiseCart((pre) => ({
      ...pre,
      restaurantId: restId,
    }));
  }, [restId]);

  useEffect(() => {
    if (menu && menu?.length > 0) {
      setState((pre) => ({
        ...pre,
        catId: menu[0]?._id,
      }));
    }
  }, [menu]);

  const [searchParams] = useSearchParams();

  let isFreshMarket = searchParams.get("type") === "fresh";

  useEffect(() => {
    if (isFreshMarket) {
      // console.log("HEllo");
      return dispatch(freshMarkettDetail(props.editId));
    } else {
      // console.log("NO HEllo");
      dispatch(restaurantDetail({ storeTypeId: props?.storeId, _id: props.editId }));
    }
  }, [dispatch]);

  useEffect(() => {
    dispatch(nearbyRestaurant({
      customerLocation: {
        lat: altitude?.customerLocation?.lat,
        lng: altitude?.customerLocation?.lng,
      },
      storeTypeId: props?.storeId
    }));
    dispatch(getHomePage())
    dispatch(faqList({}))
    dispatch(getHomeData({
      customerLocation: {
        lat: altitude?.customerLocation?.lat,
        lng: altitude?.customerLocation?.lng,
      },
    }))
  }, [])

  // useEffect(() => {
  //   dispatch(restaurantDetail(props.editId));
  // }, [dispatch]);

  useEffect(() => {
    const { catItem } = state;
    if (catItem && catItem.length > 0) {
      let addonItem = catItem.find((data) => data?._id == add.Id);
      addonItem = addonItem?.addons;
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
    const cartCallbackss = (response) => {
      if (response?.status === "success") {
        setState((pre) => ({
          ...pre,
          catItem: response?.data,
        }));
      }
    }
    dispatch(getProduct({ storeTypeId: props?.storeId, vendor: props.editId, category: state?.catId }, cartCallbackss))
  }, [state.catId, props?.editId, props?.storeId]);

  // for addon

  const handleChange = (e, cartData) => {
    const { name, value } = e.target;

    if (addcart.itemId?.includes(value)) {
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

  const handleCustomizeChange = (e, cartData) => {
    const { name, value } = e.target;

    if (cusomisecart.itemId?.includes(value)) {
      setcustomiseCart((pre) => ({ ...pre, variations: [], itemId: "" }));
      // setcustomiseCart((pre) => ({
      //   ...pre,
      //   itemId: pre.itemId?.filter((cart) => {
      //     return cart !== value;
      //   }),
      //   customise: pre.customise?.filter((add) => {
      //     return add !== cartData;
      //   }),
      // }));
    } else
      setcustomiseCart((pre) => ({
        ...pre,
        [name]: value,
        variations: [cartData],
      }));
  };
  // const [abc, Setabc] = useState();
  // if (!currentCartState) {
  //   Setabc(undefined);
  // }

  //  for add on cart add

  const customiseDelete = () => {
    setcustomiseCart((pre) => ({
      ...pre,
      variations: [],
    }));

    // window.location.reload();
    // setopenCustomize({
    //   data: "",
    //   isOpen: false,
    //   quantity:""
    // });
  };

  function refreshCart(showCart = false) {
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
          // promocode: "none",
          cart_key: cartKey,
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
  }) {
    if (!_isAuth) {
      toast.error("Please Login first to make Order!");
      return;
    } else {
      const callBack = (Data) => {
        if (Data.status == "success") {
          // toast.success(Data.message)
          setCartKey(Data?.data?.cart_key)
          setCardItem({ item: item?._id, quantity, storeTypeId: props?.storeId, vendorId: props?.editId });
          setShowOptions(null);
        } else {
          toast.error(Data.data.message);
        }
        // refreshCart(true);
      };

      dispatch(
        addCart(
          {
            // restaurantId: restId,
            cart_key: cartKey || null,
            product: item._id,
            quantity,
            addons: addons,
            variations: variations,
            instructions: instructions,
            user: customerId,
          },
          callBack
        )
      );
    }
  }
  useEffect(() => {
    if (cartKey) {
      localStorage.setItem('cartKey', cartKey);
      localStorage.setItem('cartInfo', JSON.stringify(cardItem));
      refreshCart(true)
    } else {
      localStorage.removeItem('cartKey');
      localStorage.removeItem('cartInfo');
    }
  }, [cartKey, cardItem])
  const handleSubmit = (e, uniqueId, index) => {
    e.preventDefault();
    if (!_isAuth) {
      toast.error("Please Login first to make Order!");
      return;
    } else {
      let { allItem } = newstate;
      console.log(allItem, "allItem");

      const abc = allItem.find((obj) => {
        return obj.items == openCart.data?._id;
      });
      console.log(abc, "abc");

      if (abc) {
        toast.error("Item already in the cart.");
        setopenCart({ isOpen: false });
        return;
      }

      let data = {
        restaurantId: addcart.restaurantId,
        quantity: newAddonData?.quantity ? newAddonData?.quantity : index || 1,
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
          toast.success(Data.message);

          customiseDelete();
          setopenCustomize({ isOpen: false });

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
                  addons: [...addcart.addons],
                },
              ],
              restId: addcart.restaurantId,
            };
            dispatch(savedata(data));
            dispatch(
              userCart(
                {
                  // cart_key: "none",
                  cart_key: cartKey,
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
          toast.error(Data.data.message);
          setopenCart({ isOpen: false });
          dispatch(
            userCart(
              {
                // promocode: "none",
                cart_key: cartKey,
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
            ...data,
            itemId: newAddonData.add?._id || uniqueId,
            addons: addcart.addons ? addcart.addons : null,
            customise: cusomisecart?.customise,
            customerId: customerId,
            cart_key: cartKey || null,
          },
          callBack
        )
      );
    }
  };

  useEffect(() => {
    let newarr = newAddonData?.add?.addons?.map((item) => item?.name);

    setAddonValue([newarr]);
  }, [newAddonData?.add?.addons]);

  const handlecustomSubmit = (e) => {
    e.preventDefault();
    if (!_isAuth) {
      toast.error("Please Login first to make Order!");
    } else {
      let { allItem } = newstate;

      const abc = allItem.find((obj) => {
        return obj.items == openCustomize.data?._id;
      });

      if (abc) {
        toast.error("Item already in the cart.");
        setopenCustomize({ isOpen: false });
        return;
      }

      let data = {
        restaurantId: cusomisecart.restaurantId,
        quantity: openCustomize.quantity,
      };

      const callBack = (Data) => {
        const cartCallback = (response) => {
          if (response.data.status === "success") {
            const data = {
              allItem: response.data.data,
              restId: cusomisecart.restaurantId,
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
          toast.success(Data.message);

          setopenCustomize({ isOpen: false });

          setcustomiseCart((pre) => ({
            ...pre,
            customise: [],
          }));

          setTimeout(() => {
            if (addonValue == "") {
            } else {
              setopenCart({ isOpen: true });
            }
          }, 2000);
          customiseDelete();

          localStorage.setItem("dataCart", JSON.stringify(openCustomize?.data));

          setNewstate((pre) => {
            const data = {
              ...pre,
              allItem: [
                ...allItem,
                {
                  itemId: openCustomize.data?._id,
                  qty: openCustomize.quantity,
                  customise: [...cusomisecart.customise],
                },
              ],
              restId: cusomisecart.restaurantId,
            };

            dispatch(savedata(data));
            dispatch(
              userCart(
                {
                  // promocode: "none",
                  cart_key: cartKey,
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
                // promocode: "none",
                cart_key: cartKey,
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
      // if ("") {
      //   toast.error("please select customise item")

      // } else {

      dispatch(
        addCart(
          {
            ...data,
            itemId: openCustomize.data?._id,
            customise: cusomisecart.customise ? cusomisecart.customise : null,
            cart_key: cartKey || null,
          },
          callBack
        )
      );
      //  }
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

  // console.log(state, newstate, props, "statestate");

  // useEffect(() => {

  //  menudataa.map(item => (console.log('item1111', item.addons?.length >0)))

  // }, [menudataa]);

  // console.log('cusomisecart777777777', cusomisecart)

  useEffect(() => {
    let arres = newAddonData?.add?.addons?.map((item) => item?.name);
    let arrescustomis = openCustomize.data?.customise?.map(
      (item) => item?.name
    );

    console.log("arres", arrescustomis);

    setAddonsState({ addons: arres, customise: arrescustomis });
  }, [newAddonData?.add, openCustomize.data]);

  return (
    <section className="tabbing-tacos tabbing-home home-bg">
      {/* <CartMOdal
        show={openCart.isOpen}
        onHide={() => setopenCart({ isOpen: false })}
        addData={newAddonData.add}
        quantity={openCart.quantity}
        valChange={handleChange}
        state={addcart}
        submit={handleSubmit}
        menudataa={menudataa}
        onHide2={() => setopenCustomize({ isOpen: false })}
      />

      <CustomizeMOdal
        show={openCustomize.isOpen}
        onHide={() => setopenCustomize({ isOpen: false })}
        addData={openCustomize.data}
        quantity={openCustomize.quantity}
        valChange={handleCustomizeChange}
        state={cusomisecart}
        submit={handlecustomSubmit}
        addonsButton={() => setopenCart({ isOpen: true })}
      /> */}
      {showOptions && (
        <OptionsModal
          show={[showOptions, setShowOptions]}
          onAddToCart={onAddToCart}
        />
      )}
      <Container fluid>
        <div className="tacos-tabbing">
          <div className="tab-frame tacos-frame">
            <div className="clearfix">
              {!isFreshMarket && menu?.categories && menu?.categories?.length > 0
                ? menu?.categories?.map((data, i) => {
                  return (
                    <>
                      <input
                        type="radio"
                        name="tab"
                        id="tab1"
                        checked={catId?.includes(data?._id)}
                      />
                      <label
                        for="tab1"
                        onClick={() => {
                          setState((pre) => ({
                            ...pre,
                            catId: data?._id,
                          }));
                        }}
                      >
                        {data?.catName}
                      </label>
                    </>
                  );
                })
                : ""}
            </div>

            <div className="Breakfast-tab tacoscomo-class gifsection">
              <Fade>
                <Row>
                  {(state.catItem &&
                    state.catItem.length > 0 &&
                    state.catItem.map((item, index) => {
                      console.log(item, "helloooo111");
                      return (
                        <Col lg={2} md={4} sm={6} xs={12}>
                          <div className="tacos-card" key={index}>
                            <Link to={`/product/${props?.storeId}/${item?._id}`}>
                              <div className="tacos-card-image">
                                <img
                                  src={item?.featured_image?.link}
                                  alt="img"
                                  className="img-fluid"
                                />
                              </div>
                            </Link>
                            <div className="tacos-card-content">
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
                              <h5 className="m-0 py-1 fw-bold">
                                {item.name}
                              </h5>
                              <p className="m-0 fw-sbold">{item.short_description}</p>
                            </div>
                            <div className="price-part">
                              <h5 className="m-0 fw-sbold">Rs {item.price}</h5>
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
                                <MdRemove
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
                                <MdAdd
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
                              {/* <Button
                                className="btn-add"
                                checked={Id.includes(item?._id)}
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
                                      setopenCart({
                                        data: item,
                                        isOpen: true,
                                        quantity: itemQuantity[index] ?? 1,
                                      });
                                    } else {
                                      toast.error(
                                        "Atleast 1 quantity is required."
                                      );
                                    }
                                  }
                                }}
                              >
                                + ADD
                              </Button> */}

                              <Button
                                className="btn-add"
                                checked={Id?.includes(item?._id)}
                                onClick={(e) => {
                                  if (!_isAuth) {
                                    toast.error(
                                      "Please Login first to make Order!"
                                    );
                                  } else {
                                    if (
                                      item?.variations?.find(
                                        (itm) => !!itm.sku
                                      ) ||
                                      item?.addons?.find((itm) => !!itm.name)
                                    ) {
                                      setShowOptions({
                                        item,
                                        quantity: itemQuantity?.[index] || 1,
                                      });
                                    } else {
                                      onAddToCart({
                                        item,
                                        quantity: itemQuantity?.[index] || 1,
                                      });
                                    }
                                  }
                                  //  else {
                                  //   if (
                                  // itemQuantity[index] > 0 ||
                                  // itemQuantity[index] === undefined ||
                                  //   item?.customise[0]?.name !== undefined ||
                                  //   item?.addons[0]?.name !== undefined
                                  // ) {
                                  // setopenCustomize({
                                  //   data: item,
                                  //   isOpen:
                                  //     item?.customise[0]?.name == undefined
                                  //       ? false
                                  //       : true,
                                  //   quantity: itemQuantity[index] ?? 1,
                                  // });

                                  // setopenCart({
                                  //   data: item,
                                  //   isOpen:
                                  //     item?.customise[0]?.name == undefined
                                  //       ? true
                                  //       : false,
                                  //   quantity: itemQuantity[index] ?? 1,
                                  // });

                                  // setNewAddonData({
                                  //   add: item,
                                  //   quantity: itemQuantity?.[index] || 1,
                                  // });

                                  // }
                                  // } else {
                                  //   // toast.error(
                                  //   //   "Atleast 1 quantity is required."
                                  //   // );
                                  //   handleSubmit(
                                  //     e,
                                  //     item?._id,
                                  //     itemQuantity[index]
                                  //   );
                                  // }
                                  // }
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
        <Row >
          <Col>
            <WelcomeSection />
          </Col>
        </Row>
        <Row >
          <Col>
            <BestSellert data={promotionData} />
          </Col>
        </Row>
        <Row >
          <Col>
            <ContentPage data={homePage?.sections} />
          </Col>
        </Row>
        <Row >
          <Col>
            <TrendingProduct data={homeData?.bestSellerProduct} />
          </Col>
        </Row>
        <Row >
          <Col>
            <TestimonialsSection data={homePage?.sections} />
          </Col>
        </Row>
        <Row >
          <Col>
            <BlogSection />
          </Col>
        </Row>
        <Row >
          <Col>
            <Faq data={faqlist} />
          </Col>
        </Row>
      </Container>
    </section >
  );
}
