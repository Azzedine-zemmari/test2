const express = require("express")
const mydb = require("./config/db")
const rout = require("./routes/router")

const app = express()
app.use(rout)

app.listen(3000,()=>{
    console.log("serveur is running");
})