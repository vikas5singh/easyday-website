import React, { useEffect, useState } from "react";
import {
    Container,
    Row,
    Col,
    Card,
    Badge,
    Dropdown,
} from "react-bootstrap";
import { MdShoppingCart, MdStar, MdStarOutline } from "react-icons/md";
import Fade from "react-reveal/Fade";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
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
    faqList,
    getProductDetails,
} from "../../Redux/actions";
import { toast } from "react-toastify";
import ProductDetails from "./TestProduct";
import Carousel from 'react-bootstrap/Carousel'; // Importing carousel for image slider

export default function Tacostabbing(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [counter, setCounter] = useState(0);
    const [state, setState] = useState({});

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
    const [selectedVariation, setSelectedVariation] = useState(null); // State for selected variation
    const [quantity, setQuantity] = useState(1); // State for quantity
    const [cardItem, setCardItem] = useState({})

    const [addonsState, setAddonsState] = useState({ addons: [], customise: [] });

    const currentCartState = useSelector((s) => s.address?.savedData);

    // freshCatetory
    const [addonValue, setAddonValue] = useState([]);
    const isAuth = useSelector((s) => s.login?.token);
    const [_isAuth, setIsAuth] = useState(false);
    const [newAddonData, setNewAddonData] = useState({ add: "", quantity: "" });
    const [activeIndex, setActiveIndex] = useState(0);

    // Function to handle thumbnail click
    const handleThumbnailClick = (index) => {
        setActiveIndex(index);
    };
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

    const menu = useSelector((s) => s.restaurant.productDetails);
    const restId = useSelector((s) => s.restaurant.dataDetails?._id);
    const altitude = useSelector((s) => s.restaurant?.latLng);

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
                ...menu?._id,
            }));
        }
    }, [menu]);

    const [searchParams] = useSearchParams();

    let isFreshMarket = searchParams.get("type") === "fresh";

    useEffect(() => {
        if (isFreshMarket) {
            return dispatch(freshMarkettDetail(state?.vendor?._id));
        } else {
            dispatch(restaurantDetail({ storeTypeId: props?.storeId, _id: state?.vendor?._id }));
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
        dispatch(getHomePage());
        dispatch(faqList({}));
        dispatch(getHomeData({
            customerLocation: {
                lat: altitude?.customerLocation?.lat,
                lng: altitude?.customerLocation?.lng,
            },
        }));
    }, []);

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
                    ...response?.data,
                }));
            }
        };
        dispatch(getProductDetails({ _id: props.editId }, cartCallbackss));
    }, [state?.vendor?._id, props?.editId, props?.storeId]);

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
        } else
            setcustomiseCart((pre) => ({
                ...pre,
                [name]: value,
                variations: [cartData],
            }));
    };

    const customiseDelete = () => {
        setcustomiseCart((pre) => ({
            ...pre,
            variations: [],
        }));
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
                    cart_key: cartKey,
                    tip: "no",
                    tipAmount: 0,
                },
                cartCallback
            )
        );
    }
    const handleVariationChange = (variation) => {
        setSelectedVariation(variation);
    };

    console.log("selectedVariation", selectedVariation);
    const handleQuantityChange = (type) => {
        setQuantity((prevQuantity) => {
            if (type === "increment") return prevQuantity + 1;
            if (type === "decrement" && prevQuantity > 1) return prevQuantity - 1;
            return prevQuantity;
        });
    };

    function onAddToCart({
        item,
        // quantity = 1,
        addons = [],
        // variations = [],
        instructions = "",
    }) {
        if (!_isAuth) {
            toast.error("Please Login first to make Order!");
            return;
        } else {
            const callBack = (Data) => {
                if (Data.status == "success") {
                    setCartKey(Data?.data?.cart_key);
                    setCardItem({ item: item?._id, quantity, storeTypeId: props?.storeId, vendorId: state?.vendor?._id });
                } else {
                    toast.error(Data.data.message);
                }
            };

            dispatch(
                addCart(
                    {
                        cart_key: cartKey || null,
                        product: item._id,
                        quantity,
                        addons: addons,
                        variations: /*variations*/[selectedVariation],
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
            refreshCart(true);
        } else {
            localStorage.removeItem('cartKey');
            localStorage.removeItem('cartInfo');
        }
    }, [cartKey, cardItem]);

    const product = state;

    return (
        <section className="tabbing-tacos tabbing-home home-bg">
            <Container fluid>
                <div className="tacos-tabbing">
                    <div className="tab-frame tacos-frame">
                        <div className="Breakfast-tab tacoscomo-class gifsection">
                            <Fade>
                                <Row>
                                    <Col md={6}>
                                        <Card className="border-0 shadow">
                                            {/* Featured Image Carousel */}
                                            <Carousel
                                                activeIndex={activeIndex}
                                                onSelect={(selectedIndex) => setActiveIndex(selectedIndex)}
                                                indicators={false}
                                                interval={3000} // Auto scroll interval
                                                className="text-center p-4"
                                            >
                                                {product.images?.length > 0 ? (
                                                    product.images.map((image, index) => (
                                                        <Carousel.Item key={index}>
                                                            <img
                                                                src={image.link}
                                                                alt={`Slide ${index}`}
                                                                className="img-fluid rounded shadow-sm"
                                                                style={{
                                                                    "height": "500px", /* Set the desired fixed height */
                                                                    "objectFit": "cover", /* Ensures the image fills the height while maintaining its aspect ratio */
                                                                    "width": "100%", /* Keep the image responsive */
                                                                }}
                                                            />
                                                        </Carousel.Item>
                                                    ))
                                                ) : (
                                                    <Carousel.Item>
                                                        <img
                                                            src={product.featured_image?.link || "https://via.placeholder.com/500"}
                                                            alt={product.name}
                                                            className="img-fluid rounded shadow-sm"
                                                        />
                                                    </Carousel.Item>
                                                )}
                                            </Carousel>

                                            {/* Thumbnails Section */}
                                            <Row className="g-2 p-3">
                                                {product.images?.map((image, index) => (
                                                    <Col xs={3} key={index}>
                                                        <img
                                                            src={image.link}
                                                            alt={`Thumbnail ${index}`}
                                                            className={`img-fluid rounded border ${activeIndex === index ? "border-primary" : ""
                                                                }`}
                                                            onClick={() => handleThumbnailClick(index)}
                                                            style={{ cursor: "pointer" }}
                                                        />
                                                    </Col>
                                                ))}
                                            </Row>
                                        </Card>
                                    </Col>

                                    {/* Product Details */}
                                    <Col md={6}>
                                        <h2>{product.name}</h2>
                                        <Badge bg="success" className="mb-2">
                                            {product.stock_status === "instock" ? "In Stock" : "Out of Stock"}
                                        </Badge>
                                        {product.bestSeller && (
                                            <Badge bg="warning" className="ms-2">
                                                Best Seller
                                            </Badge>
                                        )}

                                        <p className="text-muted" dangerouslySetInnerHTML={{ __html: product.short_description }}></p>

                                        {/* Pricing */}
                                        <div className="d-flex align-items-center mb-3">
                                            <h4 className="text-success me-2">
                                                ₹{product.price}
                                            </h4>
                                            {product.compare_price && (
                                                <h5 className="text-muted text-decoration-line-through">
                                                    ₹{product.compare_price}
                                                </h5>
                                            )}
                                        </div>
                                        {/* Variations */}
                                        <div className="mb-3">
                                            <h6>Select Variation:</h6>
                                            <Dropdown>
                                                <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
                                                    {(selectedVariation?.variation_title || "Choose") + (selectedVariation?.price ? (" -₹" + selectedVariation?.price) : " a Variation") || "Choose a Variation"}
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    {product.variations?.map((variation) => (
                                                        <Dropdown.Item
                                                            key={variation._id}
                                                            onClick={() => handleVariationChange(variation)}
                                                        >
                                                            {variation.variation_title} - ₹{variation.price}
                                                        </Dropdown.Item>
                                                    ))}
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>

                                        {/* Quantity Selector */}
                                        <div className="mb-3">
                                            <h6>Quantity:</h6>
                                            <div className="d-flex align-items-center">
                                                <Button
                                                    variant="outline-secondary"
                                                    onClick={() => handleQuantityChange("decrement")}
                                                >
                                                    -
                                                </Button>
                                                <span className="mx-3 fs-5">{quantity}</span>
                                                <Button
                                                    variant="outline-secondary"
                                                    onClick={() => handleQuantityChange("increment")}
                                                >
                                                    +
                                                </Button>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <div className="mt-4">
                                            <h5>Description</h5>
                                            <p
                                                className="text-muted"
                                                dangerouslySetInnerHTML={{ __html: product.description }}
                                            ></p>
                                        </div>

                                        {/* Categories */}
                                        <div className="mt-4">
                                            <h6>Categories:</h6>
                                            <ul className="list-inline">
                                                {product.categories?.map((category) => (
                                                    <li key={category._id} className="list-inline-item">
                                                        <Badge bg="info">{category.catName}</Badge>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Ratings */}
                                        <div className="mt-4">
                                            <h6>Rating:</h6>
                                            <div className="d-flex align-items-center">
                                                {[...Array(5)].map((_, index) => (
                                                    <span key={index}>
                                                        {index < product.average_rating ? (
                                                            <MdStar color="gold" />
                                                        ) : (
                                                            <MdStarOutline />
                                                        )}
                                                    </span>
                                                ))}
                                                <span className="ms-2 text-muted">
                                                    ({product.rating_count} reviews)
                                                </span>
                                            </div>
                                        </div>

                                        {/* Add to Cart Button */}
                                        <Button
                                            className="btn btn-success"
                                            onClick={() =>
                                                onAddToCart({ item: product, addons: [], variations: [] })
                                            }
                                        >
                                            <MdShoppingCart /> Add to Cart
                                        </Button>
                                    </Col>
                                </Row>
                            </Fade>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
