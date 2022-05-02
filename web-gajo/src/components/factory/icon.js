import L from "leaflet";
import "./icon.css";

const icon = new L.Icon({
  //L.Point(60, 75),
  iconUrl: require("../../assets/leaf-green.png"),
  //   iconRetinaUrl: require("../assets/leaf-shadow.png"),
  shadowUrl: require("../../assets/leaf-shadow.png"),

  iconAnchor: new L.Point(20, 0),
  popupAnchor: new L.Point(0, 0),
  shadowAnchor: new L.Point(0, 0),

  shadowSize: new L.Point(35, 55),
  iconSize: new L.Point(35, 55),
  className: "leaflet-div-icon",
});

export { icon };
