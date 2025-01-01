import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
const Promotions = ({ data }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 400,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024, // Tablet devices
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768, // Mobile devices
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480, // Small screens
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="gifsection">
            <div className="section-header text-center heading-wrap">
                <h2>Our Best Sellers</h2>
                <p>Discover top Sellers loved by our customers</p>
                <p>&nbsp;</p>
            </div>
            <Slider {...settings} className="aadd-slider">
                {data && data.length > 0 ? (
                    data.map((item, index) => (
                        <div key={index} className="position-relative add-text">
                            <img
                                loading="lazy"
                                src={item?.promotionImage?.link || "/placeholder-image.png"}
                                alt={item?.promotionName || "Promotion"}
                                style={{
                                    width: "100%",
                                    height: "500px",
                                    objectFit: "cover",
                                    borderRadius: "10px",
                                    border: "5px solid white",
                                }}
                            />
                            <h3
                                style={{
                                    margin: "10px 0 5px",
                                    fontSize: "1rem",
                                    fontWeight: "bold",
                                    textAlign: "center",
                                }}
                            >
                                {item.promotionName || "Untitled"}
                            </h3>
                            <p
                                className="discount"
                                style={{
                                    color: "#f16114",
                                    fontSize: "0.9rem",
                                    textAlign: "center",
                                }}
                            >
                                <Link to={`providers/${item?.storeTypeId?._id}/${item?._id}`}>{item.storeTypeId?.label || "General"}</Link>
                            </p>
                        </div>
                    ))
                ) : (
                    <p
                        style={{
                            textAlign: "center",
                            color: "#777",
                            padding: "20px",
                        }}
                    >
                        No promotions available.
                    </p>
                )}
            </Slider>
        </div>
    );
};

export default Promotions;
