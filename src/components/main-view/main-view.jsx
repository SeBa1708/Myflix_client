// Importing components 
import React from 'react';
import axios from 'axios'; // using axios to fetch data from API 
import PropTypes from 'prop-types';

import { LoginView } from '../login-view/login-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import {RegistrationView} from '../registration-view/registration-view'

export default class MainView extends React.Component {

  constructor() {
    super(); // initializes your component's state 
    this.state = {
      movies: [],
    selectedMovie: null
    }
  } 

  componentDidMount(){
    axios.get('https://myflixdb21.herokuapp.com/movies')
      .then(response => {
        this.setState({
          movies: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  setSelectedMovie(newSelectMovie) {
    this.setState({
      selectedMovie: newSelectMovie
    });
  }

  // using the ternerary operator with 3 operands (condition, ?, : )
  
  render() {
    const { movies, selectedMovie } = this.state;

    if (movies.length === 0) return <div className="main-view" />;

    return (
      <div className="main-view">
        {selectedMovie
          ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>
          : movies.map(movie => (
            <MovieCard key={movie._id} movie={movie} onMovieClick={(newSelectedMovie) => { this.setSelectedMovie(newSelectedMovie) }}/>
         ))
        }
      </div>
    );
  }
}
