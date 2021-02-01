import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import EventCard from './event_card';

const useStyles = makeStyles((theme) => ({
    root: {
      display : 'flex',
      flexDirection : 'column',
      flexGrow: 1,
      padding : '8px',
      backgroundColor : '#1ca23f21',
    },
}));

const events_data = [
    {
        id : 1,
        eventImage : 'https://keepuble.com/upload/1606282415__blob.jpg',
        clip : false,
        shop : {
            id : 10,
            shopName : 'A Shop',
            lat : '35.157588',
            lng :  '129.058822',
            shopSign : 'https://www.keepuble.com/upload/1606282415_blob.jpg',
            favorite : true,
        },
    },
    {
        id : 2,
        clip : true,
        eventImage : 'https://keepuble.com/upload/1605659944__blob.jpg',
        shop : {
            id : 20,
            shopName : 'B Shop',
            lat : '35.167777',
            lng :  '129.058822',
            shopSign : 'https://www.keepuble.com/upload/1605659944_blob.jpg',
            favorite : false,
        },
    }
];




const EventBox = ({action}) => {
    const [shopId, setShopId] = useState();
    const closeOtherExpand = (currentShopId) =>{
        setShopId(currentShopId);
    };

    const classes = useStyles();
    return(
        <div className={classes.root}>
            {events_data.map((event_data) =>(
            <EventCard key={event_data.id} eventData={event_data} closeOtherExpand={closeOtherExpand} expanedExeceptId = {shopId}/>       
            ))}
        </div>
    );
};

export default EventBox;