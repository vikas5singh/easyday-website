import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const ContentPage = (props) => {
    let featureData = (props?.data || [])?.find(ele => ele?.type === "contentImage");
    console.log("data=>", featureData);
    const Tab = useSelector((s) => s.restaurant.tabData?.data)
    return (
        <Container fluid className="content-page gifsection mt-5">
            <Row className="align-items-center">
                <Col lg={6} md={12} className="text-center mb-4 mb-lg-0">
                    <img
                        src={featureData?.banner?.link || "/placeholder-image.png"} // Add fallback image
                        alt={featureData?.heading || "App Promotion"}
                        className="img-fluid rounded content-image"
                    />
                </Col>
                <Col lg={6} md={12}>
                    <div className="content-wrapper">
                        <h1 className="mb-4">{featureData?.heading || `Explore ${Tab?.storeName}`}</h1>
                        <p
                            className="about-style mb-4"
                            dangerouslySetInnerHTML={{
                                __html: featureData?.content || `Discover the convenience of ${Tab?.storeName}!`,
                            }}
                        ></p>
                        <p className="mb-4">
                            Experience the convenience of ordering food and grocery items with instant delivery through{" "}
                            <strong>{Tab?.storeName}</strong>. Simplify your life and enjoy a hassle-free shopping experience today!
                        </p>
                        <p className="download-prompt mb-4">Download the {Tab?.storeName} App Now!</p>
                        <div className="d-flex justify-content-start gap-3">
                            <a
                                href="https://apps.apple.com/in/developer/1timeshop/id1588069769"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="store-badge-link"
                            >
                                <img
                                    src="https://hlclives3.s3.us-east-2.amazonaws.com/16850991501811672292485923app-img-300x89.png"
                                    alt="Download on App Store"
                                    className="store-badge"
                                />
                            </a>
                            <a
                                href="https://play.google.com/store/apps/developer?id=1TimeShop"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="store-badge-link"
                            >
                                <img
                                    src="https://hlclives3.s3.us-east-2.amazonaws.com/16850991610031672292495495play-img-300x89.png"
                                    alt="Download on Google Play"
                                    className="store-badge"
                                />
                            </a>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ContentPage;
