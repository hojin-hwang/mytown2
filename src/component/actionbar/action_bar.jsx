import { AppBar, makeStyles, Tab, Tabs } from '@material-ui/core';
import React from 'react';

function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
      display : 'flex',
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
}));

const ActionBar = (props) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(newValue);
      };

    return (
        <div className={classes.root}>
          <AppBar position="static">
            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
              <Tab label="동네소식"  />
              <Tab label="동네가게"  />
            </Tabs>
          </AppBar>
          <div>....</div>
        </div>
      );
};

export default ActionBar;