import React, { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { useDispatch, useSelector } from "react-redux";
import Fade from "react-reveal/Fade";
import { Table } from "reactstrap";
import { compareList } from "../../../Redux/actions";

export default function Compareprice() {
  const dispatch = useDispatch();
  const [state, setState] = useState({});
  const list = useSelector((s) => s.address?.compareList);

  useEffect(() => {
    if (list && list.length > 0) {
      setState((pre) => ({
        ...pre,
        ...list[0],
      }));
    }
  }, [list]);

  useEffect(() => {
    dispatch(compareList({}));
  }, [dispatch]);
  return (
    <section className="FAQ-main Compareprice-main">
      <Fade>
        <div className="Compareprice-col">
          <div className="text-center compare-head">
            <h4>Compare Price</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="compre-table">
            <Table responsive>
              <thead>
                <tr>
                  <th>#</th>
                  {state.items &&
                    state.items?.length > 0 &&
                    state.items?.map((item, index) => {
                      return (
                        <th>{item.name}</th>
                        // <th>
                        //   Gurb <br></br>hub
                        // </th>
                        // <th>
                        //   imsohungry <br></br>Eats
                        // </th>
                        // <th>
                        //   Door <br></br>Dash
                        // </th>
                      );
                    })}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="food-col">Food</td>
                  {state.items &&
                    state.items?.length > 0 &&
                    state.items?.map((item, index) => {
                      return <td>{item.food}</td>;
                    })}
                  {/* <td>$25.00</td>
                  <td>$25.00</td>
                  <td>$25.00</td> */}
                </tr>
                <tr>
                  <td className="food-col">Delivery Fee</td>
                  {state.items &&
                    state.items?.length > 0 &&
                    state.items?.map((item, index) => {
                      return <td>${item.deliveryFee}</td>;
                    })}
                  {/* <td>$25.00</td>
                  <td>$25.00</td>
                  <td>$25.00</td> */}
                </tr>

                <tr>
                  <td className="food-col">Sales Tax</td>
                  {state.items &&
                    state.items?.length > 0 &&
                    state.items?.map((item, index) => {
                      return <td>${item.salesTax}</td>;
                    })}
                  {/* <td>$25.00</td>
                  <td>$25.00</td>
                  <td>$25.00</td> */}
                </tr>

                <tr>
                  <td className="food-col">Service Fee</td>
                  {state.items &&
                    state.items?.length > 0 &&
                    state.items?.map((item, index) => {
                      return <td>${item.serviceFee}</td>;
                    })}
                  {/* <td>$25.00</td>
                  <td>$25.00</td>
                  <td>$25.00</td> */}
                </tr>

                <tr>
                  <td className="food-col">Driver Tip</td>
                  {state.items &&
                    state.items?.length > 0 &&
                    state.items?.map((item, index) => {
                      return <td>${item.driverTip}</td>;
                    })}
                  {/* <td>$25.00</td>
                  <td>$25.00</td>
                  <td>$25.00</td> */}
                </tr>

                {/* <tr>
                  <td className="food-col">Total Costs</td>
                  <td>$25.00</td>
                  <td>$25.00</td>
                  <td>$25.00</td>
                  <td>$25.00</td>
                </tr> */}
              </tbody>
            </Table>
          </div>

          <div className="text-center compare-head-bottom">
            <h5>Dummy text of the printing and typeing industry. </h5>
            <p>
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five
              centuries,
            </p>
          </div>
        </div>
      </Fade>
    </section>
  );
}
