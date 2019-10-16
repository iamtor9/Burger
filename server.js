

//importing node package express
const express = require("express");
//const handlebars = require("express-handlebars");

//app is going to use express package
const app = express();
const PORT = process.env.PORT || 4200;


// Requiring our models for syncing the burger.js & index.js
const db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Express Handle bars
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
//require("./controller/burgers_controllers")(app);
const routez = require("./controller/burgers_controllers");
   app.use(routez);

// Syncing our sequelize models and then starting our Express app
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT" + PORT);
  });
});

