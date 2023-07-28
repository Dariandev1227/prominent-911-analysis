import axios from "axios";

import { WeatherAPIOptionType } from "../types";

export const getClimateDate = async ({
  lat,
  lon,
  start,
  end,
}: WeatherAPIOptionType) => {
  const baseURL = process.env.REACT_APP_WEATHER_URL;
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  const options = {
    method: "GET",
    url: baseURL,
    params: {
      lat,
      lon,
      start,
      end,
    },
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": "meteostat.p.rapidapi.com",
    },
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
