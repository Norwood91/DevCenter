const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('this is working');
});

app.listen(PORT, () => {
  console.log('The app is running on port ' + PORT);
});
