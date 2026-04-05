const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  ageGroup: {
    type: String, // e.g. "5-7", "8-10"
  },
  createdBy: {
    type: String, // later we can link to user
  },
}, { timestamps: true });

module.exports = mongoose.model("Course", courseSchema);