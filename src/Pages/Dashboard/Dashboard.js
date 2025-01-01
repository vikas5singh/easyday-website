import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import Dashboardsidebar from "./Dashboardsidebar";
import Dashboradright from "./Dashboradright";

export default function Dashboard() {
  const navigate = useNavigate();
  const params = useParams();
  const tab = params.tab;

  const handleChange = (newValue) => {
    if (
      [
        "address",
        "wallet",
        "order",
        "compare",
        "scan",
        "dispute",
        "faq",
        "hlo",
        "profile",
        "cart",
        "changepassword"
      ].includes(newValue)
    ) {
      navigate("/dashboard/" + newValue);
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <section className="dashboard-main">
      <Container>
        <Row>
          <Col lg={3} md={4} sm={12}>
            <Dashboardsidebar handleChange={handleChange} value={tab} />
          </Col>
          <Col lg={9} md={8} sm={12}>
            <Dashboradright tab={tab} />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
