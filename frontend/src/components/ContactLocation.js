import React, { useEffect } from "react";
import { useState } from "react";
const axios = require("axios").default;

const ContactLocation = ({id}) => {
    const [location, setLocation] = useState(defaultLocation);


    useEffect(() => {

        axios
        .post("http://localhost:3000/get_contact_location", {
            contactId: id,
        })

        .then((res) => {
            setLocation({lat:lat, lng:lng});
        });

    }, []);

  return (
    <div>
      <div className="get-contact-location">
        
      </div>
    </div>
  );
};

export default ContactLocation;