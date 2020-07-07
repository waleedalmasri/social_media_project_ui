import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Header from './Header';
import { useSelector } from 'react-redux';


export default function PrivateRoute(props) {

  const authed=useSelector(state=>state.Auth.isLoggedIn);

  if (authed) {
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