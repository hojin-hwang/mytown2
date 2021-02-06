import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import EventStepForm from './event_step_form';

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

const EventForm = ({shopData, openEvent, setFormClose, FileInput}) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [defalut_event_data, setDefaultEventData] = useState(shopData);

    const handleClose = () => {
        setOpen(false);
        setFormClose('event');
    };
    
    const getFormatDate = (date) => {
        let year = date.getFullYear();              
        let month = (1 + date.getMonth());          
              month = month >= 10 ? month : '0' + month;  
        let day = date.getDate();                   
              day = day >= 10 ? day : '0' + day;         
        return year + '-' + month + '-' + day;       
    };

    useEffect(() =>{
        if(openEvent)
        {
            setOpen(true);
        }
    }, [openEvent]);

    useEffect(() => {
        const current_date = new Date();
        const update_date = getFormatDate(current_date);
         shopData&&setDefaultEventData({...shopData, id: `${shopData.id}${current_date.getTime()}` , shop_id:shopData.id, update_date:update_date , event_text:'',});
    }, [shopData]);

   
    return(
        <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              New Event
            </Typography>
          </Toolbar>
        </AppBar>
        
        
        <EventStepForm eventData={defalut_event_data} FileInput={FileInput} />

      </Dialog>
    );
};

export default EventForm;