import { makeStyles } from '@material-ui/core';
import React from 'react';
import { Map, Marker, MarkerClusterer, Polyline } from 'react-kakao-maps'

const useStyles = makeStyles((theme) => ({
    map: {
      with: '100%',
      maxHeight: '400px',
    },
}));;

export default function KakaoMap(){
    
    const classes = useStyles();
   
    
    return(
        <Map options={{ lat: 33.450701, lng: 126.570667}} level = {3} />
    );

}
