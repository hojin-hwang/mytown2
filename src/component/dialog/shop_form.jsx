import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import StepForm from './step_form';

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
        backgroundColor:"#306d33",
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
}));



const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});  

const ShopForm = ({userData, locationInfo, openShop, authService, setFormClose, FileInput}) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const shop_data = {
        id : 0,
        uid : userData? userData.uid : '0',
        shop_name : 'abc',
        lat : '',
        lng :  '',
        city_name:'노원구',
        town_name:'공릉동',
        shop_sign: '',
        shop_type: '병원',
        shop_tel: '02-1234-5678',
        shop_desc:'열심히 삽니다',
        address:'서울 노원구 공릉동 112',
    }
    
    if (shop_data.id === 0)
    { 
        shop_data.lat = locationInfo.lat;
        shop_data.lng = locationInfo.lng;
    }

    const handleClose = () => {
        setOpen(false);
        setFormClose('shop');
    };

    useEffect(() =>{
        authService.onAuthChange(user =>{
            if(!user){
                setOpen(false);
            }
            else
            {
                if(openShop)
                {
                    setOpen(true);
                }
                
            }
        })
    },[openShop, authService]);


    return(
        <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Shop Info
            </Typography>
          </Toolbar>
        </AppBar>

            <StepForm shop_data = {shop_data} FileInput={FileInput}/>

      </Dialog>
    );
};

export default ShopForm;