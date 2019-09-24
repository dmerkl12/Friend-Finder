const express = require("express");
const path = require("path");
const htmlRouter = express.Router();

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"));
});


app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname + "app/public/survey.html"));
});

module.exports = htmlRouter;