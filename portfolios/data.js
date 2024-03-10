const express = require('express');
const app = express();  // Corrected variable name
const cors = require('cors');
const fs = require('fs');
const bodyParser = require('body-parser');  // Added require statement for body-parser

app.use(cors());
app.use(bodyParser.json());  // Added body-parser middleware for JSON parsing

app.get('/api', function(req, res) {
  if (req.url === '/favicon.ico') {
    res.end();
    return;  // Added a return statement to exit the function early
  }

  const json = fs.readFileSync('count.json', 'utf-8');
  const obj = JSON.parse(json);

  obj.pageviews = obj.pageviews + 1;
  if (req.query.type === 'visit-pageview') {
    obj.visits = obj.visits + 1;
  }

  const newJSON = JSON.stringify(obj);

  fs.writeFileSync('count.json', newJSON);
  res.send(newJSON);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});