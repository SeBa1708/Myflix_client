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
      const { genre } = this.props;
     
      return (
        <Card className="genre-view"> 
          <Card.Body>
            <Card.Title>{genre.Name}</Card.Title>
            <Card.Text>{genre.Description}</Card.Text>
          </Card.Body>
        </Card>
      );
    }
  }
