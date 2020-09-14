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
    <div style={{width:'100%',display: 'flex', paddingLeft:'20px',paddingTop: '10px',marginBottom:'50px'}} >
        <div style={{}}>
        {
            isMobile ? < IconButton onClick = {
              () => {
                console.log('clicked')
                togleDrawer(!open)
                }
            } >
            <MenuIcon  />
          </IconButton>:''}
        </div>
        < div style = {
          {
            fontSize: '30px',
            fontWeight: 900,
            color: '#6236ff',
            fontFamily: '"Arial Black", Gadget, sans-serif'
          }
        } >
            Covid-19 Tracker 
            < span style = {
              {
                marginLeft: '15px',
                color: '#251C56',
                fontSize:'25px',
                
              }
            } >
                Summary
            </span>
        </div>
    </div>
  );
}
