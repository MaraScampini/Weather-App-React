import React from "react";
import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

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
    <Container fluid>
      Dashboard
      <Row>
        <Col>
          <Button onClick={() => clickHandler("valencia,es")}>Valencia</Button>
          <Button onClick={() => clickHandler("madrid,es")}>Madrid</Button>
        </Col>
      </Row>
      <Row>
        <Col sm="12" md="6">
          <LineChart city={city} type="temperature" />
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
