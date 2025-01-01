import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
const WelcomeSection = () => {
    const Tab = useSelector((s) => s.restaurant.tabData?.data)
    const boxes = [
        { title: "Vendor Join", image: "/images/access.png", link: "/vendorsignup" },
        { title: "Restaurant Join", image: "/images/scale.png", link: "/restaurantsignup" },
        { title: "Driver Join", image: "/images/manage.png", link: "/driversignup" },
        { title: "Service Provider Join", image: "/images/implement.png", link: "/serviceprovidersignup" },
    ];
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
                    slidesToShow: 4,
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
        <section
            className="Applink py-2"
        >
            <Container>
                <Row className="boxes">
                    <Slider {...settings} className="aadd-slider">
                        {boxes.map((box, index) => (
                            <Col lg="3" className="my-2 px-1" >
                                <Link
                                    to={`${box?.link}`}
                                    className="link text-dark h-100"
                                >
                                    <div className="cardCstm bg-white position-relative d-flex align-items-center gap-10 p-3 rounded justify-content-between flex-wrap">
                                        <span className="icn position-absolute">
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                width="1em"
                                                height="25"
                                                fill="currentColor"
                                                viewBox="0 0 36 36"
                                            //   style="top: calc(50% - 12px); right: 0px; position: absolute;"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M18.2354 2H24.2711L36 18L24.2711 34H18.2354L28.1237 20.56H0V15.44H28.1237L18.2354 2Z"
                                                    fill="currentColor"
                                                ></path>
                                            </svg>
                                        </span>
                                        <div className="img-wrp">
                                            <img
                                                src={Tab?.logo?.link}
                                                alt=""
                                                className="img-fluid px-4"
                                            />
                                        </div>
                                        <div className="content">
                                            <h6 className=" m-0">{box?.title}</h6>
                                        </div>
                                    </div>
                                </Link>
                            </Col>
                        ))}
                    </Slider>
                </Row>
            </Container>
        </section>
    );
};

export default WelcomeSection;
