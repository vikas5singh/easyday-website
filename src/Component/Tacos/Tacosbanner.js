import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import { restaurantDetail, freshMarkettDetail } from "../../Redux/actions";
import { useSearchParams } from "react-router-dom";
import moment from "moment";
const Tacosbanner = (props) => {
  console.log(props, "props");
  const dispatch = useDispatch();
  const detail = useSelector((s) => s.restaurant?.dataDetails);

  const [searchParams] = useSearchParams();

  let isFreshMarket = searchParams.get("type") === "fresh";

  useEffect(() => {
    if (isFreshMarket) {
      // console.log("HEllo")
      return dispatch(freshMarkettDetail(props.editId));
    } else {
      // console.log("NO HEllo");
      dispatch(restaurantDetail({ storeTypeId: props?.storeId, _id: props.editId }));
    }
  }, [dispatch]);
  // var cleaned = ("" + detail.mobileNumber).replace(/\D/g, "");
  // var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  console.log(detail, "detail");
  return (
    <section className="Tacosbanner-section position-relative">
      <div>
        {/* <div className="banner-tacos position-relative"> */}
        <div className="position-relative" style={{
          backgroundImage: `url(${detail?.vendorDetails?.profileImage?.link})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}>
          <div className="banner-content">
            <h1 className="text-capitalize">{detail?.vendorDetails?.name}</h1>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M16 26C14.5565 24.8032 13.2185 23.4911 12 22.0774C10.1714 19.9545 8 16.7929 8 13.7802C7.99921 12.2415 8.46801 10.7372 9.34708 9.4577C10.2261 8.17815 11.476 7.18085 12.9384 6.592C14.4007 6.00316 16.01 5.84925 17.5624 6.14975C19.1148 6.45025 20.5406 7.19165 21.6594 8.28012C22.4043 9.00094 22.9946 9.85819 23.3964 10.8023C23.7982 11.7463 24.0033 12.7585 24 13.7802C24 16.7929 21.8285 19.9545 20 22.0774C18.7815 23.4911 17.4435 24.8032 16 26ZM16 10.4475C15.0907 10.4475 14.2186 10.7986 13.5756 11.4236C12.9326 12.0486 12.5714 12.8963 12.5714 13.7802C12.5714 14.664 12.9326 15.5117 13.5756 16.1367C14.2186 16.7617 15.0907 17.1128 16 17.1128C16.9093 17.1128 17.7814 16.7617 18.4243 16.1367C19.0673 15.5117 19.4285 14.664 19.4285 13.7802C19.4285 12.8963 19.0673 12.0486 18.4243 11.4236C17.7814 10.7986 16.9093 10.4475 16 10.4475Z"
                  fill="white"
                />
              </svg>
              {detail?.vendorDetails?.address}
            </p>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="22"
                viewBox="0 0 24 22"
                fill="none"
              >
                <path
                  d="M23.4913 8.08924H16.6026C16.4842 8.08924 16.3874 8.18611 16.3874 8.30451V9.59612C16.3874 9.71452 16.4842 9.81139 16.6026 9.81139H23.4913C23.6097 9.81139 23.7065 9.71452 23.7065 9.59612V8.30451C23.7065 8.18611 23.6097 8.08924 23.4913 8.08924ZM19.8855 11.7488H16.6026C16.4842 11.7488 16.3874 11.8457 16.3874 11.9641V13.2557C16.3874 13.3741 16.4842 13.471 16.6026 13.471H19.8855C20.0039 13.471 20.1008 13.3741 20.1008 13.2557V11.9641C20.1008 11.8457 20.0039 11.7488 19.8855 11.7488ZM10.9061 5.68091H9.74092C9.57409 5.68091 9.43954 5.81545 9.43954 5.98229V12.6556C9.43954 12.7525 9.48529 12.8413 9.56332 12.8978L13.57 15.8201C13.7046 15.917 13.8929 15.8901 13.9898 15.7555L14.6814 14.811V14.8083C14.7782 14.6738 14.7486 14.4854 14.6141 14.3886L11.2048 11.9237V5.98229C11.2074 5.81545 11.0702 5.68091 10.9061 5.68091Z"
                  fill="white"
                />
                <path
                  d="M19.7187 15.1364H18.1634C18.0127 15.1364 17.8701 15.2145 17.7894 15.3436C17.4476 15.8845 17.0494 16.385 16.5919 16.8425C15.8035 17.6309 14.8859 18.2498 13.8661 18.6803C12.8086 19.127 11.6865 19.353 10.5294 19.353C9.36963 19.353 8.24754 19.127 7.19272 18.6803C6.17288 18.2498 5.25529 17.6309 4.46686 16.8425C3.67844 16.054 3.05954 15.1364 2.629 14.1166C2.18231 13.0618 1.95628 11.9397 1.95628 10.7799C1.95628 9.62017 2.18231 8.50076 2.629 7.44325C3.05954 6.42341 3.67844 5.50583 4.46686 4.7174C5.25529 3.92898 6.17288 3.31007 7.19272 2.87954C8.24754 2.43285 9.37232 2.20682 10.5294 2.20682C11.6892 2.20682 12.8113 2.43285 13.8661 2.87954C14.8859 3.31007 15.8035 3.92898 16.5919 4.7174C17.0494 5.17485 17.4476 5.67535 17.7894 6.21622C17.8701 6.34538 18.0127 6.42341 18.1634 6.42341H19.7187C19.9044 6.42341 20.0228 6.22967 19.9394 6.06553C18.1849 2.57547 14.6276 0.307064 10.6559 0.261319C4.84089 0.188665 0.0107819 4.94882 1.83835e-05 10.7584C-0.0107451 16.5788 4.70635 21.3012 10.5267 21.3012C14.5496 21.3012 18.1661 19.0248 19.9394 15.4943C20.0228 15.3302 19.9017 15.1364 19.7187 15.1364Z"
                  fill="white"
                />
              </svg>
              Hours:
              {/* {detail.openingTime + " To " + detail.closingTime} */}
              {detail?.vendorDetails?.startTime
                ? moment(detail?.vendorDetails?.startTime, ["HH:mm"]).format("hh:mm A") +
                " To " +
                moment(detail?.vendorDetails?.closeTime, ["HH:mm"]).format("hh:mm A")
                : "00:00"}
            </p>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle cx="12" cy="12" r="10" fill="white" />
                <line x1="12" y1="6" x2="12" y2="12" stroke="green" stroke-width="2" />
              </svg>
              Status:{" "}
              {detail?.vendorDetails?.vendorOpenCloseStatus}

              {/* {match && "(" + match[1] + ") " + match[2] + "-" + match[3]} */}
            </p>
          </div>
          <div className="overlay-banner"></div>
        </div>
      </div>
    </section>
  );
};

export default Tacosbanner;
