import './app.css';
import { ThemeProvider } from "@material-ui/core/styles";
import { unstable_createMuiStrictModeTheme } from '@material-ui/core/styles';
import Header from './component/header/header';
import ActionBar from './component/actionbar/action_bar';
import NewsBox from './component/contents/news_box';
import EventBox from './component/contents/event_box';
import { useState, useEffect } from 'react';
import UseRepository from './service/user_repository';

const userRepository = new UseRepository();

const theme = unstable_createMuiStrictModeTheme();

function App({authService,FileInput }) {
  const TOWN_NEWS_ACTION = false;
  const TOWN_SHOP_ACTION = true;
  const [action, setAction] = useState(TOWN_NEWS_ACTION);
  const [userOnLogin, setUserOnLogin] = useState(false);
  const [user_account, setUserAcount] = useState();  
  const [user_info, setUserInfo] = useState();  
  const [user_id, setUserId] = useState(); 
  const [location_info, setLocationInfo] = useState();

  const setLocation = function(locationInfo)
  {   
      setLocationInfo(locationInfo);
  };
  
  useEffect(()=>{
      authService.onAuthChange(user => {
          user ? setUserOnLogin(true) : setUserOnLogin(false);
          user ? setUserId(user.uid) : setUserId(0);
    });
  });
    
 useEffect(()=>{
    if(user_id)
    {
        const stopSync = userRepository.syncUser(user_id, user => {
          setUserAcount(user);
        });
        return () => stopSync();
    }
  },[user_id]);  

  useEffect(()=>{
  if(user_account)
  {
      const stopSync = userRepository.syncUserInfo(user_account.id, user_info => {
        setUserInfo(user_info);
      });
      return () => stopSync();

  }
},[user_account]); 

  const goSite = (newValue) => {
    if(!newValue){setAction(TOWN_NEWS_ACTION);}//동네소식
    else setAction(TOWN_SHOP_ACTION);//동네가게
  };

  return (
    <ThemeProvider theme = {theme}>
          <Header authService={authService} userOnLogin={userOnLogin} FileInput={FileInput} userAccount={user_account } userInfo={user_info} setLocation={setLocation}/>
          <ActionBar action={action} onClick={goSite} userOnLogin={userOnLogin} />
      
          {!action &&  <NewsBox locationInfo={location_info}/>}
          
          {action && <EventBox userOnLogin={userOnLogin} locationInfo={location_info}/> }
      
    </ThemeProvider>  
  );
}

export default App;
