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
      <div className="contacts">
        {contacts.map((contact) => (
          <h4 id={contact._id} key={contact._id} onClick={handleClick}>
              Name: {contact.fullName}<br />
              Email: {contact.email}<br />
              Number: {contact.phoneNumber}
          </h4>
        ))}
      </div>
    </div>
  );
};

export default Contacts;