import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';


const useStyles = makeStyles((theme) => ({
root: {
    display: 'flex',
    flexWrap: 'wrap',
},
signImg: {
    marginTop : '1em',
    width:'100%',
},
}));


export default function ShopSignEdit({shop_data, FileInput}) {

const [shop_sign, setShop_sign] = useState(shop_data.shopSign);
console.log(shop_sign);    
const classes = useStyles();
const fileName = shop_data.shopSign;

const onFileChange = file =>{
    setShop_sign(file.url);
}

return (
<div className={classes.root}>
    <FileInput name={fileName} onFileChange={onFileChange}/>
    <input type="hidden" name="shop_sign" value={shop_sign} />
    <img className={classes.signImg} src={shop_sign} alt='shop_sign' />
</div>

);
}