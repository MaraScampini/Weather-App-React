import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { RegionContext } from "../../Context/RegionContext";

import "../../App.css";
import BarChart from "../../Components/BarChart/BarChart";
import DoubleLineChart from "../../Components/DoubleLineChart/DoubleLineChart";
import LineChart from "../../Components/LineChart/LineChart";

function Dashboard() {
  let [cities, setCities] = useState({
    city1: "",
    city2: "",
    city3: "",
  });
  let [buttons, setButtons] = useState({
    button1: "",
    button2: "",
    button3: "",
  });
  const { region } = useContext(RegionContext);

  let localRegion = region || localStorage.getItem("region");

  useEffect(() => {
    switch (localRegion) {
      case "europe":
        setCities({
          city1: "madrid,es",
          city2: "london,uk",
          city3: "paris,fr",
        });
        setButtons({
          button1: "Madrid",
          button2: "London",
          button3: "Paris",
        });
        break;
      case "northamerica":
        setCities({
          city1: "new%20york,us",
          city2: "los%20angeles,us",
          city3: "toronto,ca",
        });
        setButtons({
          button1: "New York",
          button2: "Los Angeles",
          button3: "Toronto",
        });
        break;
    }
  }, []);
  const [city, setCity] = useState("");

  useEffect(() => {
    setCity(cities.city1);
  }, [cities, buttons]);
  const clickHandler = (city) => {
    setCity(city);
    return true;
  };
  if (city !== "") {
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
 else {
  return (
    <h1>LOADING</h1>
  )
}}

export default Dashboard;
