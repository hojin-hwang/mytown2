import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import FavoriteIcon from '@material-ui/icons/Favorite';


const useStyles = makeStyles((theme) => ({
    
    appBar :{
        
        backgroundColor: 'white',
        color : 'black',
        boxShadow : 'none',
    },
    tabs : {
        justifyContent: 'flex-end',
    },
    subAtionBtn:{minWidth:'60px'},

    indicator: {
        backgroundColor: 'white',
    },

}));


const ShopSubBar = ({action}) => {
    const classes = useStyles();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return(
            <AppBar position="static" className={classes.appBar} >
            <Tabs value={value} onChange={handleChange} className={classes.tabs} classes={{indicator: classes.indicator}}  >
                <Tab className={classes.subAtionBtn} icon={<FavoriteIcon />} aria-label="favorite"  />
                <Tab className={classes.subAtionBtn} icon={<AttachFileIcon />} aria-label="clip"  />
            </Tabs>
            </AppBar>
    );
};

export default ShopSubBar;