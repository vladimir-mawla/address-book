"use strict";
const express = require("express");
const Contact = require("../models/contactModel");
const app = express();
const jwt = require("jsonwebtoken");

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

// Removing contact API
app.delete("/remove_contact", async (req, res) => {
  const contact = await Contact.findOne({ _id: req.body }).deleteOne();

  try {
    res.send(contact);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get contacts API
app.post("/get_contacts", async (req, res) => {
    const contact = await Contact.find({ _userId: req.body });
    try {
      res.send(contact);
    } catch (error) {
      res.status(500).send(error);
    }
  });

module.exports = app;
