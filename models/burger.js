module.exports = function(sequelize, DataTypes) {

//BURGERS OR BURGER...CHECK AGAIN
//tried commenting different lines out
//switched to capital B and removed the s on burger.
// changed const to let.

let Burger = sequelize.define("burger", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
    //   validate: {
    //     //len: [1]
    //   }
    },
    devoured: {
      type: DataTypes.BOOLEAN
    //   allowNull: false,
    //   validate: {
    //     len: [1]
      }
  });
  return Burger;
};

