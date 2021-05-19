import React from 'react';
import PropTypes from 'prop-types';

export class MovieCard extends React.Component {
  render() {
    const { movie, onMovieClick } = this.props;
    return <div className="movie-card" onClick={() => { onMovieClick(movie); }}>{movie.Title}</div>;
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({ // must include an object  
    Title: PropTypes.string.isRequired,  // the title must be of type string and is required 
  }).isRequired, 
  onMovieClick: PropTypes.func.isRequired // must contain onMovieClick and it must be a function 
};