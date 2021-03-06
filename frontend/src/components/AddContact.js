import React from "react";
import Button from "./Button";
import axios from "axios";

const AddContact = ({location}) => {

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
        location
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
        <div className="input"><strong>Full Name:</strong> <input id="contact-name"></input></div>
        <br />
        <div className="input"><strong>Email:</strong> <input id="contact-email"></input></div>
        <br />
        <div className="input"><strong>Phone Number:</strong> <input id="contact-number"></input></div>
        <br />
        <div className="input"><strong>Relationship:</strong> <input id="relation"></input></div>
        <br />
        <div className="input"><Button text={"Add"} className={"add-contact"} onClick={() => {addContact();}}/></div>
      </div>
    )
}

export default AddContact;