import React, { useEffect } from "react";
import { useState } from "react";
import ContactLocation from "./ContactLocation";
import AddLocation from "./AddLocation";
import SearchContact from "./SearchContact";
const axios = require("axios").default;

const Contacts = () => {

  const handleClick = (event) => {
    localStorage.setItem("contact_id", event.currentTarget.id);
  };

  const [contacts, setContacts] = useState([]);
  const user_id = localStorage.getItem("user_id");

  function remove(element) {
      axios
        .post("http://localhost:3000/remove_contact", {
          id: element,
        })
        .then((res) => {
          window.location.reload(true);
        });
  }


  useEffect(() => {

    axios
      .post("http://localhost:3000/get_contacts", {
        user_id: user_id,
      })

      .then((response) => {
        const s = response.data;
        setContacts(s);
      });

  }, [user_id]);

  return (
    <div className="container">
      <div className="get-contacts">
        <SearchContact setContacts={setContacts} />
        {contacts.map((contact) => (
          <div className="contact" key={contact._id} onClick={handleClick}>
            <span id={contact._id} onClick={() => { remove(contact._id);}}>❌</span><br/>
            <strong>Name:</strong> {contact.fullName}
            <br/>
            <strong>Email:</strong> {contact.email}
            <br/>
            <strong>Number:</strong> {contact.phoneNumber}
            <br />
            Your {contact.RelationshipStatus}
            <div className="contact-location"><ContactLocation id={contact._id} name={contact.fullName} /></div>
            <br/>
            
          </div>
        ))}
      </div>
      <AddLocation />
    </div>
  );
};

export default Contacts;
