const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/test', require('./routes/test.routes'));

app.get('/', (req, res) => {
  res.send('Study Buddy API is running');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
