import React, { Component } from 'react'
import Button from '@material/react-button';

class MoviesButton extends Component {
 render() {
  return (
    <Button
      outlined
      id='btn-favorite-movies'
      onClick={this.props.getMovies}>
      Get favorite Movies!
    </Button>
   )
 }
}

export default MoviesButton
