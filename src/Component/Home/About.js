import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../Component/Footer/Footer";
import Header from "../../Component/Header/Header";
import { aboutUs } from "../../Redux/actions";
import { Link } from "react-router-dom";

const About = () => {
    const dispatch = useDispatch();

    const content = useSelector((s) => s.aboutUs?.data?.sections);
    useEffect(() => {
        dispatch(aboutUs());
    }, [dispatch]);
    return (
        <section className="privacy-page section-height py-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-12 my-2 pb-5">
                        <div className="section-header">
                            <div className="section-header text-center pb-2">
                                {(content || []).map((ele, index) => {
                                    const maxLength = 500; // Set your desired limit (in characters)
                                    const contentPreview = ele?.content?.slice(0, maxLength); // Slice content up to maxLength
                                    const showFullContent = ele?.content?.length > maxLength; // Check if content exceeds maxLength

                                    return (
                                        <div key={index}>
                                            <p className="about-style" dangerouslySetInnerHTML={{ __html: contentPreview }}></p>
                                        </div>
                                    );
                                })}
                                <Link to="/about" className="btn btn-danger">
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
