const express = require("express");
const app = express();
const ejs = require("ejs");
const bodyParser = require("body-parser");

// Chemin vers les params de la BDD
const mongoose = require("../db/mongo")

//Chemins vers les Schemas
const user = require("../db/user");


const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }))

app.get("/", function(req, res){
    res.render("index");
});

app.get("/documentation", function(req, res){
    res.render("documentation");
});

app.get("/connexion", function(req, res){
    res.render("connexion");
});




app.listen(port, function(){
    console.log("Le port : " + port + " est actif");
});