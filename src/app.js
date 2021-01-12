import logo from './logo.svg';
import './app.css';
import { ThemeProvider } from "@material-ui/core/styles";
import { unstable_createMuiStrictModeTheme } from '@material-ui/core/styles';
import Header from './component/header/header';
import ActionBar from './component/actionbar/action_bar';

const theme = unstable_createMuiStrictModeTheme();

function App() {
  return (
    <ThemeProvider theme = {theme}>
      <Header />
      <ActionBar />
    </ThemeProvider>  
  );
}

export default App;
