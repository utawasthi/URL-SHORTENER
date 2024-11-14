require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const connectToDB = require('./utils/db');
const urlRoutes = require('./routes/urlRoutes');

app.use(cors());

// connect to the database....
connectToDB();

app.use(express.json());
app.use('/api', urlRoutes);

const PORT = process.env.PORT;

app.listen(PORT , () => {
  console.log(`Server listening on PORT ${PORT}`);
});