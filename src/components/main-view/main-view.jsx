// Importing frameworks and libraries
import React from 'react';
import axios from 'axios'; // using axios to fetch data from API 
import Row from 'react-bootstrap/Row'; // using React Bootstrap to render properly 
import Col from 'react-bootstrap/Col'; // using React Bootstrap to render properly 
import './main-view.scss';

// Importing components 
import { LoginView } from '../login-view/login-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import {RegistrationView} from '../registration-view/registration-view'

export default class MainView extends React.Component {

  // Components stats 
  // Using the constructor method to create and initialize objects
  constructor() {
    super(); // initializes your component's state 
    this.state = {
      movies: [],
      selectedMovie: null, 
      user: null
    }
  } 

  // componentDidMount() is a good place to add code for performing async tasks
  componentDidMount(){
    axios.get('https://myflixdb21.herokuapp.com/movies')
      .then(response => {
        this.setState({ // changes the state of movies
          movies: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  // This.setState is needed to a change a state
  setSelectedMovie(newSelectMovie) {
    this.setState({
      selectedMovie: newSelectMovie
    });
  }

  /* When a user successfully logs in, this function updates the `user` property in state to that *particular user*/

  onLoggedIn(user) {
    this.setState({
      user
    });
  }


  // Component's Props 
  //using the ternerary operator with 3 operands (condition, ? (truthy statement), : (falsy statement) )
  // displaying the movies and selected movie
  
  render() {

    const { movies, selectedMovie, user } = this.state;

    if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;
    if (movies.length === 0) return <div className="main-view" />;

    // Here, the md breakpoint is used, which means that if the screen width is less than 768px, each column will take the full width no matter how many shares it’s been assigned. 
    return (
      <Row className="main-view justify-content-md-center">
        {selectedMovie
          ? (
            <Col md={6}>
              <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }} />
            </Col>
          )
          // Passing a function as a prop called onMovieClick. It has a function with one parameter that represents 
          // the movie to be set to selectedMovie state.
          // md={3}> means that the whole amount of the movies will be displayed in 3 rows. 
          : movies.map(movie => (
            <Col md={3}>
              <MovieCard key={movie._id} movie={movie} onMovieClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>
            </Col>
          ))
        }
      </Row>
    );  
  }
}
