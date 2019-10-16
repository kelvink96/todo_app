"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
var app = express();
var port = process.env.PORT || 3000;
// load config file
var Config = require("./db");
app.set("port", port);
// set view engine: using pug
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
// home route
app.get("/", function (req, res) {
    res.render("index", {
        title: "home"
    });
});
app.get("/data", function (req, res) {
    Config.connect(function (err) {
        if (err) {
            throw err;
        }
        else {
            console.log("connected");
            res.send("database connected");
        }
    });
});
// routes
var addTodo = require("./routes/add_todo");
app.use(addTodo);
app.listen(port, function () {
    console.log("app started at port " + port);
});
