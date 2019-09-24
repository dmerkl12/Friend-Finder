const express = require("express");
const path = require("path");
const htmlRouter = express.Router();

htmlRouter.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});


htmlRouter.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname + "../public/survey.html"));
});

module.exports = htmlRouter;