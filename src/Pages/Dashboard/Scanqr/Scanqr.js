import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Fade from "react-reveal/Fade";

export default function Scanqr() {
  return (
    <section className="FAQ-main Scanqr-main">
      <Fade>
        <div className="Scanqr-part">
          <div className="scanqr-head text-center">
            <h5>Place the QR inside the area</h5>
            <p>Scanning will start automatically</p>

            <img src="/images/scanqr.png" alt="" className="img-fluid" />

            <p className="infomation">
              Don't Wait on line Scan code on your table and place your order
              for pick up
            </p>
          </div>
        </div>
      </Fade>
    </section>
  );
}
