import React from "react"
import { Link } from "react-router-dom"
import { Container, Row, Col } from "reactstrap"


//Import Images
// import error from "../../assets/images/error-img.png"

const Pages404 = props => {
    return (
        <div className="account-pages my-5 pt-5">
            <Container>
                <Row>
                    <Col lg="12">
                        <div className="text-center mb-5">
                            <h1 className="display-2 font-weight-medium">
                                404
                            </h1>
                            <h4 className="text-uppercase">Page Not Found</h4>
                            <div className="mt-5 text-center">
                                <Link
                                    className="btn btn-primary waves-effect waves-light"
                                    to="/"
                                >
                                    Back To Home Page
                                </Link>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col md="8" xl="6">
                        <div>
                            <img src={"/images/error-img.png"} alt="" className="img-fluid" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Pages404
