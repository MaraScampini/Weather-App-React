import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { RegionContext } from "../../Context/RegionContext";

import "../../App.css";
import BarChart from "../../Components/BarChart/BarChart";
import DoubleLineChart from "../../Components/DoubleLineChart/DoubleLineChart";
import LineChart from "../../Components/LineChart/LineChart";

function Dashboard() {
  let cities = {
    city1: "",
    city2: "",
    city3: "",
  };
  let buttons={
    button1: "",
    button2: "",
    button3: "",
  };
  const { region } = useContext(RegionContext);

  switch (region) {
    case "europe":
      cities = {
        city1: "madrid,es",
        city2: "london,uk",
        city3: "paris,fr",
      };
      buttons={
          button1: "Madrid",
          button2: "London",
          button3: "Paris",
      };
      break;
    case "northamerica":
      cities = {
        city1: "new%20york,us",
        city2: "los%20angeles,us",
        city3: "toronto,ca",
      };
      buttons={
          button1: "New York",
          button2: "Los Angeles",
          button3: "Toronto",
      };
      break;
  }
  const [city, setCity] = useState(cities.city1);

  const clickHandler = (city) => {
    setCity(city);
    return true;
  };


  return (
    <Container fluid className="container">
      <Row>
        <Col className="d-flex justify-content-center">
          <Button onClick={() => clickHandler(cities.city1)} id="cityButton">
            {buttons.button1}
          </Button>
          <Button onClick={() => clickHandler(cities.city2)} id="cityButton">
            {buttons.button2}
          </Button>
          <Button onClick={() => clickHandler(cities.city3)} id="cityButton">
            {buttons.button3}
          </Button>
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
