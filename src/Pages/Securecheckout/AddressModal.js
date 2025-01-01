import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { addAddress, getAddress } from "../../Redux/actions";
import GooglePlacesAutocomplete, {
  geocodeByPlaceId,
} from "react-google-places-autocomplete";

export default function AddAddressModal(props) {
  const dispatch = useDispatch();
  const [addr, setAddr] = useState({
    address: "",
    addressLocation: {
      lng: 0,
      lat: 0,
    },
    area: "",
    houseNo: "",
    addressType: "Home",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddr((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const callBack = () => {
      dispatch(getAddress());
      setTimeout(() => {
        props.onHide();
      }, 100);
    };
    dispatch(addAddress(addr, callBack));
  };

  const handleLocation = (data) => {
    geocodeByPlaceId(data?.value?.place_id)
      .then((results) => {
        const result = results[0];

        if (!result) return;
        setAddr((prev) => ({
          ...prev,
          addressLocation: {
            lat: result.geometry.location.lat(),
            lng: result.geometry.location.lng(),
          },
          address: result.formatted_address,
        }));
      })
      .catch((error) => console.error(error));
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
          Add Address Details
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
          <Form>
            <Row>
              <Col lg={12} md={12} sm={12}>
                <div className="right-address">
                  <FormGroup className="position-relative">
                    <GooglePlacesAutocomplete
                      apiKey={"AIzaSyCxT0bWYVtnIjEp6H1HKhKxMbNfFtwJJGI"}
                      selectProps={{
                        id: "formGroupExampleInput",
                        classNamePrefix: "select21-selection",
                        placeholder: "Address Location",
                        onChange: handleLocation,
                        noOptionsMessage: () => "No address found",
                      }}
                    />
                    {/* <div className="address-location">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                      >
                        <path
                          d="M10.9996 15.4C13.4297 15.4 15.3996 13.43 15.3996 11C15.3996 8.56992 13.4297 6.59998 10.9996 6.59998C8.56956 6.59998 6.59961 8.56992 6.59961 11C6.59961 13.43 8.56956 15.4 10.9996 15.4Z"
                          fill="#1A7D18"
                        />
                        <path
                          d="M12.1 2.2759V0H9.9V2.2759C7.96433 2.52305 6.16547 3.40579 4.78563 4.78563C3.40579 6.16547 2.52305 7.96433 2.2759 9.9H0V12.1H2.2759C2.52269 14.0358 3.40531 15.8349 4.78522 17.2148C6.16512 18.5947 7.96419 19.4773 9.9 19.7241V22H12.1V19.7241C14.0359 19.4775 15.835 18.5949 17.215 17.215C18.5949 15.835 19.4775 14.0359 19.7241 12.1H22V9.9H19.7241C19.4773 7.96419 18.5947 6.16512 17.2148 4.78522C15.8349 3.40531 14.0358 2.52269 12.1 2.2759ZM11 17.6C7.3601 17.6 4.4 14.6399 4.4 11C4.4 7.3601 7.3601 4.4 11 4.4C14.6399 4.4 17.6 7.3601 17.6 11C17.6 14.6399 14.6399 17.6 11 17.6Z"
                          fill="#1A7D18"
                        />
                      </svg>
                    </div> */}
                  </FormGroup>

                  <FormGroup>
                    <Input
                      type="text"
                      name="area"
                      id="exampleEmail"
                      placeholder="House/Office Number *"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  {/* <FormGroup>
                    <Input
                      type="text"
                      name="area"
                      id="exampleEmail"
                      placeholder="Area"
                      onChange={handleChange}
                    />
                  </FormGroup> */}
                  <FormGroup>
                    <select
                      type="select"
                      name="addressType"
                      id="exampleEmail"
                      placeholder="Address Type"
                      onChange={handleChange}
                    >
                      <option value="home">Home</option>
                      <option value="office">Office</option>
                      <option value="other">Other</option>
                    </select>
                  </FormGroup>
                  {/* <FormGroup>
                    <Input
                      type="text"
                      name="email"
                      id="exampleEmail"
                      placeholder="How To Reach (Optional)"
                    />
                  </FormGroup> */}
                  {/* <div className="input-slect">
                    <div class="radio-toolbar addres-select">
                      <input
                        type="radio"
                        id="radioone"
                        name="radioone"
                        value="dollor"
                        checked
                      />
                      <label for="radioone">
                        Home{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0C12.6522 0 15.1957 1.05357 17.0711 2.92893C18.9464 4.8043 20 7.34784 20 10C20 12.6522 18.9464 15.1957 17.0711 17.0711C15.1957 18.9464 12.6522 20 10 20C7.34784 20 4.8043 18.9464 2.92893 17.0711C1.05357 15.1957 0 12.6522 0 10H0ZM9.42933 14.28L15.1867 7.08267L14.1467 6.25067L9.23733 12.3853L5.76 9.488L4.90667 10.512L9.42933 14.2813V14.28Z"
                            fill="#1A7D18"
                          ></path>
                        </svg>
                      </label>

                      <input
                        type="radio"
                        id="radiotwo"
                        name="radiotwo"
                        value="dollor"
                      />
                      <label for="radiotwo">Work</label>

                      <input
                        type="radio"
                        id="radiothree"
                        name="radiothree"
                        value="dollor"
                      />
                      <label for="radiothree">Other</label>
                    </div>
                  </div> */}
                  <Button className="btn-done" onClick={handleSubmit}>
                    Save Address
                  </Button>
                </div>
              </Col>
            </Row>
          </Form>
        </div>
      </Modal.Body>
    </Modal>
  );
}

// import React from "react";
// import { Row, Col } from "react-bootstrap";
// import Modal from "react-bootstrap/Modal";
// import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

// export default function AddressModal(props) {
//   return (
//     <Modal
//       {...props}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//       className="modal-common modal-coupon"
//     >
//       <Modal.Header>
//         <Modal.Title id="contained-modal-title-vcenter">
//           Add Address
//         </Modal.Title>
//         <Button onClick={props.onHide} className="close-btn">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="22"
//             height="22"
//             viewBox="0 0 40 40"
//             fill="none"
//           >
//             <path
//               d="M18.3699 0.0663185C13.7044 0.442104 9.21418 2.52146 5.88406 5.83673C-0.676038 12.3754 -1.89458 22.5885 2.95455 30.4883C5.61698 34.8308 9.93195 38.0458 14.8312 39.3485C16.6005 39.8162 18.0194 39.9999 19.914 39.9999C23.2107 40.0083 25.8314 39.4154 28.8027 37.9707C36.7733 34.1126 41.2468 25.2774 39.6944 16.5091C37.8917 6.37118 28.6274 -0.768764 18.3699 0.0663185ZM23.3359 14.7972L26.6744 11.4568L27.6425 12.4255L28.6024 13.3859L25.2472 16.7095L21.892 20.0331L25.2222 23.3651L28.5523 26.6971L27.6092 27.6324L26.6744 28.576L23.3359 25.2357L19.9974 21.8953L16.684 25.2106L13.3622 28.5342L12.4191 27.599L11.476 26.6637L14.7978 23.34L18.1196 20.0164L14.7978 16.6928L11.4843 13.3775L12.4191 12.4339L13.3622 11.4986L16.6757 14.8139L19.9974 18.1375L23.3359 14.7972Z"
//               fill="black"
//             />
//           </svg>
//         </Button>
//       </Modal.Header>
//       <Modal.Body>
//         <div className="address-modal">
//           <Form>
//             <Row>
//               <Col lg={6} md={6} sm={12}>
//                 <div className="left-address">
//                   <h5>Delivery Address</h5>

//                   <ul className="mt-3 pop-add">
//                     <li>
//                       <div className="addresses-col position-relative">
//                         <div className="iconc-col">
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             width="21"
//                             height="21"
//                             viewBox="0 0 21 21"
//                             fill="none"
//                           >
//                             <path
//                               d="M7.55 0.529535C7.95577 0.187557 8.46935 0 9 0C9.53065 0 10.0442 0.187557 10.45 0.529535L17.2 6.22354C17.708 6.65154 18 7.28053 18 7.94353V10.7625C17.4287 10.2514 16.6834 9.97828 15.9171 9.99936C15.1508 10.0204 14.4216 10.3341 13.8793 10.8759C13.3369 11.4177 13.0226 12.1466 13.0008 12.9129C12.979 13.6792 13.2514 14.4248 13.762 14.9965H13.248C12.542 14.9965 11.912 15.3215 11.5 15.8295V12.7465C11.5 12.5476 11.421 12.3569 11.2803 12.2162C11.1397 12.0756 10.9489 11.9965 10.75 11.9965H7.25C7.05109 11.9965 6.86032 12.0756 6.71967 12.2162C6.57902 12.3569 6.5 12.5476 6.5 12.7465V17.7465C6.5 18.2107 6.31563 18.6558 5.98744 18.984C5.65925 19.3122 5.21413 19.4965 4.75 19.4965H1.75C1.52019 19.4965 1.29262 19.4513 1.0803 19.3633C0.867984 19.2754 0.675066 19.1465 0.512563 18.984C0.350061 18.8215 0.221157 18.6286 0.133211 18.4162C0.0452652 18.2039 0 17.9763 0 17.7465V7.94353C0 7.28053 0.292 6.65154 0.8 6.22354L7.55 0.529535ZM14 12.9965C14 12.4661 14.2107 11.9574 14.5858 11.5823C14.9609 11.2072 15.4696 10.9965 16 10.9965C16.5304 10.9965 17.0391 11.2072 17.4142 11.5823C17.7893 11.9574 18 12.4661 18 12.9965C18 13.527 17.7893 14.0357 17.4142 14.4107C17.0391 14.7858 16.5304 14.9965 16 14.9965C15.4696 14.9965 14.9609 14.7858 14.5858 14.4107C14.2107 14.0357 14 13.527 14 12.9965ZM13.25 15.9965C12.56 15.9965 12 16.5565 12 17.2465V17.2495L12.001 17.5475L12.009 17.6535C12.0641 18.1496 12.2425 18.6241 12.528 19.0335C13.074 19.8135 14.114 20.4965 16 20.4965C17.886 20.4965 18.926 19.8135 19.472 19.0335C19.7575 18.6241 19.9359 18.1496 19.991 17.6535L19.999 17.5475C20.002 17.4775 20.001 17.4055 20.001 17.3345L20 17.2465C20 16.5565 19.44 15.9965 18.75 15.9965H13.25Z"
//                               fill="#C4C4C4"
//                             />
//                           </svg>
//                         </div>
//                         <div className="adrees-cont">
//                           <h5>Home </h5>
//                           <p>4955 Steubenville Pi Suite</p>
//                         </div>
//                         <div className="green-tik">
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             width="20"
//                             height="20"
//                             viewBox="0 0 20 20"
//                             fill="none"
//                           >
//                             <path
//                               fill-rule="evenodd"
//                               clip-rule="evenodd"
//                               d="M0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0C12.6522 0 15.1957 1.05357 17.0711 2.92893C18.9464 4.8043 20 7.34784 20 10C20 12.6522 18.9464 15.1957 17.0711 17.0711C15.1957 18.9464 12.6522 20 10 20C7.34784 20 4.8043 18.9464 2.92893 17.0711C1.05357 15.1957 0 12.6522 0 10H0ZM9.42933 14.28L15.1867 7.08267L14.1467 6.25067L9.23733 12.3853L5.76 9.488L4.90667 10.512L9.42933 14.2813V14.28Z"
//                               fill="#1A7D18"
//                             />
//                           </svg>
//                         </div>
//                       </div>
//                     </li>
//                     <li>
//                       <div className="addresses-col">
//                         <div className="iconc-col">
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             width="17"
//                             height="12"
//                             viewBox="0 0 17 12"
//                             fill="none"
//                           >
//                             <path
//                               d="M7.80009 11.6544C7.87808 11.761 7.98243 11.8481 8.10415 11.9083C8.22588 11.9685 8.36133 12 8.49885 12C8.63636 12 8.77182 11.9685 8.89354 11.9083C9.01527 11.8481 9.11962 11.761 9.1976 11.6544L16.8482 1.25511C16.9368 1.13517 16.9887 0.994677 16.9984 0.848906C17.008 0.703136 16.975 0.55766 16.903 0.428286C16.831 0.298911 16.7227 0.190586 16.5898 0.115079C16.457 0.0395717 16.3047 -0.000229059 16.1494 9.91654e-07L0.848249 9.91654e-07C0.693404 0.000602878 0.541662 0.0409155 0.409343 0.116603C0.277024 0.192291 0.169133 0.300491 0.0972733 0.429566C0.0254137 0.558641 -0.00769579 0.703709 0.0015053 0.849167C0.0107064 0.994626 0.06187 1.13497 0.149494 1.25511L7.80009 11.6544Z"
//                               fill="#3F3D56"
//                             />
//                           </svg>
//                         </div>
//                         <div className="adrees-cont">
//                           <h5>Previous Delivery Addresses </h5>
//                         </div>
//                       </div>
//                     </li>
//                     <li>
//                       <div className="addresses-col">
//                         <div className="iconc-col">
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             width="22"
//                             height="20"
//                             viewBox="0 0 22 20"
//                             fill="none"
//                           >
//                             <path
//                               d="M18.7 3.33333H15.4V2.22222C15.4 1 14.41 0 13.2 0H8.8C7.59 0 6.6 1 6.6 2.22222V3.33333H3.3C1.43 3.33333 0 4.77778 0 6.66667V16.6667C0 18.5556 1.43 20 3.3 20H18.7C20.57 20 22 18.5556 22 16.6667V6.66667C22 4.77778 20.57 3.33333 18.7 3.33333ZM8.8 2.22222H13.2V3.33333H8.8V2.22222ZM19.8 16.6667C19.8 17.3333 19.36 17.7778 18.7 17.7778H3.3C2.64 17.7778 2.2 17.3333 2.2 16.6667V10.4444L7.37 12.2222H14.3C14.41 12.2222 14.52 12.2222 14.63 12.1111L19.8 10.3333V16.6667Z"
//                               fill="#C4C4C4"
//                             />
//                           </svg>
//                         </div>
//                         <div className="adrees-cont">
//                           <h5>Office </h5>
//                           <p>4489 Kerry Way, Sector 33, Canada </p>
//                         </div>
//                       </div>
//                     </li>

//                     <li>
//                       <div className="addresses-col">
//                         <div className="iconc-col">
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             width="20"
//                             height="20"
//                             viewBox="0 0 20 20"
//                             fill="none"
//                           >
//                             <path
//                               d="M0.36625 7.8477L9.11625 0.315065C9.35066 0.113329 9.66854 0 10 0C10.3315 0 10.6493 0.113329 10.8837 0.315065L19.6338 7.8477C19.8682 8.04946 19.9999 8.32312 20 8.6085V18.9239C20 19.2093 19.8683 19.483 19.6339 19.6848C19.3995 19.8866 19.0815 20 18.75 20H12.5V12.4674H7.5V20H1.25C0.918479 20 0.600537 19.8866 0.366117 19.6848C0.131696 19.483 0 19.2093 0 18.9239V8.6085C7.07968e-05 8.32312 0.131814 8.04946 0.36625 7.8477Z"
//                               fill="#C4C4C4"
//                             />
//                           </svg>
//                         </div>
//                         <div className="adrees-cont">
//                           <h5>Home </h5>
//                           <p>18 Davidson St, Miles End, QLD 4596</p>
//                         </div>
//                       </div>
//                     </li>
//                   </ul>
//                   <Button className="btn-done mt-5">Done</Button>
//                 </div>
//               </Col>
//               <Col lg={6} md={6} sm={12}>
//                 <div className="right-address">
//                   <h5>Add Address Details</h5>
//                   <FormGroup className="position-relative">
//                     <Input
//                       type="text"
//                       name="address"
//                       id="address"
//                       placeholder="4955 Steubenville Pi Suite "
//                     />
//                     <div className="address-location">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="22"
//                         height="22"
//                         viewBox="0 0 22 22"
//                         fill="none"
//                       >
//                         <path
//                           d="M10.9996 15.4C13.4297 15.4 15.3996 13.43 15.3996 11C15.3996 8.56992 13.4297 6.59998 10.9996 6.59998C8.56956 6.59998 6.59961 8.56992 6.59961 11C6.59961 13.43 8.56956 15.4 10.9996 15.4Z"
//                           fill="#1A7D18"
//                         />
//                         <path
//                           d="M12.1 2.2759V0H9.9V2.2759C7.96433 2.52305 6.16547 3.40579 4.78563 4.78563C3.40579 6.16547 2.52305 7.96433 2.2759 9.9H0V12.1H2.2759C2.52269 14.0358 3.40531 15.8349 4.78522 17.2148C6.16512 18.5947 7.96419 19.4773 9.9 19.7241V22H12.1V19.7241C14.0359 19.4775 15.835 18.5949 17.215 17.215C18.5949 15.835 19.4775 14.0359 19.7241 12.1H22V9.9H19.7241C19.4773 7.96419 18.5947 6.16512 17.2148 4.78522C15.8349 3.40531 14.0358 2.52269 12.1 2.2759ZM11 17.6C7.3601 17.6 4.4 14.6399 4.4 11C4.4 7.3601 7.3601 4.4 11 4.4C14.6399 4.4 17.6 7.3601 17.6 11C17.6 14.6399 14.6399 17.6 11 17.6Z"
//                           fill="#1A7D18"
//                         />
//                       </svg>
//                     </div>
//                   </FormGroup>

//                   <FormGroup>
//                     <Input
//                       type="text"
//                       name="email"
//                       id="exampleEmail"
//                       placeholder="Office Name / Number *"
//                     />
//                   </FormGroup>
//                   <FormGroup>
//                     <Input
//                       type="text"
//                       name="email"
//                       id="exampleEmail"
//                       placeholder="Floor *"
//                     />
//                   </FormGroup>
//                   <FormGroup>
//                     <Input
//                       type="text"
//                       name="email"
//                       id="exampleEmail"
//                       placeholder="Tower / Wing *"
//                     />
//                   </FormGroup>
//                   <FormGroup>
//                     <Input
//                       type="text"
//                       name="email"
//                       id="exampleEmail"
//                       placeholder="How To Reach (Optional)"
//                     />
//                   </FormGroup>
//                   <div className="input-slect">
//                     <div class="radio-toolbar addres-select">
//                       <input
//                         type="radio"
//                         id="radioone"
//                         name="radioone"
//                         value="dollor"
//                         checked
//                       />
//                       <label for="radioone">
//                         Home{" "}
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="20"
//                           height="20"
//                           viewBox="0 0 20 20"
//                           fill="none"
//                         >
//                           <path
//                             fill-rule="evenodd"
//                             clip-rule="evenodd"
//                             d="M0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0C12.6522 0 15.1957 1.05357 17.0711 2.92893C18.9464 4.8043 20 7.34784 20 10C20 12.6522 18.9464 15.1957 17.0711 17.0711C15.1957 18.9464 12.6522 20 10 20C7.34784 20 4.8043 18.9464 2.92893 17.0711C1.05357 15.1957 0 12.6522 0 10H0ZM9.42933 14.28L15.1867 7.08267L14.1467 6.25067L9.23733 12.3853L5.76 9.488L4.90667 10.512L9.42933 14.2813V14.28Z"
//                             fill="#1A7D18"
//                           ></path>
//                         </svg>
//                       </label>

//                       <input
//                         type="radio"
//                         id="radiotwo"
//                         name="radiotwo"
//                         value="dollor"
//                       />
//                       <label for="radiotwo">Work</label>

//                       <input
//                         type="radio"
//                         id="radiothree"
//                         name="radiothree"
//                         value="dollor"
//                       />
//                       <label for="radiothree">Other</label>
//                     </div>
//                   </div>
//                   <Button className="btn-done">Save Adress</Button>
//                 </div>
//               </Col>
//             </Row>
//           </Form>
//         </div>
//       </Modal.Body>
//     </Modal>
//   );
// }
