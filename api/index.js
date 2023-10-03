const express=require('express')
const app=express()
const mongoose=require('mongoose')
const crypto=require('crypto')
const nodemailer=require('nodemailer')
const cors=require('cors')
const bodyParser = require('body-parser')

app.use(cors())

app.use(bodyParser.urlencoded({extended:false}))

const jwt=require('jsonwebtoken')

mongoose.connect("mongodb+srv://pitabaspradhan834:pitabasp934@cluster0.p6ocoqf.mongodb.net/amazon?retryWrites=true&w=majority")
.then((result)=>{
    console.log("Connected to database")
})
.catch((err)=>{
    console.error(`Error connecting to the databse ${err}`)
})

app.listen(5000,()=>{
    console.log("Server is running on port 3001");
})
//Endpoint to register in the app