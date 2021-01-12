import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import LoginForm from './login_form';

const useStyles = makeStyles({
  list: {
    width: 250,
  },

});


export default function MenuList( {drawState, closeDrawer }) {
  const classes = useStyles();
  
  const toggleDrawers = (anchor, open) =>{
    //closeDrawer(anchor, open);
    console.log(anchor);
    console.log(open);
  }

  const test = (anchor) =>{
    closeDrawer('left', false);
    console.log("TTT");
  }

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={test}
      onKeyDown={toggleDrawers(anchor, false)}
    >
      <LoginForm />

      <List>
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
  
  
  return (
    <Drawer anchor={'left'} open={drawState} onClose={toggleDrawers('left', false)}>
    {list('left')}
    </Drawer>
  );
}