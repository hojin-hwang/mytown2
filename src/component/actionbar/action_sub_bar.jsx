import { makeStyles } from '@material-ui/core';
import React from 'react';
import ShopSubBar from './shop_sub_bar';


const useStyles = makeStyles((theme) => ({
    root: {
      display : 'flex',
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
}));

const ActionSubBar = ({action}) => {
    const classes = useStyles();
    
    return(
        <div className={classes.root}>
        {!action && <div>{/*동네소식 액션들..*/}</div>}
        {action && 
            <ShopSubBar />
        }
        </div>
    );
};

export default ActionSubBar;