import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    locationName: {
      color : "inherit",
    },
}));

const LocationNameBtn = (props) => {
    const classes = useStyles();

    return(
        <Button className={classes.locationName} >Login</Button>
    );
}
export default LocationNameBtn;