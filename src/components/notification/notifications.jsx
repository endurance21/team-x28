import React, { Component } from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
class Card extends Component {
    render() { 
        return (
          <div className="p-3 my-2 rounded notification ">
             <Toast>
            <ToastHeader className = " text-center">
              <center>
            <h2 className="card-header text-dark text-center">{this.props.title}</h2>
            </center>
            </ToastHeader>
          <ToastBody>
            <div className="card-body text-info">
            <h6 className="card-title">{this.props.date}</h6>
            <a className="card-text" href = {this.props.link}>MORE INFO</a>
            </div>
          </ToastBody>
        </Toast>
         </div>
        );
    }
}
 export default Card;