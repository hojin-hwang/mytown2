import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    title: {
      flexGrow: 1,
    },
  }));

  
const Title = (props) => {
    const classes = useStyles();

    return(
        <Typography variant="h6" className={classes.title}>
        News
        </Typography>
    ); 
};

export default Title;