import express = require("express");
import {urlEncodedParser} from "../app";

const router = express.Router();

router.get("/add_todo", (req, res) => {
    res.render("add_todo", {
        title: "add todo"
    })
});

// post todo item
// Todo fix not posting request to body
router.post("/add_todo", urlEncodedParser,(req, res, next) => {
    res.json(req.body);
});

module.exports = router;