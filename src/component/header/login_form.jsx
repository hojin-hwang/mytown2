import { Button, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    loginBox : { 
        padding : '8px 16px',
    },
    kakoLogin: {
        color : 'black',
        backgroundColor : '#ffeb3b!important',
        boxShadow : 'none',
        width : '100%'
    },
    appleLogin: {
     
    },
}));

const LoginForm = (props) => {
    const classes = useStyles();

    const testfunction = () =>{console.log("test");}
    return(
    <div className={classes.loginBox}>
        <Button variant="contained" size="large" color="primary" className={classes.kakoLogin} onClick={testfunction}>
        카카오 로그인
        </Button>   
    </div>    
    );   
};

export default LoginForm;