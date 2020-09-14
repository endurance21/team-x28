

import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

import axios from 'axios' 
import styles from './style.module.css'

import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

import {LinkedCalendar} from 'rb-datepicker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-daterangepicker/daterangepicker.css';
import '../../App.css'


import moment from 'moment'


let fetchURL  = "http://3.132.84.112:5000/api/patients"
let url  = "http://localhost:5000/api/patients"



const states = [
  'india',
  'Delhi',
  'Uttar Pradesh',
  'Kerala',
  'Rajasthan',
  'Ladakh',
  'Maharashtra',
  'Telangana',
  'West Bengal',
  'Odisha',
  'Karnataka',
  'Punjab',
  'Tamil Nadu',
  'Andhra Pradesh',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Madhya Pradesh',
  'Bihar',
  'Uttarakhand',
  'Goa',
  'Andaman and Nicobar Islands',
  'Jammu and Kashmir',
  'Chandigarh',
  'Mizoram',
  'Chhattisgarh',
  'Assam',
  'Puducherry',
  'Tripura',
  'Meghalaya',
  'Jharkhand',
  'Manipur'
]



export default class Visualise extends React.Component {

constructor(){
  super();
  this.myRef = React.createRef();

  this.state = {
    width:200,
    height:400,
    data :[], //from server
    parameters:{  //will send this config to sever
      state:"india",
      gender:"male",
      age_group: ["12", "66"],
      date_range:["2020-02-03" , "2021-03-10"]

    },
    dropDownOpen1:false,
    dropDownOpen2:false,
    dropDownOpen3:false

  } 
  this.fetchData()



}
toggle1 = ()=>{
  let current = this.state.dropDownOpen1
  this.setState({dropDownOpen1:!current})
}

toggle2 = ()=>{
  let current = this.state.dropDownOpen2
  this.setState({dropDownOpen2:!current})
}

toggle3 = ()=>{
  let current = this.state.dropDownOpen3
  this.setState({dropDownOpen3:!current})
}
fetchData = ()=>{
  let payload = this.state.parameters
  console.log(payload.state)

  axios.post(fetchURL , payload).then((res)=>{
    
console.log(res.data)
  this.setState({data:res.data} , ()=>{
    console.log(this.state.data)
  });
})

}
componentDidMount(){

 let elem = document.querySelector('.daterangepicker ');
 elem.style.position = "static";
 elem.style.width= "max-content";
 elem.style.zIndex = "1"
//  this.myRef.current.props.width = window.innerWidth/3 
if(window.innerWidth > 600){
  this.setState({width:700})

}else{
  this.setState({width:window.innerWidth - 120})
  this.setState({height:300})
}

}

handleOnclick = (event)=>{

 let value = event.target.innerText
 if(value!='States'){
   console.log(value)
  let parameters = {...this.state.parameters} ;
  parameters.state = value;
  this.setState({parameters:parameters} , ()=>{
    console.log(this.state.parameters.state)
    this.fetchData()
  })


}
}


handleOnclick2 = (event)=>{

  let value = event.target.innerText
  if(value!='Gender'){
   let parameters = {...this.state.parameters} ;
   parameters.gender= value;
   this.setState({parameters:parameters} , ()=>{
     console.log(this.state.parameters.gender)
     this.fetchData()
   })
 
 
 }
 }

 handleOnclick3 = (event)=>{

  let value = event.target.innerText
  if(value!='Age-group'){
   let parameters = {...this.state.parameters} ;
   let arr = value.split("-");
   parameters.age_group= arr;
  
   this.setState({parameters:parameters} , ()=>{
     console.log(this.state.parameters.age_group)
     this.fetchData()
   })
 
 
 }
 }
 onDatesChange = ({ startDate, endDate }) => {

  // let d1 =  `${startDate.$y}-${startDate.$M}-${startDate.$D }`
  // let d2 =  `${endDate.$y}-${endDate.$M}-${endDate.$D }`
  // console.log(startDate ,d2);

  var s1 = moment(startDate.$d).format('YYYY-MM-DD');
  
  var s2  = moment(endDate.$d).format('YYYY-MM-DD');
console.log(s1,s2)
  let parameters = {...this.state.parameters} ;
  parameters.date_range = [s1 , s2] ;
  this.setState({parameters:parameters} , ()=>{
    console.log(this.state.parameters.date_range)
    this.fetchData()
  })
}

  render(){
  return (
 <div >
   <div className ={styles.chart_wrapper}>
    <LineChart
        width={this.state.width}
        height={this.state.height}
        data={this.state.data}
        margin={{
          top: 50, right: 30, left: 20,
        }} 
        className = {styles.chart}
        ref = {this.myRef}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="_id" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="total" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    



</div>
    <div className={styles.controls}>

        <div  className ={styles.dropdowns}> 
    <ButtonDropdown   isOpen={this.state.dropDownOpen1} toggle={this.toggle1}  onClick = {this.handleOnclick}>
      <DropdownToggle caret>
        States
      </DropdownToggle>
      <DropdownMenu>
          {
            states.map((item , index) =>{
              return (  <DropdownItem >{item}</DropdownItem>)
            })
          }
     
       
      
      </DropdownMenu>
    </ButtonDropdown>


    <ButtonDropdown   isOpen={this.state.dropDownOpen2 } toggle={this.toggle2}  onClick = {this.handleOnclick2}>
      <DropdownToggle caret>
        Gender
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem >male</DropdownItem>
        <DropdownItem >female</DropdownItem>
        <DropdownItem >all</DropdownItem>
   
      </DropdownMenu>
    </ButtonDropdown>

    <ButtonDropdown   isOpen={this.state.dropDownOpen3 } toggle={this.toggle3}  onClick = {this.handleOnclick3}>
      <DropdownToggle caret>
        Age-group
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem >0-10</DropdownItem>
        <DropdownItem >11-25</DropdownItem>
        <DropdownItem >25-44</DropdownItem>
        <DropdownItem >45-90</DropdownItem>
   
      </DropdownMenu>
    </ButtonDropdown>

    </div>
  
    <div className = {styles.calender}>


<LinkedCalendar  onDatesChange={this.onDatesChange} showDropdowns={true} />


</div>

    </div>


  </div> 
    
  );

      }
}
