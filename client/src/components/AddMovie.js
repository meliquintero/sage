import React, { Component } from 'react';
import Button from '@material/react-button';

class AddMovie extends Component {
  state = {
    title: null,
    dateWatched: null
  }

  handleChange = (e) => {
    this.setState({[e.target.id]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let user = {username: this.props.userName}
    this.props.handleUploadMovie({...this.state, ...user});
  }

  render() {
    return (
      <div className="upload-movie">
        <p>Upload Movie </p>
        <form onSubmit={this.handleSubmit}>
          <input
            required
            type="text"
            alt="movie's title"
            placeholder="title"
            id='title'
            onChange={this.handleChange} />
          <input
            required
            type="date"
            alt="date watched"
            placeholder="dateWatched"
            id="dateWatched"
            onChange={this.handleChange}
          />
          <Button
            outlined
            id='btn-submit'>
              Submit
          </Button>
        </form>
      </div>
    )
  }
}

export default AddMovie;
