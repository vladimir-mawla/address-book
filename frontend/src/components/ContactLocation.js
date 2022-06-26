import { Map, Marker } from "google-maps-react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

import React, { useEffect } from "react";
import { useState } from "react";
const axios = require("axios").default;

const ContactLocation = ({ id, name }) => {
  const [location, setLocation] = useState({});

  useEffect(() => {
    axios
      .post("http://localhost:3000/get_contact_location", {
        contact_id: id,
      })

      .then((res) => {
        setLocation(res.data);
      });
    console.log("hello");
  }, []);

  return (
    <div className="get-contact-location">
      {/* <Map
        google={window.google}
        style={{ width: "200px", height: "200px" }}
        className={"map"}
        zoom={8}>

        <Marker name={name} position={{lat:location["lat"], lng:location["lng"]}} /><Marker />
      </Map> */}
      <Wrapper apiKey={"AIzaSyA-OElgILgvZytsZLl-jL-7FHRN8FKZQvs"}>
        <Map className="wrapper" center={location} google={window.google} zoom={10} style={{ width: "200px", height: "200px"}}>
          <Marker position={location} />
        </Map>
      </Wrapper>
    </div>
  );
};

export default ContactLocation;
