const express = require('express');
const app = express();
const db = [
  { title: 'Joke 1', comedian: 'John Doe', year: 2020, id: 1 },
  { title: 'Joke 2', comedian: 'Jane Doe', year: 2019, id: 2 },
];

app.use(express.json());

app.post('/', (req, res) => {
  const { title, comedian, year } = req.body;
  const joke = { title, comedian, year, id: db.length + 1 };
  db.push(joke);
  res.json(db);
});

app.get('/', (req, res) => {
  res.json(db);
});

app.patch('/joke/:id', (req, res) => {
  const id = parseInt((link unavailable));
  const joke = db.find((joke) => (link unavailable) === id);
  if (joke) {
    joke.title = req.body.title || joke.title;
    joke.comedian = req.body.comedian || joke.comedian;
    joke.year = req.body.year || joke.year;
    res.json(joke);
  } else {
    res.status(404).json({ message: 'Joke not found' });
  }
});

app.delete('/joke/:id', (req, res) => {
  const id = parseInt((link unavailable));
  const joke = db.find((joke) => (link unavailable) === id);
  if (joke) {
    db.splice(db.indexOf(joke), 1);
    res.json(joke);
  } else {
    res.status(404).json({ message: 'Joke not found' });
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
