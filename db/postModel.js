const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  vmtitle: {
    type: String,
    required: [true, "Please enter the title of this vm."],
  },
  hostedby: {
    type: String,
    required: [true, "Please enter where you found this vm."],
  },
  description: {
    type: String,
    required: [true, "Please provide a description of this vm."],
  },
  difficulty: {
    type: String,
  },
  // picture: {
  //   type: String,
  //   required: [true, "Please provide a fitting picture"],
  // },
  steps: [],
  published: {
    type: Boolean,
  },
  author: {
    type: String,
  },
  date: {
    type: String,
  },
  approved: {
    type: Boolean,
  },
  featured: {
    type: Boolean,
  },
  //   should have a date, and a finalized button.
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
