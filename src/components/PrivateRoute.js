import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Header from './Header';


export default function PrivateRoute(props) {
  //simulate authenticated status)
  if (true) {
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