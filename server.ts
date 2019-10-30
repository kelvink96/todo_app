import express = require("express");
import path = require("path");
import bodyParser = require("body-parser");

const server = express();
const port = process.env.PORT || 3000;
export const urlEncodedParser = bodyParser.urlencoded({extended: false});

server.set("port", port);

// set view engine: using pug
server.set("views", path.join(__dirname, "views"));
server.set("view engine", "pug");

// routes
let addTodo = require("./routes/add_todo"),
    index = require("./routes/index");

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: false}));
server.use(addTodo);
server.use(index);

server.listen(port, () => {
    console.log(`app started at port ${port}`);
});