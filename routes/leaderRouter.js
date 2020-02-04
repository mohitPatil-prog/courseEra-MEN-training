let express = require('express')
var app = express()

app.get("/leaders/:leaderId",(req,res)=>{
    console.log('get leaders request');
})

app.put("/leaders/:leaderId",(req,res)=>{
    console.log('udpate leaders request');
})

app.delete("/leaders/:leaderId",(req,res)=>{
    console.log('delete leaders request');
})

app.post("/leaders/:leaderId",(req,res)=>{
    console.log('insert leaders request');
})

