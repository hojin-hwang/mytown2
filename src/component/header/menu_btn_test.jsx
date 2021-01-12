import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
//import MenuList from './menu_list';


//import clsx from 'clsx';

import MenuList from './menu_list';



const useStyles = makeStyles((theme) => ({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    menuList:{
        width : 250,
        minWidth : 250,
    }
}));


const Menu = (props) => {
    const classes = useStyles();

    const [drawState, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
    });

const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
    }
    setState({ ...drawState, [anchor]: open });
};


    return(
    <div >
            <IconButton edge="start" className={`${classes.menuButton}`} color="inherit" aria-label="menu" onClick={toggleDrawer('left',true)}>
                <MenuIcon />
            </IconButton>
            
            {drawState.left && <MenuList drawState={drawState} />}
    </div>                
    );
}
export default Menu;