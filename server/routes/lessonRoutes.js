const express = require("express");
const router = express.Router();
const Lesson = require("../models/Lesson");

// ================= CREATE LESSON =================
router.post("/", async (req, res) => {
  try {
    const { title, content, courseId } = req.body;

    const lesson = await Lesson.create({
      title,
      content,
      courseId,
    });

    res.status(201).json(lesson);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ================= GET LESSONS BY COURSE =================
router.get("/:courseId", async (req, res) => {
  try {
    const lessons = await Lesson.find({
      courseId: req.params.courseId,
    });

    res.json(lessons);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ================= UPDATE LESSON =================
router.put("/:id", async (req, res) => {
  try {
    const updatedLesson = await Lesson.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updatedLesson);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ================= DELETE LESSON =================
router.delete("/:id", async (req, res) => {
  try {
    await Lesson.findByIdAndDelete(req.params.id);
    res.json({ message: "Lesson deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;