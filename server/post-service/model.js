const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema({

  //Post Content
  text: {
    type: String,
    required: true,
  },
  tags: [
    {
      type: String,
    },
  ],

  //User data
  username: {
    type: String,
    required: true,
  },

  userLink: {
    type: String,
    required: true,
  },

  profilepic: {
    type: String,
  },

  //Song data
  picture: {
    type: String,
    required: true,
  },

  title: {
    type: String,
    required: true,
  },

  album: {
    type: String,
    required: true,
  },

  artist: {
    type: String,
    required: true,
  },

  songLink: {
    type: String,
    required: true,
  },

  //Temporal Data
  created_at: { type: Date, default: Date.now() },

});

module.exports = mongoose.model("Post", postSchema);
