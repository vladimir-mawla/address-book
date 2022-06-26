import MapPicker from "react-google-map-picker";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { useEffect } from "react";
import { useState } from "react";
// import MapView from "react-native-maps";

const axios = require("axios").default;

const ContactLocation = ({ id, name }) => {
  const [location, setLocation] = useState([]);

  useEffect(() => {
    axios
      .post("http://localhost:3000/get_contact_location", {
        contact_id: id,
      })

      .then((res) => {
        setLocation(res.data);
      });
  }, [1]);

  return (
    <div className="get-contact-location">
      {/* <MapView
            region={location}
            showsUserLocation={true}
        >
        </MapView> */}
      <Map
        google={window.google}
        style={{ width: "200px", height: "200px" }}
        className={"map"}
        zoom={14}
      >
        <Marker
          name={name}
          position={{lat:2, lng:3}}
        />
        <Marker />
      </Map>
    </div>
  );
};

export default ContactLocation;
