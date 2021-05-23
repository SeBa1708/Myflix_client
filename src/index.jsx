import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'; 
import './index.scss';
import ReactDOM from 'react-dom';
import MainView from './components/main-view/main-view';
import Container from 'react-bootstrap/Container';
import { Nav } from 'react-bootstrap';

// Main component (will eventually use all the others)
class MyFlixApplication extends React.Component {
  render() {
    return (
      <Container>
        <nav className="navbar sticky-top navbar-dark bg-dark justify-content-center">
          <a className="navbar-brand" href="#">
            <div className = "appname" >
              <h1>Myflix_21</h1> </div>
          </a>
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
