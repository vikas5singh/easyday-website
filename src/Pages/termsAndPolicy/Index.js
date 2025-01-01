import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../Component/Footer/Footer";
import Header from "../../Component/Header/Header";
import { termCondition } from "../../Redux/actions";

const Index = () => {
  const dispatch = useDispatch();

  const content = useSelector((s) => s.tac?.data?.sections);

  useEffect(() => {
    dispatch(termCondition());
  }, [dispatch]);
  return (
    <>
      <Header />
      <div className="banner">
        <div className="banner-image-container">
          <img
            src={content?.find(ele => ele?.type == "contentImage")?.banner?.link}
            alt="About Us Banner"
            className="img-fluid"
            style={{ objectFit: "inherit" }}
          />
          <div className="banner-overlay d-flex ">
            <h2 className="text-white">Term & Conditions</h2>
          </div>
        </div>
      </div>
      <section className="privacy-page section-height py-5">
        <div className="container">
          {/* About Us Section */}
          <div className="row align-items-center mt-4">
            <div className="col-md-12 my-2 pb-5">
              <div className="section-header">
                <div className="section-header text-center pb-2">
                  <h2 className="pb-2">Term & Conditions</h2>
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
