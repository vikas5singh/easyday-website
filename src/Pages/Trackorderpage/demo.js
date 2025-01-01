/* global google */
import React, { useEffect, useState } from "react";
import {
  withGoogleMap,
  GoogleMap,
  withScriptjs,
  Marker,
  DirectionsRenderer,
} from "react-google-maps";

import { style } from "./mapStyle";
// import BlueMarker from "assets/images/bluemarker.png";
const googleMapsApiKey = "AIzaSyAe8v7VVTeBjtYVf6vmd04P1kGaYKyzt2k";

const Map = withScriptjs(
  withGoogleMap((props) => {
    const options = {
      styles: style,
    };

    const position = { lat: 30.152151, lng: 76.1515516 };

    return (
      <GoogleMap
        defaultCenter={
          props?.markers[0] || { lat: 30.7116291, lng: 76.6865795 }
        }
        defaultZoom={13}
        options={options}
      >
        {props.markers?.map((marker, index) => {
          return <Marker key={index} position={marker} />;
        })}
      </GoogleMap>
    );
  })
);

function Demo(props) {
  const { places } = props;
  console.log(places, "places");
  return (
    <Map
      googleMapURL={
        "https://maps.googleapis.com/maps/api/js?key=" +
        googleMapsApiKey +
        "&libraries=geometry,drawing,places"
      }
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: "80vh" }} />}
      mapElement={<div style={{ height: `100%` }} />}
      defaultCenter={places && places[1]}
      defaultZoom={5}
      markers={places}
    />
  );
}

export default Demo;
