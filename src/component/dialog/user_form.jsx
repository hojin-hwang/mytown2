import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import UserStepForm from './user_step_form';

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

const UserForm = ({userData, locationInfo, openUser, setFormClose}) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
        setFormClose('user');
    };
    
    useEffect(() =>{
        if(openUser)
        {
            setOpen(true);
        }
    }, [openUser]);
    
    return(
        <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              User Info
            </Typography>
          </Toolbar>
            </AppBar>
            
        {userData&& <UserStepForm user_data = {userData} locationInfo={locationInfo}/>}
      </Dialog>
    );
};

export default UserForm;