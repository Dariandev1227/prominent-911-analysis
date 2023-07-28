import React, { useState, useEffect } from "react";
import { Box, Typography, CircularProgress } from "@mui/material";

import DescriptionDetail from "./DescriptionDetail";
import { FileType } from "../../types";
import { formatTime } from "../../utils";
import { useWeatherData } from "../../hooks/useWeatherData";

interface DescriptionWrapperProps {
  data: FileType;
}

const DescriptionWrappr: React.FC<DescriptionWrapperProps> = ({ data }) => {
  const { address, description, fire_department } = data;
  const parseTime = (time: string) => {
    return new Date(time).toLocaleDateString("sv-SE");
  };

  const { climateData, isLoading } = useWeatherData({
    lat: `${address.latitude}`,
    lon: `${address.longitude}`,
    start: parseTime(description.event_opened),
    end: parseTime(description.event_closed),
    hour: description.hour_of_day,
  });

  const formattedAddress = `${address.address_line1}, ${address.city}, ${address.state}, ${address.postal_code}`;
  return isLoading ? (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress />
    </Box>
  ) : (
    <Box sx={{ display: "flex" }}>
      <Box width={"50%"}>
        <Typography variant="h5">Incident Detail</Typography>
        <DescriptionDetail label="Incident Type" detail={description.type} />
        <DescriptionDetail label="Address" detail={formattedAddress} />
        <DescriptionDetail
          label="Coordinate"
          detail={`${address.latitude}, ${address.longitude}`}
        />
        <DescriptionDetail
          label="Event Opened"
          detail={formatTime(description.event_opened)}
        />
        <DescriptionDetail
          label="First United Arrived"
          detail={formatTime(description.first_unit_arrived)}
        />
        <DescriptionDetail
          label="Event Closed"
          detail={formatTime(description.event_closed)}
        />
        <DescriptionDetail
          label="Fire Department"
          detail={fire_department.name}
        />
        <DescriptionDetail label="Comment" detail={description.comments} />
      </Box>
      <Box width="50%">
        <Typography variant="h5">Weather During Incident</Typography>
        <DescriptionDetail
          label="Temperature"
          detail={`${climateData?.temp} °C`}
        />
        <DescriptionDetail
          label="Air Pressure"
          detail={`${climateData?.pres} Pa`}
        />
        <DescriptionDetail
          label="Precipitation"
          detail={`${climateData?.prcp} mm`}
        />
        <DescriptionDetail
          label="Snow"
          detail={climateData?.snow ? `${climateData?.snow} mm` : "0 mm"}
        />
        <DescriptionDetail label="Wind Speed" detail={climateData?.wspd} />
      </Box>
    </Box>
  );
};

export default DescriptionWrappr;
