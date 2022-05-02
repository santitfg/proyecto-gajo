import React, { useState } from "react";
import "leaflet/dist/leaflet.css";

// import { divIcon } from 'leaflet';

import L from "leaflet"; //luego usar ICON personalizado
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

import { icon } from "./icon";

import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
  Popup,
} from "react-leaflet";

const InputMap = ({
  label,
  name,
  msg,
  options, //quizas no sea lo mas acertado usar options como markers def
  position,
  onClick,
  height,
  width,
  center,
}) => {
  //enmienda del icon
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconUrl: markerIcon,
    iconRetinaUrl: markerIcon2x,
    shadowUrl: markerShadow,
  });
  //fin de enmienda del icon
  // const [position, setPosition] = useState(null);

  if (options != null) {
    var markers = options.map((marker, i) => {
      return (
        <Marker
          key={i}
          position={marker.position}
          icon={icon}
          style={{ background: "transparent" }}
        >
          <Popup>
            {/* //agregar una func de handleClick y un modal? */}
            {/* <img src={marker.img} alt={marker.alt}></img> */}
            {marker.msg}
            {/* A pretty CSS3 popup. <br /> Easily customizable. */}
          </Popup>
        </Marker>
      );
    });
  }

  const LocationMarker = () => {
    console.log(position);

    useMapEvents({
      //dblclick
      click(e) {
        onClick(e.latlng);
      },
    });
    if (position != null) {
      var pos = Object.entries(position).map((par, i) => (
        <div key={i}>
          {par[0] + " : "}
          {par[1]}
        </div>
      ));
    }
    return (
      <>
        {position && (
          <Marker position={position}>
            <Popup>{pos}</Popup>
          </Marker>
        )}
      </>
    );
    // if (position === undefined) {
    //   return <></>;
    // } else {
    //   return position === null ? null : (
    //     <Marker position={position}>
    //       <Popup>{pos}</Popup>
    //     </Marker>
    //   );
    // }
  };
  const LocMarkerCondition = () => {
    return <>{onClick && <LocationMarker />}</>;
  };
  //??= null
  return (
    <>
      <MapContainer
        center={center || [-39.9297, -68.0084]}
        zoom={5}
        minZoom={2}
        maxZoom={17}
        doubleClickZoom={false}
        style={{ height: height || "50vh", width: width || "50vw" }}
      >
        <TileLayer
          attribution='&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        />
        {markers}
        <LocMarkerCondition />
        {/* <LocationMarker /> */}
      </MapContainer>
    </>
  );
};

export default InputMap;
