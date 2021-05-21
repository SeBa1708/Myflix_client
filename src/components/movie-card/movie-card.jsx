// myFlix-client/src/components/movie-card/movie-card.jsx

import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './movie-card.scss';

// Function components a new component can be created by writing a class that extends React.Component
export class MovieCard extends React.Component {
  render() {
    const { movie, onMovieClick } = this.props;

    // Using Card and variant to style my Movie-Card with bootstrap react
    return (
      <Card className="movie-card"> 
        <Card.Img variant="top" src={movie.ImagePath} />
        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          <Card.Text>{movie.Description}</Card.Text>
          <Button onClick={() => onMovieClick(movie)} variant="warning">Open</Button>
        </Card.Body>
      </Card>
    );
  }
}

// Using propTypes to make sure the props have been passed properly in terms of format & completeness
MovieCard.propTypes = {
  movie: PropTypes.shape({ // must include an object  
    Title: PropTypes.string.isRequired,  // the title must be of type string and is required 
  }).isRequired, 
  onMovieClick: PropTypes.func.isRequired // must contain onMovieClick and it must be a function 
};