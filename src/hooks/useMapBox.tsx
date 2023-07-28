import mapboxgl, { LngLatLike } from "mapbox-gl";
import { useEffect, useRef, useState } from "react";

import { Apparatus } from "../types";
import { formatTime } from "../utils";

const INITAL_ZOOM = 11;

export function useMapbox(
  initalLocation: LngLatLike,
  apparatus: Apparatus[],
  popupHTMLElement: string
) {
  const mapContainerRef = useRef(null);
  const [mapCoords, setMapCoords] = useState(initalLocation as LngLatLike);
  const [marker, setMarker] = useState<mapboxgl.Marker>();
  const [mapInstance, setMapInstance] = useState<mapboxgl.Map>();

  const initilizeMap = () => {
    if (!mapContainerRef.current) return;
    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN || "";
    const map = new mapboxgl.Map({
      container: mapContainerRef.current as HTMLElement,
      // style: 'mapbox://styles/mapbox/streets-v11',
      style: "mapbox://styles/mapbox/satellite-v9",
      center: mapCoords,
      zoom: INITAL_ZOOM,
    });

    const locationMarkerInstance = new mapboxgl.Marker()
      .setPopup(new mapboxgl.Popup().setHTML(popupHTMLElement))
      .setLngLat(mapCoords)
      .addTo(map);

    apparatus.forEach((unit: Apparatus) => {
      const el = document.createElement("div");
      el.className = "marker";
      const unitPopUpHTML = `
      <div class='pop-detail-wrapper'>
        <label class='pop-label'>Car ID: </label>
        <p class='pop-detail'>${unit.car_id}</p>
      </div>
      <div class='pop-detail-wrapper'>
        <label class='pop-label'>Dispatched Time: </label>
        <p class='pop-detail'>${formatTime(
          unit.unit_status.dispatched.timestamp
        )}</p>
      </div>
      `;
      const coords: LngLatLike = [
        unit.unit_status.dispatched.longitude,
        unit.unit_status.dispatched.latitude,
      ];
      new mapboxgl.Marker(el)
        .setPopup(new mapboxgl.Popup().setHTML(unitPopUpHTML))
        .setLngLat(coords)
        .addTo(map);
    });
    setMapInstance(map);
    setMarker(locationMarkerInstance);
  };
  useEffect(() => {
    if (!marker) return;
    if (marker && mapInstance) {
      marker.setPopup(
        new mapboxgl.Popup({ closeOnClick: true, closeOnMove: false })
          .setHTML(popupHTMLElement)
          .addTo(mapInstance)
      );
    }
  }, [marker, mapInstance]);

  return { setMapCoords, mapContainerRef, initilizeMap, mapCoords };
}
