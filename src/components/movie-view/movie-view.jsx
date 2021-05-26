import React from 'react'; // it works like a template for creating new components
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './movie-view.scss';

// Exporting the component makes it avaiable for use by other components 

export class MovieView extends React.Component // creates the component 
 {
  render() // it returns the visual representation of the component 
  {
    const { movie, onBackClick } = this.props;
   
    return (
      <Card className="movie-view"> 
        <Card.Img variant="top" src={movie.ImagePath} />
        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          <Card.Text>{movie.Description}</Card.Text>
          <Button onClick={() => onBackClick(movie)} variant="warning">Back</Button>
        </Card.Body>
      </Card>
    );
  }
}

// Using propTypes to make sure the props have been passed properly in terms of format & completeness
MovieView.propTypes = {
  movie: PropTypes.shape({ // must include an object  
    Title: PropTypes.string.isRequired,  // the title must be of type string and is required 
    Description: PropTypes.string.isRequired
  }).isRequired, 
  onBackClick: PropTypes.func.isRequired // must contain onMovieClick and it must be a function 
};