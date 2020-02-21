export async function getUser() {
  const response = await fetch('/api/user');
  const body = await response.json();
  if (response.status !== 200) throw Error(body.message);

  return body;
};

export async function getUserFavoriteMovies(user) {
  const response = await fetch(`/api/movies/${user.username}`);
  const body = await response.json();
  if (response.status !== 200) throw Error(body.message);
  return body;
};

export async function uploadMovie(movie) {
  movie.dateWatched = Date.UTC(...movie.dateWatched.split('-'))

  const response = await fetch('/api/movie', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ movie: movie }),
  });

  const body = await response.json();
  return body
};
