import React, { useEffect } from "react";
import { useState } from "react";
import Button from "./Button";
import axios from "axios";

const AddContact = () => {
    function addContact() {
    const user_id = localStorage.getItem("user_id");
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
    return (
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
    )
}

export default AddContact;