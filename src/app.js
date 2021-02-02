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
  const [user_id, setUserId] = useState(); 

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

  const goSite = (newValue) => {
    if(!newValue){setAction(TOWN_NEWS_ACTION);}//동네소식
    else setAction(TOWN_SHOP_ACTION);//동네가게
  };

  return (
    <ThemeProvider theme = {theme}>
          <Header authService={authService} userOnLogin={userOnLogin} FileInput={FileInput} userAccount={user_account }/>
      <ActionBar action={action} onClick={goSite} userOnLogin={userOnLogin} />
      
      {!action &&  <NewsBox />}
      
          {action && <EventBox userOnLogin={userOnLogin} /> }
      
    </ThemeProvider>  
  );
}

export default App;
