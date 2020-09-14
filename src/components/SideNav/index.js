import React, { Component } from 'react'
// import clsx from 'clsx';
import {
  makeStyles,
  useTheme
} from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Typography, Avatar } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import StoreIcon from '@material-ui/icons/Store';
import SlideshowIcon from '@material-ui/icons/Slideshow';
import {
  deepOrange,
  deepPurple
} from '@material-ui/core/colors';
import './index.scss'
import { NavLink } from 'react-router-dom';
var drawerWidth = 240;
const useStyles = makeStyles((theme) => {
  console.log('props is');
  return ({
    list: {
      color: '#fff',
      justifyContent: 'center',
      alignItems: 'center'
    },
    navItem: {
      backgroundColor: 'transparent',
      textDecoration: 'none',
      color: '#fff',
      '&:hover': {
        backgroundColor: '#00000022'
      }
    },
    listItem: {
      backgroundColor: 'inherit',
      textDecoration: 'none',
      color: 'inherit',
      width: '95%',
      borderRadius: theme.spacing(2),
      marginTop: theme.spacing(2),
    },
    selected: {
      backgroundColor: '#FF9E43',
      '&:hover': {
        backgroundColor: '#FF9E43'
      }
    },
    email: {
      fontSize: 13,
      marginTop: theme.spacing(1)
    },
    divider: {
      background: '#ffffff55',
      width: '80%'
    },
    userinfo: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#fff',
      marginBottom: theme.spacing(2),
      marginTop: theme.spacing(2)
    },
    logo: {
      color: '#fff',
      marginLeft: theme.spacing(4),
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(4),
      fontWeight: 800
    },
    purple: {
      color: theme.palette.getContrastText(deepPurple[500]),
      backgroundColor: deepPurple[500],
    },
    drawer: {
      width: props => (props.isMobile ? '100%' : drawerWidth),
      height:'100%',
      flexShrink: 0,
      whiteSpace: 'nowrap',
      backgroundColor: '#00000055'
    },
    // drawerMobile: {
    //   width: '100vw',
    //   flexShrink: 0,
    //   whiteSpace: 'nowrap',
    //   backgroundColor: '#00000055'
    // },
    drawerOpen: {
      width:props=>{console.log('props is' + props); return (props.isMobile?'100%':drawerWidth)},
      height: '100%',
      backgroundColor: '#00000055',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      backgroundColor: '#232A44',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
    },
  });
});
export default function SideNav(props) {
  console.log(props);
  const theme = useTheme();
  const open = props.open;
  const togleDrawer = props.togleDrawer;
  const isMobile = props.isMobile;
  const classes = useStyles(isMobile);
  const variant = (!isMobile) ? 'permanent' : 'temporary';
  console.log('variant is'+ variant);
  if(open || !isMobile){
    return (
      < >
      <CssBaseline />
      
      <SwipeableDrawer 
        variant={variant}
        open={open}
        onOpen = {
          () => {
            console.log(togleDrawer);
            togleDrawer(true)
          }
        }
        onClose = {
          () => {
            console.log(togleDrawer);
            togleDrawer(false)
          }
        }
      >
        < div style = {
          {
             backgroundColor: '#232A44',
            width: drawerWidth,
            height:'100%'
          }
        } >
          <div className={classes.logo}>
            <Typography variant="h6" >Covid19.info</Typography>
            {/* <IconButton>
              <
            </IconButton> */}
          </div>
          {/* <div className={classes.userinfo}>
            <Avatar className={classes.purple}>A</Avatar>
            <Typography className={classes.email}>ajaymati@gmail.com</Typography>
          </div> */}
          <List className={classes.list}>
            < NavLink className = {
              classes.navItem
            }
            to = '/home'
            key = '1'
            activeClassName={classes.selected} >
              <ListItem className = {
              classes.listItem
            } >
                    < ListItemIcon style = {
                    {
                      minWidth:'40px'
                    }
                  } > < DashboardIcon style = {
                    {
                      color: '#fff'
                    }
                  }
                  /> 
                  </ListItemIcon >
                  < ListItemText primary = 'Home' / >
              </ListItem>
              </NavLink>
            < NavLink className = {
              classes.navItem
            }
            to = '/hospital'
            key = '2'
            activeClassName={classes.selected} >
              <ListItem className = {
              classes.listItem
            } >
                
                    < ListItemIcon style = {
                    {
                      minWidth:'40px'
                    }
                  } > < ShoppingCartIcon style = {
                    {
                      color: '#fff'
                    }
                  }
                  /> 
                  </ListItemIcon >
                  < ListItemText primary = 'Hospitals' / >
              </ListItem>
              </NavLink>
                          < NavLink className = {
              classes.navItem
            }
            to = '/visualize'
            key = '3'
            activeClassName={classes.selected} >
              <ListItem className = {
              classes.listItem
            } >
                    < ListItemIcon style = {
                    {
                      minWidth:'40px'
                    }
                  } > < StoreIcon style = {
                    {
                      color: '#fff'
                    }
                  }
                  /> 
                  </ListItemIcon >
                  < ListItemText primary = 'Visualization' / >
              </ListItem>
              </NavLink>
             < NavLink className = {
              classes.navItem
            }
            to = '/notifications'
            key = '4'
            activeClassName={classes.selected} >
              <ListItem className = {
              classes.listItem
            } >
                
                    < ListItemIcon style = {
                    {
                      minWidth:'40px'
                    }
                  } > < SlideshowIcon style = {
                    {
                      color: '#fff'
                    }
                  }
                  /> 
                  </ListItemIcon >
                  < ListItemText primary = 'Notifications' / >
              </ListItem>
              </NavLink>
          </List>
        </div>
        </SwipeableDrawer>
      </>
    )
  }
  else{
    return null;
  }
    
}
