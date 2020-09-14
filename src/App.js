import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/notification/notifications'
import Notification from './components/notification/index'
import { Component } from 'react';

class App extends Component {
  state = { 
    titleDate : [{
        title : 'title1',
        date : 'date1',
        link: 'link'
    },

]}

  render() { 
    return ( 
      <Notification>
      </Notification>     
     );
  }
}
 
export default App;