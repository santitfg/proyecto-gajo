// import React, { useState } from "react";
import "leaflet/dist/leaflet.css";

import L from "leaflet"; //luego usar ICON personalizado
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

import {
  MapContainer,
  TileLayer,
  Marker,
  // useMapEvents,
  Popup,
} from "react-leaflet";

const center = [-39.9297, -68.0084];

const MapaMain = (props) => {
  //enmienda del icon
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconUrl: markerIcon,
    iconRetinaUrl: markerIcon2x,
    shadowUrl: markerShadow,
  });
  //fin de enmienda del icon
  if (props.markers != null) {
    var markers = props.markers.map((marker, i) => {
      return (
        <Marker key={i} position={marker.position}>
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
  /* 
  function LocationMarker() {
    const [position, setPosition] = useState(null);
    console.log(position);

    useMapEvents({
      //dblclick
      click(e) {
        setPosition(e.latlng);
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

    return position === null ? null : (
      <Marker position={position}>
        <Popup>{pos}</Popup>
      </Marker>
    );
  } */

  //??= null
  return (
    <MapContainer
      center={center}
      zoom={5}
      minZoom={2}
      doubleClickZoom={false}
      style={{ height: props.height || "50vh", width: props.width || "50vw" }}
    >
      <TileLayer
        attribution='&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
      />
      {markers}
      {/* <LocationMarker /> */}
    </MapContainer>
  );
};

export default MapaMain;
