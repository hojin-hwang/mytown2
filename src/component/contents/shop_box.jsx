import { makeStyles } from '@material-ui/core';
import React from 'react';
import UseKakoMapScript from '../../service/use_kakao_map_script';
import ShopCard from './shop_card';


const useStyles = makeStyles((theme) => ({
    root: {
      display : 'flex',
      flexDirection : 'column',
      flexGrow: 1,
      padding : '8px',
      backgroundColor : '#1ca23f21',
    },
}));

const ShopBox = ({action}) => {
    const classes = useStyles();
    UseKakoMapScript();
    return(
        <div className={classes.root}>
            <ShopCard />       
        </div>
    );
};

export default ShopBox;