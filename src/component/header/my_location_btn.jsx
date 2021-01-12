import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MyLocation from '@material-ui/icons/MyLocation';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
    myLocationBtn: {
      
    },
}));

const MyLocationBtn = (props) => {
    const classes = useStyles();

    return(
        <IconButton edge="end" className={`${classes.myLocationBtn}`} color="inherit" aria-label="current-location">
            <MyLocation />
        </IconButton>
    );
}
export default MyLocationBtn;