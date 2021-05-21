import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './login-view.scss';


// Use of React hooks with use state, with the consequence that "use state" replaces the keyword "this" entirely
export function LoginView({
  onLoggedIn
}) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleSubmit = (e) => {

    // Prevent page refresh
    e.preventDefault();

    // Sends a request to the server for authentication
    axios
      .post(
        'https://myflixdb21.herokuapp.com/login',
        {
          Username: username,
          Password: password
        }
      )
      .then(
        (response) => {
          const data = response.data;
          // Send 'username' to onLoggedIn()
          onLoggedIn(data);
        }
      )
      .catch(
        (err) => {
          console.log('User not found.')
        }
      );
  };

    /* then call props.onLoggedIn(username) */
    // props.onLoggedIn(username);
  /*};*/

  return (
    <form>
      <label>
        Username:
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </label>
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>
  );
}

// Using propTypes to make sure the props have been passed properly in terms of format & completeness
LoginView.propTypes = {
    username: PropTypes.string,
    password: PropTypes.string,
    onLoggedIn: PropTypes.func, 
    onRegister: PropTypes.func
};
