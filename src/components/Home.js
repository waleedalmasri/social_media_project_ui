import React from 'react';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';

export default function Home() {
  const userName = useSelector((state) => state.Auth.userName);

  return (
    <div>
      <Typography variant={'h1'}>
        Home
        <br />
      </Typography>
      <Typography variant={'h2'}>Logged In User :{userName}</Typography>
    </div>
  );
}
