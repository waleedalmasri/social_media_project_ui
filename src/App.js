import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import SignInForm from './components/SignInForm';
import PrivateRoute from './components/PrivateRoute';
import { Route } from 'react-router';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={'/sign-in'} component={SignInForm}></Route>
          <PrivateRoute path={'/profile'} component={Profile}></PrivateRoute>
          <PrivateRoute path={'/'} component={Home}></PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
