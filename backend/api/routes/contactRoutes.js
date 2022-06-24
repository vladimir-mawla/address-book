"use strict";
const express = require("express");
const Contact = require("../models/contactModel");
const app = express();
const jwt = require('jsonwebtoken');


// Add contact API
app.post("/add_contact", async (request, response) => {
    
    const contact = new Contact(request.body);

    try {
    await contact.save();
    response.send(contact);
    } catch (error) {
    response.status(500).send(error);
    }
});


module.exports = app;
