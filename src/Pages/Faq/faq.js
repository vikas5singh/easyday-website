import React, { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { useDispatch, useSelector } from "react-redux";
import Fade from "react-reveal/Fade";
import { faqList } from "../../Redux/actions";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";

export default function Faq() {
  const dispatch = useDispatch();
  const [state, setState] = useState({ list: [] });
  const [open, setOpen] = useState(false);
  const [Id, setId] = useState("");
  const faqlist = useSelector((s) => s.address.faqs);

  const openHandler = (id) => {
    if (id === Id) {
      setId("");
    } else {
      setId(id);
    }
    setOpen(!open);
  };

  useEffect(() => {
    setState((pre) => ({
      ...pre,
      list: faqlist,
    }));
  }, [faqlist]);

  useEffect(() => {
    dispatch(faqList({}));
  }, [dispatch]);
  return (
    <>
      <Header />
      <section className="container faq-page mt-5 pb-5">
        <div className="inner">
          {/* <Fade>
        <div className="Accordion-main">
          <h4 className="text-center FAQ-col">FAQ</h4>
          <Accordion defaultActiveKey="0">
            {state.list &&
              state.list?.length > 0 &&
              state.list?.map((item, index) => {
                return (
                  <Accordion.Item eventKey="0" key={item._id}>
                    <Accordion.Header onClick={() => openHandler(item._id)}>
                      {item.question}
                    </Accordion.Header>
                    <Accordion.Body>{item.answer}</Accordion.Body>
                  </Accordion.Item>
                );
              })}
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                I entered the wrong CVV, why did my transaction still go
                through?
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </Fade> */}
          <h4 className="text-center FAQ-col">FAQ</h4>
          {state.list &&
            state.list?.length > 0 &&
            state.list?.map((item, index) => {
              return (
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item faq-que" key={item._id}>
                    <h2
                      className="accordion-header"
                      id="headingOne"
                      onClick={() => openHandler(item._id)}
                    >
                      <button
                        className={
                          "accordion-button collapsed" +
                          (item._id === Id ? open : "")
                        }
                        type="button"
                        data-bs-toggle="collapse"
                        aria-expanded="true"
                      >
                        {item.question}
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className={
                        Id === item._id ? "show" : "accordion-collapse collapse"
                      }
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <div
                          className="dangerHTML"
                          dangerouslySetInnerHTML={{ __html: item.answer }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
      <Footer />
    </>
  );
}
