import mysql = require("mysql");

let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "todo_node"
});

connection.connect();
module.exports = connection;