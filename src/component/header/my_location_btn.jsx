import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MyLocation from '@material-ui/icons/MyLocation';
import IconButton from '@material-ui/core/IconButton';
import UseKakoMap from '../../service/use_kakao_map';

const useStyles = makeStyles((theme) => ({
    myLocationBtn: {
      
    },
}));

const MyLocationBtn = ({setLocationInfoFromMap}) => {
    const classes = useStyles();
    const [currentGeoInfo, setGeoInfo] = useState();

    const getLocationInfo = function(){
        if ("geolocation" in navigator) 
        {
            /**
             * watchPosition attaches the handler function and executes 
             * itself as soon as the user changes their current location, 
             * returning the updated location properties for the user's new position. 
             * */
            // /navigator.geolocation.watchPosition(function(position) {
            navigator.geolocation.getCurrentPosition(function(position) {
                setGeoInfo(position.coords);//현재 지역정보를 갱신한다.
            });

            
        }
        else
        {
            console.log("Not Available");
        }
    };

    const getLocationInfoFromMap = function(locationInfo)
    {   
        setLocationInfoFromMap(locationInfo)
    };
    
    useEffect(()=>{
        getLocationInfo();
    },[]);
    

    return(
        <IconButton edge="end" className={`${classes.myLocationBtn}`} color="inherit" aria-label="current-location" onClick={getLocationInfo}>
            <UseKakoMap position={currentGeoInfo} getLocationInfo={getLocationInfoFromMap}/>
            <MyLocation />
        </IconButton>
    );
}
export default MyLocationBtn;