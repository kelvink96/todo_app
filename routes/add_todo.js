"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var server_1 = require("../server");
module.exports = function (io) {
    var router = express.Router();
    var dbConfig = require("../db");
    router.get("/add_todo", function (req, res) {
        res.render("add_todo", {
            title: "add todo"
        });
    });
    // post atodo item
    router.post("/add_todo", server_1.urlEncodedParser, function (req, res, next) {
        console.log('a user has connected');
        var sql = "INSERT INTO `task` (`title`, `description`, `start_date`, `end_date`) " +
            "VALUES " +
            "('" + req.body.task_title + "', '" + req.body.description + "', '" + req.body.start_date + "', '" + req.body.end_date + "')";
        dbConfig.query(sql, function (err, resp) {
            if (err) {
                throw err.code;
            }
            else {
                console.log("task " + req.body.task_title + " added");
                res.redirect('/add_todo');
            }
        });
    });
    return router;
};
