// **** Da se instalira faker vo nov vas proekt, da se kreiraat podatoci za 10 korisnici (preku for ciklus) kade sto za eden korisnik kje imame 5 razlicni podatoci (ime, prezime, adresa, itn.) - po vas izbor na funkcii. Podatocite cuvajte gi vo niza, na krajot na skriptata isprintajte ja nizata vo konzola.****

const moduleFaker = require('@faker-js/faker');

let persons = [];

for(var i = 0; i<= 10; i++) {
    const firstName = moduleFaker.faker.name.firstName();
    const lastName = moduleFaker.faker.name.lastName();
    const adress = moduleFaker.faker.address.city();
    const company = moduleFaker.faker.company.companyName();
    const phoneNumber = moduleFaker.faker.phone.phoneNumber();

    persons.push({
      firstName : firstName,
      lastName : lastName,
      adress : adress,
      company : company,
      phoneNumber : phoneNumber
    });
};

console.log(persons);

// *** Core Modules

// Event module

var events = require("events");
var myEmitter = new events.EventEmitter();

myEmitter.on("Aleksandar's birthday party", function(msg1, msg2){
  console.log(msg1,msg2);
});

myEmitter.emit("Aleksandar's birthday party", " Welcome everyone on my bithday party" + " Dont forget your smiles at home");

// *** fs (File System module)

var fs = require ("fs");
fs.readFile("test.txt","utf8", (err, data)=>{
  console.log(data);
});

const newMessage = "Hello to fs module";
fs.writeFile("test.txt", newMessage, ()=>{
  console.log("We write some text");
});

fs.appendFile("test.txt", newMessage, ()=>{
  console.log("We write some text");
});

// *** url module

var url = require ("url");

const urlLink = "http://localhost:50/get?year=2022&month=jun&day=19&active=1";

var urlObj = url.parse(urlLink);
console.log(urlObj.port);
console.log(urlObj.query);
console.log(urlObj.pathname);








