import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'; 
import ReactDOM from 'react-dom';
import MainView from './components/main-view/main-view';
import Container from 'react-bootstrap/Container';
import './index.scss';

// Import statement to indicate that you need to bundle `./index.scss`
import './index.scss';

// Main component (will eventually use all the others)
class MyFlixApplication extends React.Component {
  render() {
    return (
      <Container>
          <nav class="navbar sticky-top navbar-dark bg-dark">
            <a class="navbar-brand" href="#">Myflix_21</a>
          </nav>  
        <MainView />
      </Container>  
    );
  }
}

// Finds the root of your app
const container = document.getElementsByClassName('app-container')[0];

// Tells React to render your app in the root DOM element
ReactDOM.render(React.createElement(MyFlixApplication), container);
