import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Menu from './menu';
import Title from './title';
import LocationNameBtn from './location_name_btn';
import MyPlaceBtn from './my_place_btn';
import MyLocationBtn from './my_location_btn';
import UserForm from '../dialog/user_form';
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

export default function Header({authService, userOnLogin, FileInput, userAccount}) {
  const classes = useStyles();
  const [locationInfo, setLocationInfo] = useState({townName:'', cityName:'', code:''});
  const [userOpen, setUserOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [eventOpen, setEventOpen] = useState(false);
  const [user_account, setUserAccount] = useState();
  const [userData, setUserData] = useState();
  const [shopData, setShopData] = useState();
  const [hasShop, setHasShop] = useState(false);
    
  const setLocationInfoFromMap = function(locationInfo)
  {   
      setLocationInfo(locationInfo);
  };

    const setFormOpen = function (form_name) {
    if(form_name === 'user')
    {
        setUserOpen(true);
    }
    else if(form_name === 'event')
    {
      setEventOpen(true);
    }
    else if(form_name === 'shop')
    {
      setShopOpen(true);
    }      
    else if(form_name === 'nothing')
    {
        setUserOpen(false);
        setShopOpen(false);
        setEventOpen(false);
    }
  };

  const setFormClose = function(form_name){
    if(form_name === 'user')
    {
      setUserOpen(false);
    }
    else if(form_name === 'shop')
    {
      setShopOpen(false);
    }
      else if(form_name === 'event')
    {
      setEventOpen(false);
    }
  };

useEffect(() => {
    if (userOnLogin&&userAccount) { 
        const stopSync = userRepository.syncShops(userAccount.id, shop => {
            setShopData(shop);
            setHasShop(true);
            console.log("This use has shop");
        });
        return () => stopSync();
    }
    
     
},[userOnLogin]);

useEffect(() => {
    setUserAccount(userAccount);
    if (userAccount) { 
        const stopSync = userRepository.syncUserInfo(userAccount.id, user => {
            setUserData(user);
            setUserAccount({ ...user_account, 'name':user.user_name});
            console.log("This use has own's info");
        });
        return () => stopSync();
    }
}, [userAccount]); 
    
   
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
                  <Menu authService={authService} locationInfo={locationInfo } userOnLogin={userOnLogin} setFormOpen={setFormOpen} userAccount={user_account} shopInfo={shopData} hasShop={ hasShop} />
          <Title />
          <LocationNameBtn  townName={`${locationInfo.cityName} ${locationInfo.townName}`} />
          {userOnLogin&& <MyPlaceBtn />}
          <MyLocationBtn setLocationInfoFromMap={setLocationInfoFromMap} />
        </Toolbar>
      </AppBar>
      <div>
            <UserForm userAccount={userAccount} userData={userData} locationInfo={locationInfo} openUser={userOpen} setFormClose={setFormClose} />    
            <ShopForm userAccount={userAccount} shopData={shopData} hasShop={hasShop} locationInfo={locationInfo} openShop={shopOpen} setFormClose={setFormClose} FileInput={FileInput} />
            <EventForm userAccount={userAccount} shopData={shopData} hasShop={ hasShop } locationInfo={locationInfo} openEvent={eventOpen} setFormClose={setFormClose} FileInput={FileInput}/>
      </div>
    </div>
  );
}