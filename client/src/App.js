import React, { Component } from 'react';

import User from './models/user';
import Movie from './models/movie';

import Movies from './components/Movies';
import MoviesButton from './components/MoviesButton';
import AddMovie from './components/AddMovie';

import {getUser, getUserFavoriteMovies, uploadMovie} from './apiWrapper';

import './App.css';

class App extends Component {
  state = {
    user: '',
    movies: [],
  };

  componentDidMount() {
    getUser()
      .then(
        (result) => {
          this.setState({
            user: new User(result.username)
          });
        },
        (error) => {
          this.setState({
            error
          });
        }
      )
  }

  handleGetMovies = () => {
    getUserFavoriteMovies(this.state.user)
      .then(
        (result) => {
          this.setState({
            movies: result
          });
        },
        (error) => {
          this.setState({
            error
          });
        }
      )
  }

  handleUploadMovie = async movie => {
    uploadMovie(movie).then(
      (result) => {
        this.setState({
          movies: result.map(movieData => new Movie(movieData))
        });
      },
      (error) => {
        this.setState({
          error
        });
      }
    )
  };

  render() {
    const { user, error, movies } = this.state;
    return (
      <div className="App">
        { error &&
          <div>Error: {error.message}</div>
        }

        <h1 className="username"> Welcome {user.username}!</h1>

        <MoviesButton getMovies={this.handleGetMovies} />

        {movies &&
           <Movies movies={movies}/>
        }

        <AddMovie
          userName={user.username}
          handleUploadMovie={this.handleUploadMovie}/>
      </div>
    );
  }
}

export default App;
