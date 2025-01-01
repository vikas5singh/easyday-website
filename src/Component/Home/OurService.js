import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
const OurService = ({ data }) => {
    // Array of services with icon placeholders and names
    const Tab = useSelector((s) => s.restaurant.tabData?.data)
    return (
        <div className="container py-5">
            <div className="section-header text-center heading-wrap">
                <h2 className="text-center mb-4">Our Services</h2>
                <p className="text-center mb-4">{Tab?.storeName} brings you hassle-free shopping and fast delivery. Explore a wide range of products, enjoy seamless navigation, secure payments, and real-time delivery tracking—all tailored to make your everyday easier!</p>
                <p>&nbsp;</p>
            </div>
            <div className="row">
                {(data || [])?.map((service) => (

                    <div key={service?._id} className="col-6 col-md-4 col-lg-2 mb-4 d-flex flex-column align-items-center">
                        <Link to={`/store/${service?._id}`} className="text-dark mb-4 d-flex flex-column align-items-center">
                            <div
                                className="d-flex justify-content-center align-items-center bg-primary text-white"
                                style={{
                                    width: "80px",
                                    height: "80px",
                                    borderRadius: "50%",
                                    fontSize: "24px",
                                }}
                            >
                                <img
                                    loading="lazy"
                                    src={service?.storeTypeImage?.link}
                                    alt="image"
                                    className="img-fluid"
                                />
                            </div>
                            <p className="mt-2 text-center">{service?.label}</p>
                        </Link>
                    </div>

                ))}
            </div>
        </div>
    );
};

export default OurService;
