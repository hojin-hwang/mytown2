import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Place from '@material-ui/icons/Place';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
    active : {
        color: '#fff700',
    }
}));

const MyPlaceBtn = ({setLocationInfoFromMap, userInfo, isPlace}) => {
    const classes = useStyles();
    const getLocationInfo = function(){
        setLocationInfoFromMap({townName:userInfo.town_name, cityName:userInfo.city_name, code:'', type:'user'});
    }

    useEffect(()=>{
        if(userInfo) {
            setLocationInfoFromMap({townName:userInfo.town_name, cityName:userInfo.city_name, code:'', type:'user'});
        }
    },[userInfo]);

    return(
        <IconButton className={isPlace&&classes.active} edge="end" color="inherit" aria-label="my-place" onClick={getLocationInfo}>
            <Place />
        </IconButton>
    );
}
export default MyPlaceBtn;