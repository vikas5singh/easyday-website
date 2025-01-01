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

const MapDirectionsRenderer = (props) => {
  const [state, setstate] = useState({
    directions: null,
    error: null,
    places: [],
  });

  useEffect(() => {
    setstate((pre) => ({
      ...pre,
      places: props.places,
    }));
  }, [props.places]);
  const { travelMode } = props;

  const { places } = state;
  useEffect(() => {
    let waypoints =
      places &&
      places?.map((p) => ({
        location: { lat: p.lat, lng: p.lng },
      }));
    const origin = waypoints.shift();
    const destination = waypoints.pop();
    const directionsService = new google.maps.DirectionsService();
    directionsService.route(
      {
        origin: origin,
        destination: destination,
        travelMode: travelMode,
        waypoints: waypoints,
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          setstate((pre) => ({
            ...pre,
            directions: result,
          }));
        } else {
          setstate((pre) => ({
            ...pre,
            error: "result",
          }));
        }
      }
    );
  }, [places]);

  if (state.error) {
    return  
  }
  return (
    state.directions && (
      <DirectionsRenderer
        directions={state.directions}
        // options={{
        //   polylineOptions: {
        //     stokeColor: "#FF0000",
        //     strokeOpacity: 0.5,
        //     strokeWeight: 4
        //   },
        //   markerOptions: { icon: BlueMarker },
        //   icon: { scale: 0.5 }
        // }}
      />
    )
  );
};

const Map = withScriptjs(
  withGoogleMap((props) => {
    const { details } = props;
    const { driverRefId } = details;

    const options = {
      styles: style,
    };

    const position = { lat: 30.152151, lng: 76.1515516 };
    return (
      <GoogleMap defaultZoom={props.defaultZoom} options={options}>
        {/* {props.markers.map((marker, index) => {
          return (
            <Marker
              key={index}
              position={marker}
              onClick={() => this.handleToggleOpen()}
            />
          );
        })} */}

        {details && driverRefId && (
          <Marker
            key={333}
            position={{
              lat: driverRefId.driverLocation.coordinates[1],
              lng: driverRefId.driverLocation.coordinates[0],
            }}
            icon={{
              // url: CarImage,
              anchor: new google.maps.Point(17, 46),
              scaledSize: new google.maps.Size(37, 37),
            }}
          />
        )}
        <MapDirectionsRenderer
          places={props.markers}
          travelMode={google.maps.TravelMode.DRIVING}
        />
      </GoogleMap>
    );
  })
);

export default Map;
