import { useEffect } from "react";

import { Box } from "@mui/material";
import { useMapbox } from "../hooks/useMapBox";
import { useFile } from "../context/fileContext";

const formatTime = (time: string) => {
  return `${new Date(time).toLocaleTimeString()} 
  ${new Date(time).toLocaleDateString()}`;
};

const MapCard = () => {
  const {
    file: { address, apparatus, description },
  } = useFile();

  const popupHTMLElement = `
    <div class='pop-detail-wrapper'>
      <label class='pop-label'>Type: </label>
      <p class='pop-detail'>${description.type}</p>
    </div>
    <div class='pop-detail-wrapper'>
      <label class='pop-label'>Event Opened:</label>
      <p class='pop-detail'>
        ${formatTime(description.event_opened)}
      </p>
    </div>
    <div class='pop-detail-wrapper'>
      <label class='pop-label'>First Unit Arrived: </label>
      <p class='pop-detail'>${formatTime(description.first_unit_arrived)}</p>
    </div>
    <div class='pop-detail-wrapper'>
      <label class='pop-label'>Event Closed:</label>
      <p class='pop-detail'> ${formatTime(description.event_closed)}</p>
    </div>
    <div class='pop-detail-wrapper'>
      <label class='pop-label'>Incident Number: </label>
      <p class='pop-detail'>${description.incident_number}</p>
    </div>
    `;

  const mapbox = useMapbox(
    [address.longitude, address.latitude],
    apparatus,
    popupHTMLElement
  );
  // console.log("aaaaaaaa", file);
  useEffect(() => mapbox.initilizeMap, []);
  return (
    <Box
      ref={mapbox.mapContainerRef}
      sx={{
        alignItems: "center",
        justifyContent: "center",
        minWidth: "600px",
        height: "600px",
      }}
    />
  );
};

export default MapCard;
