const express = require('express');
const db = require('./db.js');

const app = express();
const port = 3001;

app.use(express.json());
app.use(express.static(__dirname + '/../client/dist'));

app.listen(port, (req, res) => {
  console.log(`Listening on port ${port}`);
});

app.get('/api/notes', (req, res) => {
  new Promise((resolve, reject) => {
    db.query('SELECT * FROM notes', (err, res) => {
      if (err) { reject(err) }
      else { resolve(res) }
    })
  })
    .then(notes => { res.send(notes) });
});