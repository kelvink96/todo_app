import mysql = require("mysql");

let config = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "todo_node"
});

module.exports = config;