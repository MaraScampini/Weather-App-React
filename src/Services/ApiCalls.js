import axios from "axios";

const URL_CURRENT = "http://api.openweathermap.org/data/2.5/weather?q=";
const URL_FORECAST = "https://api.openweathermap.org/data/2.5/forecast?q=";
const apiKey = "&APPID=d356c60038a283707afc8ed0b68c954a";
const units = "&units=metric";

// Example call = ${URL}London,uk${apiKey};

export const Current = async (city) => {
  try {
    let res = await axios.get(`${URL_CURRENT}${city}${apiKey}${units}`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

// https://api.openweathermap.org/data/2.5/forecast?q=london,uk&appid=d356c60038a283707afc8ed0b68c954a

export const Forecast = async (city) => {
  try {
    let res = await axios.get(`${URL_FORECAST}${city}${apiKey}${units}`);
    return res.data.list;
  } catch (error) {
    console.error(error);
  }
};
