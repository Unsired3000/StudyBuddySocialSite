const express = require('express');
const router = express.Router();
const Flashcard = require('../models/Flashcard');
const authenticateToken = require('../middleware/authMiddleware');

router.get('/', authenticateToken, async (req, res) => {
  const flashcards = await Flashcard.find({ userId: req.user.id });
  res.json(flashcards);
});

router.post('/', authenticateToken, async (req, res) => {
  const { question, answer } = req.body;
  const card = new Flashcard({ question, answer, userId: req.user.id });
  await card.save();
  res.status(201).json(card);
});

module.exports = router;
