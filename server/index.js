const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once('open', () => {
  console.log('MongoDB connected');
});

// Routes
app.get('/', (req, res) => {
  res.send('EduBridge API running');
});

// Sample route for progress data
app.get('/progress', (req, res) => {
  res.json({ level: 'Intermediate', modulesCompleted: 5 });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});