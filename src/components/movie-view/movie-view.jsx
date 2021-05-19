import React from 'react'; // it works like a template for creating new components
import PropTypes from 'prop-types';

// Exporting the component makes it avaiable for use by other components 

export class MovieView extends React.Component // creates the component 
 {
  render() // it returns the visual representation of the component 
  {
    const { movie, onBackClick } = this.props;
    return (
      <div className="movie-view"> 
        <div className="movie-image">
          <img src={movie.ImagePath} />
        </div>
        <div className="movie-title">
          <span className="label">Title: </span>
          <span className="value">{movie.Title}</span>
        </div>
        <div className="movie-description">
          <span className="label">Description: </span> 
          <span className="value">{movie.Description}</span>
        </div>
        <button onClick={() => { onBackClick(null); }}>Back</button>
      </div>
    );
  }
}

MovieView.propTypes = {
  movie: PropTypes.shape({ // must include an object  
    Title: PropTypes.string.isRequired,  // the title must be of type string and is required 
    Description: PropTypes.string.isRequired
  }).isRequired, 
  onBackClick: PropTypes.func.isRequired // must contain onMovieClick and it must be a function 
};