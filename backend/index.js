const express = require('express');
const dotenv = require('dotenv');
import connectDB from './config/db.js';
import flashcardsRoutes from './routes/flashcardsRoutes.js';

dotenv.config();
const app = express();

app.use(express.json());
app.use('/api/flashcards', flashcardsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
