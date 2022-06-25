import React, { useEffect } from "react";
import { useState } from "react";


const axios = require("axios").default;

const Contacts = () => {
  const handleClick = (event) => {localStorage.setItem("contact_id", event.currentTarget.id)};
  const [contacts, setContacts] = useState([]);
  const user_id = localStorage.getItem("user_id");

  useEffect(() => {
    axios
      .post("http://localhost:3000/get_contacts"), {
          userId : user_id
      }

      .then((response) => {
        const s = response.data;
        console.log(s)
        setContacts(s);
      });
  }, []);

  return (
    <div>
      <ul className="contacts">
        {contacts.map((contact) => (
          <li id={contact.id} key={contact.id} onClick={handleClick}>
              {contact.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contacts;