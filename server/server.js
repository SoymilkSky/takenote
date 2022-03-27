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

  app.post('/api/movies', (req, res) => {
    new Promise((resolve, reject) => {
      db.query("INSERT INTO notes VALUES(NULL, 0, ?, ?, ?, ?, 'none')", req.body, (err, data) => {
        if (err) { reject(err) }
        else { resolve(data) }
      })
    })
      .then(() => res.status(201).end());
  })

  app.patch('/api/movies', (req, res) => {
    new Promise((resolve, reject) => {
      db.query("UPDATE notes SET ?? = ? WHERE id = ?", req.body, (err, data) => {
        if (err) { reject(err) }
        else { resolve(data) }
      })
    })
      .then(() => res.end())
  })
});