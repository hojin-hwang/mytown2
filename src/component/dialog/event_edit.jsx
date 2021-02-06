import { makeStyles } from '@material-ui/core/styles';
import { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import { Avatar, Card, CardContent, CardHeader, CardMedia, TextField, Typography } from '@material-ui/core';


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


export default function EventEdit({eventData, FileInput, handleChange, eventPic}) {
//const [event_data, setEventData] = useState(eventData);
const [event_pic, setEventPic] = useState();
    
const classes = useStyles();
const fileName = eventData.event_pic;

const onFileChange = file =>{
    setEventPic(file.url);
    const event_pic = { target: { name: 'event_pic', value: file.url } }
    handleChange(event_pic);
}
    
const handleChangeText = (event) => {
    //const event_pic = { target: {name: 'event_pic', value: '' } }
    //handleChange(event_pic);
    handleChange(event);
}

useEffect(() =>{
    //console.log(eventPic)
}, [eventPic]);

return (
<div className={classes.root}>


    <Card className={classes.root}>
            {eventPic && <CardHeader className={classes.file_upload} action={<FileInput name={fileName} btnText="이벤트 사진을 선택하세요" onFileChange={onFileChange} />} />}
            {eventPic && !event_pic && <CardMedia className={classes.media} image="/images/event_sample_1.jpg" title="shop event" />}
            {eventPic && event_pic && <CardMedia className={classes.media} image={event_pic} title="shop event" />}

            {!eventPic && <TextField name="event_text"  label="이벤트 글" style={{ margin:'18 8 8 8'}} placeholder="행사글을 써주세요 !!" fullWidth
        margin="normal"  multiline rows={4} InputLabelProps={{ shrink: true, }}  defaultValue=""
        variant="outlined" onChange={handleChangeText}/> }
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

        {eventPic && event_pic && <Button type="submit" className={classes.formSubmit} color="inherit">save</Button>}
        {!eventPic&& <Button type="submit" className={classes.formSubmit} color="inherit">save</Button> }
</div>

);
}