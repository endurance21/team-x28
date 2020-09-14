import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow:1
  },  
}));
export default function Header(props) {
  const classes = useStyles();
  const isMobile=props.isMobile;
  const togleDrawer = props.togleDrawer;
  const open= props.open;
  return (
    < div className = {
      classes.grow
    }
  
    >
      < AppBar 
      position = "static" >
        <Toolbar>
          {
            isMobile ? < IconButton onClick = {
              () => {
                console.log('clicked')
                togleDrawer(!open)
                }
            } >
            <MenuIcon  />
          </IconButton>:''}
        </Toolbar>
      </AppBar>
    </div>
  );
}
