import express = require("express");
import path = require("path");
import bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;
export const urlEncodedParser = bodyParser.urlencoded({extended: false});

app.set("port", port);

// set view engine: using pug
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// routes
let addTodo = require("./routes/add_todo"),
    index = require("./routes/index");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(addTodo);
app.use(index);

app.listen(port, () => {
    console.log(`app started at port ${port}`);
});