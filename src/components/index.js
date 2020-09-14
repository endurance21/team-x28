import React, { Component,useState,useEffect } from 'react'
import SideNav from './SideNav'
import {
  HashRouter,Switch,
  Route,
  Redirect
} from 'react-router-dom'
import Home from './Home'
import Hospital from './Hospital'
import Visualize from './Visualize'
import Header from './Header'
import Notification from './Notification'
import {
  useTheme
} from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core'
var drawerWidth = 240;
var appBarWidth = 50;
export default function Router (props) {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    console.log('isMobile is' + isMobile);
    const [isOpen,setIsOpen]= useState(!isMobile);

    const togleDrawer = (tf) => {
      console.log('toogle Drawer called')
      setIsOpen(tf);
      console.log(isOpen);
    }
    useEffect(() => {
      console.log('useeffect called');
      setIsOpen(!isMobile);
    }, [isMobile])

    return (
      <HashRouter>
      <div className="root">
        <SideNav  isMobile={isMobile} open={isOpen} togleDrawer={togleDrawer} />
        <main style={{marginLeft:`${(!isMobile)?drawerWidth:0}px`}}>
                <Header isMobile={isMobile} open={isOpen} togleDrawer={togleDrawer} />
            <section style={{zIndex:'-1'}}>
                <Switch>
                    <Route path='/home' component={Home} />
                    <Route path='/hospital' component={Hospital} />
                    <Route path='/visualize' component={Visualize} />
                    <Route path='/notifications' component={Notification} />
                    <Redirect to='/home' />
                </Switch>
            </section>
        </main>
      </div>
      </HashRouter>
    )
}
