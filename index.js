const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

// To access .env files
dotenv.config();

app.use(bodyParser.json()); // This will accept json requests
app.use(bodyParser.urlencoded({ extended: true }));

// Middlewares
app.use(cors());

app.use(express.static(path.join(__dirname, "css")));
app.use(express.static(path.join(__dirname, "images")));
app.use(express.static(path.join(__dirname, "js")));
app.use(express.static(path.join(__dirname, "lib")));
app.use(express.static(path.join(__dirname, "firebase")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "pages/index.html"));
});

app.get("/aboutUs", (req, res) => {
    res.sendFile(path.join(__dirname, "pages/aboutUs.html"));
});

app.get("/careers", (req, res) => {
    res.sendFile(path.join(__dirname, "pages/careerPage.html"));
});

const port = process.env.PORT || 3000; // Use 3000 as the default port if PORT is not defined in .env
app.listen(port, () => console.log(`Successfully Connected To Server on port ${port}`));
