import { makeStyles } from '@material-ui/core';
import React from 'react';
import { Map, Marker, MarkerClusterer, Polyline } from 'react-kakao-maps'

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
            <Map options={{ lat: 33.450701, lng: 126.570667}} level = {3} />
        </div>
    );

}
