import React from "react";
import Modal from "react-bootstrap/Modal";
// import StarRatings from "./react-star-ratings";
import ReactStarRating from "react-star-ratings-component";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

export default function Deliverdmodal(props) {
  const { driverChange, restChange, handleSubmit, handleDriverChange, handleRestChange } = props;
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-common modal-deleiverd"
    >
      <Modal.Body>
        <div className="deleiverd-form">
          <div className="text-center deliverd-pop">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="108"
              height="108"
              viewBox="0 0 108 108"
              fill="none"
            >
              <path
                d="M67.9477 5.87357C66.1308 4.01422 63.9605 2.53678 61.5646 1.52808C59.1686 0.519375 56.5951 -0.000244141 53.9954 -0.000244141C51.3958 -0.000244141 48.8223 0.519375 46.4263 1.52808C44.0303 2.53678 41.8601 4.01422 40.0432 5.87357L35.8447 10.1801L29.8372 10.1058C27.2368 10.075 24.6565 10.5645 22.248 11.5455C19.8395 12.5265 17.6514 13.9791 15.8125 15.8181C13.9736 17.657 12.5209 19.845 11.54 22.2535C10.559 24.662 10.0695 27.2424 10.1003 29.8428L10.1678 35.8503L5.87478 40.0488C4.01543 41.8657 2.538 44.0359 1.5293 46.4319C0.520595 48.8279 0.000976563 51.4014 0.000976562 54.001C0.000976563 56.6007 0.520595 59.1742 1.5293 61.5702C2.538 63.9662 4.01543 66.1364 5.87478 67.9533L10.1745 72.1518L10.1003 78.1593C10.0695 80.7597 10.559 83.3401 11.54 85.7486C12.5209 88.1571 13.9736 90.3451 15.8125 92.184C17.6514 94.0229 19.8395 95.4756 22.248 96.4566C24.6565 97.4376 27.2368 97.927 29.8372 97.8963L35.8447 97.8288L40.0432 102.122C41.8601 103.981 44.0303 105.459 46.4263 106.467C48.8223 107.476 51.3958 107.996 53.9954 107.996C56.5951 107.996 59.1686 107.476 61.5646 106.467C63.9605 105.459 66.1308 103.981 67.9477 102.122L72.1461 97.822L78.1536 97.8963C80.7541 97.927 83.3344 97.4376 85.7429 96.4566C88.1514 95.4756 90.3394 94.0229 92.1784 92.184C94.0173 90.3451 95.4699 88.1571 96.4509 85.7486C97.4319 83.3401 97.9214 80.7597 97.8906 78.1593L97.8231 72.1518L102.116 67.9533C103.975 66.1364 105.453 63.9662 106.462 61.5702C107.47 59.1742 107.99 56.6007 107.99 54.001C107.99 51.4014 107.47 48.8279 106.462 46.4319C105.453 44.0359 103.975 41.8657 102.116 40.0488L97.8163 35.8503L97.8906 29.8428C97.9214 27.2424 97.4319 24.662 96.4509 22.2535C95.4699 19.845 94.0173 17.657 92.1784 15.8181C90.3394 13.9791 88.1514 12.5265 85.7429 11.5455C83.3344 10.5645 80.7541 10.075 78.1536 10.1058L72.1461 10.1733L67.9477 5.88032V5.87357ZM69.8849 46.2655L49.6349 66.5155C49.3214 66.8298 48.949 67.0792 48.539 67.2493C48.1289 67.4195 47.6894 67.5071 47.2454 67.5071C46.8015 67.5071 46.3619 67.4195 45.9519 67.2493C45.5419 67.0792 45.1695 66.8298 44.8559 66.5155L34.731 56.3905C34.4172 56.0768 34.1683 55.7042 33.9984 55.2942C33.8286 54.8842 33.7412 54.4448 33.7412 54.001C33.7412 53.5573 33.8286 53.1178 33.9984 52.7079C34.1683 52.2979 34.4172 51.9253 34.731 51.6115C35.0448 51.2978 35.4173 51.0488 35.8273 50.879C36.2373 50.7092 36.6767 50.6218 37.1205 50.6218C37.5642 50.6218 38.0037 50.7092 38.4137 50.879C38.8236 51.0488 39.1962 51.2978 39.51 51.6115L47.2454 59.3538L65.1059 41.4866C65.7396 40.8528 66.5992 40.4968 67.4954 40.4968C68.3916 40.4968 69.2512 40.8528 69.8849 41.4866C70.5186 42.1203 70.8747 42.9798 70.8747 43.876C70.8747 44.7723 70.5186 45.6318 69.8849 46.2655Z"
                fill="#F16114"
              />
            </svg>
            <p>Your order has been delivered</p>
            <h4>Rate and Review for Driver</h4>
            {/* <ul class="ratingstar-pop">
              <li class="start-checked">★</li>
              <li class="start-checked">★</li>
              <li class="start-checked">★</li>
              <li class="start-checked">★</li>
              <li class="">★</li>
            </ul> */}
            <ReactStarRating
              name="driverRating"
              numberOfStar={5}
              numberOfSelectedStar={0}
              colorFilledStar="orange"
              colorEmptyStar="black"
              starSize="47px"
              spaceBetweenStar="10px"
              disableOnSelect={false}
              onSelectStar={(_, value) => driverChange(value)}
            />
          </div>
          <Form>
            <FormGroup className="position-relative">
              <Input
                type="textarea"
                name="message"
                id="message"
                placeholder="Message"
                onChange={handleDriverChange}
              />
            </FormGroup>
            {/* <Button className="submit">Submit</Button> */}
          </Form>
        </div>
        <div className="deleiverd-form ">
          <div className="text-center deliverd-pop">
            <h4>Rate and Review for Restaurant</h4>
            {/* <ul class="ratingstar-pop">
              <li class="start-checked">★</li>
              <li class="start-checked">★</li>
              <li class="start-checked">★</li>
              <li class="start-checked">★</li>
              <li class="">★</li>
            </ul> */}
            <ReactStarRating
              numberOfStar={5}
              numberOfSelectedStar={0}
              colorFilledStar="orange"
              colorEmptyStar="black"
              starSize="47px"
              spaceBetweenStar="10px"
              disableOnSelect={false}
              onSelectStar={(e, val) => restChange(e, val)}
            />
            <Form>
              <FormGroup className="position-relative">
                <Input
                  type="textarea"
                  name="message"
                  id="message"
                  placeholder="Message"
                  onChange={handleRestChange}
                />
              </FormGroup>
              <Button className="submit" onClick={handleSubmit}>
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
