import React from "react";
import { Row, Col } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { delAddress, getAddress } from "../../../Redux/actions";

export default function DeleteModal(props) {
  let Data = props.data;
  const dispatch = useDispatch();
  const handleSubmit = (e, Id) => {
    e.preventDefault();
    const callBack = () => {
      dispatch(getAddress());
      setTimeout(() => {
        props.onHide();
      }, 100);
    };
    dispatch(delAddress({ _id: Id }, callBack));
  };
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-common modal-coupon"
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Delete Address Details
        </Modal.Title>
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
      </Modal.Header>
      <Modal.Body>
        <div className="address-modal">
          <Row>
            <Col lg={12} md={12} sm={12}>
              <div className="delete-modal-cont">
                <h5 className="text-center head-center">
                  Are you Sure You Want to Delete Address ?
                </h5>

                <div className="Both-wrap">
                  <div className="delete-one">
                    <div className="address-left">
                      <div className="icon-first">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                        >
                          <path
                            d="M9.05947 0.645884C9.54637 0.228767 10.1626 0 10.7994 0C11.4361 0 12.0524 0.228767 12.5393 0.645884L20.6388 7.59096C21.2484 8.113 21.5987 8.8802 21.5987 9.68888V13.1273C20.9132 12.5038 20.0189 12.1707 19.0994 12.1964C18.1799 12.2221 17.3049 12.6047 16.6542 13.2655C16.0034 13.9264 15.6262 14.8154 15.6 15.7501C15.5739 16.6848 15.9007 17.5941 16.5134 18.2915H15.8967C15.0495 18.2915 14.2936 18.688 13.7992 19.3076V15.5472C13.7992 15.3046 13.7044 15.0719 13.5356 14.9003C13.3668 14.7288 13.1379 14.6324 12.8993 14.6324H8.6995C8.46081 14.6324 8.23191 14.7288 8.06314 14.9003C7.89436 15.0719 7.79955 15.3046 7.79955 15.5472V21.6458C7.79955 22.2119 7.57831 22.7548 7.18451 23.1551C6.7907 23.5554 6.25659 23.7803 5.69967 23.7803H2.09988C1.82412 23.7803 1.55106 23.7251 1.29629 23.6178C1.04152 23.5105 0.810032 23.3533 0.61504 23.1551C0.420048 22.9569 0.265373 22.7216 0.159844 22.4626C0.0543151 22.2036 0 21.9261 0 21.6458V9.68888C0 8.8802 0.35038 8.113 0.959944 7.59096L9.05947 0.645884ZM16.799 15.8521C16.799 15.2051 17.0519 14.5847 17.5019 14.1272C17.952 13.6697 18.5624 13.4127 19.1989 13.4127C19.8354 13.4127 20.4458 13.6697 20.8958 14.1272C21.3459 14.5847 21.5987 15.2051 21.5987 15.8521C21.5987 16.4991 21.3459 17.1196 20.8958 17.5771C20.4458 18.0345 19.8354 18.2915 19.1989 18.2915C18.5624 18.2915 17.952 18.0345 17.5019 17.5771C17.0519 17.1196 16.799 16.4991 16.799 15.8521ZM15.8991 19.5113C15.0711 19.5113 14.3992 20.1943 14.3992 21.0359V21.0396L14.4004 21.403L14.41 21.5323C14.4761 22.1375 14.6902 22.7161 15.0327 23.2156C15.6879 24.1669 16.9358 25 19.1989 25C21.462 25 22.7099 24.1669 23.365 23.2156C23.7076 22.7161 23.9217 22.1375 23.9878 21.5323L23.9974 21.403C24.001 21.3177 23.9998 21.2298 23.9998 21.1432L23.9986 21.0359C23.9986 20.1943 23.3266 19.5113 22.4987 19.5113H15.8991Z"
                            fill="#D4082D"
                          />
                        </svg>
                      </div>
                      <div className="address-cont">
                        <h5>{Data?.addressType}</h5>
                        <p>{Data?.address}</p>
                      </div>
                    </div>
                  </div>

                  <Button
                    className="delete-btn"
                    onClick={(e) => handleSubmit(e, Data._id)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Modal.Body>
    </Modal>
  );
}
