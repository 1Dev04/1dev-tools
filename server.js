const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

let likeCounts = {};

app.get('/like/:pageId', (req, res) => {
  const pageId = req.params.pageId;
  const count = likeCounts[pageId] || 0;
  res.json({ count });
});

app.post('/like/:pageId', (req, res) => {
  const pageId = req.params.pageId;
  const { count } = req.body;
  likeCounts[pageId] = count;
  res.json({ success: true });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});