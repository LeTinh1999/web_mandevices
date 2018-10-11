import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import SignIn from './components/SignIn';
import ContactUs from './components/ContactUs';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Route exact path = "/sigin" component = {SignIn}/>
        <Route exact path = "/contact" component = {ContactUs}/>
      </div>
      </Router>
    );
  }
}

export default App;
