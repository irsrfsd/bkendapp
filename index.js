const express=require('express')
let app=express()

const cors = require("cors");
app.use(cors());

app.get("/api",(req,res)=>
res.json({'name':'rama'}))

app.get("/",(req,res)=>{
    res.send("hello from server")
})




app.listen(5000)
