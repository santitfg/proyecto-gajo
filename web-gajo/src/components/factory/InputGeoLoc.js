// import React from "react";
const InputGeoLoc = ({ label, name, msg, onClick, position }) => {
  function success(pos) {
    var crd = pos.coords;
    onClick({ lat: crd.latitude, lng: crd.longitude });
  }

  function error(err) {
    console.warn("ERROR(" + err.code + "): " + err.message);
  }

  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error, options);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  if (position != null) {
    var pos = Object.entries(position).map((par, i) => (
      <div key={i}>
        {par[0] + " : "}
        {par[1]}
      </div>
    ));
  }
  return (
    <div>
      <label>{label}</label>
      <button type="button" onClick={getLocation}>
        Geolizarte
      </button>

      <br />
      <div>{pos}</div>
      <br />
      <div>{msg}</div>
    </div>
  );
};

export default InputGeoLoc;
