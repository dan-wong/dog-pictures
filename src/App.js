import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ReactGA from 'react-ga';

import Main from './components/Main/Main';
import Dogs from './components/Dogs/Dogs';
import Constants from './constants';

import './App.css';

class App extends Component {
  render() {
    ReactGA.initialize('UA-110966310-2');
    ReactGA.pageview(window.location.pathname + window.location.search);

    return (
      <MuiThemeProvider>
        <Router>
          <div>
            <Route exact path={`${Constants.ROOT_URI}`} component={Main} />
            <Route path={`${Constants.ROOT_URI}dogs`} component={Dogs} />
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
