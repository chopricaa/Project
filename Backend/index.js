const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth")



dotenv.config();
const app = express();


//middlewars
app.use(cors());
app.use(express.json());



//routes
app.use("/auth", authRoute)
//Database
const DB = process.env.DB;
mongoose.connect(DB).then( () => {
    console.log("DB Connection is successful");
}).catch((err)=>{
    console.log(err)
})




//server
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)

})