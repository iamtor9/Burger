//routers here EXPRESS & ROUTER EXPRESS FIRST!!!!
var express = require("express");
var router = express.Router();

//burger model db connect
let db = require("../models");

// GET callback request to models path
router.get("/", function(req, res) {
    db.Burger.findAll({}).then(function(dbBurgers) {
        const Burgers = {
            burgers:dbBurger
        };   

        res.render("index", Burgers);
      });
  });
  
// create PUT from model router
//req dat body.burger_name
router.put("/", function(req, res) {
    db.Burger.update(
        devoured = req.body.devoured,
        {
            where:{
                id:req.body.id
            }
        }).then(function(dbBurger) {
             res.json(dbBurger);
        });

});

// //create the PUT callback request
// router.put("/", function(req, res) {


// // create UPDATE for tbl key--devoured to be true
// //make a callback promise that returns the updated key value to be true
// // req.body.id -- see class activity notes
// //comes from the models path!!
// db.burger.update(
//     {
//     devoured: true
//     },
//     {
//     where: {
//         id: req.body.id
//     }

//     }).then(function() {
//         return res.redirect("/");
//     });
// });

module.exports = router;












//second coding take below
// // Import the model 
// //create The GET
// var burgerz = require("../models/burger.js");
// module.exports = function(app) {
//     app.get("/", function(req, res) {
//         res.render("index");
//         });

//     app.post("/api/burgers", function(req, res){
//         db.burger.create({ 
//             burger_name: req.body.burger_name, 
//             devoured: req.body.devoured
//         }).then(function(pizza){res.json(pizza)});
//     });
// }


// // Create all our routes and set up logic within those routes where required.
// router.get("/", function(req, res) {
//     burgerz.all(function(data) {
//         var hbsObject = {
//             burgers: data
//         };
//         // console.log(hbsObject);
//         res.render("index", hbsObject);
//     });
// });



// // router.post("/api/burgers", function(req, res) {
// //     burgerz.create([req.body.name], function(result) {
// //         // Send back the ID of the new quote
// //         res.json({ id: result.insertId });
// //     });
// // });

// // app.post("/api/burgers", function(req, res){
// //     db.burger.create({ 
// //         burger_name: req.body.burger_name, 
// //         devoured: req.body.devoured
// //     }).then(function(pizza){res.json(pizza)});
// // });



// router.put("/models/burgers/:id", function(req, res) {
//     var condition = "id = " + req.params.id;

//     // console.log("condition", condition);

//     burgerz.update(req.body, condition, function(result) {
//         if (result.changedRows == 0) {
//             // If no rows were changed, then the ID must not exist, so 404
//             return res.status(404).end();
//         } else {
//           res.status(200).end();
//         }
//     });
// });



// router.delete("/models/burgers/:id", function(req, res) {
//     var condition = "id = " + req.params.id;

//     burgerz.delete(condition, function(result) {
//         if (result.affectedRows == 0) {
//             // If no rows were changed, then the ID must not exist, so 404
//             return res.status(404).end();
//         } else {
//             res.status(200).end();
//         }
//     });
// });

// // Export routes for server.js to use.
// module.exports = router;









//first take below
// // Dependencies below here
//

// // Requiring our Todo model
// var db = require("../models");

//// Routes
// module.exports = function(app) {

//   // GET route for getting all of the posts
//   app.get("/", function(req, res) {
//     // Add sequelize code to find all posts, and return them to the user with res.json
// res.render("index");
//   });

//   // Get route for returning posts of a specific category
//   app.get("/api/posts/category/:category", function(req, res) {
//     // Add sequelize code to find all posts where the category is equal to req.params.category,
//     // return the result to the user with res.json
//   });

//   // Get route for retrieving a single post
//   app.get("Burger", function(req, res) {
//     // Add sequelize code to find a single post where the id is equal to req.params.id,
//     // return the result to the user with res.json
//   });

//   // POST route for saving a new post
//   app.post("Burger", function(req, res) {
//     // Add sequelize code for creating a post using req.body,
//     // then return the result using res.json
//   });

//   // DELETE route for deleting posts
//   app.delete("Burger:id", function(req, res) {
//     // Add sequelize code to delete a post where the id is equal to req.params.id, 
//     // then return the result to the user using res.json
//   });

//   // PUT route for updating posts
//   app.put("Burger", function(req, res) {
//     // Add code here to update a post using the values in req.body, where the id is equal to
//     // req.body.id and return the result to the user using res.json
//   });

//   module.exports = router;
// };
