require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const connectToDB = require('./utils/db');
const urlRoutes = require('./routes/urlRoutes');

app.use(cors());

// Connect to the database
connectToDB();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the URL Shortener API!');
});

// API routes
app.use('/api', urlRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
