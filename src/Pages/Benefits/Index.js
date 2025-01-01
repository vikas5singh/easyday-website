import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../Component/Footer/Footer";
import Header from "../../Component/Header/Header";
import { benefits } from "../../Redux/actions";

const Index = () => {
    const dispatch = useDispatch();

    const content = useSelector((s) => s.benefit?.data?.sections);
    console.log("content=====>", content)

    useEffect(() => {
        dispatch(benefits());
    }, [dispatch]);
    return (
        <>
            <Header />
            <section className="privacy-page section-height py-5">
                <div className="container">
                    {/* Banner Section */}
                    <div className="row">
                        <div className="col-md-12">
                            <div className="banner-section text-center">
                                <img
                                    src={content?.find(ele => ele?.type == "contentImage")?.banner?.link}
                                    alt="About Us Banner"
                                    className="img-fluid w-100"
                                    style={{ maxHeight: '400px', objectFit: 'cover' }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* About Us Section */}
                    <div className="row align-items-center mt-4">
                        <div className="col-md-12 my-2 pb-5">
                            <div className="section-header">
                                <div className="section-header text-center pb-2">
                                    <h2 className="pb-2">Benefits</h2>
                                    {(content || [])?.map((ele, index) => (
                                        <p
                                            key={index}
                                            className="about-style"
                                            dangerouslySetInnerHTML={{
                                                __html: ele?.content,
                                            }}
                                        ></p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Index;
