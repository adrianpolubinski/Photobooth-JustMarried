const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
    unique: true,
  },
  Date: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
  },
  Phone: {
    type: String,
    required: true,
  },
  Packet: {
    type: String,
    required: true,
    unique: true,
  },
  Accepted: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Reservation", reservationSchema);
