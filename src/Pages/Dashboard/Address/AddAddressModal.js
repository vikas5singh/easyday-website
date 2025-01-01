import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { addAddress, getAddress } from "../../../Redux/actions";
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
                        noOptionsMessage: () => "No address found !",
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
                      placeholder="House/Office Number*"
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
                      <option>home</option>
                      <option>office</option>
                      <option>other</option>
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
