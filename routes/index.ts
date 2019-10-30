import express = require("express");
import io = require("socket.io");

const router = express.Router();
let dbConfig = require("../db");

let allTasks: Array<any>,
    allResultsQuery = dbConfig.query("SELECT * FROM task", (err, rows: Array<any>) => {
            if (err) {
                console.log(err);
            } else {
                allTasks = rows;
            }
        });

// home route
router.get("/home", (req, res) => {
    res.render("index", {
        title: "home",
        allTasks: allTasks
    });
});

module.exports = router;
