import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
});

export default function Header() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >

        <Link to={'/'}>
          <Tab label={'Home'}/>
        </Link>
        <Link to={'profile'}>
          <Tab label={'Profile'}/>
        </Link>
        <Grid className={'search-box'} container spacing={1} alignItems="flex-end" justify={'center'}>
          <Grid item>
            <SearchIcon/>
          </Grid>
          <Grid item>
            <TextField label="Search" margin={'dense'}/>
          </Grid>
        </Grid>
        <Link to={'sign-in'}>
          <Tab label={'sign in'}/>
        </Link>
        <Link to={'sign-in'}>
          <Tab label={'sign up'}/>
        </Link>
      </Tabs>
    </Paper>
  );
}