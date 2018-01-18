import agent from '../agent';
import React from 'react';
import { connect } from 'react-redux';
import { APP_LOAD, REDIRECT } from '../constants/actionTypes';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import { store } from '../store';
import { push } from 'react-router-redux';

class App extends React.Component {
  render() {
      return (
        <div>
            <Route exact path="/" component={Home}/>
        </div>
      );
  }
}

export default App;
