import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { getBanner } from "../../Redux/actions";
import moment from "moment";
export default function Banner() {
    // console.log(food, "food");
    const dispatch = useDispatch();
    const settings = {
        arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        focusOnSelect: true,
        pauseOnHover: false,
    };

    const banners = useSelector((s) => s.restaurant.data?.promotionData);
    console.log("banners", banners);

    // const banners = useMemo(() => bannersall, []);

    useEffect(() => {
        dispatch(getBanner());
    }, []);

    if (!(banners?.length > 0)) {
        return null;
    }

    return (
        <section className="home-lsider">
            <Slider {...settings}>
                {banners && banners.length > 0 ? (
                    banners.map((itm, index) => {
                        return itm.promotionImage != null ? (
                            <div className="banner">
                                <div className="banner-image-container">
                                    <img
                                        loading="lazy"
                                        src={itm?.promotionImage?.link}
                                        alt={`banner-${index}`}
                                        className="img-fluid"
                                    />
                                    <div className="banner-overlay gap-10 text-light">
                                        <h1 className="text-capitalize">{itm?.storeTypeId?.label}</h1>
                                        <h2 className="text-capitalize">{itm?.vendor?.name}</h2>
                                        <h4 className="text-capitalize">{itm?.promotionName}</h4>
                                        <p>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                            >
                                                <circle cx="12" cy="12" r="10" fill="white" />
                                                <line x1="12" y1="6" x2="12" y2="12" stroke="green" stroke-width="2" />
                                            </svg>
                                            Status:{" "}
                                            {itm?.vendorOpenClose}

                                        </p>
                                    </div>
                                </div>
                            </div>

                        ) : (
                            <div>
                                <img
                                    loading="lazy"
                                    src={require("../../Common/image/foods.webp")}
                                    alt="sliderone"
                                    className="img-fluid"
                                />
                            </div>
                        );
                    })
                ) : (
                    <div>
                        <img
                            loading="lazy"
                            src={require("../../Common/image/foods.webp")}
                            alt="sliderone"
                            className="img-fluid"
                        />
                    </div>
                )}
            </Slider>
        </section>
    );
}
