// *** 1 ***

// console.log("Hey, I'm Aleksandar");

//*** 2 ***

// var time = 0;

// var timer = setInterval(function(){
//     time += 2;
//     console.log(time + " seconds have passed");
//     if (time >5){
//         clearInterval(timer);
//     }
// }, 2000);

// *** 3 ***

// console.log(__dirname);
// console.log(__filename);

//*** 4 ***
//Normal function statement
// function sayHi(){
//     console.log("hi");
// }
// sayHi();
// ================
// function callFunction(fun){
//     fun();
// }
// //function expression 
// var sayBye = function(){
//     console.log("bye");
// };
// sayBye();
// callFunction(sayBye);

//*** 5 ***
// * related count.js
// var counter = require("./count.js");

// *** 6 ***
// related stuff.js
// var stuff = require("./stuff.js");
// console.log(stuff.adder(5,6));
// console.log(stuff.adder(stuff.pi, 5));

// ========================================= Do ovaa linija povtoriv na vtor cas ================================

// *** 7 ***

// var events = require("events");
// var myEmitter = new events.EventEmitter();
// myEmitter.on("someEvent", function(mssg){
//     console.log(mssg);
// });
// myEmitter.emit("someEvent", " the event was emitted");

// *** 8 ***

// var events = require("events");
// var util = require("util");

// var Person = function(name){
//     this.name = name;
// };
// util.inherits(Person, events.EventEmitter);

// var james = new Person("james");
// var mary = new Person("mary");
// var ryu = new Person("ryu");
// var people = [james, mary, ryu];

// people.forEach(function(person){
//     person.on("speak", function(mssg){
//         console.log(person.name + " said: " + mssg);
//     });
// });
// james.emit("speak", "hey dudes");
// ryu.emit("speak", " I want a curry");

// *** 9 ***

// var fs = require("fs");
// *** Method With sync
// var readMe = fs.readFileSync("readMe.txt", "utf8");
// // console.log(readMe);
// fs.writeFileSync("writeMe.txt", readMe);

// *** Method withput sync

// var fs = require("fs");

// fs.readFile("readMe.txt", "utf8", function(err, data){
// //    console.log(data);
// fs.writeFile("writeMe2.txt", data);
// });

// *** 10 ***

// var fs = require("fs");

// fs.mkdirSync("stuff2");
// fs.rmdirSync('stuff');
// *** 11 ***

// var http = require("http");

// var server = http.createServer(function(req, res){
//     res.writeHead(200, {"Content-tyoe" :"text/plain"});
//     res.end("Hey ninjas");
// });
// server.listen(3000, "127.0.0.1");
// console.log("yo dawgs, now listening to port 3000");

// *** 12 ***

// var http = require("http");
// var fs = require("fs");

// var myReadStream = fs.createReadStream(__dirname + "/readMee.txt", "utf8");
// myReadStream.on("data", function(chunk){
//     console.log("new chunk received:");
//     console.log(chunk);
// });

// *** 13 ***

// var http = require("http");
// var fs = require("fs");

// var server = http.createServer(function(req, res){
//     console.log("request was made: " + req.url);
//     res.writeHead(200, {"Content-Type" : "text/html"});
//     var myReadStream = fs.createReadStream(__dirname + "/index.html", "utf8");
//     myReadStream.pipe(res);
// });

// server.listen(3000, "127.0.0.1");
// console.log("yo dawgs, now listening to port 3000");

// *** 14 ***

// var http = require("http");
// var fs = require("fs");

// var server = http.createServer(function(req, res){
//     console.log("request was made: " + req.url);
//     res.writeHead(200, {"Content-Type" : "aplication/json"});
//     var myObj = {
//         name: "Ryu",
//         job: "Ninja",
//         age: 29
//     };
//     res.end(JSON.stringify(myObj));
// });

// server.listen(3000, "127.0.0.1");
// console.log("yo dawgs, now listening to port 3000");



