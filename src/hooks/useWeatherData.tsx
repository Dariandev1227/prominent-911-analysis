import { useState, useEffect } from "react";

import { WeatherAPIOptionType, WeatherData } from "../types";
import { getClimateDate } from "../services/getClimateData";

interface ParamTypes extends WeatherAPIOptionType {
  hour: number;
}

export const useWeatherData = ({ lat, lon, start, end, hour }: ParamTypes) => {
  const [climateData, setClimateData] = useState<WeatherData>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const { data } = await getClimateDate({
          lat,
          lon,
          start,
          end,
        });
        setClimateData(data[hour]);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        console.log(err);
      }
    })();
  }, [end, hour, lat, lon, start]);

  return { isLoading, climateData };
};
