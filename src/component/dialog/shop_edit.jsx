import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ShopMap from '../contents/shop_map';
//import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
    root : {
        padding : "1em",
    },
    postionInput: {
        display: "flex",
        margin: theme.spacing(1),
        justifyContent: "space-between",
    },
    address : {width : "58%"},
    town : {width : "40%"},
    margin: {
        margin: theme.spacing(1),
    },
    map: {
        marginTop: "1.5em",
    },
}));

        
export default function ShopEdit({shop_data}) {
  const classes = useStyles();
  const geoData = { id: shop_data.id, lat: shop_data.lat, lng: shop_data.lng };
  
  return (
    <div>
        <form className={classes.root} noValidate autoComplete="off">
            <div className={classes.postionInput}>
            <TextField className={classes.address} label="Address" defaultValue="지도에서 선택학세요" InputProps={{readOnly: true,}} />
            <TextField className={classes.town} label="Town" defaultValue="동네" InputProps={{readOnly: true,}} />
            </div>       

            <div className={classes.map} >
                  <ShopMap geoData={geoData} />
            </div>        
          </form>  
    </div>
  );
}