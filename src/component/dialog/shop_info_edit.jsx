import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
root: {
    display: 'flex',
    flexWrap: 'wrap',
},
textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
},
textArea: {
    display: 'block',
    "&:focus": { backgroundSize: '100% 2px, 100% 1px', outline: 'none', },
    "&::placeholder": {color:'#9e9e9e'},
    width: '100%',
    border: 0,
    padding: '10px 5px',
    background: 'white no-repeat',
    backgroundImage: 'linear-gradient(to bottom, #3f51b5, #3f51b5), linear-gradient(to bottom, silver, silver)',
    backgroundSize: '0 2px, 100% 1px',
    backgroundPosition: '50% 100%, 50% 100%',
/* animation solely on background-size */
    transition: 'background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1)',
    },
}));

 
//export default function ShopInfoEdit({shop_data, handleChange}) {
const ShopInfoEdit =  React.memo(({shop_data, handleChange}) => {  

const [shop_text_info, setShoptextInfo] = useState(shop_data);
    
const classes = useStyles();

const handleChangeText = (event) => {
    handleChange(event);
}

useEffect(() =>{
    setShoptextInfo(shop_data);
    //console.log(shop_text_info);
}, [shop_data]);

return (
<div className={classes.root}>
    <TextField required name="shop_name" label="가게이름" style={{ margin: 8 }} placeholder="(필수) 가게이름" fullWidth
        margin="normal"  defaultValue={shop_text_info.shop_name} onChange={handleChangeText} />

    <TextField name="shop_type" label="가게 종류" style={{ margin: 8 }} placeholder="예 : 식당, 정육점, 가게, 옷가게, 미용실.." fullWidth
        margin="normal" defaultValue={shop_text_info.shop_type} onChange={handleChangeText} />

    <TextField name="shop_tel" label="전화번호" style={{ margin: 8 }} placeholder="가게 전화번호 0212345789" fullWidth
        margin="normal" InputLabelProps={{ shrink: true, }} defaultValue={shop_text_info.shop_tel} onChange={handleChangeText} />
    
    <TextField name="shop_desc"  label="가게 소개" style={{ margin:'18 8 8 8'}} placeholder="간단한 가게 설명. 100자 이내(선택)" fullWidth
        margin="normal"  multiline rows={4} InputLabelProps={{ shrink: true, }}  defaultValue={shop_text_info.shop_desc}
        variant="outlined" onChange={handleChangeText}/>
</div>

);
});
export default ShopInfoEdit;