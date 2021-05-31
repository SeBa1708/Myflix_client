import React from 'react'; // it works like a template for creating new components
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './profile-view.scss';
import { Link } from "react-router-dom";

// Exporting the component makes it avaiable for use by other components 

export class ProfileView extends React.Component // creates the component 
 {
  
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { user } = this.props;
    console.log(user);
    if (!user) return null;
   
    return (
      <Card className="profile-view"> 
        <Card.Body>
          <Card.Title>Hello {user.Name}</Card.Title>
        </Card.Body>
      </Card>
    );
  }
}