// Importing frameworks and libraries
import React from 'react';
import axios from 'axios'; // using axios to fetch data from API 
import './main-view.scss';

// Import reacte Router to enable navigation between different pages 
import { BrowserRouter as Router, Route } from "react-router-dom";

// Importing components 
import { LoginView } from '../login-view/login-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import {RegistrationView} from '../registration-view/registration-view'
import { DirectorView } from '../director-view/director-view';
import { GenreView } from "../genre-view/genre-view";
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from 'react-bootstrap/Button';



// using bootstrap for rendering, styling and responsiveness 
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col'; 

export default class MainView extends React.Component {

  // Components stats 
  // Using the constructor method to create and initialize objects
  constructor() {
    super(); // initializes your component's state 
    this.state = { // Setting the 
      movies: [],
      user: null,
      register: null
    }
  } 

  // from 3.6 Refactoring 
  getMovies(token) {
    axios.get('https://myflixdb21.herokuapp.com/movies', {
      headers: { Authorization: `Bearer ${token}`}
    })
    .then(response => {
      // Assign the result to the state
      this.setState({
        movies: response.data
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  // 3.6 This method ensures that the user remains on the page visited after the browser has been refreshed. 
  // Every time a user loads the page and the componentDidMount method is called, you check if the user is 
  // logged in (by retrieving this information from localStorage)
  componentDidMount() {
    let accessToken = localStorage.getItem('token');
    if (accessToken !== null) {
      this.setState({
        user: localStorage.getItem('user')
      });
      this.getMovies(accessToken);
    }
  }

// This code is triggered of the method onLoggedin(Data) from the LoginView 
  onLoggedIn(authData) {
  console.log(authData);
  // The user’s username (authData.user.Username) is saved in the user state.
  this.setState({
    user: authData.user.Username
  });
  // The auth information received from the handleSubmit method—the token and the user—is saved in localStorage. 
  //localStorage has a setItem method that accepts two arguments
  localStorage.setItem('token', authData.token);
  localStorage.setItem('user', authData.user.Username);
  // this.getMovies(authData) is called and gets the movies from your API once the user is logged in. 
  //Note the use of the this keyword, which is a special keyword in JavaScript. this refers to the object itself, in this case, the MainView class.
  this.getMovies(authData.token);
  } 

  logOut() {

    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.setState({
      user: null
    });
    alert('You have logged out');
    window.open('/login', '_self');
  }



  // Already implemented before 
  onRegister(register) {
    this.setState({
      register,
    });
  }

  
  render() {
    // destructure 
    const { movies, user, movieData } = this.state;

    if(window.location.pathname === '/') {
      if(!user) {
      return <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
      }
    }

    return (
      <Router>
        <Navbar>
            <Navbar.Brand className="NavbarMaintitle" href="/"> <h1>Myflix</h1></Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Nav className="justify-content-end">
                <Nav.Link>My Account</Nav.Link>
              </Nav>
              <Button onClick={() => this.logOut()} variant="secondary">Log Out</Button>
            </Navbar.Collapse>
          </Navbar>
        <Row className="main-view justify-content-md-center">
          <Route exact path="/" render={() => {
            if (!user) return <Col>
            <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;
            </Col>

            if (movies.length === 0) return <div className="main-view" />;
            return movies.map(m => (
              <Col md={3} key={m._id}>
                <MovieCard movie={m} />
              </Col>
            ))
          }} />
          <Route path="/register" render={() => {
            return <Col>
          <RegistrationView />
          </Col>
          }} />
        <Route path="/movies/:movieId" render={({ match, history }) => {
          return <Col md={8}>
          <MovieView movie={movies.find(m => m._id === match.params.movieId)} onBackClick={() => history.goBack()} />
        </Col>                                                  
        }} />
        <Route path="/directors/:name" render={({ match, history }) => {
        if (movies.length === 0) return <div className="main-view" />;
        return <Col md={8}>
        <DirectorView director={movies.find(m => m.Director.Name === match.params.name).Director} />
        </Col>
        }} />
         <Route path="/genres/:name" render={({ match, history }) => {
        if (movies.length === 0) return <div className="main-view" />;
        return <Col md={8}>
        <GenreView genre={movies.find(m => m.Genre.Name === match.params.name).Genre} />
        </Col>
        }} />
        </Row>
      </Router>
    );
  }
}