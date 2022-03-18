const express= require('express')
const req = require('express/lib/request')
const app= express()

app.get('*',(req,res) =>{
    console.log("sexo")
    res.send({mensaje: 'sexooo'})
}) 

module.exports= app