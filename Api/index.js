const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const RegisterModel = require('./Register')
const bcrypt = require('bcrypt');
const app = express()
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET"],
    credentials: true
}));

app.use(express.json())
mongoose.connect('mongodb+srv://portfolio:port@portfolio.rsdq3hc.mongodb.net/?retryWrites=true&w=majority')
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
app.post('/signup', async (req, res) => {
    const { name, email, tel, password } = req.body;
    console.log("Received signup request:", req.body);

    try {
        const existingUser = await RegisterModel.findOne({ email });
        if (existingUser) {
            console.log("User already exists with email:", email);
            return res.status(400).json({ message: "User already exists" });
        } else {
            const newUser = new RegisterModel({ name, email, tel, password });
            await newUser.save();
            console.log("New user created:", newUser);
            return res.status(201).json(newUser);
        }
    } catch (err) {
        console.error("Error during signup:", err);
        return res.status(500).json({ message: "Internal Server Error", error: err.message });
    }
});
app.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    try {
      const existingUser = await RegisterModel.findOne({ email: email });
      if (existingUser) {
        const matchedPassword = await bcrypt.compare(password, existingUser.password);
        if (matchedPassword) {
          console.log("Verified Password");
          res.status(200).json("Sign in successfully");
        } else {
          console.log("Incorrect Password");
          res.status(401).json("Incorrect Password");
        }
      } else {
        console.log("User is not Found");
        res.status(404).json("User is not Found");
      }
    } catch (error) {
      console.error(error);
      res.status(500).json("Internal Server Error");
    }
  });
  app.post('/admin', async (req, res) => {
    const { email, password } = req.body;
    try {
      const existingUser = await RegisterModel.findOne({ email: email });
      if (existingUser) {
        const matchedPassword = await bcrypt.compare(password, existingUser.password);
        if (matchedPassword) {
          console.log("Verified Password");
          res.status(200).json("Sign in successfully");
        } else {
          console.log("Incorrect Password");
          res.status(401).json("Incorrect Password");
        }
      } else {
        console.log("User is not Found");
        res.status(404).json("User is not Found");
      }
    } catch (error) {
      console.error(error);
      res.status(500).json("Internal Server Error");
    }
  });
  app.get('/users', async (req, res) => {
    try {
        const users = await RegisterModel.find();
        res.json(users);
        console.log(users)
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json("Internal Server Error");
    }
});


app.listen(3001, () => {
    console.log("Server is Running")
})
