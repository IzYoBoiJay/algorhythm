const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const Post = require("./model");

const router = express.Router();

router.get("/get_posts", async (req, res, next) => {
  const allRecords = await Post.find();
  res.json(allRecords);
});

router.post("/create_post", async (req, res, next) => {
  console.log(req.body);
  Post.create(req.body, (err) => {
    if (err) next(err);
    res.sendStatus(200);
  });
});

module.exports = router;
