const mongoose = require("mongoose");

const feedbackSchema = mongoose.Schema({
  submittedBy: {
    type: String,
  },
  subject: {
    type: String,
  },
  comment: {
    type: String,
  },
});

const Feedback = mongoose.model("Feedback", feedbackSchema);

module.exports = Feedback;
