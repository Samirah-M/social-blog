// create a new router
const app = require("express").Router();
const { authMiddleware } = require("../utils/auth");

// import the models
const { Post, User} = require("../models/index");

// Route to get all posts
app.get("/", authMiddleware, async (req, res) => {
  try {
    const posts = await Post.findAll({ include: User });

    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving posts", error });
  }
});

// Route to get a post by userid
app.get("/:id", authMiddleware, async (req, res) => {
  try {
    const posts = await Post.findAll({ include: User ,where: {created_by: req.params.id}});    
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving posts", error });
  }
});

// Route to add a new post
app.post("/", authMiddleware, async (req, res) => {
    try {
      const { title, img_url, created_by, content } = req.body;
      const post = await Post.create({
        title,
        img_url,
        created_by,
        content,
      });
  
      res.status(201).json(post);
    } catch (error) {
      res.status(500).json({ error: "Error adding post" });
    }
  });

// Route to update a post
app.put("/:id", authMiddleware, async (req, res) => {
  try {
    const { title, img_url, content } = req.body;
    const post = await Post.update(
      { title, img_url, content },
      { where: { id: req.params.id } }
    );
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: "Error updating course" });
  }
});

// Route to delete a post
app.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const post = await Post.destroy({ where: { id: req.params.id } });
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: "Error deleting course" });
  }
});

// export the router
module.exports = app;