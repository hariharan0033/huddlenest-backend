const { timeStamp } = require("console");
const mongoose = require("mongoose");

const roomSchema = mongoose.Schema({
   roomName : {
      type:String,
      required:true,
   },
   minimumPeople : {
      type:Number,
      required:true,
   },
   maximumPeople :{
      type:Number,
      required:true,
   },
   resources:{
      type :[String],
      required : true,
   },
   isAvailable : {
      type:boolean,
      required:true,
      default : true,
   },

},{
   timeStamp:true
})

const roomModel = mongoose.model("room",roomSchema);

module.exports = roomModel;