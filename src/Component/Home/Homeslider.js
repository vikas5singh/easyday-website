import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { getBanner } from "../../Redux/actions";

export default function Homeslider() {
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

  const banners = useSelector((s) => s?.banner?.banner);
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
                {/* <img
                  loading="lazy"
                  src={itm?.promotionImage?.link}
                  alt="sliderone"
                  className="img-fluid"
                /> */}
                <div className="banner-image-container">
                  <img
                    loading="lazy"
                    src={itm?.promotionImage?.link}
                    alt={`banner-${index}`}
                    className="img-fluid"
                  />
                  <div className="banner-overlay d-flex gap-10">
                    <a href={itm?.promotionImage?.link} className="">
                      <img style={{
                        "maxWidth": "150px",
                        "height": "auto",
                        // "marginRight": "4px",
                        "transition": "transform 0.3s ease"
                      }} src="https://hlclives3.s3.us-east-2.amazonaws.com/16850991610031672292495495play-img-300x89.png" alt="Download on Google Play" />
                    </a>
                    <a href={itm?.promotionImage?.link} className="">
                      <img style={{
                        "maxWidth": "150px",
                        "height": "auto",
                        // "marginRight": "4px",
                        "transition": "transform 0.3s ease"
                      }} src="https://hlclives3.s3.us-east-2.amazonaws.com/16850991501811672292485923app-img-300x89.png" alt="Download on App Store" />
                    </a>
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
