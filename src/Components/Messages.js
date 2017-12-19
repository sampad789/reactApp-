  import React, { Component } from 'react';
  import MessageItem from './MessageItem';



  class Messages extends Component {
    deleteDescription (id){
      this.props.onDelete(id);
    }


    render() {
      let messageItems;
      if (this.props.description){
        messageItems= this.props.description.map(description =>{
      //  console.log(description);
        return (
          <MessageItem onDelete ={this.deleteDescription.bind(this)} key ={description.name} description ={description} />
        );
        });
      }
      return (

        <div className="Department" class ='container container-small'>
        <h3 class =' container'> Message List </h3>
        {messageItems}

        </div>
      );
    }
  }

  export default Messages;
