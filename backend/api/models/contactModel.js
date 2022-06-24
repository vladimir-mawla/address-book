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
      long: {
        type: Number,
        unique: true,
        trim: true,
        required: true,
      },
      lat: {
        type: Number,
        unique: true,
        trim: true,
        required: true,
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



module.exports = contact;
mongoose.model("Contact", ContactSchema);