import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
const Features = ({ data, cls }) => {

    let featureData = (data || [])?.find(ele => ele?.type == "feature")?.multipleContent
    console.log("data=>", featureData)
    const settings = {
        dots: false,
        infinite: true,
        speed: 400,
        slidesToShow: 3,
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
        <div className={`${!cls && "gifsection mt-5"}`}>
            <div class="heading-wrap">
                <h2>Become a Partner</h2>
                <p>Grow your business by partnering with us.</p>
                <p>&nbsp;</p>
            </div>
            <Slider {...settings} className="aadd-slider">

                {featureData && featureData.length > 0 ? (
                    featureData.map((item, index) => (
                        <div key={index} className="position-relative add-text">
                            <img
                                loading="lazy"
                                src={item?.banner?.link || "/placeholder-image.png"}
                                alt={item?.heading || "Promotion"}
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
                                {item.heading || "Untitled"}
                            </h3>
                            <p className="about-style" dangerouslySetInnerHTML={{ __html: item?.content }}></p>

                            <p
                                className="discount"
                                style={{
                                    color: "#f16114",
                                    fontSize: "0.9rem",
                                    textAlign: "center",
                                }}
                            >
                                <Link to={item?.buttonLink}>{item.buttonText}</Link>
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
                        No Features available.
                    </p>
                )}
            </Slider>
        </div>
    );
};

export default Features;
