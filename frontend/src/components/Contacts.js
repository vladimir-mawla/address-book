import React, { useEffect } from "react";
import { useState } from "react";
import Button from "./Button";

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

  function addContact() {
    const contact_name = document.getElementById("contact-name");
    const contact_email = document.getElementById("contact-email");
    const contact_number = document.getElementById("contact-number");
    const relation = document.getElementById("relation");
    axios
      .post("http://localhost:3000/add_contact", {
        email: contact_email.value,
        fullName: contact_name.value,
        userId: user_id,
        phoneNumber: contact_number.value,
        RelationshipStatus: relation.value,
      })
      .then((res) => {
        window.location.reload(true);
        contact_email.value = "";
        contact_name.value = "";
        contact_number.value = "";
        relation.value = "";
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
        <input placeholder="Search contact by name"></input>
        {contacts.map((contact) => (
          <p key={contact._id} onClick={handleClick}>
            <span
              id={contact._id}
              onClick={() => {
                remove(contact._id);
              }}
            >
              ❌
            </span><br />
            <strong>Name:</strong> {contact.fullName}
            <br />
            <strong>Email:</strong> {contact.email}
            <br />
            <strong>Number:</strong> {contact.phoneNumber}
            <br />
            Your {contact.RelationshipStatus}
          </p>
        ))}
      </div>
      <div className="add-contacts">
        <strong>Full Name:</strong> <input id="contact-name"></input>
        <br />
        <strong>Email:</strong> <input id="contact-email"></input>
        <br />
        <strong>Phone Number:</strong> <input id="contact-number"></input>
        <br />
        <strong>Relationship:</strong> <input id="relation"></input>
        <br />
        <Button
          text={"Add"}
          className={"add-contact"}
          onClick={() => {
            addContact();
          }}
        />
      </div>
    </div>
  );
};

export default Contacts;
