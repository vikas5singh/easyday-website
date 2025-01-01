import React from "react";
import { Row, Col } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const issuedata = [
  {
    imgurl: "/images/dashuser.png",
    namedata: "Michael Jordan",
    datedata: "Apr 24,2019, 4.00 p.m",
    descridata:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
  },

  {
    imgurl: "/images/driverprofile.png",
    namedata: "Admin",
    datedata: "Apr 24,2019, 4.00 p.m",
    descridata:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
  },
];

export default function DisputeprocessModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-common modal-coupon"
    >
      <Modal.Body>
        <Button onClick={props.onHide} className="close-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 40 40"
            fill="none"
          >
            <path
              d="M18.3699 0.0663185C13.7044 0.442104 9.21418 2.52146 5.88406 5.83673C-0.676038 12.3754 -1.89458 22.5885 2.95455 30.4883C5.61698 34.8308 9.93195 38.0458 14.8312 39.3485C16.6005 39.8162 18.0194 39.9999 19.914 39.9999C23.2107 40.0083 25.8314 39.4154 28.8027 37.9707C36.7733 34.1126 41.2468 25.2774 39.6944 16.5091C37.8917 6.37118 28.6274 -0.768764 18.3699 0.0663185ZM23.3359 14.7972L26.6744 11.4568L27.6425 12.4255L28.6024 13.3859L25.2472 16.7095L21.892 20.0331L25.2222 23.3651L28.5523 26.6971L27.6092 27.6324L26.6744 28.576L23.3359 25.2357L19.9974 21.8953L16.684 25.2106L13.3622 28.5342L12.4191 27.599L11.476 26.6637L14.7978 23.34L18.1196 20.0164L14.7978 16.6928L11.4843 13.3775L12.4191 12.4339L13.3622 11.4986L16.6757 14.8139L19.9974 18.1375L23.3359 14.7972Z"
              fill="black"
            />
          </svg>
        </Button>
        <div className="past-order-modal">
          <div className="modal-structure">
            <h4 className="text-center col-red">
              Your Dispute In Process.......{" "}
            </h4>
            <div className="order-info">
              <p>Order Number - 2352857TR</p>
            </div>

            <div className="date-dispute">
              <p>Dispute Date and Time</p>
              <p>Thu 24,Feb 2021 | 4.30 pm</p>
            </div>

            <div className="past-order-wrap mt-4">
              <div className="upcoming-left">
                <div className="upcoming-img">
                  <img src="/images/item-img.png" alt="" className="img-fluid" />
                </div>
                <div className="for-list">
                  <div className="upcoming-cont">
                    <div className="upcomimg-div">
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
                      <ul class="ratingstar-dash">
                        <li class="start-checked">★</li>
                        <li class="start-checked">★</li>
                        <li class="start-checked">★</li>
                        <li class="start-checked">★</li>
                        <li class="">★</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="past-right">
                <div className="pastdriver-img">
                  <img
                    src="/images/driverprofile.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="pastdriver-cont">
                  <h4 className="pastdriver-name">Alfred Stewart</h4>
                  <div className="pastcode-star">
                    <h4>KL01MVT</h4>
                    <p className="rate-col">★4.5</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="total-dispute total-dipute-process">
              <p>Total Pay</p>
              <p>$25.35</p>
            </div>

            <div class="reason-here width80">
              <h5>Reason for Dispute</h5>
              <div class="dispute-reason">
                <h4> Wrong Food Deliverd</h4>
                <div class="check-reason">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="11"
                    viewBox="0 0 14 11"
                    fill="none"
                  >
                    <path d="M1 5.5L6.4 10L13.6 1" stroke="#00B102"></path>
                  </svg>
                </div>
              </div>
            </div>

            <div className="issue-description">
              <h6>Issue Description:</h6>

              <ul>
                <li>
                  {issuedata.map((itemissue, index) => {
                    return (
                      <div className="issue-box mb-5">
                        <div className="isuse-person-img">
                          <img
                            src={itemissue.imgurl}
                            alt=""
                            className="img-fluid"
                          />
                        </div>

                        <div className="isuse-person-cont">
                          <h5>{itemissue.namedata}</h5>
                          <span className="issue-date">
                            {itemissue.datedata}
                          </span>
                          <p className="issue-decription">
                            {itemissue.descridata}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </li>
              </ul>

              <Form>
                <div className="fomrdispute-wrap">
                  <FormGroup className="form-dispute">
                    <Input
                      type="email"
                      name="email"
                      id="exampleEmail"
                      placeholder="with a placeholder"
                    />
                    <Button className="send-icon">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M29.9329 1.28587C30.0011 1.1155 30.0178 0.928867 29.9809 0.749101C29.944 0.569335 29.8552 0.404345 29.7254 0.274584C29.5957 0.144824 29.4307 0.0559996 29.2509 0.0191236C29.0712 -0.0177525 28.8845 -0.0010586 28.7142 0.0671355L1.43948 10.9776H1.43761L0.590135 11.3151C0.429623 11.3791 0.289931 11.4863 0.186491 11.6247C0.0830513 11.7632 0.0198889 11.9275 0.0039809 12.0996C-0.0119271 12.2717 0.0200386 12.4448 0.0963468 12.5999C0.172655 12.7549 0.290336 12.8859 0.436391 12.9782L1.20511 13.4657L1.20699 13.4695L10.5723 19.4281L16.5308 28.7936L16.5346 28.7974L17.0221 29.5661C17.1147 29.7116 17.2457 29.8287 17.4007 29.9046C17.5556 29.9804 17.7285 30.012 17.9002 29.9959C18.072 29.9798 18.2359 29.9167 18.3741 29.8134C18.5122 29.7101 18.6192 29.5707 18.6833 29.4105L29.9329 1.28587ZM26.4961 4.82958L27.3792 2.62085L25.1705 3.50397L11.1198 17.555L11.7535 17.9582C11.8698 18.032 11.9684 18.1306 12.0422 18.2469L12.4453 18.8806L26.4961 4.82958Z"
                          fill="#2E3E5C"
                        />
                      </svg>
                    </Button>
                  </FormGroup>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
