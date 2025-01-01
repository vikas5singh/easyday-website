import React, { useState } from "react";

export default function Faq(props) {
    const [open, setOpen] = useState(false);
    const [Id, setId] = useState("");
    const openHandler = (id) => {
        if (id === Id) {
            setId("");
        } else {
            setId(id);
        }
        setOpen(!open);
    };
    return (
        <section className="container faq-page mt-5 pb-5">
            <div className="heading-wrap">
                <h2 className="text-center mb-4">Our FAQ</h2>
                <p>&nbsp;</p>
            </div>
            <div className="inner">
                {props?.data &&
                    props?.data?.length > 0 &&
                    props?.data?.map((item, index) => {
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
    );
}
