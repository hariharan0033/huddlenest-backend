require('dotenv').config();
//import statements
const express = require('express')
const cors = require('cors');
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT;

//middlewares
app.use(cors());
app.use(express.json());

//Db Connection
function dbConnection () {
   mongoose.connect(process.env.MONGODB_URL)
   .then(()=> console.log('DB Connected'))
   .catch((error)=>console.log('DB not connected:',error));
}
dbConnection();

//Check the server status
app.get("/status",(req,res) => {
   res.status(200).json({
      message:"Server Running...",
   })
})

app.listen(PORT,() => console.log(`Server Running at http://localhost:${PORT}`));