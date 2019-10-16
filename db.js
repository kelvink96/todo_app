"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql = require("mysql");
var config = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "todo_node"
});
module.exports = config;
