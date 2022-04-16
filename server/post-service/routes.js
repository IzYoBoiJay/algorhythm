const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const Post = require("./model");

const router = express.Router();

router.post("/create_post", async (req, res) => {
  console.log(req.body);
  
});

module.exports = router;
