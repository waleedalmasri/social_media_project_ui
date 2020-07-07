import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Header from './Header';
import store from '../redux/store';


export default function PrivateRoute(props) {
  //simulate authenticated status)
  if (store.getState()['Auth']['isLoggedIn']) {
    return (
      <div>
        <Header/>
        <Route {...props}/>
      </div>
    );
  } else {
    return (
      <div>
        <Redirect to={'/sign-in'}/>
      </div>
    );
  }

}