"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
app.set("port", port);
app.get("/", function (req, res) {
    res.send("hello world");
});
app.listen(port, function () {
    console.log("app started at port " + port);
});
