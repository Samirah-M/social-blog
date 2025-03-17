// create a new router
const app = require("express").Router();
//const { authMiddleware } = require("../utils/auth");

// import the models
const { Post/*Course, Category, User, EnrolledUser*/ } = require("../models/index");


// Route to add a new Post
app.post("/", /*authMiddleware, */async (req, res) => {
    try {
      const { postId, title, img_url, created_by, text, creation_time } = req.body;
      const post = await Post.create({
        postId,
        title,
        img_url,
        created_by,
        text,
        creation_time,
      });
  
      res.status(201).json(post);
    } catch (error) {
      res.status(500).json({ error: "Error adding post" });
    }
  });

// Route to get all posts
app.get("/", /*authMiddleware, */async (req, res) => {
    try {
      const posts = await Post.findAll();
  
      res.json(courses);
    } catch (error) {
      res.status(500).json({ error: "Error retrieving posts", error });
    }
  });



/*
//unneeded i think
app.post("/enroll", authMiddleware, async (req, res) => {
  try {
    // allow multiple users to enroll in a course
    const { users, courseId } = req.body;

    for (const userId of users) {
      const enrollment = await EnrolledUser.create({
        userId,
        courseId,
        enrollment_date: new Date(),
      });
    }
  } catch (error) {
    res.status(500).json({ error: "Error enrolling user", error });
  }
});

// switch to user and all posts by
app.get("/:id", authMiddleware, async (req, res) => {
  try {
    // get the course and all the users enrolled in it
    const course = await Course.findByPk(req.params.id, {
      include: [
        { model: Category, as: "category" },
        { model: User, as: "users", through: EnrolledUser },
      ],
    });

    res.json({ course });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error retrieving course" });
  }
});

// Route to update a post
app.put("/:id", authMiddleware, async (req, res) => {
  try {
    const { title, description, created_by, categoryId } = req.body;
    const course = await Course.update(
      { title, description, created_by, categoryId },
      { where: { id: req.params.id } }
    );
    res.json(course);
  } catch (error) {
    res.status(500).json({ error: "Error updating course" });
  }
});

// Route to delete a post
app.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const course = await Course.destroy({ where: { id: req.params.id } });
    res.json(course);
  } catch (error) {
    res.status(500).json({ error: "Error deleting course" });
  }
});
*/

// export the router
module.exports = app;