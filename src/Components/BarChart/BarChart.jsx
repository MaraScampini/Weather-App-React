import React from "react";

import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useState, useEffect } from "react";
import { Forecast } from "../../Services/ApiCalls";

function BarChart({ city, type }) {
  // Use data for the information sent by the API, dates to set the labels for day and hour and results for the filtered data itself that the graphics will use
  const [data, setData] = useState([]);
  const [dates, setDates] = useState([]);
  const [results, setResults] = useState([]);

  // Depending on the type of graphic the results will be set with one type of data or another and the labels also change.
  let dataType;
  let labelType;
  switch (type) {
    case "windSpeed":
      dataType = data.map((data) => data.wind.speed);
      labelType = "Wind speed forecast in km/h";
      break;
    case "windGust":
      dataType = data.map((data) => data.wind.gust);
      labelType = "Wind gust forecast in km/h";
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
          backgroundColor: ["#EF4765"],
        },
      ],
    });
  }, [dates, results]);

  return <Bar data={chartData} options={options} />;
}

export default BarChart;
