import { makeStyles } from '@material-ui/core/styles';
import { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import { Avatar, Card, CardContent, CardHeader, CardMedia, Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
root: {
display: 'flex',
flexWrap: 'wrap',
width: '100%',
},
file_upload: {
width: '100%',
display: 'unset',
padding: 0,
},
shop_title: {
fontSize: '1.2rem',
width: '100%',
    display: 'flex',
    borderBottom: '1px solid #eee',
},
shop_name: {
marginLeft:'0.6em',
},
media: {
minHeight: '180px',
//maxHeight: '480px',
width : '100%',
paddingTop: '56.25%', // 16:9
},
signImg: {
marginTop : '1em',
width:'100%',
},
signNoImg: {
marginTop : '1em',
width:'76%',
margin:"auto",

},
formSubmit:{
right: "16px",
position: "fixed",
top: "0",
zIndex: 9999,
padding: "12px",
height: "56px",
color: "white",
}
}));


export default function EventEdit({eventData, FileInput, handleChange}) {
const [event_data, setEventData] = useState(eventData);
const classes = useStyles();
const fileName = eventData.shop_sign;

const onFileChange = file =>{

//setShop_sign(file.url);
const file_name = {target:{name:'shop_sign', value:file.url}}
handleChange(file_name);
}


useEffect(() =>{
//setShop_sign(shopData.shop_sign);
//console.log(event_data);
}, [eventData]);

return (
<div className={classes.root}>


    <Card className={classes.root}>
        <CardHeader className={classes.file_upload} action={ <FileInput name={fileName} onFileChange={onFileChange} />}/>
            <CardMedia className={classes.media} image="/images/event_sample_1.jpg" title="shop event" />
            
        <CardContent className={classes.shop_title}>
            <Avatar aria-label="shop-profile" className={classes.avatar} src={eventData.shop_sign} />
            <Typography className={classes.shop_name}> {eventData.shop_name}</Typography>
        </CardContent>

        <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
                {eventData.shop_desc}
            </Typography>
        </CardContent>
    </Card>



    {eventData.shop_sign && <Button type="submit" className={classes.formSubmit} color="inherit">save</Button> }
</div>

);
}