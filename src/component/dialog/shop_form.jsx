import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import ShopStepForm from './shop_step_form';

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

const ShopForm = ({userAccount, shopData, hasShop, locationInfo, openShop, setFormClose, FileInput}) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    //const [hasShop, setHasShop] = useState(false);
    const [defalut_shop_data, setDefaultShopData] = useState({
        id: userAccount ? userAccount.id : '0',
        uid: userAccount ? userAccount.id : '0',
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
    });
    //const [shop_data, setShopData] = useState(shopData);

    const handleClose = () => {
        setOpen(false);
        setFormClose('shop');
    };
    
    useEffect(() =>{
        if(openShop)
        {
            setOpen(true);
        }
    }, [openShop]);

    useEffect(() =>{
        setDefaultShopData({...defalut_shop_data, id: userAccount ? userAccount.id : '0', uid: userAccount ? userAccount.id : '0',})
    }, [userAccount]);
    
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

            {hasShop&&shopData&& <ShopStepForm shop_data = {shopData} FileInput={FileInput}/>}
            {!hasShop&&<ShopStepForm shop_data = {defalut_shop_data} FileInput={FileInput}/>}
            {/*!hasShop&&<p>NO LOGIN</p>*/}

      </Dialog>
    );
};

export default ShopForm;