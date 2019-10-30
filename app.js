"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var app = express();
var port = process.env.PORT || 3000;
exports.urlEncodedParser = bodyParser.urlencoded({ extended: false });
app.set("port", port);
// set view engine: using pug
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
// routes
var addTodo = require("./routes/add_todo"), index = require("./routes/index");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(addTodo);
app.use(index);
app.listen(port, function () {
    console.log("app started at port " + port);
});
