// import all models
const Post = require("./post");
const User = require("./user");

Post.belongsTo(User, {
  foreignKey: "id",
});

/*Course.belongsTo(Category, {
  foreignKey: "categoryId",
  as: "category",
});

Category.hasMany(Course, {
  foreignKey: "categoryId",
  as: "courses",
});

User.belongsToMany(Course, {
  through: EnrolledUser,
  foreignKey: "userId",
});

Course.belongsToMany(User, {
  through: EnrolledUser,
  foreignKey: "courseId",
});*/

module.exports = {
    Post,
    User,
};