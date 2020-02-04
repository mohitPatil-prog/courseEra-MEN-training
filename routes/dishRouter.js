let express = require('express')
var app = express()

app.get("/dishes/:dishId",(req,res)=>{
    console.log('get dishes request');
})

app.put("/dishes/:dishId",(req,res)=>{
    console.log('udpate dishes request');
})

app.delete("/dishes/:dishId",(req,res)=>{
    console.log('delete dishes request');
})

app.post("/dishes/:dishId",(req,res)=>{
    console.log('insert dishes request');
})

