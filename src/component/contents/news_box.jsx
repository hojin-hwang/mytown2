import { makeStyles } from '@material-ui/core';
import React from 'react';
import NewsCard from './news_card';


const useStyles = makeStyles((theme) => ({
    root: {
      display : 'flex',
      flexDirection : 'column',
      flexGrow: 1,
      padding : '8px',
      backgroundColor : '#1ca23f21',
    },
}));

const NewsBox = ({action}) => {
    const classes = useStyles();
    
    return(
        <div className={classes.root}>
            <NewsCard />       
            <NewsCard />
        </div>
    );
};

export default NewsBox;