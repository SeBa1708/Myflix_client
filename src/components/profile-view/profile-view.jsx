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

  getUsers(token) {
    axios.get('https://myflixdb21.herokuapp.com/user', {
      headers: { Authorization: `Bearer ${token}`}
    })
    .then(response => {
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
    const { user } = this.props;
    console.log(user);
    if (!user) return null;
   
    return (
      <Card className="profile-view"> 
        <Card.Body>
          <Card.Title>Hello {user.User.Name}</Card.Title>
        </Card.Body>
      </Card>
    );
  }
}