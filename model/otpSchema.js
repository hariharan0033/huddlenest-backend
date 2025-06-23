const mongoose = require('mongoose');

const OTPSchema = new mongoose.Schema({
   userId:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
   },
   otp:{
      type:String
   },
   createdAt :Date,
   expiresAt:Date
})

module.exports = mongoose.model('userOTPVerification',OTPSchema);