modules.exports = function (sequelize, DataTypes) {
    const Burger = sequelize.define("Burger", {
    });

    return Burger;

    const burger = sequelize.define("Post", {
        burger_name: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [1]
          }
        },
        devoured: {
          type: DataTypes.TEXT,
          allowNull: false,
          validate: {
            len: [1]
          }
        },
      });
      return Post;
 }

