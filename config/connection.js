//back up
const mysql = require("mysql");
const connection = mysql.createConnection({
 host: "localhost",
 port: process.env.PORT || 8889,
 user: "root",
 password: "root",
 database: "burger_db"
});

//connection
connection.connect(function(err) {
 if (err) {
   console.error("error connecting: " + err.stack);
   return;
 }
 console.log("connected as id " + connection.threadId);
});

module.exports = connection;
