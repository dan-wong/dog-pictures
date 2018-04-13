import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Main from './components/Main/Main';
import Constants from './constants';

import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <Route path={`${Constants.ROOT_URI}`} component={Main} />
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
