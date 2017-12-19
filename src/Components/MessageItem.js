import React, { Component } from 'react';




class MessageItem extends Component {
  deleteDescription (id){
    //console.log('Staying alive');
    this.props.onDelete(id);

  }




  render() {
    return (
      <div class = 'container container-small' >
      <li className="MessageItem"  class="list-group-item ">
    Name:{this.props.description.name}<br/> Email:{this.props.description.email}<br/>Department:{this.props.description.department}<br/>
      <strong>Message:{this.props.description.message}</strong> <a href ="#"   onClick ={this.deleteDescription.bind(this,this.props.description.id)}> &nbsp;<strong>X</strong>  </a> &nbsp; <br/>

        </li>
    </div>
    );
  }
}

export default MessageItem;
