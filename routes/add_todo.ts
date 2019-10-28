import express = require("express");
import {urlEncodedParser} from "../app";

const router = express.Router();
let dbConfig = require("../db");

router.get("/add_todo", (req, res) => {
    res.render("add_todo", {
        title: "add todo"
    });
});

// post todo item
router.post("/add_todo", urlEncodedParser, (req, res, next) => {
    dbConfig.connect((err) => {
        if (err) {
            res.send(err);
            throw err;
        } else {
            let sql = "INSERT INTO task (`title`, `description`, `start_date`, `end_date`) " +
                "VALUES " +
                "('" + req.body.task_title + "', '" + req.body.description + "', '" + req.body.start_date + "', '" + req.body.end_date + "')";
            dbConfig.query(sql, (err, resp) => {
                if (err) {
                    res.send(err);
                    throw err;
                } else {
                    console.log(`task ${req.body.task_title} added`);
                }
            })
        }
    });
});

module.exports = router;