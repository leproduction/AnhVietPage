const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const RegisterModel = require('./Register.js');

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
    console.error("Error connecting to MongoDB", error);
});

app.get("/", (req, res) => {
    res.json("Information");
});

app.post('/submit', async (req, res) => {
    try {
        const { name, email, tel, note } = req.body;
        const user = await RegisterModel.findOne({ email });

        if (user) {
            res.json("Already submitted");
        } else {
            const newUser = await RegisterModel.create({ name, email, tel, note });
            res.json(newUser);
        }
    } catch (error) {
        console.error("Error during submission:", error);
        res.status(500).json({ message: "Submission error", error });
    }
});

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
