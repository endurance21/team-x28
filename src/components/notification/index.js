import React, { Component } from 'react';
import  Card from './notifications'
import axios from 'axios'
let apiURL = 'https://api.rootnet.in/covid19-in/notifications '

let notice = {
    title :"testasdfasdfjalksdfasdkjflaksjdfkasdflaksdfaksdfasd",
    date:"test",
    link:"test"
}
class Notification extends Component{
    constructor(){
        super();
        this.state = {
            cards : [notice]
        }
    }
    componentDidMount(){

        console.log('Component Did mount');
        axios.get(apiURL).then(res =>{
            let array  =  res.data.data.notifications.slice(1,res.data.data.notifications.length -1);
            this.setState({cards : array})
        })  
    }
    render(){
       return (
        <div>
        {
        this.state.cards.length == 0 ? '  '  : this.state.cards.map((item,index)=>{

              let s = item.title ;
              console.log(s)
              let date = s.slice(0,10) 
              let title = s.slice(11,s.length) ;
              console.log(date ," ----", title)
             return (
                  <Card
                  key={index}
                  title ={title}
                  date={date}
                  link={item.link}
              ></Card>
             )
            } 
            ) 

        }
        </div>
       )
}
}

export default Notification