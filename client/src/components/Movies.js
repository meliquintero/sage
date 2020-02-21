import React from 'react';
import Card from '@material/react-card';

const Movies = ({movies, handleOnClick, clicked}) => {
  const MovieList = movies.map(movie => {
    return(
      <Card
        key= {movie.id}
        id="movie-item">
        <p>Title: {movie.title}</p>
        <p>Date watched: {movie.dateWatched}</p>
      </Card>
    );
  })

  return(
    <div className="movie-list">
      { MovieList }
    </div>
  )
}

export default Movies;
