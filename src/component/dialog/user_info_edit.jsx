import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


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

 
//export default function ShopInfoEdit({shop_data, handleChange}) {
const UserInfoEdit =  React.memo(({userData, handleChange}) => {  

//const [user_text_info, setUsertextInfo] = useState(userData);
    
const classes = useStyles();

const handleChangeText = (event) => {
    handleChange(event);
}

useEffect(() =>{
    console.log(userData)
    
}, [userData]);

return (
<div className={classes.root}>
    <TextField required name="user_name" label="사용자 이름" style={{ margin: 8 }} placeholder="(필수) 이름" fullWidth
        margin="normal"  defaultValue={userData.user_name} onChange={handleChangeText} />

    <TextField name="user_email" label="이메일" style={{ margin: 8 }} placeholder="이메일" fullWidth
        margin="normal" defaultValue={userData.user_email} onChange={handleChangeText} />

    <TextField name="user_tel" label="전화번호" style={{ margin: 8 }} placeholder="필수가 아닙니다. 01012345678" fullWidth
        margin="normal" InputLabelProps={{ shrink: true, }} defaultValue={userData.user_tel} onChange={handleChangeText} />
    <Button type="submit" className={classes.formSubmit} color="inherit" >save</Button>
</div>

);
});
export default UserInfoEdit;