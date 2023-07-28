import { useEffect } from "react";

import { Box } from "@mui/material";
import { useMapbox } from "../hooks/useMapBox";
import { useFile } from "../context/fileContext";
import { formatTime } from "../utils";

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

  const { initilizeMap, mapContainerRef } = useMapbox(
    [address.longitude, address.latitude],
    apparatus,
    popupHTMLElement
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => initilizeMap(), [address.longitude, address.latitude]);
  return (
    <Box
      ref={mapContainerRef}
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
