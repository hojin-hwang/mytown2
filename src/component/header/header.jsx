import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Menu from './menu_btn';
import Title from './title';
import LocationNameBtn from './location_name_btn';
import MyPlaceBtn from './my_place_btn';
import MyLocationBtn from './my_location_btn';


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  appBar : {
    color: '#fff',
    backgroundColor: '#1ca23f',
  },
});

export default function Header({authService, userOnLogin}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Menu authService={authService} userOnLogin={userOnLogin} />
          <Title />
          <LocationNameBtn />
          {userOnLogin&& <MyPlaceBtn />}
          <MyLocationBtn />
        </Toolbar>
      </AppBar>
    </div>
  );
}