import React from 'react'; // it works like a template for creating new components
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './profile-view.scss';
import { Link } from "react-router-dom";
import axios from 'axios';

// Exporting the component makes it avaiable for use by other components 

export class ProfileView extends React.Component // creates the component 
 {
  
  constructor() {
    super();
    this.state = {
			Username: null,
			Password: null,
			Email: null,
			Birthday: null,
			Favorites: [],
			validated: null,
		};
  }

  componentDidMount() {
		const accessToken = localStorage.getItem('token');
		if (accessToken !== null) {
			this.getUser(accessToken);
		}
	}

  getUser(token) {
    const username = localStorage.getItem('user');
    axios.get(`https://myflixdb21.herokuapp.com/users/${username}`, {
      headers: { Authorization: `Bearer ${token}`}
    })
    .then(response => {
      console.log(response);
      // Assign the result to the state
      this.setState({
        Username: response.data.Username,
        Password: response.data.Password,
        Email: response.data.Email,
        Birthday: response.data.Birthday,
        Favorites: response.data.Favorites,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
    <div className = "profilview">
      <Card> 
        <Card.Body>
          <div className = "profilview_greeting">
          <Card.Title> Hello {this.state.Username} </Card.Title>
          </div>
        </Card.Body>
      </Card>
    </div>  
    );
  }
}