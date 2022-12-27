import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { RegionContext } from "../../Context/RegionContext";

function Landing() {
  const {regionHandler} = useContext(RegionContext);
    const navigate = useNavigate();

  const navigationHandler = (region) => {
    regionHandler(region);
    navigate("/dashboard");
  }
  return (
    <Container className="d-flex flex-column justify-content-center">
      <Row>
        <Col>
          <span className='titleSpan'>CHOOSE YOUR REGION</span>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        <Col md="4" className="d-flex flex-column">
          <button onClick={() => navigationHandler("europe")} id="cityButton">
            Europe
          </button>
          <button onClick={() => navigationHandler("northamerica")} id="cityButton">
            North America
          </button>
        </Col>
      </Row>
    </Container>
  );
}

export default Landing