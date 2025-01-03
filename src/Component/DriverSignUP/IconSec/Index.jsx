import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const IconSec = (props) => {
  return (
    <>
      <section className="py-5  text-start iconSec position-relative">
        <Container>
          <Row>
            <Col lg="12" className="my-2">
              <div className="section-header mb-3">
                <h2 className="fw-bold">
                  Make <span className="theme-clr">Money </span> On the{" "}
                  <span className="theme-clr">Go</span>
                </h2>
              </div>
            </Col>
            <Col lg="4" sm="6" className="my-2">
              <div className="cardCstm p-3">
                <div className="icn-wrp mb-2">
                  {props?.title == "Vendor" &&
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                    >

                      <path
                        d="M4 18H44L38 8H10L4 18Z"
                        fill="#ED6144"
                      />

                      <rect
                        x="8"
                        y="18"
                        width="32"
                        height="20"
                        fill="#F9D6CF"
                      />

                      <rect
                        x="20"
                        y="28"
                        width="8"
                        height="10"
                        fill="black"
                      />


                      <rect
                        x="12"
                        y="22"
                        width="6"
                        height="6"
                        fill="white"
                      />

                      <rect
                        x="30"
                        y="22"
                        width="6"
                        height="6"
                        fill="white"
                      />
                    </svg>
                  }
                  {props?.title == "Driver" &&
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                    >
                      <path
                        d="M17.8 26.2L5.70001 38H4.10001L2.60001 36.6V35.1L14.7 23.4L17.8 26.2Z"
                        fill="#ED6144"
                      />
                      <path
                        d="M45.3 22.2V12.8C45.3 10.6 43.4 8.8 41.1 8.8H30.1C27.8 8.8 25.9 10.6 25.9 12.8V22.2C25.9 27.4 30.2 31.6 35.5 31.6C41 31.5 45.3 27.4 45.3 22.2Z"
                        fill="#ED6144"
                      />
                      <path
                        d="M35.7 31.5C35 31.5 34.2 31.4 33.6 31.2V45.5L34.7 46.6H36.8L37.9 45.5V31.3C37.2 31.4 36.4 31.5 35.7 31.5Z"
                        fill="#F9D6CF"
                      />
                      <path
                        d="M40.4 3.2C37.8 0.699997 33.5 0.699997 30.9 3.2C29.8 4.3 29.1 5.6 29 7.1L30.7 8.8H30.8C30.7 8.5 30.7 8.1 30.7 7.8C30.7 6.5 31.2 5.3 32.2 4.4C34.1 2.5 37.3 2.5 39.2 4.4C41.1 6.3 41.1 9.4 39.2 11.2C37.7 12.7 35.3 13 33.4 12.1C33 11.9 32.5 12 32.3 12.5C32.1 12.9 32.2 13.4 32.7 13.6C33.7 14.1 34.7 14.3 35.8 14.3C37.5 14.3 39.2 13.6 40.5 12.4C43 9.9 43 5.8 40.4 3.2Z"
                        fill="#F9D6CF"
                      />
                      <path
                        d="M35.7 26.8C36.7 26.8 37.6 26 37.6 25C37.6 24 36.8 23.2 35.7 23.2C34.7 23.2 33.8 24 33.8 25C33.8 26 34.7 26.8 35.7 26.8Z"
                        fill="#F9D6CF"
                      />
                      <path
                        d="M26.1 22.2V12.8C26.1 10.6 28 8.8 30.3 8.8H30.9L28.3 6.4C26.9 5 24.9 4.7 23.6 5.6C19.1 8.6 15.3 12.5 12.5 17.1L12.4 17.3C11.6 18.6 11.9 20.5 13.2 21.7L19.5 27.8C20.9 29.1 22.8 29.4 24.1 28.6L24.3 28.5C25.3 27.9 26.3 27.2 27.3 26.6C26.4 25.3 26.1 23.8 26.1 22.2Z"
                        fill="black"
                      />
                      <path
                        d="M32.5 22.4C33.5 22.4 34.4 21.6 34.4 20.6C34.4 19.6 33.6 18.8 32.5 18.8C31.5 18.8 30.6 19.6 30.6 20.6C30.6 21.6 31.5 22.4 32.5 22.4Z"
                        fill="black"
                      />
                      <path
                        d="M21.2 20C22.6 21.4 22.6 23.5 21.2 24.9L16.1 20C17.5 18.7 19.8 18.7 21.2 20Z"
                        fill="white"
                      />
                      <path
                        d="M38.9 22.4C39.9 22.4 40.8 21.6 40.8 20.6C40.8 19.6 40 18.8 38.9 18.8C37.9 18.8 37 19.6 37 20.6C37 21.6 37.8 22.4 38.9 22.4Z"
                        fill="white"
                      />
                    </svg>
                  }
                  {props?.title == "Restaurant" &&
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                    >
                      <path
                        d="M12 28C12 24.7 16.5 22 24 22C31.5 22 36 24.7 36 28H12Z"
                        fill="#ED6144"
                      />
                      <circle
                        cx="24"
                        cy="19"
                        r="1.5"
                        fill="black"
                      />
                      <path
                        d="M10 28H38C39.1 28 40 28.9 40 30C40 31.1 39.1 32 38 32H10C8.9 32 8 31.1 8 30C8 28.9 8.9 28 10 28Z"
                        fill="#F9D6CF"
                      />
                      <rect
                        x="14"
                        y="6"
                        width="2"
                        height="10"
                        fill="black"
                      />
                      <path
                        d="M14 8H16V10H14V8Z"
                        fill="black"
                      />
                      <path
                        d="M14 12H16V14H14V12Z"
                        fill="black"
                      />
                      <path
                        d="M32 6C32 8 30 9.5 30 11V16H34V11C34 9.5 32 8 32 6Z"
                        fill="black"
                      />
                    </svg>


                  }

                  {props?.title == "Service Provider" &&
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                    >
                      <circle
                        cx="16"
                        cy="18"
                        r="4"
                        fill="#ED6144"
                      />
                      <circle
                        cx="32"
                        cy="18"
                        r="4"
                        fill="#ED6144"
                      />

                      <path
                        d="M16 18C16 12 20 8 24 8C28 8 32 12 32 18"
                        stroke="#ED6144"
                        stroke-width="2"
                        fill="none"
                      />
                      <circle
                        cx="24"
                        cy="22"
                        r="6"
                        fill="#F9D6CF"
                      />
                      <path
                        d="M20 32C20 28 28 28 28 32V36H20V32Z"
                        fill="#F9D6CF"
                      />
                      <rect
                        x="24"
                        y="26"
                        width="1.5"
                        height="5"
                        fill="black"
                      />
                    </svg>

                  }
                </div>
                <h4 className="mb-0 py-2">Your {props.text}, your time</h4>
                <p className="m-0">
                  {props?.desc}
                </p>
              </div>
            </Col>
            <Col lg="4" sm="6" className="my-2">
              <div className="cardCstm p-3">
                <div className="icn-wrp mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                  >
                    <path
                      d="M23.9101 26.9656L34.3163 26.1404C35.5012 26.0372 36.3769 25.0057 36.3769 23.8196C36.3769 22.6333 35.5012 21.6535 34.3163 21.4987L23.9101 20.6736V26.9656Z"
                      fill="black"
                    />
                    <path
                      d="M22.9315 31.0399L32.1011 30.3177C33.1313 30.2147 33.9041 29.3379 33.9041 28.3064C33.9041 27.2749 33.1313 26.3981 32.1011 26.2951L22.9315 25.5729V31.0399Z"
                      fill="black"
                    />
                    <path
                      d="M46.9891 1.33333H1.65567V23.1491H46.9891V1.33333Z"
                      fill="#F9D6CF"
                    />
                    <path
                      d="M41.2193 20.2609H7.42531C7.42531 18.6623 6.13744 17.3728 4.54047 17.3728V7.10969C6.13744 7.10969 7.42531 5.82034 7.42531 4.22156H41.2193C41.2193 5.82034 42.5072 7.10969 44.1041 7.10969V17.3728C42.5072 17.3728 41.2193 18.6623 41.2193 20.2609Z"
                      fill="white"
                    />
                    <path
                      d="M24.3223 21.6019C29.5004 21.6019 33.698 17.3995 33.698 12.2154C33.698 7.03146 29.5004 2.82903 24.3223 2.82903C19.1443 2.82903 14.9465 7.03146 14.9465 12.2154C14.9465 17.3995 19.1443 21.6019 24.3223 21.6019Z"
                      fill="#F9D6CF"
                    />
                    <path
                      d="M10.2587 14.0205C11.2544 14.0205 12.0617 13.2124 12.0617 12.2155C12.0617 11.2186 11.2544 10.4104 10.2587 10.4104C9.26287 10.4104 8.45563 11.2186 8.45563 12.2155C8.45563 13.2124 9.26287 14.0205 10.2587 14.0205Z"
                      fill="#F9D6CF"
                    />
                    <path
                      d="M38.3344 14.0205C39.3303 14.0205 40.1375 13.2124 40.1375 12.2155C40.1375 11.2186 39.3303 10.4104 38.3344 10.4104C37.3387 10.4104 36.5313 11.2186 36.5313 12.2155C36.5313 13.2124 37.3387 14.0205 38.3344 14.0205Z"
                      fill="#F9D6CF"
                    />
                    <path
                      d="M10.3103 23.1491L8.71325 25.7793C7.99204 26.9656 7.83755 28.4096 8.24967 29.7505L11.7527 39.1885C12.1133 40.1168 11.8557 41.1999 11.1345 41.9219L6.39508 46.6667H22.9829L25.1981 44.4491C29.9375 39.7043 31.0709 32.484 28.0831 26.5013C27.7739 25.7277 26.9496 24.1289 26.9496 23.3039L26.6405 17.5276L21.8496 23.0975H10.3103V23.1491Z"
                      fill="#ED6144"
                    />
                    <path
                      d="M21.1285 23.1491L20.5617 27.378L18.192 24.6447C17.6768 24.0773 18.0891 23.1491 18.8617 23.1491H21.1285Z"
                      fill="black"
                    />
                    <path
                      d="M26.6404 15.2065L27.9799 35.1656L20.0981 31.0397L21.0253 15.2065C21.1284 13.7109 22.3132 12.5763 23.8072 12.5763C25.3011 12.5763 26.5375 13.7109 26.6404 15.2065Z"
                      fill="#ED6144"
                    />
                  </svg>
                </div>
                <h4 className="mb-0 py-2">Daily payments</h4>
                <p className="m-0">
                  Get paid once a daily or week and easily keep track of money you've
                  made within the {props.title} {props?.isApp && "app"}.
                </p>
              </div>
            </Col>
            <Col lg="4" sm="6" className="my-2">
              <div className="cardCstm p-3">
                <div className="icn-wrp mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_1_23)">
                      <path
                        d="M48 13.0278V43.9059C48 44.9907 47.5694 46.0312 46.8028 46.7989C46.0363 47.5665 44.9964 47.9985 43.9115 48H4.08847C3.00362 47.9985 1.96372 47.5665 1.19714 46.7989C0.430567 46.0312 -1.03196e-06 44.9907 0 43.9059L0 13.0278C0 11.9434 0.430748 10.9035 1.19749 10.1368C1.96422 9.37004 3.00414 8.93929 4.08847 8.93929H43.9115C44.8625 8.93944 45.7837 9.27108 46.5165 9.87713C47.2493 10.4832 47.7479 11.3257 47.9266 12.2598C47.977 12.5126 48.0016 12.7699 48 13.0278Z"
                        fill="#F9D6CF"
                      />
                      <path
                        d="M48 41.2235V44.0471H29.5906C28.4537 44.0413 27.3332 43.7751 26.3152 43.2691C25.2972 42.763 24.4086 42.0304 23.7176 41.1275L18.3925 34.1534C17.9902 33.6204 17.481 33.1773 16.8976 32.8525C16.3141 32.5277 15.6692 32.3284 15.0042 32.2673H0V29.4438H15.0833C16.1698 29.5159 17.2281 29.8204 18.1867 30.3367C19.1454 30.853 19.982 31.5692 20.64 32.4367L25.9369 39.4165C26.3669 39.9774 26.9199 40.432 27.5534 40.7454C28.1869 41.0587 28.8839 41.2223 29.5906 41.2235H48Z"
                        fill="white"
                      />
                      <path
                        d="M47.9266 12.2598L12.1807 48H8.19388L46.4019 9.78635C47.1966 10.3956 47.7393 11.276 47.9266 12.2598Z"
                        fill="white"
                      />
                      <path
                        d="M6.97978 8.93929H4.15625V32.2673H6.97978V8.93929Z"
                        fill="white"
                      />
                      <path
                        d="M18.6353 1.92564C17.0058 0.636427 14.9778 -0.0444498 12.9004 0.000186216C10.8231 0.0448223 8.82625 0.812179 7.2536 2.17019C5.68095 3.52821 4.63085 5.39194 4.28403 7.44063C3.93721 9.48933 4.31537 11.5948 5.35341 13.3948L13.0899 26.7388L20.8376 13.4005C21.9095 11.5421 22.2768 9.35999 21.8725 7.25309C21.4681 5.14618 20.319 3.25516 18.6353 1.92564Z"
                        fill="#ED6144"
                      />
                      <path
                        d="M13.0899 11.6781C14.6056 11.6781 15.8343 10.4494 15.8343 8.93365C15.8343 7.41792 14.6056 6.18918 13.0899 6.18918C11.5741 6.18918 10.3454 7.41792 10.3454 8.93365C10.3454 10.4494 11.5741 11.6781 13.0899 11.6781Z"
                        fill="white"
                      />
                      <path
                        d="M40.4612 12.8358C38.8329 11.5526 36.8091 10.8757 34.7365 10.9209C32.6639 10.9662 30.6715 11.7309 29.1009 13.084C27.5302 14.437 26.479 16.2942 26.1274 18.3373C25.7758 20.3803 26.1457 22.4821 27.1736 24.2823L34.9101 37.6489L42.6522 24.3106C43.7253 22.4535 44.0945 20.2722 43.6922 18.1654C43.2899 16.0586 42.1431 14.1668 40.4612 12.8358Z"
                        fill="#ED6144"
                      />
                      <path
                        d="M34.9101 22.5882C36.4259 22.5882 37.6546 21.3595 37.6546 19.8438C37.6546 18.328 36.4259 17.0993 34.9101 17.0993C33.3944 17.0993 32.1656 18.328 32.1656 19.8438C32.1656 21.3595 33.3944 22.5882 34.9101 22.5882Z"
                        fill="white"
                      />
                      <path
                        d="M29.5906 41.2235H34.9101V44.0471H29.5906C28.4537 44.0413 27.3332 43.7751 26.3152 43.2691C25.2971 42.763 24.4086 42.0304 23.7176 41.1275L18.3925 34.1534C17.9902 33.6204 17.481 33.1773 16.8975 32.8525C16.3141 32.5277 15.6692 32.3284 15.0042 32.2673H13.0955V29.4438H15.0833C16.1697 29.5159 17.2281 29.8204 18.1867 30.3367C19.1453 30.853 19.982 31.5692 20.64 32.4367L25.9369 39.4165C26.3668 39.9774 26.9199 40.432 27.5534 40.7454C28.1869 41.0587 28.8838 41.2223 29.5906 41.2235Z"
                        fill="black"
                      />
                      <path
                        d="M47.9887 41.2348H47.9323V44.0583H47.9887V41.2348Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_23">
                        <rect width="48" height="48" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <h4 className="mb-0 py-2">Enjoy your city</h4>
                <p className="m-0">
                  Between picking up and dropping off deliveries, it’s just you
                  and the road—relax, bump your music, and enjoy cruising around
                  town.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default IconSec;
