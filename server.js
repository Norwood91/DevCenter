const express = require('express');
const connectDB = require('./config/db');
const app = express();

connectDB();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('this is working');
});

app.listen(PORT, () => {
  console.log('The app is running on port ' + PORT);
});
