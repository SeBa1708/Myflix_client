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
      const { director } = this.props;
     
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
          </Card.Body>
        </Card>
      );
    }
  }
