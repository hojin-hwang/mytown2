import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';


import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import CloseIcon from '@material-ui/icons/Close';
import LoginForm from './login_form';


const useStyles = makeStyles((theme) => ({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    menuListTitle: {
        paddingTop:0,
        paddingBottom:0,
    },
    menuList:{
        
        width : 300,
        minWidth : 300,
    },

}));


const Menu = (props) => {
    const classes = useStyles();

    const [state, setState] = useState({
    left: false,
    });

const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
    }
    setState({ ...state, [anchor]: open });
};

const list = (anchor) => (
    <div
      className={classes.menuList}
      role="presentation"
    >
      <List className={classes.menuListTitle}>
        <ListItem >
            <ListItemText primary="설정" />
            <IconButton edge="end" aria-label="close" onClick={toggleDrawer(anchor, false)}>
                      <CloseIcon />
            </IconButton>
        </ListItem>
      </List>
      
      <LoginForm />
     
      <List onClick={toggleDrawer(anchor, false)}  onKeyDown={toggleDrawer(anchor, false)}>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
     
    </div>
);


    return(
    <div >
            <IconButton edge="start" className={`${classes.menuButton}`} color="inherit" aria-label="menu" onClick={toggleDrawer('left',true)}>
                <MenuIcon />
            </IconButton>

            <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
                {list('left')}
            </Drawer>
    </div>                
    );
}
export default Menu;