const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({
   userId : {
      type:String,
      required:true,
   },
   roomId :{
      type:String,
      required:true,
   },
   roomName:{
      type:String,
      required:true,
   },
   bookingDate : {
      type: Date,
      required:true,
   },
   startTime:{
      type: Number,
      required:true,
   },
   endTime:{
      type:Number,
      required:true,
   },
   title:{
      type:String,
      required:true,
   },
   reason:{
      type:String,
   },
   headCount :{
      type:Number,
      required:true,
   }
},{
   timeStamp:true
});

const bookingModel = mongoose.model("booking",bookingSchema);

module.exports = bookingModel;