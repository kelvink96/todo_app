"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var router = express.Router();
var dbConfig = require("../db");
var allTasks, allResultsQuery = dbConfig.query("SELECT * FROM task", function (err, result) {
    if (err) {
        console.log(err);
    }
    else {
        allTasks = result;
    }
});
// home route
router.get("/", function (req, res) {
    res.render("index", {
        title: "home",
        allTasks: allTasks
    });
});
module.exports = router;
