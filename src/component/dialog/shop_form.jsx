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
import UseRepository from '../../service/user_repository';

const userRepository = new UseRepository();

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
    const defalut_shop_data = {
        id: userData ? userData.uid : '0',
        uid: userData ? userData.uid : '0',
        shop_name: '',
        lat: locationInfo.lat,
        lng: locationInfo.lng,
        city_name: locationInfo.cityName,
        town_name: locationInfo.townName,
        shop_sign: '',
        shop_type: '',
        shop_tel: '',
        shop_desc: '',
        address: '',
    };
    const [shop_data, setShopData] = useState({ ...defalut_shop_data });
    const handleClose = () => {
        setOpen(false);
        setFormClose('shop');
    };
    console.log(shop_data)
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
                    const stopSync = userRepository.syncShops(user.uid, shop => {
                        (shop && setShopData(shop)); 
                    });
                    return () => stopSync();
                }
                
            }
        })
    }, [openShop, authService]);
    
    useEffect(() =>{
        setShopData({...shop_data, 'city_name':locationInfo.cityName, 'town_name':locationInfo.townName, 'lat':locationInfo.lat, 'lng':locationInfo.lng})
    }, [locationInfo]);


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