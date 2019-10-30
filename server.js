"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var app = express();
var server = http.createServer(app);
var port = process.env.PORT || 3000;
var io = require("socket.io").listen(server);
exports.urlEncodedParser = bodyParser.urlencoded({ extended: false });
app.set("port", port);
// set view engine: using pug
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
// routes
var addTodo = require("./routes/add_todo")(io), index = require("./routes/index")(io);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(addTodo);
app.use(index);
server.listen(port, function () {
    console.log("app started at port " + port);
});
