//importing node package express
const express = require("express");
const handlebars = require("express-handlebars");

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

// Routes
// =============================================================
// require("./routes/api-routes.js")(app);
// require("./routes/html-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

