import express = require("express");

const router = express.Router();
let dbConfig = require("../db");

let allTasks: Array<any>,
    allResultsQuery = dbConfig.query(
        "SELECT * FROM task", (err, result: Array<any>) => {
            if (err) {
                console.log(err);
            } else {
                allTasks = result;
            }
        });

// home route
router.get("/", (req, res) => {
    res.render("index", {
        title: "home",
        allTasks: allTasks
    });
});

module.exports = router;
