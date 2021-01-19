import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LocationEditByMap from '../contents/location_edit_by_map';
//import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
    root : {
        padding : "1em",
    },
    map : {marginTop:"1em"}
}));

        
export default function ShopEdit({shop_data}) {
  const classes = useStyles();
  const geoData = { id: shop_data.id, lat: shop_data.lat, lng: shop_data.lng };
  const [locationInfo, setLocationInfo] = useState();

  const setLocationData = (location_data) =>{
    //setLocationInfo(location_data);
    console.log(locationInfo);
  }

  return (
    <div>
        <form className={classes.root} noValidate autoComplete="off">
           <div >
                  <LocationEditByMap geoData={geoData} setLocationData={setLocationData}/>
            </div>        
          </form>  
    </div>
  );
}