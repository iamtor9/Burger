//back up
const mysql = require("mysql");

const localhostconnection = {
  host: "localhost",
  port: process.env.PORT || 8889,
  user: "root",
  password: "root",
  database: "burger_db"
 }
const connection = mysql.createConnection(process.env.JAWSDB_URL ||localhostconnection);

//connection
connection.connect(function(err) {
 if (err) {
   console.error("error connecting: " + err.stack);
   return;
 }
 console.log("connected as id " + connection.threadId);
});

modules.exports = connection;

// or module.exports = connection;
