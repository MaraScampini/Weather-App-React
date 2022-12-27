import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { RegionContext } from "../../Context/RegionContext";

function Landing() {
  // Get the handler from the Context
  const { regionHandler } = useContext(RegionContext);
  const navigate = useNavigate();
  // Use the handler to set the region and navigate to the dashboard
  const navigationHandler = (region) => {
    regionHandler(region);
    navigate("/dashboard");
  };
  return (
    <Container className="d-flex flex-column justify-content-center landing">
      <Row>
        <Col className="d-flex justify-content-center">
          <span className="titleSpan">CHOOSE YOUR REGION</span>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        <Col sm="8" md="4" lg="3" className="d-flex flex-column">
          <button onClick={() => navigationHandler("europe")} id="cityButton">
            Europe
          </button>
          <button
            onClick={() => navigationHandler("northamerica")}
            id="cityButton"
          >
            North America
          </button>
        </Col>
      </Row>
    </Container>
  );
}

export default Landing;
