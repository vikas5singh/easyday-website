import React, { Component } from "react";
import { render } from "react-dom";
import Map from "./mapDirection";
// import "./style.css";

const googleMapsApiKey = "AIzaSyAe8v7VVTeBjtYVf6vmd04P1kGaYKyzt2k";

const App = (props) => {
  const { places, details } = props;

  const {
    loadingElement,
    containerElement,
    mapElement,
    defaultCenter,
    defaultZoom,
  } = props;

  return (
    <Map
      googleMapURL={
        "https://maps.googleapis.com/maps/api/js?key=" +
        googleMapsApiKey +
        "&libraries=geometry,drawing,places"
      }
      markers={places}
      details={details}
      loadingElement={loadingElement || <div style={{ height: `100%` }} />}
      containerElement={containerElement || <div style={{ height: "80vh" }} />}
      mapElement={mapElement || <div style={{ height: `100%` }} />}
      defaultCenter={defaultCenter || { lat: 30.697599, lng: 76.692284 }}
      defaultZoom={defaultZoom || 11}
    />
  );
};

const places = [
  { latitude: 25.8103146, longitude: -80.1751609 },
  { latitude: 27.9947147, longitude: -82.5943645 },
  // { latitude: 28.4813018, longitude: -81.4387899 },
];

const MapRoute = (props) => {
  return (
    <App
      // defaultCenter={places}
      defaultZoom={7}
      {...props}
      places={props.places}
    />
  );
};

export default MapRoute;
