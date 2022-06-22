const express = require("express");
const app = express()
app.use(express.urlencoded({ extended: true }))

app.set("view engine", "ejs");
app.use(logger)

app.get("/", (req, res)=>{
    console.log("Here")
    // res.sendStatus(500);
    // res.status(500).send("Hi")
    // res.download("app.js")
    res.render("index", {text: "Wolrd"})
})

const userRouter = require("./routes/users")

app.use("/users", userRouter)

// Middleware function
function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

app.listen(3000);