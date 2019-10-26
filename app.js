"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var app = express();
var port = process.env.PORT || 3000;
exports.urlEncodedParser = bodyParser.urlencoded({ extended: false });
// load config file
var dbConfig = require("./db");
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
    dbConfig.connect(function (err) {
        if (err) {
            res.send(err);
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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(addTodo);
app.listen(port, function () {
    console.log("app started at port " + port);
});
