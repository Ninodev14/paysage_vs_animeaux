const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

let counter = 0;

app.get('/getCounter', (req, res) => {
  res.json({ counter });
});

app.post('/incrementCounter', (req, res) => {
  counter += 1;
  fs.writeFileSync('counter.txt', counter.toString());
  res.json({ success: true });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  try {
    counter = parseInt(fs.readFileSync('counter.txt', 'utf-8')) || 0;
  } catch (error) {
    console.error('Error reading counter.txt:', error.message);
  }
});
