import React, { Component } from 'react';
import uuid  from 'uuid';



class AddMessages extends Component {
 constructor(){
   super();
   this.state={
     newDescription:{}

   }
 }
  static defaultProps = {
    departments: ['Human Resource','Public Relations','Finance','Purchasing','Research and Development','Marketing ']
  }


  handleSubmit(e){
  //  console.log(this.refs.name.value);
  //  console.log('working fine till now');
  if (this.refs.name.value === '' || this.refs.email.value === '' || this.refs.message.value === ''){
    alert('Fill the form correctly ,leave no empty fields');

  }
  else {
    this.setState({newDescription:{
        id : uuid.v4(),
      name: this.refs.name.value,
      email:this.refs.email.value,
      department: this.refs.department.value,
      message:this.refs.message.value
    }}, function(){
    //
    //console.log(this.state);
    this.props.addDescription(this.state.newDescription);
    });
  }
    e.preventDefault();
  }

  render() {
      let departmentOptions= this.props.departments.map(department => {
          return <option key ={department}  value ={department}> {department} </option>
});
    return (

      <div class ='container container-small'>
      <h3> Welcome to the message board. </h3>
      <form onSubmit ={this.handleSubmit.bind(this)}>
      <div class="form-group">
      <label> Name: </label> <br/>
      <input type ="text" ref ="name" class="form-control" />
      </div>
      <div class="form-group" >
      <label> Email: </label> <br/>
      <input type ="text" ref ="email" class="form-control" />
      </div>
      <div class="form-group">
      <label> Department:</label> <br/>
      <select ref ="department" class="form-control">
      {departmentOptions}
      </select>
      </div>
      <div  class="form-group">
        <label> Message:</label> <br/>
      <textarea rows="3" cols="10" type ="text" ref ="message" class="form-control" >
      </textarea> <br/>

      </div>
      <button type="submit" class="btn btn-danger">Submit</button>
        <br/>
      </form>

      </div>
    );
  }
}

export default AddMessages;
