
const express = require("express");
const app = express.Router();
const friends = require("../data/friends");

module.exports = function(app){ 
app.get("/api/friends", function(req, res) {
    res.json(friends);    
});

app.post("/api/friends", function(req,res) {
    let difference = function (a, b) 
    { return Math.abs(a - b); }
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
    if (tableData.length < 5) {
        tableData.push(req.body);
        res.json(true);
      }
      else {
        waitListData.push(req.body);
        res.json(false);
      }
    });
}