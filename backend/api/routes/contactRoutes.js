"use strict";
const express = require("express");
const Contact = require("../models/contactModel");
const app = express();
const jwt = require("jsonwebtoken");
const req = require("express/lib/request");

// Add contact API
app.post("/add_contact", async (request, response) => {
  const contact = new Contact(request.body);
  // const used = await Contact.findOne({_userId: req.body.userId, email: req.body.email, number: req.body.number})

  try {
    await contact.save();
    response.send(contact);
  } catch (error) {
    response.status(500).send(error);
  }
});

// Removing contact API
app.post("/remove_contact", async (req, res) => {
  const contact = await Contact.findOne({ _id: req.body.id }).deleteOne();

  try {
    res.send(contact);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get contacts API
app.post("/get_contacts", async (req, res) => {
    const contact = await Contact.find({ userId: req.body.user_id });
    try {
      res.send(contact);
    } catch (error) {
      res.status(500).send(error);
    }
});

// Updating contact API
app.put("/edit_contact", async (req, res) => {
    const contact = await Contact.findOne({ _id: req.body });

    const newContact = await contact.update(req.body);
    try {
      res.send(newContact);
    } catch (error) {
      res.status(500).send(error);
    }
});

// Searching contacts
app.post("/search", async (req, res) => {
  const contacts = await Contact.find(
    {
      "$or":[
        {fullName: {$regex:req.body.fullName}, userId:req.body.user_id }, 
        // {phoneNumber: JSON.parse(req.body.phoneNumber) }
      ] 
    });
  
  try {
    res.send(contacts);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get contact location API
app.post("/get_contact_location", async (req, res) => {
  const contact = await Contact.find({ _id: req.body.contact_id });
  try {
    res.send(contact[0]['location']);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = app;
