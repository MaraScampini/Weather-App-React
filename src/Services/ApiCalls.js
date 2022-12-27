import axios from "axios";

const URL_CURRENT = "http://api.openweathermap.org/data/2.5/weather?q=";
const URL_FORECAST = "https://api.openweathermap.org/data/2.5/forecast?q=";
const apiKey = "&APPID=0ad001533b5fbb8d3d823196f6909479";
const units = "&units=metric";


// https://api.openweathermap.org/data/2.5/forecast?q=london,uk&appid=d356c60038a283707afc8ed0b68c954a

export const Forecast = async (city) => {
  try {
    let res = await axios.get(`${URL_FORECAST}${city}${apiKey}${units}`);
    return res.data.list;
  } catch (error) {
    console.error(error);
  }
};
