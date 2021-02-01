import { makeStyles } from '@material-ui/core/styles';
import { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';

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


export default function ShopSignEdit({shop_data, FileInput, handleChange}) {
const [shop_sign, setShop_sign] = useState(shop_data.shop_sign);
const classes = useStyles();
const fileName = shop_data.shop_sign;

const onFileChange = file =>{
    
    setShop_sign(file.url);
    const file_name = {target:{name:'shop_sign', value:file.url}}
    handleChange(file_name);
}

useEffect(() =>{
    setShop_sign(shop_data.shop_sign);
}, [shop_data]);

return (
<div className={classes.root}>
    <FileInput name={fileName} onFileChange={onFileChange}/>
    <input type="hidden" name="shop_sign" value={shop_sign} />
    
    {!shop_sign && <img className={classes.signNoImg} src="/images/no_store_sign.png" alt='no_shop_sign' /> }
    {shop_sign && <img className={classes.signImg} src={shop_sign} alt='shop_sign' /> }
    {shop_sign && <Button type="submit" className={classes.formSubmit} color="inherit" >save</Button> }
</div>

);
}