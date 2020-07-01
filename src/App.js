import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route path={'/'} exact component={Home}></Route>
          <Route path={'/profile'} component={Profile}></Route>
          <Redirect to={'/'}></Redirect>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
