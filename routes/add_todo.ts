import express = require("express");
import {urlEncodedParser} from "../app";

const router = express.Router();
let dbConfig = require("../db");

router.get("/add_todo", (req, res) => {
    res.render("add_todo", {
        title: "add todo"
    });
});

// post atodo item
// fixme error when posting to DB
router.post("/add_todo", urlEncodedParser, (req, res, next) => {
    console.log("connected");
    let sql = "INSERT INTO `task` (`title`, `description`, `start_date`, `end_date`) " +
        "VALUES " +
        "('" + req.body.task_title + "', '" + req.body.description + "', '" + req.body.start_date + "', '" + req.body.end_date + "')";
    dbConfig.query(sql, (err, resp) => {
        if (err) {
            throw err.code;
        } else {
            console.log(`task ${req.body.task_title} added`);
            res.redirect('/');
        }
    });
});

module.exports = router;