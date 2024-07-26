const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');

const RegisterModel = require('./Register');
const app = express();

app.use(cors({
    origin: ["https://anh-viet-page.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true
}));

app.use(express.json());

mongoose.connect('mongodb+srv://portfolio:port@portfolio.rsdq3hc.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        console.log("Connected to MongoDB successfully");
    })
    .catch((error) => {
        console.error("Network Error", error);
    });

app.get("/", (req, res) => {
    res.json("Information");
});

app.post('/submit', async (req, res) => {
    const { name, email, tel, note } = req.body;

    try {
        const user = await RegisterModel.findOne({ email });
        if (user) {
            return res.status(400).json("Already submitted");
        }
        const newUser = await RegisterModel.create({ name, email, tel, note });
        return res.status(201).json(newUser);
    } catch (err) {
        console.error("Error during submission:", err);
        return res.status(500).json({ message: "Internal Server Error", error: err.message });
    }
});

app.post('/signup', async (req, res) => {
    const { name, email, tel, password } = req.body;
    console.log("Received signup request:", req.body);

    try {
        const existingUser = await RegisterModel.findOne({ email });
        if (existingUser) {
            console.log("User already exists with email:", email);
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new RegisterModel({ name, email, tel, password: hashedPassword });
        await newUser.save();
        console.log("New user created:", newUser);
        return res.status(201).json(newUser);
    } catch (err) {
        console.error("Error during signup:", err);
        return res.status(500).json({ message: "Internal Server Error", error: err.message });
    }
});

const handleSignin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await RegisterModel.findOne({ email });
        if (!existingUser) {
            console.log("User not found with email:", email);
            return res.status(404).json({ message: "User not found" });
        }

        const matchedPassword = await bcrypt.compare(password, existingUser.password);
        if (matchedPassword) {
            console.log("Verified password for user:", email);
            return res.status(200).json({ message: "Sign in successfully" });
        } else {
            console.log("Incorrect password for user:", email);
            return res.status(401).json({ message: "Incorrect password" });
        }
    } catch (err) {
        console.error("Error during signin:", err);
        return res.status(500).json({ message: "Internal Server Error", error: err.message });
    }
};

app.post('/signin', handleSignin);
app.post('/admin', handleSignin);

app.get('/users', async (req, res) => {
    try {
        const users = await RegisterModel.find();
        res.json(users);
        console.log(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
});

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
