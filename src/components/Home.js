import React from 'react';
import Box from '@material-ui/core/Box';
import Post from './Post';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';

export default function Home() {
  const useStyles = makeStyles((theme) => ({
    root: {
      position: 'sticky',
      bottom: 50,
      left: '95%',
      backgroundColor: '#2196f3',
    },
  }));
  const classes = useStyles();

  return (
    <div>
      <Box
        alignItems="center"
        justifyContent="center"
        width={200}
        p={3}
        display={'inline'}
        position="sticky"
        borderRight={1}
        top={70}
      >
        <Checkbox color={'primary'} />
        Filters
      </Box>
      <Post />
      <Post />
      <Post />
      <IconButton className={classes.root}>
        <AddIcon color={'primary'} />
      </IconButton>
    </div>
  );
}
