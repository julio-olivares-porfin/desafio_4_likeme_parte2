const express = require("express");
const {
  showPosts,
  addPosts,
  deletePosts,
  changePosts,
  likePost,
} = require("../controllers/postControllers");

const router = express.Router();

router.get("/posts", showPosts);

router.post("/posts", addPosts);

router.put("/posts/:id", changePosts);

router.delete("/posts/:id", deletePosts);

router.put("/posts/like/:id", likePost);

module.exports = router;