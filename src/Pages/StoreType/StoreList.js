
import React, { useEffect, useState, Fragment, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import WelcomeSection from "../../Component/Home/WelcomeSection";
import moment from "moment/moment";
import classnames from "classnames";
import {
    getBanner,
    nearbyRestaurant,
    getHomeData,
} from "../../Redux/actions";
import OurService from "../../Component/Home/OurService";
import BlogSection from "../../Component/Home/BlogSection";
export default function StoreList() {
    const { storeId, editId } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [locationFound, setLocationFound] = useState(null);
    const [loc, setLoc] = useState({
        customerLocation: {
            lat: 0,
            lng: 0,
        },
        categoryId: "",
        categoryRefId: "",
        categoryFreshId: "",
    });

    const homePage = useSelector((s) => s.restaurant.homePage)
    const altitude = useSelector((s) => s.restaurant?.latLng);
    const RestaurantS = useSelector((s) => s.restaurant.data?.data);
    const homeData = useSelector((s) => s.restaurant.homeData);
    const Restaurants = useMemo(() => RestaurantS);
    const CallNearby = (Data) => {
        dispatch(nearbyRestaurant(Data));
        dispatch(getHomeData(Data))
    };

    useEffect(() => {
        const location = navigator.geolocation.getCurrentPosition(
            function (position) {
                setLoc((pre) => ({
                    ...pre,
                    customerLocation: {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    },
                }));
                setLocationFound(true);

                var categoryId = undefined;

                if (loc.categoryId && !Array.isArray(categoryId)) {
                    categoryId = [loc.categoryId];
                }

                CallNearby({
                    customerLocation: {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    },
                    categoryRefId: categoryId,
                    restaurantType: loc.restaurantType,
                });
            },
            (err) => {
                setLocationFound(false);
            }
        );
    }, [dispatch]);

    useEffect(() => {
        CallNearby({
            customerLocation: {
                lat: altitude.customerLocation?.lat,
                lng: altitude.customerLocation?.lng,
            },
            storeTypeId: editId,
        });
    }, [altitude, editId]);
    return (
        <section className="tabbing-home home-bg">
            <div className="px-3 px-md-4">
                <Row >
                    <Col>
                        <WelcomeSection data={homePage?.sections} />
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <div className="home-tabbing">
                            <div className="section-header text-center pt-5 heading-wrap">
                                <h2 className="text-center mb-4">Your Nearby</h2>
                                <p className="text-center mb-4">easYday brings you hassle-free shopping and fast delivery. Explore a wide range of products, enjoy seamless navigation, secure payments, and real-time delivery tracking—all tailored to make your everyday easier!</p>
                                <p>&nbsp;</p>
                            </div>
                            <div className="tab-frame">
                                <Fragment>
                                    {!(Restaurants?.length > 0) && !altitude?.address && locationFound === false && (
                                        <div className="lead my-5">
                                            Kindly enable location access to find nearby
                                            restaurants.
                                        </div>
                                    )}
                                    {!Restaurants?.length > 0 && altitude?.address && (
                                        <div className="lead my-5">
                                            Data not found your nearby Location...
                                        </div>
                                    )}
                                    <div className="Restraunt-tab cooman-class">
                                        <Row>
                                            {Restaurants &&
                                                Restaurants.length > 0 &&
                                                Restaurants?.map((item, index) => {
                                                    var cleaned = ("" + item.mobileNumber).replace(
                                                        /\D/g,
                                                        ""
                                                    );
                                                    var match = cleaned.match(
                                                        /^(\d{3})(\d{3})(\d{4})$/
                                                    );
                                                    return (
                                                        <>

                                                            <Col lg={3} md={6} sm={6} xs={12} key={index}>
                                                                <Link
                                                                    to={
                                                                        item?.url
                                                                            ? `//${item?.url}`
                                                                            : `/providers/${item?.storeType?._id}/${item?._id}`
                                                                    }
                                                                    // target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="position-relative"
                                                                >
                                                                    <div
                                                                        className={classnames(
                                                                            "restra-card-status-badge",
                                                                            {
                                                                                active:
                                                                                    item.restaurantStatus?.toLowerCase() !==
                                                                                    "offline",
                                                                            }
                                                                        )}
                                                                    >
                                                                        {item.restaurantStatus}
                                                                    </div>
                                                                    <div
                                                                        className={classnames(
                                                                            "restra-card position-relative",
                                                                            {
                                                                                inactive:
                                                                                    item.restaurantStatus?.toLowerCase() ===
                                                                                    "offline",
                                                                            }
                                                                        )}
                                                                    >
                                                                        <div className="card-img">
                                                                            <img
                                                                                loading="lazy"
                                                                                src={item.profileImage?.link}
                                                                                alt="image"
                                                                                className="img-fluid"
                                                                            />
                                                                        </div>
                                                                        <div className="card-content">
                                                                            <h5>{item.name}</h5>
                                                                            <p>
                                                                                <svg
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    width="24"
                                                                                    height="24"
                                                                                    viewBox="0 0 32 32"
                                                                                    fill="none"
                                                                                >
                                                                                    <path
                                                                                        d="M16 26C14.5565 24.8032 13.2185 23.4911 12 22.0774C10.1714 19.9545 8 16.7929 8 13.7802C7.99921 12.2415 8.46801 10.7372 9.34708 9.4577C10.2261 8.17815 11.476 7.18085 12.9384 6.592C14.4007 6.00316 16.01 5.84925 17.5624 6.14975C19.1148 6.45025 20.5406 7.19165 21.6594 8.28012C22.4043 9.00094 22.9946 9.85819 23.3964 10.8023C23.7982 11.7463 24.0033 12.7585 24 13.7802C24 16.7929 21.8285 19.9545 20 22.0774C18.7815 23.4911 17.4435 24.8032 16 26ZM16 10.4475C15.0907 10.4475 14.2186 10.7986 13.5756 11.4236C12.9326 12.0486 12.5714 12.8963 12.5714 13.7802C12.5714 14.664 12.9326 15.5117 13.5756 16.1367C14.2186 16.7617 15.0907 17.1128 16 17.1128C16.9093 17.1128 17.7814 16.7617 18.4243 16.1367C19.0673 15.5117 19.4285 14.664 19.4285 13.7802C19.4285 12.8963 19.0673 12.0486 18.4243 11.4236C17.7814 10.7986 16.9093 10.4475 16 10.4475Z"
                                                                                        fill="black"
                                                                                    />
                                                                                </svg>
                                                                                <span className="fw-bold">
                                                                                    Address :
                                                                                </span>
                                                                                {" "}
                                                                                {(() => {
                                                                                    var arr =
                                                                                        item.address?.split(",");
                                                                                    arr = arr
                                                                                        .splice(0, arr.length - 1)
                                                                                        .join(",");
                                                                                    return arr;
                                                                                })()}
                                                                            </p>

                                                                            <p>
                                                                                <svg
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    width="24"
                                                                                    height="20"
                                                                                    viewBox="0 0 24 24"
                                                                                    fill="none"
                                                                                >
                                                                                    <path
                                                                                        d="M8.3844 2.47925C8.90949 2.32093 9.47298 2.34723 9.98104 2.55377C10.4891 2.76032 10.9111 3.13465 11.1768 3.61445L11.2656 3.79325L12.06 5.55845C12.3011 6.09423 12.3793 6.68906 12.285 7.26897C12.1907 7.84888 11.928 8.38826 11.5296 8.82005L11.37 8.97845L10.1184 10.146C9.8928 10.3596 10.062 11.1864 10.878 12.6C11.6124 13.872 12.21 14.466 12.504 14.4984H12.5556L12.6192 14.4864L15.0792 13.734C15.4098 13.6327 15.7626 13.6286 16.0955 13.7225C16.4283 13.8163 16.7271 14.0041 16.956 14.2632L17.0652 14.4012L18.6936 16.6572C19.0127 17.0994 19.1718 17.6371 19.1445 18.1818C19.1172 18.7264 18.9053 19.2455 18.5436 19.6536L18.3972 19.8048L17.7468 20.4216C17.1628 20.9748 16.4322 21.3485 15.6419 21.4985C14.8516 21.6485 14.0349 21.5683 13.2888 21.2676C10.9668 20.3316 8.85719 18.1932 6.94079 14.874C5.02079 11.5464 4.2228 8.64605 4.5792 6.16205C4.68704 5.41117 4.99624 4.70351 5.47396 4.11424C5.95167 3.52497 6.58006 3.07608 7.2924 2.81525L7.524 2.73845L8.3844 2.47925Z"
                                                                                        fill="black"
                                                                                    />
                                                                                </svg>
                                                                                <span className="fw-bold">
                                                                                    Contact :
                                                                                </span>
                                                                                {" "}
                                                                                {match &&
                                                                                    "(" +
                                                                                    match[1] +
                                                                                    ") " +
                                                                                    match[2] +
                                                                                    "-" +
                                                                                    match[3]}
                                                                            </p>
                                                                            <p className="timing-open">
                                                                                <svg
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    width="24"
                                                                                    height="20"
                                                                                    viewBox="0 0 32 32"
                                                                                    fill="none"
                                                                                >
                                                                                    <path
                                                                                        d="M23.4913 8.08924H16.6026C16.4842 8.08924 16.3874 8.18611 16.3874 8.30451V9.59612C16.3874 9.71452 16.4842 9.81139 16.6026 9.81139H23.4913C23.6097 9.81139 23.7065 9.71452 23.7065 9.59612V8.30451C23.7065 8.18611 23.6097 8.08924 23.4913 8.08924ZM19.8855 11.7488H16.6026C16.4842 11.7488 16.3874 11.8457 16.3874 11.9641V13.2557C16.3874 13.3741 16.4842 13.471 16.6026 13.471H19.8855C20.0039 13.471 20.1008 13.3741 20.1008 13.2557V11.9641C20.1008 11.8457 20.0039 11.7488 19.8855 11.7488ZM10.9061 5.68091H9.74092C9.57409 5.68091 9.43954 5.81545 9.43954 5.98229V12.6556C9.43954 12.7525 9.48529 12.8413 9.56332 12.8978L13.57 15.8201C13.7046 15.917 13.8929 15.8901 13.9898 15.7555L14.6814 14.811V14.8083C14.7782 14.6738 14.7486 14.4854 14.6141 14.3886L11.2048 11.9237V5.98229C11.2074 5.81545 11.0702 5.68091 10.9061 5.68091Z"
                                                                                        fill="black"
                                                                                    />
                                                                                    <path
                                                                                        d="M19.7187 15.1364H18.1634C18.0127 15.1364 17.8701 15.2145 17.7894 15.3436C17.4476 15.8845 17.0494 16.385 16.5919 16.8425C15.8035 17.6309 14.8859 18.2498 13.8661 18.6803C12.8086 19.127 11.6865 19.353 10.5294 19.353C9.36963 19.353 8.24754 19.127 7.19272 18.6803C6.17288 18.2498 5.25529 17.6309 4.46686 16.8425C3.67844 16.054 3.05954 15.1364 2.629 14.1166C2.18231 13.0618 1.95628 11.9397 1.95628 10.7799C1.95628 9.62017 2.18231 8.50076 2.629 7.44325C3.05954 6.42341 3.67844 5.50583 4.46686 4.7174C5.25529 3.92898 6.17288 3.31007 7.19272 2.87954C8.24754 2.43285 9.37232 2.20682 10.5294 2.20682C11.6892 2.20682 12.8113 2.43285 13.8661 2.87954C14.8859 3.31007 15.8035 3.92898 16.5919 4.7174C17.0494 5.17485 17.4476 5.67535 17.7894 6.21622C17.8701 6.34538 18.0127 6.42341 18.1634 6.42341H19.7187C19.9044 6.42341 20.0228 6.22967 19.9394 6.06553C18.1849 2.57547 14.6276 0.307064 10.6559 0.261319C4.84089 0.188665 0.0107819 4.94882 1.83835e-05 10.7584C-0.0107451 16.5788 4.70635 21.3012 10.5267 21.3012C14.5496 21.3012 18.1661 19.0248 19.9394 15.4943C20.0228 15.3302 19.9017 15.1364 19.7187 15.1364Z"
                                                                                        fill="black"
                                                                                    />
                                                                                </svg>
                                                                                <span className="fw-bold">
                                                                                    Hours :
                                                                                </span>{" "}
                                                                                {moment(item?.startTime, [
                                                                                    "HH:mm",
                                                                                ]).format("hh:mm A") +
                                                                                    " To " +
                                                                                    moment(item?.closeTime, [
                                                                                        "HH:mm",
                                                                                    ]).format("hh:mm A")
                                                                                }
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                            </Col>
                                                        </>
                                                    );
                                                })}
                                        </Row>
                                    </div>
                                </Fragment>
                            </div>
                        </div>
                    </Col>

                </Row>
                <Row >
                    <Col style={{ "background": "white", "margin": "20px 10px" }}>
                        <OurService data={homeData?.resdata} />
                    </Col>
                </Row>
                <Row >
                    <Col>
                        <BlogSection data={homePage?.sections} />
                    </Col>
                </Row>
            </div>
        </section>
    );
}
