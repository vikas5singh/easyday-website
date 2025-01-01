import React from "react";
import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Fade from "react-reveal/Fade";
import { Button } from "reactstrap";

import DisputeprocessModal from "./DisputeprocessModal";

export default function Dispute() {
  const [pocessShow, setProcessShow] = useState(false);
  return (
    <section className="FAQ-main Dispute-main">
      <DisputeprocessModal
        show={pocessShow}
        onHide={() => setProcessShow(false)}
      />
      <Fade>
        <div className="Dispute-part">
          <h5 className="text-center dispute-head">Your Dispute Details</h5>

          <div className="Current-dipute">
            <h5 className="col-green">Current Dispute</h5>

            {[1, 2].map(() => {
              return (
                <div className="current-item mb-3">
                  <div className="item-content">
                    <div className="item-img">
                      <img
                        src="/images/item-img.png"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="item-cont">
                      <h5>Faasos </h5>
                      <p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          height="13"
                          viewBox="0 0 10 13"
                          fill="none"
                        >
                          <path
                            d="M5 0C3.6744 0.00159736 2.40354 0.540183 1.4662 1.49761C0.528855 2.45504 0.00156917 3.75313 5.31949e-06 5.10714C-0.00158236 6.21364 0.352269 7.29011 1.00728 8.17143C1.00728 8.17143 1.14364 8.35482 1.16591 8.38129L5 13L8.83591 8.37896C8.8559 8.35436 8.99272 8.17143 8.99272 8.17143L8.99318 8.17004C9.64786 7.28911 10.0015 6.21313 10 5.10714C9.99843 3.75313 9.47114 2.45504 8.5338 1.49761C7.59646 0.540183 6.3256 0.00159736 5 0ZM5 6.96429C4.6404 6.96429 4.28887 6.85537 3.98987 6.6513C3.69088 6.44724 3.45783 6.15719 3.32022 5.81784C3.18261 5.47849 3.1466 5.10508 3.21676 4.74483C3.28691 4.38458 3.46008 4.05367 3.71435 3.79394C3.96863 3.53422 4.2926 3.35734 4.64529 3.28568C4.99798 3.21403 5.36356 3.2508 5.69579 3.39137C6.02802 3.53193 6.31198 3.76996 6.51176 4.07537C6.71155 4.38078 6.81818 4.73983 6.81818 5.10714C6.81758 5.5995 6.62583 6.07151 6.28498 6.41966C5.94414 6.76781 5.48203 6.96367 5 6.96429Z"
                            fill="#3F3D56"
                          />
                        </svg>
                        8502 Preston Rd. Maine 98380
                      </p>
                      <div className="time-date">
                        <p>Dispute Date / Time</p>
                        <p>24/08/2022, 18:39</p>
                      </div>
                    </div>
                  </div>
                  <div className="item-btn">
                    <Button
                      className="view-details"
                      onClick={() => setProcessShow(true)}
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="Current-dipute">
            <h5>Past Dispute</h5>

            {[1, 2, 3].map(() => {
              return (
                <div className="current-item mb-3">
                  <div className="item-content">
                    <div className="item-img">
                      <img
                        src="/images/item-img.png"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="item-cont">
                      <h5>Faasos </h5>
                      <p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          height="13"
                          viewBox="0 0 10 13"
                          fill="none"
                        >
                          <path
                            d="M5 0C3.6744 0.00159736 2.40354 0.540183 1.4662 1.49761C0.528855 2.45504 0.00156917 3.75313 5.31949e-06 5.10714C-0.00158236 6.21364 0.352269 7.29011 1.00728 8.17143C1.00728 8.17143 1.14364 8.35482 1.16591 8.38129L5 13L8.83591 8.37896C8.8559 8.35436 8.99272 8.17143 8.99272 8.17143L8.99318 8.17004C9.64786 7.28911 10.0015 6.21313 10 5.10714C9.99843 3.75313 9.47114 2.45504 8.5338 1.49761C7.59646 0.540183 6.3256 0.00159736 5 0ZM5 6.96429C4.6404 6.96429 4.28887 6.85537 3.98987 6.6513C3.69088 6.44724 3.45783 6.15719 3.32022 5.81784C3.18261 5.47849 3.1466 5.10508 3.21676 4.74483C3.28691 4.38458 3.46008 4.05367 3.71435 3.79394C3.96863 3.53422 4.2926 3.35734 4.64529 3.28568C4.99798 3.21403 5.36356 3.2508 5.69579 3.39137C6.02802 3.53193 6.31198 3.76996 6.51176 4.07537C6.71155 4.38078 6.81818 4.73983 6.81818 5.10714C6.81758 5.5995 6.62583 6.07151 6.28498 6.41966C5.94414 6.76781 5.48203 6.96367 5 6.96429Z"
                            fill="#3F3D56"
                          />
                        </svg>
                        8502 Preston Rd. Maine 98380
                      </p>
                      <div className="time-date">
                        <p>Dispute Date / Time</p>
                        <p>24/08/2022, 18:39</p>
                      </div>
                    </div>
                  </div>
                  <div className="item-btn">
                    <Button className="view-details">View Details</Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Fade>
    </section>
  );
}
