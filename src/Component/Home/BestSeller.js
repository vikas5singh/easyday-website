import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import { Button } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { MdRemove, MdAdd } from "react-icons/md";
import Slider from "react-slick";
import { addCart } from "../../Redux/actions";

export default function BestSellert(props) {
    const dispatch = useDispatch();
    const isAuth = useSelector((s) => s.login?.token);
    const [_isAuth, setIsAuth] = useState(false);
    const [itemQuantity, setItemQuantity] = useState({});
    const [showOptions, setShowOptions] = useState(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        rtl: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    useEffect(() => {
        setIsAuth(!!isAuth);
    }, [isAuth]);
    console.log("bestseller", props?.data);
    const onAddToCart = (item, quantity) => {
        if (!_isAuth) {
            toast.error("Please login to add items to the cart.");
            return;
        }

        const callback = (data) => {
            if (data.status === "success") {
                toast.success("Item added to cart!");
            } else {
                toast.error(data.data.message);
            }
        };

        dispatch(
            addCart(
                {
                    itemId: item._id,
                    quantity,
                },
                callback
            )
        );
    };

    const handleQuantity = (index, value) => {
        setItemQuantity((prev) => ({
            ...prev,
            [index]: Math.max(1, Math.min(10, value || 1)),
        }));
    };

    const ProductCard = ({ item, index }) => (
        <div className="tacos-card" key={index} style={{
            borderRadius: "10px",
            border: "10px solid white",
        }}>
            <div className="">
                <img
                    src={item.featured_image?.link}
                    alt={item.name || "Product Image"}
                    className="img-fluid"
                    style={{
                        width: "100%",
                        height: "400px",
                        objectFit: "cover",
                        // borderRadius: "10px",
                        // border: "5px solid white",
                    }}
                />
            </div>
            <div className="product-details tacos-card-content price-part">
                <h5 className="m-0 py-1 fw-bold">
                    {item.name}
                </h5>
                <div className="quantity-control">
                    <h5 className="product-price m-0 fw-sbold">
                        Rs {item.price.toFixed(2)}{" /"}{item.compare_price && (
                            <span className="compare-price ms-2">
                                <del>Rs {item.compare_price.toFixed(2)}</del>
                            </span>
                        )}</h5>
                </div>
            </div>
            <p className="m-0 fw-sbold">{item.short_description}</p>
            <div className="price-part">
                <div className="quantity-control">
                    <button
                        className="quantity-button minus"
                        onClick={() => handleQuantity(index, (itemQuantity[index] || 1) - 1)}
                    >
                        <MdRemove />
                    </button>
                    <span className="quantity-value">{itemQuantity[index] || 1}</span>
                    <button
                        className="quantity-button minus"
                        onClick={() => handleQuantity(index, (itemQuantity[index] || 1) + 1)}
                    >
                        <MdAdd />
                    </button>
                </div>

                <Button
                    className="add-to-cart-button"
                    onClick={() =>
                        onAddToCart(item, itemQuantity[index] || 1)
                    }
                    style={{
                        background: "rgb(241, 97, 20)"
                    }}
                >
                    + ADD
                </Button>
            </div>
        </div >
    );

    return (
        <section className="best-sellert-section gifsection mt-5 tabbing-tacos">
            <div className="section-header text-center heading-wrap">
                <h2>Our Best Products</h2>
                <p>Discover top products loved by our customers</p>
                <p>&nbsp;</p>
            </div>
            <Slider {...settings} className="product-slider">
                {(props?.data || []).length > 0 ? (
                    (props.data || []).map((item, index) => (
                        <ProductCard item={item} index={index} key={index} />
                    ))
                ) : (
                    <div className="no-items">
                        <h4>No Items Found!</h4>
                    </div>
                )}
            </Slider>
        </section>
    );
}
