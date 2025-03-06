const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const indexRouter = require("./routes/index");
//const usersRouter = require("./routes/users");
const mongoose = require("./db/mongo")

mongoose.connexionDB();

const app = express();

//Utilisation de core pour se connecter à la BDD de partout sur le site
app.use(cors({
    exposedHeaders: ["Authorization"],
    origin: "*"
}))

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
//app.use("/users", usersRouter);

app.use(function(req, res, next){
    res.status(404).json({name: "API", version: "1.0", status: 404, message: "not found"})
});

module.exports = app;
