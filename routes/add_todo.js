"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app_1 = require("../app");
var router = express.Router();
router.get("/add_todo", function (req, res) {
    res.render("add_todo", {
        title: "add todo"
    });
});
// post todo item
// Todo fix not posting request to body
router.post("/add_todo", app_1.urlEncodedParser, function (req, res, next) {
    res.json(req.body);
});
module.exports = router;
