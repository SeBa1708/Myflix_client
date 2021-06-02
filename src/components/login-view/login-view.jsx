import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './login-view.scss';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


// Use of React hooks with use state, with the consequence that "use state" replaces the keyword "this" entirely
/* First, you call the useState() method (imported from React) with an empty string. This is the initial value of your login variable. 
This method returns an array that you destructure (break down into variables) using the const [ username, setUsername ] syntax.

This assigns the current value to the username variable—what was initially given to the useState() method, in your case, 
an empty string—and assigns to the setUsername variable a method to update the username variable. 
What’s cool about useState() is that it creates a local state and preserves it between the render cycles, 
giving you one of the biggest advantages of declaring a class component without having to actually declare it.
*/
export function LoginView({
  onLoggedIn
}) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

// Making a request to the API using the axios library 
const handleSubmit = (e) => {
  e.preventDefault();
  /* Send a request to the server for authentication */
  axios.post('https://myflixdb21.herokuapp.com/login', {
    Username: username,
    Password: password
  })
  // When a user logs in, the props onLoggedIn(data) is passed to the LoginView and triggers the function
  .then(response => {
    const data = response.data;
    onLoggedIn(data);
  })
  .catch(e => {
    console.log('no such user')
  });
};

  return (
    <Row className="main-view justify-content-md-center">
    <Col md={6} className="px-2">
      <Form className="Form">
      <Form.Group className="RegiserButtom">
        <div> <h1>You have no acccount!</h1></div>
        <Button variant="warning" onClick={ () => window.location.pathname = '/register'}>
         Register
        </Button>
      </Form.Group>
      <Form.Group className="Submit" controlId="formUsername">
        <div> <h1>You have an acccount, Log in here!</h1></div>
        <Form.Control type="text" placeholder="Enter username" value = {username}
        onChange={ e => setUsername(e.target.value) } />
      </Form.Group>
      <Form.Group className="form_Pw" controlId="formPassword">
        <Form.Control type="password" placeholder="Password" value = {password} onChange={ e => setPassword(e.target.value) } />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="warning" type="submit" 
     onClick={handleSubmit}>Submit
      </Button>
    </Form>
    </Col>
    </Row> 
);
}

// Using propTypes to make sure the props have been passed properly in terms of format & completeness
LoginView.propTypes = {
    username: PropTypes.string,
    password: PropTypes.string,
    onLoggedIn: PropTypes.func, 
    onRegister: PropTypes.func
};
