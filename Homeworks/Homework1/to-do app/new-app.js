var express = require("express");
var todoController = rrquire("./controllers/controllerToDo");

var app = express();

// set up template engine
app.set("view engine", "ejs");

// static files
app.use("/assets", express.static("./public"));

// fire controllers
todoController(app);

localhost:300/assets/style.css
// listen to port
app.listen(3000);
console.log("you are listening to port 3000");