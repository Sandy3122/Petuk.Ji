const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.json()); //This will accept json request
app.use(bodyParser.urlencoded({ extended: true}));

//Middlewares
app.use(cors());

app.use(express.static(path.join(__dirname, "css")))
app.use(express.static(path.join(__dirname, "images")))
app.use(express.static(path.join(__dirname, "js")))
app.use(express.static(path.join(__dirname, "lib")))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/pages/index.html")
})
app.get("/aboutUs", (req, res) => {
    res.sendFile(__dirname + "/pages/aboutUs.html")
})
app.get("/careers", (req, res) => {
    res.sendFile(__dirname + "/pages/careers.html")
})








const port = 8000;
app.listen(port, () => console.log(`SuccessFully Connected To Server ${port}....`))