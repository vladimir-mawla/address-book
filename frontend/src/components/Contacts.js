import React, { useEffect } from "react";
import { useState } from "react";
import AddContact from "./AddContact";
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
          console.log(res);
          window.location.reload(true);
        });
  }


  useEffect(() => {

    axios
      .post("http://localhost:3000/get_contacts", {
        userId: user_id,
      })

      .then((response) => {
        const s = response.data;
        setContacts(s);
      });

  }, []);

  return (
    <div>
      <div className="get-contacts">
        <SearchContact setContacts={setContacts} />
        {contacts.map((contact) => (
          <p key={contact._id} onClick={handleClick}>
            <span id={contact._id} onClick={() => { remove(contact._id);}}>❌</span><br/>
            <strong>Name:</strong> {contact.fullName}
            <br/>
            <strong>Email:</strong> {contact.email}
            <br/>
            <strong>Number:</strong> {contact.phoneNumber}
            <br/>
            Your {contact.RelationshipStatus}
          </p>
        ))}
      </div>
      <AddContact />
    </div>
  );
};

export default Contacts;
