import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    locationName: {
      
    },
}));

const LocationNameBtn = (props) => {
    const classes = useStyles();

    return(
        <Button color="inherit">Login</Button>
    );
}
export default LocationNameBtn;