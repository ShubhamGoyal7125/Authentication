//jshint esversion:6

const express = require("express");
const app = express();
const ejs = require("ejs");

app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function (req, res){
    res.render("home");
});

app.get("/register", function (req, res){
    res.render("register");
});

app.get("/login", function (req, res){
    res.render("login");
});


app.listen(3000, function(){
    console.log("Server running at post: 3000");
});