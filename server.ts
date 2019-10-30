import http = require("http");
import express = require("express");
import path = require("path");
import bodyParser = require("body-parser");

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 3000;
const io = require("socket.io").listen(server);
export const urlEncodedParser = bodyParser.urlencoded({extended: false});

app.set("port", port);

// set view engine: using pug
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// routes
let addTodo = require("./routes/add_todo")(io),
    index = require("./routes/index")(io);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(addTodo);
app.use(index);

server.listen(port, () => {
    console.log(`app started at port ${port}`);
});