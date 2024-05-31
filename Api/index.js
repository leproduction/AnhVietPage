const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const RegisterModel = require('./Register.js')

const app = express()
app.use(cors({
    origin: ["https://anh-viet-page.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true
}));
app.use(express.json())
mongoose.connect('mongodb+srv://anhvietproject:port@anhvietproject.scc2g3m.mongodb.net/?retryWrites=true&w=majority&appName=AnhVietProject')
    .then(() => {
        console.log("Connected to MongoDB successfully");
    })
    .catch((error) => {
        console.error("Network Error", error);
    });
app.get("/", (req, res) => {
    res.json("Information");
})
app.post('/submit', (req, res) => {
    const {name, email, tel, note} = req.body;
    RegisterModel.findOne({email: email})
    .then(user => {
        if(user) {
            res.json("Already submitted")
        } else {
            RegisterModel.create({name: name, email: email, tel: tel, note: note})
            .then(result => res.json(result))
            .catch(err => res.json(err))
        }
    }).catch(err => res.json(err))
})


app.listen(3001, () => {
    console.log("Server is Running")
})
