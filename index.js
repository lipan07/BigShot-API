const express=require("express")
// Importing all the routes
const homeroute=require("./routes/Home.js")
const loginroute=require("./routes/Login")
const cors = require("cors")
// Creating express server
const app=express()
app.use(cors())
// Handling routes request
app.use("/",homeroute)
app.use("/",loginroute)
app.listen((3000),()=>{
    console.log("Server is Running -http:://localhost:3000")
})