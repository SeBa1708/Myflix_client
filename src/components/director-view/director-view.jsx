import React from 'react'; // it works like a template for creating new components
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './director-view.scss';

// it is required to show the director
import { Link } from "react-router-dom";

export class DirectorView extends React.Component // creates the component 
{
    render() // it returns the visual representation of the component 
    {
      const { director, movies } = this.props;
      if (!director) return null;
     
      return (
        <Card className="director-view"> 
          <Card.Body>
            <div className="director-name">
                <span className="label">Name: </span> <span className ="value">{director.Name} </span>
            </div> 
            <div className="director-bio">
                <span className="label">Bio: </span> <span className ="value">{director.Bio} </span>
            </div> 
            <div className="director-birth">
                <span className="label">Birth: </span> <span className ="value">{director.Birth} </span>
            </div> 
            <div className="director-death">
                <span className="label">Death: </span> <span className ="value">{director.Death} </span>
            </div> 
            <div className="d-flex row mp-6 mx-3">
            {movies.map((movie) => {
              if (movie.Director.Name === director.Director.Name) {
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


DirectorView.propTypes = {
  Movie: PropTypes.shape({
    Director: {
    Name: PropTypes.string.isRequired,
    Bio: PropTypes.string,
    Birth: PropTypes.number,
    Death: PropTypes.number, 
  }
})
};