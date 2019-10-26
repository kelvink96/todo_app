"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app_1 = require("../app");
var router = express.Router();
var dbConfig = require("../db");
router.get("/add_todo", function (req, res) {
    res.render("add_todo", {
        title: "add todo"
    });
});
// post todo item
// Todo fix not posting request to body
router.post("/add_todo", app_1.urlEncodedParser, function (req, res, next) {
    dbConfig.connect(function (err) {
        if (err) {
            res.send(err);
            throw err;
        }
        else {
            console.log("connected");
            var sql = "INSERT INTO `task` (`title`, `description`, `start_date`, `end_date`) " +
                "VALUES " +
                "('" + req.body.task_title + "', '" + req.body.description + "', '" + req.body.start_date + "', '" + req.body.end_date + "')";
            dbConfig.query(sql, function (err, resp) {
                if (err) {
                    res.send(err);
                    throw err;
                }
                else {
                    console.log("task " + req.body.task_title + " added");
                }
            });
        }
    });
});
module.exports = router;
