const express = require("express")

const app = express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.status(200).send('hello youCode');
})

app.listen(3000,()=>{
    console.log("listen at port 3000");
})