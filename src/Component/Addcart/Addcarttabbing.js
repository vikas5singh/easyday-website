import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import { Button } from "reactstrap";
import Cart from "./Cart";

const homedata = [
  {
    imgpath: "images/tacosone.png",
    cardhead: "Cheesy Gordita Crunch",
    cardpara: "Mushroom,capsicum toamto & amul cheese onion",
    price: "$80",
    stikeprice: "$95",
  },
  {
    imgpath: "images/tacosone.png",
    cardhead: "Cheesy Gordita Crunch",
    cardpara: "Mushroom,capsicum toamto & amul cheese onion",
    price: "$80",
    stikeprice: "$95",
  },
  {
    imgpath: "images/tacosone.png",
    cardhead: "Cheesy Gordita Crunch",
    cardpara: "Mushroom,capsicum toamto & amul cheese onion",
    price: "$80",
    stikeprice: "$95",
  },
  {
    imgpath: "images/tacosone.png",
    cardhead: "Cheesy Gordita Crunch",
    cardpara: "Mushroom,capsicum toamto & amul cheese onion",
    price: "$80",
    stikeprice: "$95",
  },
  {
    imgpath: "images/tacosone.png",
    cardhead: "Cheesy Gordita Crunch",
    cardpara: "Mushroom,capsicum toamto & amul cheese onion",
    price: "$80",
    stikeprice: "$95",
  },
  {
    imgpath: "images/tacosone.png",
    cardhead: "Cheesy Gordita Crunch",
    cardpara: "Mushroom,capsicum toamto & amul cheese onion",
    price: "$80",
    stikeprice: "$95",
  },
  {
    imgpath: "images/tacosone.png",
    cardhead: "Cheesy Gordita Crunch",
    cardpara: "Mushroom,capsicum toamto & amul cheese onion",
    price: "$80",
    stikeprice: "$95",
  },
  {
    imgpath: "images/tacosone.png",
    cardhead: "Cheesy Gordita Crunch",
    cardpara: "Mushroom,capsicum toamto & amul cheese onion",
    price: "$80",
    stikeprice: "$95",
  },
  {
    imgpath: "images/tacosone.png",
    cardhead: "Cheesy Gordita Crunch",
    cardpara: "Mushroom,capsicum toamto & amul cheese onion",
    price: "$80",
    stikeprice: "$95",
  },
  {
    imgpath: "images/tacosone.png",
    cardhead: "Cheesy Gordita Crunch",
    cardpara: "Mushroom,capsicum toamto & amul cheese onion",
    price: "$80",
    stikeprice: "$95",
  },
  {
    imgpath: "images/tacosone.png",
    cardhead: "Cheesy Gordita Crunch",
    cardpara: "Mushroom,capsicum toamto & amul cheese onion",
    price: "$80",
    stikeprice: "$95",
  },
  {
    imgpath: "images/tacosone.png",
    cardhead: "Cheesy Gordita Crunch",
    cardpara: "Mushroom,capsicum toamto & amul cheese onion",
    price: "$80",
    stikeprice: "$95",
  },
  {
    imgpath: "images/tacosone.png",
    cardhead: "Cheesy Gordita Crunch",
    cardpara: "Mushroom,capsicum toamto & amul cheese onion",
    price: "$80",
    stikeprice: "$95",
  },
  {
    imgpath: "images/tacosone.png",
    cardhead: "Cheesy Gordita Crunch",
    cardpara: "Mushroom,capsicum toamto & amul cheese onion",
    price: "$80",
    stikeprice: "$95",
  },
  {
    imgpath: "images/tacosone.png",
    cardhead: "Cheesy Gordita Crunch",
    cardpara: "Mushroom,capsicum toamto & amul cheese onion",
    price: "$80",
    stikeprice: "$95",
  },
  {
    imgpath: "images/tacosone.png",
    cardhead: "Cheesy Gordita Crunch",
    cardpara: "Mushroom,capsicum toamto & amul cheese onion",
    price: "$80",
    stikeprice: "$95",
  },
];

export default function Addcarttabbing() {
  const [state, setState] = useState({ tab: "tab1" });

  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter((count) => count + 1);
  };

  const decrease = () => {
    setCounter((count) => count - 1);
  };

  const reset = () => {
    setCounter(0);
  };

  return (
    <section className="tabbing-tacos">
      <Container fluid>
        <div className="tacos-tabbing">
          <div className="tab-frame tacos-frame">
            <div className="clearfix">
              <input
                type="radio"
                name="tab"
                id="tab1"
                checked={state.tab == "tab1"}
                onClick={() => setState({ tab: "tab1" })}
              />
              <label for="tab1">Breakfast</label>

              <input
                type="radio"
                name="tab"
                id="tab2"
                checked={state.tab == "tab2"}
                onClick={() => setState({ tab: "tab2" })}
              />
              <label for="tab2">Fast Food</label>

              <input
                type="radio"
                name="tab"
                id="tab3"
                checked={state.tab == "tab3"}
                onClick={() => setState({ tab: "tab3" })}
              />
              <label for="tab3">Mexican</label>

              <input
                type="radio"
                name="tab"
                id="tab4"
                checked={state.tab == "tab4"}
                onClick={() => setState({ tab: "tab4" })}
              />
              <label for="tab4">Coffee</label>

              <input
                type="radio"
                name="tab"
                id="tab5"
                checked={state.tab == "tab5"}
                onClick={() => setState({ tab: "tab5" })}
              />
              <label for="tab5">Chefs</label>

              <input
                type="radio"
                name="tab"
                id="tab6"
                checked={state.tab == "tab6"}
                onClick={() => setState({ tab: "tab6" })}
              />
              <label for="tab6">Food Trucks</label>
            </div>

            {state.tab == "tab1" && (
              <div className="Breakfast-tab tacoscomo-class">
                <Row>
                  <Col lg={8} md={12} sm={12} xs={12} className="order-one">
                    <div className="card-list">
                      <ul>
                        {homedata.map((carditem, cardindex) => {
                          return (
                            <li>
                              <div className="tacos-card">
                                <div className="tacos-card-image">
                                  <img
                                    src="images/tacosone.png"
                                    alt="img"
                                    className="img-fluid"
                                  />
                                </div>
                                <div className="tacos-card-content">
                                  <h5>Cheesy Gordita Crunch</h5>
                                  <p>
                                    Mushroom,capsicum toamto & amul cheese onion
                                  </p>
                                </div>
                                <div className="price-part">
                                  <h5>$80</h5>
                                  <h6>
                                    <strike>$95</strike>
                                  </h6>
                                  <Button className="btn-add">+ ADD</Button>
                                </div>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </Col>

                  <Col lg={4} md={12} sm={12} xs={12}>
                    <Cart />
                  </Col>
                </Row>
              </div>
            )}

            {state.tab == "tab2" && (
              <div className="Fast-Food-tab tacoscomo-class">sfs</div>
            )}
            {state.tab == "tab3" && (
              <div className="Mexican-tab tacoscomo-class">aa</div>
            )}
            {state.tab == "tab4" && (
              <div className="Coffee-tab tacoscomo-class">dada</div>
            )}
            {state.tab == "tab5" && (
              <div className="Chefsss-tab tacoscomo-class">dada</div>
            )}
            {state.tab == "tab6" && (
              <div className="Foodie-Trucks-tab tacoscomo-class">dada</div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
