const express = require('express')
const app = express()
const mongoose = require('mongoose')
const crypto = require('crypto')
const nodemailer = require('nodemailer')
const cors = require('cors')
const bodyParser = require('body-parser')
const User = require('./models/User')
const Order = require('./models/Order')
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))

const jwt = require('jsonwebtoken')
const sendVerificationEmail = async (email, verificationToken) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "pitabas.pradhan834@gmail.com",
            pass: "tvzhuctgaijdwtpj",
        },
    })
    const mailOptions = {
        from: "amazon.com",
        to: email,
        subject: "Email Verification",
        text: `Please click the following link to verify your email: http://localhost:5000/verify/${verificationToken}`,
    };
    try {
        await transporter.sendMail(mailOptions);
        console.log("Verification email sent successfully");
    } catch (error) {
        console.error("Error sending verification email:", error);
    }
}
mongoose.connect("mongodb+srv://pitabaspradhan834:pitabasp934@cluster0.p6ocoqf.mongodb.net/amazon?retryWrites=true&w=majority")
    .then((result) => {
        console.log("Connected to database")
    })
    .catch((err) => {
        console.error(`Error connecting to the databse ${err}`)
    })

app.listen(5000, () => {
    console.log("Server is running on port 3001");
})
//Endpoint to register in the app

app.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        //Check if the Email is already exist
        const exit = await User.findOne({ email })

        if (exit) {
            return res.status(400).send({ "message": "Email Already Exist" })
        }

        //Create a New User
        const newUser = new User({ name, email, password })
        newUser.verificationToken = crypto.randomBytes(20).toString("hex");
        //save the user to the database

        await newUser.save();

        //Send Verification Email
        sendVerificationEmail(newUser.email, newUser.verificationToken);
        res.status(201).json({
            message:
                "Registration successful. Please check your email for verification.",
        });
        sen
    } catch (error) {
        console.log("Error registering user", error);
        res.status(500).json({ message: "Registration Failed" })
    }

})