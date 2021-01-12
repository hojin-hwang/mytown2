import logo from './logo.svg';
import './app.css';
import { ThemeProvider } from "@material-ui/core/styles";
import { unstable_createMuiStrictModeTheme } from '@material-ui/core/styles';
import Header from './component/header/header';
import ActionBar from './component/actionbar/action_bar';
import NewsBox from './component/contents/news_box';
import ShopBox from './component/contents/shop_box';
import { useState } from 'react';

const theme = unstable_createMuiStrictModeTheme();

function App() {
  const TOWN_NEWS_ACTION = false;
  const TOWN_SHOP_ACTION = true;
  const [action, setAction] = useState(TOWN_NEWS_ACTION);

  const goSite = (newValue) => {
    if(!newValue){setAction(TOWN_NEWS_ACTION);}//동네소식
    else setAction(TOWN_SHOP_ACTION);//동네가게
  };

  return (
    <ThemeProvider theme = {theme}>
      <Header />
      <ActionBar action={action} onClick={goSite}/>
      
      {!action &&  <NewsBox />}
      
      {action && <ShopBox /> }
      
    </ThemeProvider>  
  );
}

export default App;
