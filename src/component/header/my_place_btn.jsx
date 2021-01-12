import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Place from '@material-ui/icons/Place';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
    myPlaceBtn: {
      
    },
}));

const MyPlaceBtn = (props) => {
    const classes = useStyles();

    return(
        <IconButton edge="end" className={`${classes.myPlaceBtn}`} color="inherit" aria-label="my-place">
            <Place />
        </IconButton>
    );
}
export default MyPlaceBtn;