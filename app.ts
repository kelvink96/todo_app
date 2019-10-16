import express = require("express");
import path = require("path");

const app = express();
const port = process.env.PORT || 3000;

// load config file
let Config = require("./db");

app.set("port", port);

// set view engine: using pug
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// home route
app.get("/", (req, res) => {
    res.render("index", {
        title: "home"
    })
});

app.get("/data", (req, res) => {
    Config.connect((err) => {
        if (err) {
            throw err;
        } else {
            console.log(`connected`);
            res.send(`database connected`)
        }
    })
});

app.listen(port, () => {
    console.log(`app started at port ${port}`);
});