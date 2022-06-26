const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  fullName: {
    type: String,
    trim: true,
    required: true,
  },
  phoneNumber: {
    type: Number,
    trim: true,
    required: true,
  },
  RelationshipStatus: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    required: true,
  },
  location: {
    lng: {
      type: Number
    },
    lat: {
      type: Number
    }
  },

  userId: {
    type: String,
    trim: true,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});
const Contact = mongoose.model("Contact", ContactSchema);

module.exports = Contact;
mongoose.model("Contact", ContactSchema);