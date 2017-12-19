import React, { Component } from 'react';
import uuid from 'uuid';
import Messages from './Components/Messages';
import AddMessages from './Components/AddMessages';
import './App.css';
import Memes from './Memes';

class App extends Component {
constructor (){
  super();
  this.state ={
    description :[]

  }
}


componentWillMount(){
  this.setState({
    description :[
    {
      id : uuid.v4(),
    name :' Marta Ramos',
    email: 'm@gmail.com',
    department :'Human Resource',
    message : 'demo message'
  },
  {
      id : uuid.v4(),
  name :' joao',
  email: 'j@gmail.com',
  department :'Public relations',
  message : 'demo message 2'
},

{
    id : uuid.v4(),
name :'pedro ',
email: 'p@gmail.com',
department :'Finance',
message : 'demo message 3'
}
  ]

  })
}
handleAddDescription(description){
let descriptions = this.state.description;
descriptions.unshift(description);
this.setState({descriptions:descriptions});
}

handleDeleteDescription(id){
  let descriptions = this.state.description;
  let index = descriptions.findIndex(x => x.id === id);
  descriptions.splice(index ,1);
  this.setState({descriptions:descriptions})
}


  render() {
    return (
      <div className="App" class = 'container container-small'>
  <AddMessages addDescription={this.handleAddDescription.bind(this)} />
        <Messages description= {this.state.description} onDelete={this.handleDeleteDescription.bind(this)} />
          <hr />
          <Memes / >
        </div>



    );
  }
}

export default App;
