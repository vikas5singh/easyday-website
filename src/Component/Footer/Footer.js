import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import TawkWidget from "./TawkWidget";
export default function Footer() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const Tab = useSelector((s) => s.restaurant.tabData?.data)
  console.log("tabcheck====>", Tab);
  return (
    <section className="footer-main">
      <div className="mx-3 mx-md-4">
        <Row className="justify-content-around">
          <TawkWidget propertyId={Tab?.tawk_direct_chat_link} />
          <Col lg={2} md={6} sm={12}>
            <div className="footer-div">
              <h5>{Tab?.menu?.find(ele => ele?.type == "footerMiddle")?.label}</h5>
              <ul>
                {Tab?.menu?.find(ele => ele?.type == "footerMiddle")?.items?.map((ele, index) => {
                  return (
                    <li key={index}>
                      <a
                        href={ele?.link}
                        target={ele?.target}
                      >
                        {ele?.label}
                      </a>
                    </li>
                  )
                })}
              </ul>
              {/* <ul className="social-icon">
                <li>
                  <a href="javascript:void(0)" className="facebook">
                    <svg
                      aria-hidden="true"
                      role="img"
                      class="iconify iconify--uil"
                      width="18"
                      height="18"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M15.12 5.32H17V2.14A26.11 26.11 0 0 0 14.26 2c-2.72 0-4.58 1.66-4.58 4.7v2.62H6.61v3.56h3.07V22h3.68v-9.12h3.06l.46-3.56h-3.52V7.05c0-1.05.28-1.73 1.76-1.73Z"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="twitter">
                    <svg
                      aria-hidden="true"
                      role="img"
                      class="iconify iconify--mdi"
                      width="18"
                      height="18"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="youtube">
                    <svg
                      aria-hidden="true"
                      role="img"
                      class="iconify iconify--ps"
                      width="18"
                      height="18"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 384 488"
                    >
                      <path
                        fill="currentColor"
                        d="M325 339h-25v-15q0-12 12-12h1q12 0 12 12v15zm-95-32q-12 0-12 10v71q0 10 12 10t12-10v-71q0-10-12-10zm154-40v136q0 25-18.5 42T321 462H63q-26 0-44.5-17T0 403V267q0-24 18.5-41.5T63 208h258q26 0 44.5 17.5T384 267zM80 418V275h32v-21l-85-1v21h26v144h27zm96-122h-27v95q-2 5-7 6.5t-8-5.5v-19l-1-77h-26v100q2 17 7 20q9 6 22.5.5T155 402v16h21V296zm85 88v-64q0-19-12-26t-30 7v-47h-27v163h22l2-11q21 18 33.5 10t11.5-32zm84-9h-20v14q0 11-11 11h-4q-11 0-11-11v-29h46v-17q0-26-1-33q-3-16-21.5-20t-30.5 5q-8 7-11 15q-3 10-3 27v38q0 37 28 43q24 5 35-16q7-11 4-27zM242 169q2 5 7 8q4 3 11 3q6 0 10-3t7-9v10h30V51h-24v99q0 10-10 10q-9 0-9-10V51h-25v86q0 18 1 22q0 4 2 10zm-90-71q0-18 3-29q3-9 11-16q8-6 20-6q11 0 18 4q7 3 11 10q4 5 6 13q1 5 1 21v32q0 20-1 26q-1 7-6 15q-3 5-11 11q-8 3-16 3q-10 0-18-3q-7-3-11-9q-4-8-5-14q-2-10-2-25V98zm23 50q0 5 3.5 9t8.5 4q12 0 12-13V81q0-13-12-13t-12 13v67zm-82 34h28V85l33-83h-30l-18 62L88 2H58l35 83v97z"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="instagram">
                    <svg
                      aria-hidden="true"
                      role="img"
                      class="iconify iconify--ant-design"
                      width="18"
                      height="18"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 1024 1024"
                    >
                      <path
                        fill="currentColor"
                        d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1S717.1 625.5 717.1 512S625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7S645.3 438.6 645.3 512S585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9s47.9-21.3 47.9-47.9a47.84 47.84 0 0 0-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165c-3.1-64-17.7-120.8-64.5-167.6c-46.9-46.9-103.6-61.4-167.6-64.5c-55.2-3.1-109.9-2.6-165-2.6c-55.2 0-109.9-.5-165 2.6c-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6c46.9 46.9 103.6 61.4 167.6 64.5c55.2 3.1 109.9 2.6 165 2.6c55.2 0 109.9.5 165-2.6c64-3.1 120.8-17.7 167.6-64.5c46.9-46.9 61.4-103.6 64.5-167.6c3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8c-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1c-18.2-7.3-31.8-16.1-45.8-30.2c-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9c7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2c14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z"
                      />
                    </svg>
                  </a>
                </li>
              </ul> */}
            </div>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <div className="footer-div">
              <h5>{Tab?.menu?.find(ele => ele?.type == "footerLeft")?.label}</h5>
              <ul>
                {Tab?.menu?.find(ele => ele?.type == "footerLeft")?.items?.map((ele, index) => {
                  return (
                    <li key={index}>
                      <Link
                        to={ele?.link}
                        target={ele?.target}
                      >
                        {ele?.label}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </Col>
          <Col lg={2} md={6} sm={12}>
            <div className="footer-div">
              <h5>{Tab?.menu?.find(ele => ele?.type == "topMenu")?.label}</h5>
              <ul>
                {Tab?.menu?.find(ele => ele?.type == "topMenu")?.items?.map((ele, index) => {
                  return (
                    <li key={index}>
                      <Link
                        to={ele?.link}
                        target={ele?.target}
                      >
                        {ele?.label}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <div className="footer-div">
              <h5>Help & Contact</h5>
              <ul>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M8.3844 2.47925C8.90949 2.32093 9.47298 2.34723 9.98104 2.55377C10.4891 2.76032 10.9111 3.13465 11.1768 3.61445L11.2656 3.79325L12.06 5.55845C12.3011 6.09423 12.3793 6.68906 12.285 7.26897C12.1907 7.84888 11.928 8.38826 11.5296 8.82005L11.37 8.97845L10.1184 10.146C9.8928 10.3596 10.062 11.1864 10.878 12.6C11.6124 13.872 12.21 14.466 12.504 14.4984H12.5556L12.6192 14.4864L15.0792 13.734C15.4098 13.6327 15.7626 13.6286 16.0955 13.7225C16.4283 13.8163 16.7271 14.0041 16.956 14.2632L17.0652 14.4012L18.6936 16.6572C19.0127 17.0994 19.1718 17.6371 19.1445 18.1818C19.1172 18.7264 18.9053 19.2455 18.5436 19.6536L18.3972 19.8048L17.7468 20.4216C17.1628 20.9748 16.4322 21.3485 15.6419 21.4985C14.8516 21.6485 14.0349 21.5683 13.2888 21.2676C10.9668 20.3316 8.85719 18.1932 6.94079 14.874C5.02079 11.5464 4.2228 8.64605 4.5792 6.16205C4.68704 5.41117 4.99624 4.70351 5.47396 4.11424C5.95167 3.52497 6.58006 3.07608 7.2924 2.81525L7.524 2.73845L8.3844 2.47925Z"
                      fill="white"
                    />
                  </svg>
                  <a href="javascript:void(0)">{Tab?.countryCode + Tab?.mobileNumber},{Tab?.countryCode + Tab?.whatsapp_number}</a>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M20 4H4C3.44772 4 3 4.44772 3 5V19C3 19.5523 3.44772 20 4 20H20C20.5523 20 21 19.5523 21 19V5C21 4.44772 20.5523 4 20 4ZM12 13L4 8V6L12 11L20 6V8L12 13Z"
                      fill="white"
                    />
                  </svg>

                  <a href="javascript:void(0)">{Tab?.email}</a>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M16 26C14.5565 24.8032 13.2185 23.4911 12 22.0774C10.1714 19.9545 8 16.7929 8 13.7802C7.99921 12.2415 8.46801 10.7372 9.34708 9.4577C10.2261 8.17815 11.476 7.18085 12.9384 6.592C14.4007 6.00316 16.01 5.84925 17.5624 6.14975C19.1148 6.45025 20.5406 7.19165 21.6594 8.28012C22.4043 9.00094 22.9946 9.85819 23.3964 10.8023C23.7982 11.7463 24.0033 12.7585 24 13.7802C24 16.7929 21.8285 19.9545 20 22.0774C18.7815 23.4911 17.4435 24.8032 16 26ZM16 10.4475C15.0907 10.4475 14.2186 10.7986 13.5756 11.4236C12.9326 12.0486 12.5714 12.8963 12.5714 13.7802C12.5714 14.664 12.9326 15.5117 13.5756 16.1367C14.2186 16.7617 15.0907 17.1128 16 17.1128C16.9093 17.1128 17.7814 16.7617 18.4243 16.1367C19.0673 15.5117 19.4285 14.664 19.4285 13.7802C19.4285 12.8963 19.0673 12.0486 18.4243 11.4236C17.7814 10.7986 16.9093 10.4475 16 10.4475Z"
                      fill="white"
                    />
                  </svg>
                  <a href="javascript:void(0)">
                    Corporate Office : {Tab?.address}
                  </a>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M16 26C14.5565 24.8032 13.2185 23.4911 12 22.0774C10.1714 19.9545 8 16.7929 8 13.7802C7.99921 12.2415 8.46801 10.7372 9.34708 9.4577C10.2261 8.17815 11.476 7.18085 12.9384 6.592C14.4007 6.00316 16.01 5.84925 17.5624 6.14975C19.1148 6.45025 20.5406 7.19165 21.6594 8.28012C22.4043 9.00094 22.9946 9.85819 23.3964 10.8023C23.7982 11.7463 24.0033 12.7585 24 13.7802C24 16.7929 21.8285 19.9545 20 22.0774C18.7815 23.4911 17.4435 24.8032 16 26ZM16 10.4475C15.0907 10.4475 14.2186 10.7986 13.5756 11.4236C12.9326 12.0486 12.5714 12.8963 12.5714 13.7802C12.5714 14.664 12.9326 15.5117 13.5756 16.1367C14.2186 16.7617 15.0907 17.1128 16 17.1128C16.9093 17.1128 17.7814 16.7617 18.4243 16.1367C19.0673 15.5117 19.4285 14.664 19.4285 13.7802C19.4285 12.8963 19.0673 12.0486 18.4243 11.4236C17.7814 10.7986 16.9093 10.4475 16 10.4475Z"
                      fill="white"
                    />
                  </svg>
                  <a href="javascript:void(0)">
                    Branch Office : {Tab?.branchOffice}
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={2} md={6} sm={12}>
            <div className="footer-div">
              <h5>Download Now</h5>
              <ul className="d-flex gap-10">
                <li>
                  <img style={{
                    "maxWidth": "105px",
                    "height": "auto",
                    // "marginRight": "4px",
                    "transition": "transform 0.3s ease"
                  }} src="https://hlclives3.s3.us-east-2.amazonaws.com/16850991610031672292495495play-img-300x89.png" alt="Download on Google Play" />

                </li>
                <li>
                  <img style={{
                    "maxWidth": "105px",
                    "height": "auto",
                    // "marginRight": "4px",
                    "transition": "transform 0.3s ease"
                  }} src="https://hlclives3.s3.us-east-2.amazonaws.com/16850991501811672292485923app-img-300x89.png" alt="Download on App Store" />
                </li>
              </ul>
            </div>
            <div className="footer-div">
              <h5>Follow Us</h5>
              <ul className="d-flex gap-10">
                <a
                  href={Tab?.socialMedia?.find(ele => ele?.type == "instagram")?.link}
                  target="_blank"
                >
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <defs>
                        <linearGradient id="instagramGradient" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stop-color="#F58529" />
                          <stop offset="50%" stop-color="#DD2A7B" />
                          <stop offset="100%" stop-color="#8134AF" />
                        </linearGradient>
                      </defs>
                      <circle
                        cx="12"
                        cy="12"
                        r="12"
                        fill="url(#instagramGradient)"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        r="5"
                        stroke="white"
                        stroke-width="2"
                        fill="none"
                      />
                      <circle
                        cx="17.5"
                        cy="6.5"
                        r="1.5"
                        fill="white"
                      />
                    </svg>

                  </li>
                </a>
                <a
                  href={Tab?.socialMedia?.find(ele => ele?.type == "facebook")?.link}
                  target="_blank"
                >
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="12"
                        fill="#1877F2"
                      />
                      <path
                        d="M13.5 11H15.25V8H13.5V7C13.5 6.17157 13.8829 6 14.25 6H15.25V3.5H13.5C11.8431 3.5 11 4.84315 11 6.5V8H9.5V11H11V17H13.5V11Z"
                        fill="white"
                      />
                    </svg>

                  </li>
                </a>
                <a
                  href={Tab?.socialMedia?.find(ele => ele?.type == "yuotube")?.link}
                  target="_blank"
                >
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                    >

                      <circle
                        cx="12"
                        cy="12"
                        r="12"
                        fill="#FF0000"
                      />
                      <path
                        d="M10 8L16 12L10 16V8Z"
                        fill="white"
                      />
                    </svg>

                  </li>
                </a>
                <a
                  href={Tab?.socialMedia?.find(ele => ele?.type == "twitter")?.link}
                  target="_blank"
                >
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="12"
                        fill="#404040"
                      />
                      <path
                        d="M8.75 6.5L12 10.062 15.25 6.5H17.5L13.562 10.938 17.5 17.5H15.25L12 13.187 8.75 17.5H6.5L10.438 10.938 6.5 6.5H8.75Z"
                        fill="white"
                      />
                    </svg>


                  </li>
                </a>
                <a
                  href={Tab?.socialMedia?.find(ele => ele?.type == "linkedIn")?.link}
                  target="_blank"
                >
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="12"
                        fill="#0A66C2"
                      />
                      <path
                        d="M7.2 9.6H4.8V19.2H7.2V9.6ZM6 5.9C5.1 5.9 4.5 6.5 4.5 7.3C4.5 8.1 5.1 8.7 6 8.7C6.9 8.7 7.5 8.1 7.5 7.3C7.5 6.5 6.9 5.9 6 5.9ZM19.2 12.4C19.2 10.2 18.4 8.9 16.3 8.9C14.9 8.9 14.1 9.8 13.7 10.6V9.6H11.3V19.2H13.7V13.9C13.7 13.3 13.8 12.7 14.1 12.3C14.5 11.8 15 11.5 15.6 11.5C16.5 11.5 17 12.1 17 13.2V19.2H19.4V12.4H19.2Z"
                        fill="white"
                      />
                    </svg>


                  </li>
                </a>
                <a
                  href={Tab?.socialMedia?.find(ele => ele?.type == "telegram")?.link}
                  target="_blank"
                >
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="12"
                        fill="#0088CC"
                      />
                      <path
                        d="M17.064 7.303L5.742 11.734C5.121 11.963 5.126 12.405 5.709 12.602L8.418 13.55L15.362 9.327C15.68 9.126 15.99 9.245 15.736 9.477L10.423 14.046H10.419L10.423 14.046L10.192 17.035C10.458 17.035 10.585 16.917 10.733 16.779L12.345 15.21L15.159 17.102C15.69 17.39 16.084 17.227 16.235 16.603L17.994 8.159C18.196 7.323 17.632 6.998 17.064 7.303Z"
                        fill="white"
                      />
                    </svg>


                  </li>
                </a>
              </ul>
            </div>

          </Col>
        </Row>

        <div className="footer-copyright text-center">
          <p>© {new Date().getFullYear()} {Tab?.storeName} Pvt. Ltd. | All rights reserved.</p>
          <span className="footer-div"><Link to="/security">Security Guidance</Link></span>
          <span className="text-white">{" "}|{" "}</span>
          <span className="footer-div"><Link to="/term-condition">Terms & Conditions</Link></span>
        </div>
      </div>
    </section >
  );
}
