const express = require('express');
const bodyParser = require('body-parser');

let data = require('./data');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/user', (req, res) => {
  res.send(data.users[0]);
});

app.get('/api/movies/:username', (req, res) => {
  const userName = req.params.username;
  const movies = data.movies.filter(_movie => _movie.username === userName);

  if (movies) {
     res.send(movies);
  } else {
     res.send({ message: `There are no movies for ${userName}`})
  }
});

app.post('/api/movie', (req, res) => {
  const movie = req.body.movie
  let lastMovieId = data.movies[data.movies.length - 1]
  movie.id = lastMovieId + 1
  data.movies.push(movie)
  const movies = data.movies.filter(_movie => _movie.username === movie.username);

  res.send(movies)
});

app.listen(port, () => console.log(`Listening on port ${port}`));
