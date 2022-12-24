import React from "react";
import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import '../../App.css';

import BarChart from "../../Components/BarChart/BarChart";
import DoubleLineChart from "../../Components/DoubleLineChart/DoubleLineChart";
import LineChart from "../../Components/LineChart/LineChart";

function Dashboard() {
  const [city, setCity] = useState("valencia,es");

  const clickHandler = (city) => {
    setCity(city);
    return true;
  };

  return (
    <Container fluid className="container">
      <Row>
        <Col className="d-flex justify-content-center">
          <Button onClick={() => clickHandler("valencia,es")} id="cityButton">Valencia</Button>
          <Button onClick={() => clickHandler("madrid,es")} id="cityButton">Madrid</Button>
          <Button onClick={() => clickHandler("barcelona,es")} id="cityButton">Barcelona</Button>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        <Col sm="12" md="5" className="widget">
          <LineChart city={city} type="temperature" />
        </Col>
        <Col sm="12" md="5" className="widget">
          <DoubleLineChart city={city} type="feelslike" />
        </Col>
        <Col sm="12" md="5" className="widget">
          <LineChart city={city} type="humidity" />
        </Col>
        <Col sm="12" md="5" className="widget">
          <BarChart city={city} type="windSpeed" />
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
