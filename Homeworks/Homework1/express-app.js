// *** 1 ***
// var express = require("express");

// var app = express();

// app.get ("/", function(req, res){
//     res.send("This is the homepage");
// });

// app.get ("/contact", function(req, res){
//     res.send("This is the contact page");
// });

// app.listen(3000);

// *** 2 ***

// var express = require("express");
// const { runInNewContext } = require("vm");

// var app = express();

// app.get ("/", function(req, res){
//     res.send("This is the homepage");
// });

// app.get ("/contact", function(req, res){
//     res.send("This is the contact page");
// });

// app.get ("/profile/:id", function(req, res){
//     res.send("You requested to see a profile with the id of" + req.params.id);
// });

// app.listen(3000);

// *** 3 ***

var express = require("express");
var app = express();

app.get ("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.get ("/contact", function(req, res){
    res.sendFile(__dirname + "/contact.html");
});

app.get ("/profile/:name", function(req, res){
    res.render("profile", {person: req.params.name});
});
app.listen(3000);