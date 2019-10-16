import express = require("express");
const router = express.Router();

router.get("/add_todo", (req, res) => {
    res.render("add_todo", {
        title: "add todo"
    })
});

module.exports = router;