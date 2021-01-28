import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Menu from './menu_btn';
import Title from './title';
import LocationNameBtn from './location_name_btn';
import MyPlaceBtn from './my_place_btn';
import MyLocationBtn from './my_location_btn';
import ShopForm from '../dialog/shop_form';
import EventForm from '../dialog/event_form';
import UseRepository from '../../service/user_repository';

const userRepository = new UseRepository();

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  appBar : {
    color: '#fff',
    backgroundColor: '#1ca23f',
  },
});

export default function Header({authService, userOnLogin, FileInput}) {
  const classes = useStyles();
  const [locationInfo, setLocationInfo] = useState({townName:'', cityName:'', code:''});
  const [shopOpen, setShopOpen] = useState(false);
  const [eventOpen, setEventOpen] = useState(false);
  const [userData, setUserData] = useState();
  const [shop_data, setShopData] = useState();
  const [hasShop, setHasShop] = useState(false);
    
  const setLocationInfoFromMap = function(locationInfo)
  {   
      setLocationInfo(locationInfo);
  };

  const setFormOpen = function(form_name){
    if(form_name === 'shop')
    {
      setShopOpen(true);
    }
    else if(form_name === 'event')
    {
      setEventOpen(true);
    }  
    else if(form_name === 'nothing')
    {
        setShopOpen(false);
        setEventOpen(false);
    }
  };

  const setFormClose = function(form_name){
    if(form_name === 'shop')
    {
      setShopOpen(false);
    }
    else if(form_name === 'event')
    {
      setEventOpen(false);
    }
  };

  useEffect(() =>{
    authService.onAuthChange(user =>{
        if(user){
            setUserData(user);
            const stopSync = userRepository.syncShops(user.uid, shop => {
                setShopData(shop);
                setHasShop(true);
                console.log("This use has shop");
            });
            return () => stopSync();
        }
    })
},[userData]);

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Menu authService={authService} userOnLogin={userOnLogin} setFormOpen={setFormOpen}  />
          <Title />
          <LocationNameBtn  townName={`${locationInfo.cityName} ${locationInfo.townName}`} />
          {userOnLogin&& <MyPlaceBtn />}
          <MyLocationBtn setLocationInfoFromMap={setLocationInfoFromMap} />
        </Toolbar>
      </AppBar>
      <div>
              <ShopForm userData={userData} shopData={shop_data} hasShop={ hasShop } locationInfo={locationInfo} openShop={shopOpen} setFormClose={setFormClose} FileInput={FileInput} />
              <EventForm userData={userData} shopData={shop_data} hasShop={ hasShop } locationInfo={locationInfo} openEvent={eventOpen} setFormClose={setFormClose} FileInput={FileInput}/>
      </div>
    </div>
  );
}