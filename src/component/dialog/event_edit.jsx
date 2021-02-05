import { makeStyles } from '@material-ui/core/styles';
import { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import { Avatar, Card, CardContent, CardHeader, CardMedia, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
root: {
    display: 'flex',
    flexWrap: 'wrap',
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


export default function EventEdit({shopData, FileInput, handleChange}) {
const [shop_sign, setShop_sign] = useState(shopData.shop_sign);
const classes = useStyles();
const fileName = shopData.shop_sign;

const onFileChange = file =>{
    
    setShop_sign(file.url);
    const file_name = {target:{name:'shop_sign', value:file.url}}
    handleChange(file_name);
}

useEffect(() =>{
    setShop_sign(shopData.shop_sign);
}, [shopData]);

return (
<div className={classes.root}>
    <FileInput name={fileName} onFileChange={onFileChange}/>
    
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="shop-profile" className={classes.avatar} src={shopData.shopSign} />
        }
        classes={{title: classes.headerTitle}}

        title={shopData.shopName}
      />
      <CardMedia
        className={classes.media}
        //image={eventData.eventImage}
        title="shop event"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
    </Card>



    {shop_sign && <Button type="submit" className={classes.formSubmit} color="inherit" >save</Button> }
</div>

);
}