import React from 'react'; // it works like a template for creating new components
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

// it is required to show the director
import { Link } from "react-router-dom";

export class GenreView extends React.Component // creates the component 
{
    render() // it returns the visual representation of the component 
    {
      const { director } = this.props;
     
      return (
        <Card className="director-view"> 
          <Card.Body>
            <Card.Title>{director.Name}</Card.Title>
            <Card.Text>{director.Bio}</Card.Text>
          </Card.Body>
        </Card>
      );
    }
  }
