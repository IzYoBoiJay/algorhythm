const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  tags: [
    {
      type: String,
    },
  ],
  songLink: {
    type: String,
    required: true,
  },
  created_at: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("Post", postSchema);
