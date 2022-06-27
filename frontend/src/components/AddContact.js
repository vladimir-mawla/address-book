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
        <div className="input"><strong>Full Name:</strong></div><div> <input id="contact-name"></input></div>
        <br />
        <div className="input"><strong>Email:</strong></div><div> <input id="contact-email"></input></div>
        <br />
        <div className="input"><strong>Phone Number:</strong></div><div> <input id="contact-number"></input></div>
        <br />
        <div className="input"><strong>Relationship:</strong></div><div> <input id="relation"></input></div>
        <br />
        <div className="input"><Button text={"Add"} className={"add-contact"} onClick={() => {addContact();}}/></div>
      </div>
    )
}

export default AddContact;