const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user", // Reference to the User model
    required: true,
  },
  roomId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "room", // Reference to the Room model
    required: true,
  },
  roomName: {
    type: String,
    required: true,
  },
  bookingDate: {
    type: Date,
    required: true,
  },
  startTime: {
    type: Date,
    required: true,
  },
  endTime: {
    type: Date,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  reason: {
    type: String,
  },
  headCount: {
    type: Number,
    required: true,
  }
}, {
  timestamps: true
});

const bookingModel = mongoose.model("booking", bookingSchema);

module.exports = bookingModel;
