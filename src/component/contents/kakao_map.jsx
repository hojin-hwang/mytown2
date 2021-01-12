import { makeStyles } from '@material-ui/core';
import React, { useEffect } from 'react';


const useStyles = makeStyles((theme) => ({
    map: {
      with: '100%',
      maxHeight: '400px',
    },
}));;

const {kakao} = window;

export default function KakaoMap(){
    
    const classes = useStyles();

   
    
    return(
        <div id="shopMap" className={classes.map}>
        
        </div>
    );

}
