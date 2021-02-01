import { Button, makeStyles } from '@material-ui/core';
import React, { } from 'react';
import UseRepository from '../../service/user_repository';

const useRepository =  new UseRepository();

const useStyles = makeStyles((theme) => ({
    loginBox : { 
        padding : '8px 16px',
        display : 'flex',
        flexDirection : 'column',
        height : '90px',
        justifyContent : 'space-between'
    },
    kakoLogin: {
        color : 'black',
        backgroundColor : '#ffeb3b!important',
        boxShadow : 'none',
        width : '100%'
    },
    logOut: {
        color : 'black',
        backgroundColor : 'blue',
        boxShadow : 'none',
        width : '100%'
    }
}));

const LoginForm = ({authService}) => {
    const classes = useStyles();
    const onLogin = event => {
        authService //
          .login(event.currentTarget.textContent)
          //.then(console.log("Success Login"));
          .then(data=>{
              console.log("Success login"); 
              useRepository.saveUser(data.user);
            });
    };

    return(
   <div className={classes.loginBox}>
        <Button variant="contained" size="large" color="primary" className={classes.kakoLogin} onClick={onLogin}>
        카카오 로그인
        </Button>   

        <Button variant="contained" size="large" className={classes.googleLogin} onClick={onLogin}>
        Google
        </Button>  
    </div>
    );   
};

export default LoginForm;