import express = require("express");
import {urlEncodedParser} from "../server";

module.exports = (io) => {
    const router = express.Router();
    let dbConfig = require("../db");

    router.get("/add_todo", (req, res) => {
        res.render("add_todo", {
            title: "add todo"
        });
    });

    // post atodo item
    router.post("/add_todo", urlEncodedParser, (req, res, next) => {
        console.log('a user has connected');
        let sql = "INSERT INTO `task` (`title`, `description`, `start_date`, `end_date`) " +
            "VALUES " +
            "('" + req.body.task_title + "', '" + req.body.description + "', '" + req.body.start_date + "', '" + req.body.end_date + "')";
        dbConfig.query(sql, (err, resp) => {
            if (err) {
                throw err.code;
            } else {
                console.log(`task ${req.body.task_title} added`);
                res.redirect('/add_todo');
            }
        });
    });

    return router;
};