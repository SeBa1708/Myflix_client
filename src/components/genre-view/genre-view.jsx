import React from 'react'; // it works like a template for creating new components
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './genre-view.scss';

// it is required to show the director
import { Link } from "react-router-dom";

export class GenreView extends React.Component // creates the component 
{
    render() // it returns the visual representation of the component 
    {
      const { genre ,movies } = this.props;
     
      return (
        <Card className="genre-view"> 
          <Card.Body>
            <Card.Title>{genre.Name}</Card.Title>
            <Card.Text>{genre.Description}</Card.Text>
            <div className="Movies_genre">
              <span>Movies from the same genre</span>
            </div>
            <div className="d-flex row mp-6 mx-3">
            {movies.map((movie) => {
              if (movie.Genre.Name === genre.Name) {
                return (
                  <div key={movie._id}>
                    <Card
                      className="mb-3 mr-2 h-100"
                      style={{ width: '16rem' }}
                    >
                      <Card.Img variant="top" src={movie.ImagePath} />
                      <Card.Body>
                        <Link
                          className="text-muted"
                          to={`/movies/${movie._id}`}
                        >
                          <Card.Title>{movie.Title}</Card.Title>
                        </Link>
                      </Card.Body>
                    </Card>
                  </div>
                );
              }
            })}
          </div> 
          </Card.Body>
        </Card>
      );
    }
  }
