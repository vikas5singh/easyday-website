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
const googleMapsApiKey = "AIzaSyAe8v7VVTeBjtYVf6vmd04P1kGaYKyzt2k";

const Map = withScriptjs(
  withGoogleMap((props) => {
    const options = {
      // styles: style,
    };

    const position = { lat: 30.152151, lng: 76.1515516 };
    const MarkerIcon = require("../../icon/food-truck.png");
    return (
      <GoogleMap
        defaultCenter={props?.defaultPos}
        // defaultCenter={props?.markers[0] || props?.defaultPos}

        defaultZoom={11}
        options={options}
      >
        {/* {props.isMarkerShown && (
          <Marker position={{ lat: props.lat, lng: props.lng }} />
        )} */}

        {console.log(props?.markers[0], "mapfunction")}

        {props.markers?.map((marker, index) => {
          console.log(marker, "marker");
          return (
            <Marker
              key={index}
              position={{ lat: marker.lat, lng: marker.lng }}
              icon={{
                url: MarkerIcon,
                scaledSize: new google.maps.Size(30, 30),
              }}
              onClick={() => props.handleOpen(marker?.id)}
            />
          );
        })}
      </GoogleMap>
    );
  })
);

function Demo(props) {
  const { places, handleOpen } = props;
  console.log(places, "places");
  const [show, setShow] = useState(true);
  const [defaultPos, setDefaultPos] = useState(null);
  useEffect(() => {
    setShow(false);
    setTimeout(() => {
      setShow(true);
    }, 100);

    if (places) {
      setDefaultPos(null);
    }
  }, [JSON.stringify(places)]);

  useEffect(() => {
    {
      navigator?.geolocation.getCurrentPosition(
        ({ coords: { latitude: lat, longitude: lng } }) => {
          const pos = { lat, lng };
          setDefaultPos(pos);
          console.log(pos, "pos");
        }
      );
    }
  });

  if (!show) {
    return null;
  }

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
      defaultCenter={defaultPos && places && places?.[0]}
      defaultZoom={5}
      markers={places}
      defaultPos={defaultPos}
      handleOpen={handleOpen}
    />
  );
}

export default Demo;
