
const path = require("path");
const express = require("express");
const apiRouter = express.Router();

const friends = require("../data/friends.js");

app.get("/api/friends", function(req, res) {
    res.json(friends);
    
});

app.post("/api/friends", function(req,res) {
    
    friends.create([
        "name", "sleepy"
      ], [
        req.body.name, req.body.sleepy
      ], function(result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
      });
    });




module.exports = apiRouter;