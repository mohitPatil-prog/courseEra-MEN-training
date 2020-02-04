let express = require('express')
var app = express()

app.get("/promotions /:promoId ",(req,res)=>{
    console.log('get promotions request');
})

app.put("/promotions /:promoId ",(req,res)=>{
    console.log('udpate promotions request');
})

app.delete("/promotions /:promoId ",(req,res)=>{
    console.log('delete promotions request');
})

app.post("/promotions /:promoId ",(req,res)=>{
    console.log('insert promotions request');
})

