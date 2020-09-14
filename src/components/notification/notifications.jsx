import React, { Component } from 'react';

class Card extends Component {


    // defineColor(){
      
    //     let classes = this.props.index%2 ===0 ?'card text-white bg-primary mb-3':'card text-white bg-dark mb-3';
    //     return classes;
        
    // }
    render() { 
        return (
       
          <div className="card text-white bg-dark mb-3">
          <h2 className="card-header">{this.props.title}</h2>
          <div className="card-body text-info">
          <h6 className="card-title">{this.props.date}</h6>
          <a className="card-text">{this.props.link}</a>
          </div>
        </div>
        );
    }
}
 export default Card;