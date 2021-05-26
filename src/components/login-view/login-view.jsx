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
export function LoginView({
  onLoggedIn
}) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

const handleSubmit = (e) => {
  e.preventDefault();
  /* Send a request to the server for authentication */
  axios.post('https://myflixdb21.herokuapp.com/login', {
    Username: username,
    Password: password
  })
  .then(response => {
    const data = response.data;
    onLoggedIn(data);
  })
  .catch(e => {
    console.log('no such user')
  });
};

    /* then call props.onLoggedIn(username) */
    // props.onLoggedIn(username);
  /*};*/

  return (
    <Row className="main-view justify-content-md-center">
    <Col md={6} className="px-2">
      <Form className="Form">
      <Form.Group controlId="formUsername">
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
