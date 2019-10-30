"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
module.exports = function () {
    var router = express.Router();
    var dbConfig = require("../db");
    var allTasks, allResultsQuery = dbConfig.query("SELECT * FROM task", function (err, rows) {
        if (err) {
            console.log(err);
            dbConfig.end();
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
    return router;
};
