import express = require("express");

module.exports = () => {
    const router = express.Router();
    let dbConfig = require("../db");

    let allTasks: Array<any>,
        allResultsQuery = dbConfig.query("SELECT * FROM task", (err, rows: Array<any>) => {
            if (err) {
                console.log(err);
                dbConfig.end();
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

    return router;
};