import React from 'react'; // it works like a template for creating new components
import PropTypes from 'prop-types';
import './profile-view.scss';
import { Link } from "react-router-dom";
import axios from 'axios';

import {
  Form, 
  Button,
  Container,
  Card,
  Tab,
  Tabs
} from 'react-bootstrap'

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
			FavoriteMovies: [],
			validated: null,
		};
  }

  componentDidMount() {
		const accessToken = localStorage.getItem('token');
    const favoritemovies = localStorage.getItem('favoriteMovies');
    this.setState({
      FavoriteMovies: favoritemovies
    });
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
        FavoriteMovies: response.data.FavoriteMovies,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
  const { user, validated, FavoriteMovies } = this.state;
  return (
  <Container className='profile-view'>
     <div className = "profilview">
        <Card> 
          <Card.Body>
            <div className = "profilview_greeting">
              <Card.Title> Hello {this.state.Username} </Card.Title> 
            </div>
          </Card.Body>
        </Card>
      <Card> 
          <Card.Body>
            <div className = "Favorite_movies">
              <Card.Title> My favorite movies {this.state.Username} </Card.Title> 
            </div>
          </Card.Body>
        </Card>
    </div>  
    <Tabs defaultActiveKey='profile' transition={false} className='profile-tabs'>

<Tab className='tab-item' eventKey='profile' title='Profile'>
  <Card className='profile-card' border='info'>
      <Card.Title className='profile-title'>Favorite Movies</Card.Title>
      <div className='favorites-container'>
        {FavoriteMovies.length > 0 && movies.map((movie) => {
            if (movie._id === FavoriteMovies.find((favMovie) => favMovie === movie._id)) {
              return (
                <div key={movie._id}>
                  <Card className='favorites-item card-content' style={{ width: '16rem', flex: 1 }}>
                    {/* <Card.Img>{movie.ImageUrl}</Card.Img> */}
                    <Card.Title className='movie-card-title'>{movie.Title}</Card.Title>
                    <Card.Subtitle className='text-muted fav-subtitle'>{movie.Year}</Card.Subtitle>
                    <Card.Body className='movie-card-body'>
                      <Button size='sm' className='profile-button view-movie' variant='info' as={Link} to={`/movies/${movie._id}`} target='_self'>
                        View Movie
                      </Button>
                      <Button size='sm' className='profile-button remove-favorite' variant='danger' onClick={(e) => this.handleRemoveFavorite(e, movie._id)}>
                        Remove
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              );
            }
          })}
      </div>
  </Card>

</Tab>
</Tabs>

  </Container>
    );
  }
}
