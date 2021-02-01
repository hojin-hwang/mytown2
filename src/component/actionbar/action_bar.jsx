import { AppBar, makeStyles, Tab, Tabs } from '@material-ui/core';
import React from 'react';
import ActionSubBar from './action_sub_bar';

/*function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
}*/

const useStyles = makeStyles((theme) => ({
    root : {
        
    },
    appBar :{
      display : 'flex',
      flexFlow: 'row',
      flexWrap: 'wrap',
      flexGrow: 1,
      backgroundColor: 'white',
      color : 'black',
    },
    indicator: {
      backgroundColor: '#1ca23f',
    },
    
}));

const ActionBar = ({action, onClick}) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    

    const handleChange = (event, newValue) => {
      setValue(newValue);
      onClick(newValue);
    };

    return (
      <div  className={classes.root} >
          <AppBar position="static" className={classes.appBar} >
            <Tabs value={value} onChange={handleChange} classes={{indicator: classes.indicator}} >
              <Tab label="News News"  />
              <Tab label="Shops"  />
            </Tabs>
            
            <ActionSubBar action={action} />

          </AppBar>
       </div>   
      );
};

export default ActionBar;