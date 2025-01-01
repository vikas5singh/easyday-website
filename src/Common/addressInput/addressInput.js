import React, { Component, useState } from "react";
import PlacesAutocomplete from "react-places-autocomplete";
import {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from "react-places-autocomplete";

const GoogleAutocomplete = (props) => {
  const {
    address,
    lat,
    lng,
    onChange,
    label,
    className,
    margin,
    type,
    errors,
    helperText,
    name,
  } = props;
  const handleChange = (address) => {
    if (address == "") {
      onChange({ address: address, lat: "", lng: "" });
    } else {
      onChange({ address: address, lat: lat, lng: lng });
    }
  };
  const handleSelect = (address) => {
    geocodeByAddress(address)
      .then(async (results) => {
        const latLng = await getLatLng(results[0]);
        return {
          latLng,
          addressP: results,
        };
      })
      .then(({ latLng, addressP }) => {
        const data = {
          address: address,
          lat: latLng.lat,
          lng: latLng.lng,
        };

        addressP.length > 0 &&
          addressP[0]["address_components"].map((ad, i) => {
            if (ad.types.includes("locality")) {
              data.city = ad.long_name;
            }
            if (ad.types.includes("administrative_area_level_1")) {
              data.state = ad.long_name;
            }
            if (ad.types.includes("administrative_area_level_1")) {
              data.state = ad.long_name;
            }
            if (ad.types.includes("country")) {
              data.country = ad.long_name;
            }
            if (ad.types.includes("postal_code")) {
              data.postal_code = ad.long_name;
            }
          });

        onChange({
          ...data,
        });
      })
      .catch((error) => {
        onChange({
          address: "NA",
          lat: "NA",
          lng: "NA",
        });
      });
  };

  const searchOptions = {
    componentRestrictions: { country: "us" },
  };

  return (
    <PlacesAutocomplete
      value={address}
      onSelect={handleSelect}
      onChange={handleChange}
      // searchOptions={searchOptions}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div>
          <input
            label={label}
            type={type}
            fullWidth
            error={errors[name] && errors[name].length > 0 ? true : false}
            helperText={
              errors[name] && errors[name].length > 0
                ? errors[name]
                : helperText
            }
            className={className}
            margin={margin}
            {...getInputProps({
              placeholder: "Search Places ...",
              className: "form-control",
            })}
          />
          <div className="autocomplete-dropdown-container">
            {/* {loading && <div>Loading...</div>} */}
            {suggestions.map((suggestion) => {
              const className = suggestion.active
                ? "suggestion-item--active"
                : "suggestion-item";
              // inline style for demonstration purpose
              const style = suggestion.active
                ? { backgroundColor: "rgb(204 214 239)", cursor: "pointer" }
                : { backgroundColor: "#ffffff", cursor: "pointer" };
              return (
                <div
                  {...getSuggestionItemProps(suggestion, {
                    className,
                    style,
                  })}
                >
                  <div className="google-select-pop">
                    {suggestion.description}
                  </div>
                  {/* <span></span> */}
                  {/* <div className="border-bottom border-dark2"></div> */}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  );
};
GoogleAutocomplete.defaultProps = {
  type: "text",
  className: "input-text",
  label: "Text Input",
  margin: "normal",
  errors: {},
  helperText: "",
};
export { GoogleAutocomplete };
