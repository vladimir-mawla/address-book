import React, { useEffect } from "react";
import { useState } from "react";


const axios = require("axios").default;

const Contacts = () => {
  const handleClick = (event) => {localStorage.setItem("contact_id", event.currentTarget.id)};
  const [contacts, setContacts] = useState([]);
  const user_id = localStorage.getItem("user_id");

  useEffect(() => {
    axios
      .post("http://localhost:3000/get_contacts", {
          userId : user_id
      })

      .then((response) => {
        const s = response.data;
        console.log(s)
        setContacts(s);
      });
  }, []);

  return (
    <div>
      <div className="get-contacts">
        {contacts.map((contact) => (
          <p key={contact._id} onClick={handleClick}>
              <div id={contact._id}>❌</div>
              <strong>Name:</strong> {contact.fullName}<br />
              <strong>Email:</strong> {contact.email}<br />
              <strong>Number:</strong> {contact.phoneNumber}<br />
              Your {contact.RelationshipStatus}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Contacts;