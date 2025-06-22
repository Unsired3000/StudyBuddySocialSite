import React, { useEffect, useState } from 'react';
import axios from '../axios';

const Flashcards = () => {
  const [cards, setCards] = useState([]);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const fetchFlashcards = async () => {
    const { data } = await axios.get('/api/flashcards');
    setCards(data);
  };

  const createFlashcard = async () => {
    await axios.post('/api/flashcards', { question, answer });
    fetchFlashcards();
    setQuestion('');
    setAnswer('');
  };

  useEffect(() => {
    fetchFlashcards();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Flashcards</h2>
      <div className="mb-4">
        <input className="border p-2 mr-2" value={question} onChange={(e) => setQuestion(e.target.value)} placeholder="Question" />
        <input className="border p-2 mr-2" value={answer} onChange={(e) => setAnswer(e.target.value)} placeholder="Answer" />
        <button className="bg-blue-500 text-white px-4 py-2" onClick={createFlashcard}>Add</button>
      </div>
      <ul>
        {cards.map((card, idx) => (
          <li key={idx} className="mb-2 p-2 border">
            <strong>Q:</strong> {card.question} <br />
            <strong>A:</strong> {card.answer}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Flashcards;
