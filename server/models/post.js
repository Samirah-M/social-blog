const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Post extends Model {}

Post.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    img_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "post",
  }
);

// Export Post model
module.exports = Post;