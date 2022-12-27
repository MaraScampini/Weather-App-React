import React from "react";

import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useState, useEffect } from "react";
import { Forecast } from "../../Services/ApiCalls";

function BarChart({ city, type }) {
  const [data, setData] = useState([]);
  const [dates, setDates] = useState([]);
  const [results, setResults] = useState([]);

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
  
  useEffect(() => {
    Forecast(city).then((data) => setData(data));
  }, []);
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
