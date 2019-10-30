"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var router = express.Router();
var dbConfig = require("../db");
var allTasks, allResultsQuery = dbConfig.query("SELECT * FROM task", function (err, rows) {
    if (err) {
        console.log(err);
    }
    else {
        allTasks = rows;
    }
});
// home route
router.get("/home", function (req, res) {
    res.render("index", {
        title: "home",
        allTasks: allTasks
    });
});
module.exports = router;
