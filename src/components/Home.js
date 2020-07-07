import React from 'react';
import Typography from '@material-ui/core/Typography';
import store from '../redux/store';


export default function Home() {
  return (
    <div>
      <Typography variant={'h1'}>
        Home
        <br/>
      </Typography>
      <Typography variant={'h2'}>
        Logged In User :
        {
          store.getState()['Auth']['userName']
        }
      </Typography>
    </div>


  );
}