import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
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
    img: {
        height: 255,
        maxWidth: 400,
        overflow: 'hidden',
        display: 'block',
        width: '100%',
    },
}));

export default function ShopEdit() {
  const classes = useStyles();

  return (
    <div>
        <form className={classes.root} noValidate autoComplete="off">
            <div className={classes.postionInput}>
            <TextField className={classes.address} label="Address" defaultValue="지도에서 선택학세요" InputProps={{readOnly: true,}} />
            <TextField className={classes.town} label="Town" defaultValue="동네" InputProps={{readOnly: true,}} />
            </div>       
                <img
                    className={classes.img}
                    src="https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60"
                    alt="image"
                />
          </form>  
    </div>
  );
}