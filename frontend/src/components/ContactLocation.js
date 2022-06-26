import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { useEffect } from "react";
import { useState } from "react";

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
  }, []);

  return (
      <div>
    <div className="get-contact-location">
      <Map
        google={window.google}
        style={{ width: "200px", height: "200px" }}
        className={"map"}
        zoom={14}
      >
        <Marker
          name={name}
          position={location}
        />
        <Marker />
      </Map>
    </div>
    </div>
  );
};

export default ContactLocation;
