import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../Component/Footer/Footer";
import Header from "../../Component/Header/Header";
import { privacyPolicy } from "../../Redux/actions";

const PrivacyPolicy = () => {
  const dispatch = useDispatch();

  const content = useSelector((s) => s.policy?.data?.sections?.[0]?.content);
  console.log("content")

  useEffect(() => {
    dispatch(privacyPolicy());
  }, [dispatch]);
  return (
    <>
      <Header />
      <section className="privacy-page section-height py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12 my-2 pb-5">
              <div className="section-header">
                <div className="section-header text-center pb-2">
                  <h2 className="pb-2">Privacy Policy</h2>
                  <p
                    className="about-style"
                    dangerouslySetInnerHTML={{
                      __html: content,
                    }}
                  ></p>
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

export default PrivacyPolicy;
