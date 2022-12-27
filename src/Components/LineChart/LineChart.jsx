import React from "react";

import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useState, useEffect } from "react";
import { Forecast } from "../../Services/ApiCalls";

function LineChart({ city, type }) {
  // Use data for the information sent by the API, dates to set the labels for day and hour and results for the filtered data itself that the graphics will use
  const [data, setData] = useState([]);
  const [dates, setDates] = useState([]);
  const [results, setResults] = useState([]);

  // Depending on the type of graphic the results will be set with one type of data or another and the labels also change.
  let dataType;
  let labelType;
  switch (type) {
    case "temperature":
      dataType = data.map((data) => data.main.temp);
      labelType = "Temperature forecast in ºC";
      break;
    case "humidity":
      dataType = data.map((data) => data.main.humidity);
      labelType = "Humidity forecast in %";
      break;
  }

  // Initial state for the data that will go into the chart
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "",
        data: [],
        backgroundColor: ["", ""],
      },
    ],
  });

  let options = {
    responsive: true,
  };

  // Asynchronous calls to the API, first get the forecast data for each city, depending on the city that we're receiving from the dashboard buttons, then set the dates and results when the data is received and, finally, set all of it into the graphics.
  useEffect(() => {
    Forecast(city).then((data) => setData(data));
  }, [city]);
  useEffect(() => {
    setDates(data.map((data) => data.dt_txt.slice(5, 16)));
    setResults(dataType);
  }, [data]);
  useEffect(() => {
    setChartData({
      labels: dates,
      datasets: [
        {
          label: labelType,
          data: results,
          fill: {
            target: "origin",
            above: "#FF9A5A1F",
            below: "#FF9A5A1F",
          },
          backgroundColor: ["#FF9A5A"],
        },
      ],
    });
  }, [dates, results]);

  return <Line data={chartData} options={options} />;
}

export default LineChart;
