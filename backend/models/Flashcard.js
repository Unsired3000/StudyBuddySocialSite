const mongoose = require('mongoose');

const FlashcardSchema = new mongoose.Schema({
  question: String,
  answer: String,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

module.exports = mongoose.model('Flashcard', FlashcardSchema);
