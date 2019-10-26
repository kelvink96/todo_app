import express = require("express");
import path = require("path");
import bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;
export const urlEncodedParser = bodyParser.urlencoded({extended: false});

// load config file
let dbConfig = require("./db");

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
    dbConfig.connect((err) => {
        if (err) {
            res.send(err);
            throw err;
        } else {
            console.log(`connected`);
            res.send(`database connected`)
        }
    })
});

// routes
let addTodo = require("./routes/add_todo");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(addTodo);

app.listen(port, () => {
    console.log(`app started at port ${port}`);
});