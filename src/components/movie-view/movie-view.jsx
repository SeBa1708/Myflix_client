import React from 'react'; // it works like a template for creating new components
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './movie-view.scss';

// it is required to show the movie 
import { Link } from "react-router-dom";

// Exporting the component makes it avaiable for use by other components 

export class MovieView extends React.Component // creates the component 
 {
  render() // it returns the visual representation of the component 
  {
    const { movie } = this.props;
   
    return (
      <Card className="movie-view"> 
        <Card.Img variant="top" src={movie.ImagePath} />
        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          <Card.Text>{movie.Description}</Card.Text>
          <div className="movie-genre">
          <span className="label"><Link to={`/genres/${movie.Genre.Name}`}>
            <Button variant="link">Genre</Button>
          </Link> </span>
          <span className="value">{movie.Genre.Name}</span>
        </div>
        <div className="movie-director">
          <span className="label"><Link to={`/directors/${movie.Director.Name}`}>
            <Button variant="link">Director</Button>
          </Link></span>
          <span className="value">{movie.Director.Name}</span>
        </div>
        <Link to={'/'}> <Button variant="warning">Back</Button> </Link>
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
  })}